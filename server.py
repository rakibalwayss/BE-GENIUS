"""
BE GENIUS — High-Performance, High-Concurrency Local Production Server
Engineered with Multi-Threading, Gzip Compression, In-Memory RAM Caching,
and Enterprise Security Headers.
"""

import http.server
import socketserver
import os
import sys
import gzip
import io
import mimetypes
import hashlib

PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

IN_MEMORY_CACHE = {}

def get_file_data(filepath):
    mtime = os.path.getmtime(filepath)
    cached = IN_MEMORY_CACHE.get(filepath)
    if cached and cached['mtime'] == mtime:
        return cached

    with open(filepath, 'rb') as f:
        raw_bytes = f.read()

    gz_buffer = io.BytesIO()
    with gzip.GzipFile(mode='wb', fileobj=gz_buffer, compresslevel=6) as gz:
        gz.write(raw_bytes)
    gz_bytes = gz_buffer.getvalue()

    etag = f'"{hashlib.md5(raw_bytes).hexdigest()}"'
    
    cached = {
        'mtime': mtime,
        'raw': raw_bytes,
        'gzip': gz_bytes,
        'etag': etag,
        'length': len(raw_bytes),
        'gzip_length': len(gz_bytes)
    }
    IN_MEMORY_CACHE[filepath] = cached
    return cached

class FastSPAHandler(http.server.BaseHTTPRequestHandler):
    server_version = "BeGeniusEngine/2.0"
    protocol_version = "HTTP/1.1"

    def do_HEAD(self):
        self.handle_request(send_body=False)

    def do_GET(self):
        self.handle_request(send_body=True)

    def handle_request(self, send_body=True):
        clean_path = self.path.split('?')[0].split('#')[0].lstrip('/')
        local_path = os.path.join(DIRECTORY, clean_path.replace('/', os.sep))

        if not clean_path or not os.path.isfile(local_path):
            if os.path.isdir(local_path) and os.path.isfile(os.path.join(local_path, 'index.html')):
                local_path = os.path.join(local_path, 'index.html')
            else:
                local_path = os.path.join(DIRECTORY, 'index.html')

        if not os.path.isfile(local_path):
            self.send_error(404, "File Not Found")
            return

        try:
            cached = get_file_data(local_path)
        except Exception:
            self.send_error(500, "Internal Server Error")
            return

        # 304 Not Modified
        client_etag = self.headers.get('If-None-Match')
        if client_etag and client_etag == cached['etag']:
            self.send_response(304)
            self.send_header('ETag', cached['etag'])
            self.send_header('Cache-Control', self.get_cache_header(local_path))
            self.apply_security_headers()
            self.end_headers()
            return

        accept_encoding = self.headers.get('Accept-Encoding', '')
        use_gzip = 'gzip' in accept_encoding and len(cached['gzip']) < len(cached['raw'])

        ctype, _ = mimetypes.guess_type(local_path)
        if not ctype:
            if local_path.endswith('.js'):
                ctype = 'text/javascript'
            elif local_path.endswith('.css'):
                ctype = 'text/css'
            elif local_path.endswith('.svg'):
                ctype = 'image/svg+xml'
            elif local_path.endswith('.webp'):
                ctype = 'image/webp'
            else:
                ctype = 'application/octet-stream'

        self.send_response(200)
        self.send_header('Content-Type', ctype)
        self.send_header('ETag', cached['etag'])
        self.send_header('Cache-Control', self.get_cache_header(local_path))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Connection', 'keep-alive')
        self.apply_security_headers()

        if use_gzip:
            self.send_header('Content-Encoding', 'gzip')
            self.send_header('Content-Length', str(cached['gzip_length']))
            self.end_headers()
            if send_body:
                self.wfile.write(cached['gzip'])
        else:
            self.send_header('Content-Length', str(cached['length']))
            self.end_headers()
            if send_body:
                self.wfile.write(cached['raw'])

    def apply_security_headers(self):
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')

    def get_cache_header(self, filepath):
        if 'assets' in filepath:
            return 'public, max-age=31536000, immutable'
        elif filepath.endswith('index.html'):
            return 'public, max-age=0, must-revalidate'
        return 'public, max-age=86400'

    def log_message(self, format, *args):
        pass

class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True
    request_queue_size = 4096

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    print(f"==================================================")
    print(f"  BE GENIUS — High-Concurrency Threaded Server   ")
    print(f"  Port: {PORT} | Gzip & Security Headers ON     ")
    print(f"  Listening on: http://localhost:{PORT}           ")
    print(f"==================================================")
    sys.stdout.flush()

    try:
        with ThreadedHTTPServer(("", PORT), FastSPAHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped gracefully.")
