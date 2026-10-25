import{ar as k,aT as x}from"./index-Ch8cEgYO.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=k("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),n=t=>String(t!=null?t:"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),_=t=>{try{return new Date(t).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})}catch(c){return t}},h=t=>`৳${Number(t!=null?t:0).toLocaleString("en-BD")}`,b=(t,c,r)=>{var d,f,g;const s=(d=t.subtotal)!=null?d:t.items.reduce((i,o)=>{var p;return i+((p=o.line_total)!=null?p:o.unit_price*o.qty)},0),e=(f=t.discount)!=null?f:0,m=(g=t.delivery_fee)!=null?g:0,a=t.items.map(i=>{var l;const o=(l=i.line_total)!=null?l:i.unit_price*i.qty,p=[i.size,i.color].filter(Boolean).join(" · ");return`
      <tr>
        <td class="pname">
          <div class="pcell">
            ${i.image_url?`<img class="pimg" src="${n(i.image_url)}" alt="" />`:'<div class="pimg pimg-ph"></div>'}
            <div class="ptxt">
              <div class="pn">${n(i.product_name)}</div>
              ${p?`<div class="pmeta">${n(p)}</div>`:""}
            </div>
          </div>
        </td>
        <td class="c mono">×${n(i.qty)}</td>
        <td class="r mono">${n(h(i.unit_price))}</td>
        <td class="r mono b">${n(h(o))}</td>
      </tr>`}).join("");return`
  <section class="inv">



    <!-- corner ticks -->
    <span class="ct tl"></span><span class="ct tr"></span>
    <span class="ct bl"></span><span class="ct br"></span>

    <!-- giant kanji watermark -->
    <div class="wm">領収</div>

    <!-- HEADER -->
    <header class="hd">
      <div class="brand">
        <div class="logo">
          <img src="${y}/brand/monogram-75-cream.svg" alt="" width="34" height="34" />
        </div>
        <div class="bmeta">
          <div class="bn"><img src="${y}/brand/wordmark.svg" alt="BE GENIUS" /></div>
          <div class="bt">WEAR SIMPLE, FEEL GREAT.</div>
        </div>
      </div>
      <div class="hd-r">
        <div class="stamp">領収書</div>
        <div class="hd-sub">INVOICE / RECEIPT</div>
      </div>
    </header>

    <!-- ref bar -->
    <div class="ref">
      <div>
        <div class="k">// 注文番号 · ORDER REF</div>
        <div class="v mono">#${n(t.order_number)}</div>
      </div>
      <div>
        <div class="k">// 日付 · ISSUED</div>
        <div class="v mono">${n(_(t.created_at))}</div>
      </div>
      <div>
        <div class="k">// 支払 · PAYMENT</div>
        <div class="v mono">${n((t.payment_method||"cod").toUpperCase())}</div>
      </div>
    </div>

    <!-- BODY GRID: left = customer + manifest, right = design preview -->
    <div class="body-grid">
      <div class="body-l">
        <!-- BILL TO -->
        <div class="cust">
          <div class="cust-lbl">
            <span class="num">01</span>
            <span class="tt">BILL TO</span>
            <span class="jp">お客様</span>
          </div>
          <div class="cust-body">
            <div class="cn">${n(t.customer_name)}</div>
            <div class="cl cl-phone">${n(t.customer_phone)}</div>
            ${t.customer_email?`<div class="cl mono">${n(t.customer_email)}</div>`:""}
            <div class="cl">${n(t.district)}</div>
            <div class="cl">${n(t.address)}</div>
            ${t.notes?`<div class="cl notes">Note: ${n(t.notes)}</div>`:""}
          </div>
        </div>

        <!-- ITEMS -->
        <div class="items-lbl">
          <span class="num">02</span>
          <span class="tt">MANIFEST</span>
          <span class="jp">注文明細</span>
        </div>
        <table class="items">
          <thead>
            <tr>
              <th>Item</th>
              <th class="c">Qty</th>
              <th class="r">Unit</th>
              <th class="r">Line</th>
            </tr>
          </thead>
          <tbody>${a}</tbody>
        </table>
      </div>

      <!-- DESIGN PREVIEW (right column, prominent so packer can spot the tee) -->
      ${(()=>{const i=new Set,o=t.items.filter(l=>{if(!l.image_url)return!1;const v=l.image_url;return i.has(v)?!1:(i.add(v),!0)}).slice(0,4);if(!o.length)return'<div class="dpanel dpanel-empty"><div class="dp-lbl">DESIGN</div><div class="dp-ph">no image</div></div>';const p=o.length===1?"one":o.length===2?"two":"quad",u=o.map(l=>`
          <div class="dp-cell">
            <img src="${n(l.image_url)}" alt="" />
            ${o.length>1?`<span class="dp-tag mono">${n([l.size,l.color].filter(Boolean).join(" · ")||l.product_name.slice(0,18))}</span>`:""}
          </div>`).join("");return`<div class="dpanel ${p}">
          <div class="dp-lbl">DESIGN · デザイン</div>
          <div class="dp-grid">${u}</div>
          ${o.length===1?`<div class="dp-name">${n(o[0].product_name)}</div>`:`<div class="dp-name">${n(o.length)} designs</div>`}
        </div>`})()}
    </div>

    <!-- TOTALS -->
    <div class="tot">
      <div class="tot-l">
        <div class="thanks">ありがとう<br/><small>Thank you.</small></div>
      </div>
      <div class="tot-r">
        <div class="tr-row"><span>Delivery</span><span class="mono">${n(h(m))}</span></div>
        ${e>0?`<div class="tr-row disc"><span>Discount${t.coupon_code?` <span class="mono" style="opacity:.75">(${n(t.coupon_code)})</span>`:""}</span><span class="mono">− ${n(h(e))}</span></div>`:""}
        <div class="tr-row"><span>Subtotal</span><span class="mono">${n(h(s))}</span></div>
        <div class="tr-grand">
          <span>合計 · TOTAL</span>
          <span class="mono">${n(h(t.total))}</span>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="ft">
      <div class="ft-l">
        <div class="ft-jp">誠実 · 品質 · 信頼</div>
        <div class="ft-en">Cash on delivery accepted. Returns within 3 days of receipt.</div>
      </div>
      <div class="ft-r">
        ${(()=>{const i=(t.payment_method||"").toLowerCase();return i.includes("bkash")||i.includes("nagad")||i.includes("rocket")||i.includes("card")||i.includes("uddokta")||i==="paid"||i==="prepaid"?`<div class="hanko">
          <div class="hk-in">
            <span class="hk-jp">受</span>
            <span class="hk-en">PAID</span>
          </div>
        </div>`:`<div class="hanko cod">
          <div class="hk-in">
            <span class="hk-jp">代引</span>
            <span class="hk-en">COD</span>
          </div>
        </div>`})()}
      </div>
    </footer>

    <div class="tag mono">be2.lovable.app · #${n(t.order_number)} · ${n(c+1)}/${n(r)}</div>
  </section>`},y=typeof window!="undefined"?window.location.origin:"https://besimple75.com",w=(t,c={})=>{const{autoPrint:r=!0,title:s}=c,e=s!=null?s:t.length===1?`Invoice ${t[0].order_number}`:`Invoices (${t.length})`,m=[];for(let d=0;d<t.length;d+=2){const f=d+2>=t.length,g=b(t[d],d,t.length),i=t[d+1]?b(t[d+1],d+1,t.length):"";m.push(`<div class="sheet ${f?"":"break"}">${g}${i}</div>`)}const a=m.join("");return`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${n(e)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<!-- No web fonts: print spoolers can't fetch remote fonts and hang the queue.
     Use system-safe fallbacks so every printer renders instantly, even offline. -->
<style>
  /* Map "designer" font names to bundled system stacks so no remote fetch is needed. */
  @font-face { font-family: 'Archivo Black'; src: local('Arial Black'), local('Impact'), local('Helvetica Neue'); font-weight: 900; }
  @font-face { font-family: 'Noto Serif JP'; src: local('Yu Mincho'), local('MS Mincho'), local('Hiragino Mincho ProN'), local('Georgia'); font-weight: 700 900; }
  @font-face { font-family: 'JetBrains Mono'; src: local('Consolas'), local('Menlo'), local('Courier New'); font-weight: 400 700; }
  @font-face { font-family: 'Space Grotesk'; src: local('Segoe UI'), local('Helvetica Neue'), local('Arial'); font-weight: 400 700; }
  /* Use A4 portrait so any printer prints correctly with default settings. */
  @page { size: A4 portrait; margin: 0; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0; background: #ffffff; color: #000000;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  /* Sheet = full A4. Each invoice = A5 (half A4). Up to 2 invoices per sheet.
     If only one invoice sits on the sheet, the bottom half stays blank —
     no border, no marks — so the paper can be reused. */
  .sheet {
    width: 210mm; height: 297mm;
    display: flex; flex-direction: column;
    margin: 0 auto;
  }
  .inv {
    position: relative;
    width: 210mm; height: 148.5mm;
    padding: 7mm 9mm 6mm;
    background: #ffffff;
    color: #000;
    overflow: hidden;
    display: flex; flex-direction: column;
  }
  /* decorative inner frame — only around actual invoice content */
  .inv::before {
    content: ""; position: absolute; pointer-events: none;
    top: 2.5mm; left: 2.5mm; right: 2.5mm; bottom: 2.5mm;
    border: 0.4mm solid #000;
  }
  .inv::after {
    content: ""; position: absolute; pointer-events: none;
    top: 3.5mm; left: 3.5mm; right: 3.5mm; bottom: 3.5mm;
    border: 0.15mm solid #000;
  }
  .break { page-break-after: always; }

  /* Corner marks — sit inside the invoice's own frame band. */
  .ct { position: absolute; width: 2.8mm; height: 2.8mm; border: 0.4mm solid #000; background: transparent; z-index: 2; }
  .ct.tl { top: 1.6mm; left: 1.6mm; border-right: none; border-bottom: none; }
  .ct.tr { top: 1.6mm; right: 1.6mm; border-left: none; border-bottom: none; }
  .ct.bl { bottom: 1.6mm; left: 1.6mm; border-right: none; border-top: none; }
  .ct.br { bottom: 1.6mm; right: 1.6mm; border-left: none; border-top: none; }

  .wm {
    position: absolute; right: 4mm; bottom: -8mm;
    font-family: 'Noto Serif JP', serif; font-weight: 900;
    font-size: 55mm; line-height: 1; color: #000;
    opacity: 0.035; letter-spacing: -2mm; pointer-events: none;
  }

  /* HEADER */
  .hd {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding-bottom: 3mm; border-bottom: 2px solid #000; margin-bottom: 3mm;
  }
  .brand { display: flex; gap: 2.5mm; align-items: center; }
  .logo {
    width: 12mm; height: 12mm; background: #000; color: #fff;
    display: flex; align-items: center; justify-content: center; gap: 0.4mm;
    font-family: 'Archivo Black', sans-serif; letter-spacing: -0.5px;
  }
  .logo img { width: 9mm; height: 9mm; display: block; }
  .bn { line-height: 1; }
  .bn img { height: 3.2mm; width: auto; display: block; }
  .bt { font-size: 5.5pt; margin-top: 1.4mm; letter-spacing: 2.5px; }
  .hd-r { text-align: right; }
  .stamp {
    display: inline-block; font-family: 'Noto Serif JP', serif; font-weight: 900;
    font-size: 12pt; padding: 0.8mm 2.5mm; border: 1.5px solid #000; background: #000; color: #fff;
    transform: rotate(-3deg);
  }
  .hd-sub {
    margin-top: 1.5mm; font-family: 'Archivo Black', sans-serif;
    font-size: 6pt; letter-spacing: 2.5px;
  }

  /* REF STRIP */
  .ref {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2mm;
    padding: 1.8mm 2.5mm; background: #000; color: #fff; margin-bottom: 3mm;
  }
  .ref .k { font-size: 5.5pt; letter-spacing: 1.5px; opacity: 0.65; }
  .ref .v { font-size: 8.5pt; font-weight: 700; margin-top: 0.5mm; }
  .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

  /* CUSTOMER */
  .cust { border: 1px solid #000; margin-bottom: 2.5mm; }
  .cust-lbl, .items-lbl {
    display: flex; align-items: center; gap: 1.5mm;
    padding: 1.2mm 2.5mm; background: #f2f2f2; border-bottom: 1px solid #000;
  }
  .items-lbl { border: 1px solid #000; border-bottom: 0; }
  .num {
    background: #000; color: #fff; font-family: 'Archivo Black', sans-serif;
    font-size: 6.5pt; padding: 0.5mm 1.4mm; letter-spacing: 1px;
  }
  .tt { font-family: 'Archivo Black', sans-serif; font-size: 6.5pt; letter-spacing: 2px; }
  .jp { margin-left: auto; font-family: 'Noto Serif JP', serif; font-size: 7pt; }
  .cust-body { padding: 2.5mm 2.5mm 2mm; }
  .cn { font-family: 'Archivo Black', sans-serif; font-size: 13pt; letter-spacing: 0.2px; line-height: 1.1; }
  .cl { font-size: 7pt; margin-top: 0.5mm; color: #111; }
  .cl.cl-phone { font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11pt; font-weight: 700; letter-spacing: 0.5px; margin-top: 1.2mm; }
  .cl.notes { margin-top: 1mm; padding-top: 1mm; border-top: 1px dashed #000; font-style: italic; }

  /* ITEMS TABLE */
  .items { width: 100%; border-collapse: collapse; border: 1px solid #000; }
  .items th {
    background: #000; color: #fff; font-family: 'Archivo Black', sans-serif;
    font-size: 6pt; letter-spacing: 1.5px; padding: 1.5mm 2mm; text-align: left;
  }
  .items th.r, .items td.r { text-align: right; }
  .items th.c, .items td.c { text-align: center; }
  .items td {
    padding: 1.5mm 2mm; border-top: 1px dashed #000; vertical-align: top;
    font-size: 7.5pt;
  }
  .items .pn { font-weight: 700; }
  .items .pmeta { font-size: 5.5pt; color: #555; margin-top: 0.4mm; letter-spacing: 0.8px; text-transform: uppercase; }
  .items .b { font-weight: 700; }
  .items .pcell { display: flex; gap: 2mm; align-items: center; }
  .items .pimg { width: 9mm; height: 9mm; object-fit: cover; border: 0.3mm solid #000; background: #f2f2f2; flex: 0 0 auto; }
  .items .pimg-ph { background: repeating-linear-gradient(45deg, #eee, #eee 1mm, #f7f7f7 1mm, #f7f7f7 2mm); }
  .items .ptxt { min-width: 0; }

  /* BODY GRID + DESIGN PREVIEW PANEL */
  .body-grid { display: grid; grid-template-columns: 1fr 58mm; gap: 3mm; align-items: start; }
  .body-l { min-width: 0; }
  .dpanel {
    border: 1px solid #000; padding: 2mm; background: #fff;
    display: flex; flex-direction: column; gap: 1.5mm;
  }
  .dp-lbl {
    font-family: 'Archivo Black', sans-serif; font-size: 6pt; letter-spacing: 2px;
    background: #000; color: #fff; padding: 1mm 1.8mm; align-self: flex-start;
  }
  .dp-grid { display: grid; gap: 1mm; }
  .dpanel.one .dp-grid { grid-template-columns: 1fr; }
  .dpanel.two .dp-grid { grid-template-columns: 1fr 1fr; }
  .dpanel.quad .dp-grid { grid-template-columns: 1fr 1fr; }
  .dp-cell { position: relative; border: 0.3mm solid #000; background: #f5f5f5; overflow: hidden; }
  .dpanel.one .dp-cell { aspect-ratio: 5 / 4; }
  .dpanel.two .dp-cell,
  .dpanel.quad .dp-cell { aspect-ratio: 5 / 4; }
  .dp-cell img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .dp-tag {
    position: absolute; left: 0.8mm; bottom: 0.8mm; font-size: 5pt; letter-spacing: 1px;
    background: rgba(0,0,0,0.82); color: #fff; padding: 0.4mm 1mm; text-transform: uppercase;
  }
  .dp-name {
    font-family: 'Archivo Black', sans-serif; font-size: 6.5pt; letter-spacing: 1px;
    text-align: center; text-transform: uppercase; margin-top: 0.5mm;
  }
  .dpanel-empty .dp-ph {
    aspect-ratio: 5 / 4; display: flex; align-items: center; justify-content: center;
    font-size: 6pt; letter-spacing: 2px; color: #999;
    background: repeating-linear-gradient(45deg, #f2f2f2, #f2f2f2 1mm, #fafafa 1mm, #fafafa 2mm);
  }

  /* TOTALS */
  .tot {
    display: grid; grid-template-columns: 1fr 55mm; gap: 4mm;
    margin-top: 3mm; padding-top: 2.5mm; border-top: 2px solid #000;
  }
  .thanks {
    font-family: 'Noto Serif JP', serif; font-weight: 900; font-size: 15pt;
    line-height: 1; letter-spacing: 2px;
  }
  .thanks small {
    font-family: 'Archivo Black', sans-serif; font-size: 6pt;
    letter-spacing: 2.5px; display: block; margin-top: 1.5mm;
  }
  .tot-r { border: 1.2px solid #000; padding: 2mm 2.5mm; }
  .tr-row {
    display: flex; justify-content: space-between; font-size: 7.5pt;
    padding: 0.8mm 0; border-bottom: 1px dashed #000;
  }
  .tr-row.disc { color: #000; font-weight: 700; }
  .tr-grand {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-top: 1.2mm; padding-top: 1.5mm; border-top: 2px solid #000;
    font-family: 'Archivo Black', sans-serif;
  }
  .tr-grand span:first-child { font-size: 6.5pt; letter-spacing: 1.5px; }
  .tr-grand .mono { font-size: 13pt; }

  /* FOOTER */
  .ft {
    margin-top: auto; padding-top: 2.5mm; border-top: 1px dashed #000;
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  .ft-l { font-size: 5.5pt; letter-spacing: 1px; max-width: 70%; }
  .ft-jp { font-family: 'Noto Serif JP', serif; font-size: 7pt; margin-bottom: 0.8mm; letter-spacing: 3px; }
  .ft-en { font-size: 5.5pt; color: #333; }
  .hanko {
    width: 15mm; height: 15mm; border: 2px solid #000; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transform: rotate(-8deg); background: #fff;
  }
  .hk-in {
    width: 12mm; height: 12mm; border: 1px solid #000; border-radius: 50%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #fff;
  }
  .hk-jp { font-family: 'Noto Serif JP', serif; font-weight: 900; font-size: 8.5pt; line-height: 1; }
  .hk-en { font-family: 'Archivo Black', sans-serif; font-size: 4.5pt; letter-spacing: 1.5px; margin-top: 0.6mm; }

  .tag {
    position: absolute; left: 0; right: 0; bottom: 2.5mm;
    text-align: center; font-size: 5pt; letter-spacing: 1.5px; color: #666; z-index: 2;
  }



  @media screen {
    body { background: #d9d9d9; padding: 8mm 0; }
    .sheet { background: #fff; box-shadow: 0 4px 24px rgba(0,0,0,0.25); margin-bottom: 8mm; }
  }
  @media print {
    body { background: #fff; padding: 0; }
    .sheet { box-shadow: none; margin: 0; }
  }
</style>
</head>
<body>
${a}
${r?`<script>
  window.addEventListener('load', function () {
    var imgs = Array.prototype.slice.call(document.images || []);
    var pending = imgs.filter(function(i){ return !i.complete; });
    var done = function(){ setTimeout(function(){ window.focus(); window.print(); }, 250); };
    if (!pending.length) return done();
    var left = pending.length;
    var tick = function(){ if (--left <= 0) done(); };
    pending.forEach(function(i){ i.addEventListener('load', tick); i.addEventListener('error', tick); });
    // Hard timeout so a stuck image never blocks printing.
    setTimeout(done, 3500);
  });
  window.addEventListener('afterprint', function(){
    // If opened as its own tab, close after printing. Iframe context ignores this.
    if (window.opener || window.name === 'invoice-print') { setTimeout(function(){ window.close(); }, 200); }
  });
<\/script>`:""}
</body>
</html>`},z=t=>{var a;if(!t.length)return;const c=w(t,{autoPrint:!0}),r=document.getElementById("__bs_invoice_frame__");r&&r.remove();const s=document.createElement("iframe");s.id="__bs_invoice_frame__",s.setAttribute("aria-hidden","true"),s.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;",document.body.appendChild(s);const e=s.contentDocument;if(!e)return;e.open(),e.write(c),e.close();const m=()=>{setTimeout(()=>{s.remove()},1500)};(a=s.contentWindow)==null||a.addEventListener("afterprint",m),setTimeout(m,3e4)},I=t=>{if(!t.length)return;const c=w(t,{autoPrint:!0}),r=window.open("","invoice-print");r&&(r.document.open(),r.document.write(c),r.document.close())},A=async t=>{if(!t.length)return[];const{data:c,error:r}=await x.from("orders").select("id, order_number, created_at, customer_name, customer_phone, customer_email, district, address, notes, subtotal, discount, delivery_fee, total, payment_method, coupon_code, order_items(product_name, size, color, qty, unit_price, line_total, products(product_images(url, is_primary, sort_order)))").in("id",t);if(r)throw r;const s=new Map;for(const e of c!=null?c:[])s.set(e.id,e);return t.map(e=>s.get(e)).filter(e=>!!e).map(e=>{var m;return{order_number:e.order_number,created_at:e.created_at,customer_name:e.customer_name,customer_phone:e.customer_phone,customer_email:e.customer_email,district:e.district,address:e.address,notes:e.notes,subtotal:e.subtotal,discount:e.discount,delivery_fee:e.delivery_fee,total:e.total,payment_method:e.payment_method,coupon_code:e.coupon_code,items:((m=e.order_items)!=null?m:[]).map(a=>{var g,i,o,p,u;const d=(i=(g=a.products)==null?void 0:g.product_images)!=null?i:[],f=(o=d.find(l=>l.is_primary))!=null?o:[...d].sort((l,v)=>l.sort_order-v.sort_order)[0];return{product_name:a.product_name,size:a.size,color:a.color,qty:a.qty,unit_price:a.unit_price,line_total:(p=a.line_total)!=null?p:a.unit_price*a.qty,image_url:(u=f==null?void 0:f.url)!=null?u:null}})}})};export{E as P,A as f,I as o,z as p};
