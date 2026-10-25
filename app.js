// ==========================================
// BE GENIUS — Modern Streetwear Storefront
// ==========================================

const PRODUCTS_DATA = [
  {
    id: "bg-01",
    name: "Plain Oversized Tee – Onyx Black",
    category: "t-shirt",
    tag: "BESTSELLER",
    price: 790,
    originalPrice: 990,
    images: [
      "https://media.besimple75.com/d0ca4308-c2a9-45b7-9ec7-f1c9af744635.webp",
      "https://media.besimple75.com/35f013c4-6f9d-4091-9fc0-5638232757dd.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Onyx Black"],
    description: "240 GSM heavy combed cotton oversized silhouette. Pre-shrunk, bio-washed fabric with ribbed crew neck collar and dropped shoulder cut for the ultimate relaxed luxury feel.",
    fabric: "100% Premium Combed Cotton, 240 GSM",
    inStock: true
  },
  {
    id: "bg-02",
    name: "Death Note Anime Graphic Oversized Hoodie",
    category: "hoodie",
    tag: "HOT DROP",
    price: 1490,
    originalPrice: 1750,
    images: [
      "https://media.besimple75.com/7eb4bb64-f2bd-455b-b769-f2ef50dd8b7e.webp",
      "https://media.besimple75.com/6f8726db-8e03-4994-8dff-f13d9796d446.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Jet Black"],
    description: "360 GSM fleece heavy-duty oversized hoodie. High-density screen print graphic resistant to cracking and wash wear. Features double-lined roomy hood and hidden kangaroo pocket.",
    fabric: "100% Terry Fleece Cotton, 360 GSM",
    inStock: true
  },
  {
    id: "bg-03",
    name: "Classic Dual-Tone Varsity Jacket",
    category: "jacket",
    tag: "WINTER ESSENTIAL",
    price: 1490,
    originalPrice: 1890,
    images: [
      "https://media.besimple75.com/a5fdcfdd-9204-4b77-8efe-cfbfdec1bb1c.webp",
      "https://media.besimple75.com/8c567f98-8e2c-4508-8c75-79964483beff.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black / White", "Navy / White"],
    description: "Collegiate heritage varsity jacket with modern streetwear drape. Premium snap-button front, striped rib-knit trims, quilted thermal inner lining, and dual side welt pockets.",
    fabric: "Wool-Blend Exterior with Quilted Satin Lining",
    inStock: true
  },
  {
    id: "bg-04",
    name: "Plain Oversized Hoodie – Cloud White",
    category: "hoodie",
    tag: "MINIMALIST",
    price: 1290,
    originalPrice: 1550,
    images: [
      "https://media.besimple75.com/6f8726db-8e03-4994-8dff-f13d9796d446.webp",
      "https://media.besimple75.com/7eb4bb64-f2bd-455b-b769-f2ef50dd8b7e.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Cloud White"],
    description: "Pure cloud white minimalist fleece hoodie without loud branding. Clean architectural silhouette with ribbed cuffs and hem. Super soft brushed interior for everyday comfort.",
    fabric: "340 GSM Brushed Cotton Fleece",
    inStock: true
  },
  {
    id: "bg-05",
    name: "Berserk Graphic Wide-Leg Sweatpants",
    category: "pants",
    tag: "STREETWEAR",
    price: 1790,
    originalPrice: 2090,
    images: [
      "https://media.besimple75.com/9f32488f-22d4-44a6-9657-1a775fa81d8a.webp",
      "https://media.besimple75.com/e66eba8b-4d92-417a-9717-1e8286cdd799.webp"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Off-White", "Washed Black"],
    description: "Ultra-comfortable wide-leg baggy sweatpants with custom anime graphic print down the calf. Elasticated drawstring waistband with metallic eyelets and deep side slash pockets.",
    fabric: "Heavyweight 320 GSM Cotton French Terry",
    inStock: true
  },
  {
    id: "bg-06",
    name: "Urban Relaxed Streetwear Cargo Pants",
    category: "pants",
    tag: "NEW DROP",
    price: 1790,
    originalPrice: 2190,
    images: [
      "https://media.besimple75.com/90d79c2d-0d34-4d20-b505-1afdb80fed3a.webp",
      "https://media.besimple75.com/da4ec872-5288-4aec-a6f0-269fe8cc2eed.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Midnight Black"],
    description: "Multi-pocket tactical cargo trousers engineered for contemporary movement. 6 functional utility pockets, adjustable ankle bungee toggles, and relaxed straight drape.",
    fabric: "Durable Cotton Twill Blend",
    inStock: true
  },
  {
    id: "bg-07",
    name: "Bleach Samurai Anime Oversized Tee",
    category: "t-shirt",
    tag: "ANIME DROP",
    price: 990,
    originalPrice: 1290,
    images: [
      "https://media.besimple75.com/3d8d361f-9555-4c97-8c0d-0445bf94395b.webp",
      "https://media.besimple75.com/d0ca4308-c2a9-45b7-9ec7-f1c9af744635.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Jet Black"],
    description: "Exclusive Japanese calligraphy & Bleach inspired back-print graphic. Printed with soft-hand eco pigments that breathe with the fabric.",
    fabric: "240 GSM Ring-Spun Combed Cotton",
    inStock: true
  },
  {
    id: "bg-08",
    name: "Japanese Mountain Red Sun Graphic Tee",
    category: "t-shirt",
    tag: "GRAPHIC",
    price: 990,
    originalPrice: 1250,
    images: [
      "https://media.besimple75.com/35f013c4-6f9d-4091-9fc0-5638232757dd.webp",
      "https://media.besimple75.com/d0ca4308-c2a9-45b7-9ec7-f1c9af744635.webp"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Pitch Black"],
    description: "Subtle front chest insignia with sprawling scenic retro Japanese mountain aesthetic print on reverse. Relaxed drop-shoulder cut.",
    fabric: "240 GSM 100% Combed Cotton",
    inStock: true
  }
];

// App State
let state = {
  theme: localStorage.getItem("bg_theme") || "dark",
  currentCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  cart: JSON.parse(localStorage.getItem("bg_cart") || "[]"),
  orders: JSON.parse(localStorage.getItem("bg_orders") || "[]"),
  selectedProduct: null,
  activeModalImageIndex: 0,
  activeSelectedSize: null,
  activeSelectedColor: null,
  modalQuantity: 1,
  deliveryZone: "inside", // 'inside' = 70, 'outside' = 130
  directCheckoutItem: null
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  renderProducts();
  updateCartUI();
  setupEventListeners();
  renderAdminOrders();
});

// Theme Toggle
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("bg_theme", theme);

  const themeIcon = document.getElementById("theme-toggle-icon");
  if (themeIcon) {
    if (theme === "light") {
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`;
    } else {
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>`;
    }
  }
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  showToast(`Switched to ${nextTheme.toUpperCase()} mode`);
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  let filtered = [...PRODUCTS_DATA];

  // Category filter
  if (state.currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === state.currentCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "discount") {
    filtered.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
  }

  const countEl = document.getElementById("product-count");
  if (countEl) countEl.innerText = `${filtered.length} items`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <p class="text-neutral-400 text-lg mb-4">No products found matching your search.</p>
        <button onclick="resetFilters()" class="px-6 py-2 border border-neutral-700 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">View All Products</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return `
      <div class="group relative flex flex-col border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:border-neutral-500 hover:shadow-xl">
        <!-- Badge -->
        <div class="absolute top-3 left-3 z-10 flex gap-2">
          ${product.tag ? `<span class="bg-black/80 backdrop-blur-md text-[10px] font-bold text-white px-2.5 py-1 tracking-widest uppercase border border-white/20">${product.tag}</span>` : ''}
          ${discount > 0 ? `<span class="bg-red-600/90 text-[10px] font-bold text-white px-2 py-1 tracking-wider uppercase">-${discount}%</span>` : ''}
        </div>

        <!-- Image Container -->
        <div class="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden cursor-pointer" onclick="openProductModal('${product.id}')">
          <img 
            src="${product.images[0]}" 
            alt="${product.name}" 
            class="product-card-img w-full h-full object-cover object-center"
            loading="lazy"
          />
          <!-- Quick view action -->
          <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
            <button onclick="event.stopPropagation(); openProductModal('${product.id}')" class="flex-1 py-2.5 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition flex items-center justify-center gap-1.5 shadow-lg">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              Quick View
            </button>
            <button onclick="event.stopPropagation(); quickAddToCart('${product.id}')" class="w-10 h-10 bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition" title="Add to cart">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="p-4 flex flex-col flex-grow justify-between">
          <div>
            <span class="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">${product.category}</span>
            <h3 class="text-sm font-semibold tracking-wide text-[var(--text-primary)] hover:underline cursor-pointer line-clamp-1 mb-2" onclick="openProductModal('${product.id}')">
              ${product.name}
            </h3>
          </div>
          
          <div class="pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
            <div class="flex items-baseline gap-2">
              <span class="text-base font-bold text-[var(--text-primary)]">৳${product.price}</span>
              ${product.originalPrice ? `<span class="text-xs text-neutral-500 line-through">৳${product.originalPrice}</span>` : ''}
            </div>
            <span class="text-[11px] text-emerald-500 font-medium tracking-wide">COD Ready</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Reset filters
function resetFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  state.sortBy = "featured";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("bg-white", btn.dataset.category === "all");
    btn.classList.toggle("text-black", btn.dataset.category === "all");
    btn.classList.toggle("bg-neutral-900", btn.dataset.category !== "all");
    btn.classList.toggle("text-neutral-300", btn.dataset.category !== "all");
  });

  renderProducts();
}

// Product Details Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.selectedProduct = product;
  state.activeModalImageIndex = 0;
  state.activeSelectedSize = product.sizes[0];
  state.activeSelectedColor = product.colors[0];
  state.modalQuantity = 1;

  const modal = document.getElementById("product-modal");
  const modalContent = document.getElementById("product-modal-content");

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Image Gallery -->
      <div class="flex flex-col gap-4">
        <div class="relative w-full aspect-[3/4] bg-neutral-900 border border-[var(--border-color)] overflow-hidden">
          <img id="modal-main-img" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
          ${discount > 0 ? `<span class="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 tracking-wider uppercase">SAVE ${discount}%</span>` : ''}
        </div>
        <!-- Thumbnails -->
        <div class="flex gap-3 overflow-x-auto pb-1">
          ${product.images.map((img, idx) => `
            <button onclick="changeModalImage(${idx}, '${img}')" class="thumbnail-btn w-16 h-20 border-2 ${idx === 0 ? 'border-white' : 'border-transparent opacity-60'} hover:opacity-100 transition overflow-hidden flex-shrink-0 bg-neutral-900">
              <img src="${img}" class="w-full h-full object-cover">
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Product Meta -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs uppercase tracking-widest text-neutral-400 font-semibold">${product.category}</span>
            <span class="text-neutral-600">•</span>
            <span class="text-xs text-emerald-400 font-medium">In Stock (Dhaka Hub)</span>
          </div>

          <h2 class="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3">${product.name}</h2>

          <div class="flex items-baseline gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
            <span class="text-2xl font-bold text-[var(--text-primary)]">৳${product.price}</span>
            ${product.originalPrice ? `<span class="text-base text-neutral-500 line-through">৳${product.originalPrice}</span>` : ''}
            <span class="text-xs px-2 py-0.5 bg-emerald-950/70 border border-emerald-600/30 text-emerald-400 font-semibold uppercase tracking-wider">Cash on Delivery</span>
          </div>

          <!-- Color selection -->
          <div class="mb-5">
            <label class="block text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-2">Color: <span id="selected-color-label" class="text-[var(--text-primary)]">${product.colors[0]}</span></label>
            <div class="flex gap-2">
              ${product.colors.map((c, i) => `
                <button onclick="selectColor('${c}')" class="color-btn px-4 py-1.5 border text-xs tracking-wider font-medium transition ${i === 0 ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' : 'border-[var(--border-color)] text-neutral-300'}">
                  ${c}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Size selection with Size Guide -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs uppercase tracking-widest font-semibold text-neutral-400">Size: <span id="selected-size-label" class="text-[var(--text-primary)]">${product.sizes[0]}</span></label>
              <button onclick="openSizeGuideModal()" class="text-xs text-neutral-400 underline hover:text-white flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                Size Chart
              </button>
            </div>
            <div class="grid grid-cols-4 gap-2">
              ${product.sizes.map((s, i) => `
                <button onclick="selectSize('${s}')" class="size-btn py-2.5 border text-xs font-bold tracking-widest transition ${i === 0 ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' : 'border-[var(--border-color)] text-neutral-300 hover:border-neutral-500'}">
                  ${s}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Quantity -->
          <div class="mb-6">
            <label class="block text-xs uppercase tracking-widest font-semibold text-neutral-400 mb-2">Quantity</label>
            <div class="flex items-center border border-[var(--border-color)] w-32 bg-[var(--bg-secondary)]">
              <button onclick="changeModalQuantity(-1)" class="w-10 h-10 flex items-center justify-center text-lg text-neutral-300 hover:bg-neutral-800 transition">-</button>
              <span id="modal-qty" class="flex-1 text-center font-bold text-sm text-[var(--text-primary)]">1</span>
              <button onclick="changeModalQuantity(1)" class="w-10 h-10 flex items-center justify-center text-lg text-neutral-300 hover:bg-neutral-800 transition">+</button>
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm text-neutral-400 leading-relaxed mb-6">${product.description}</p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-3 pt-4 border-t border-[var(--border-color)]">
          <button onclick="orderNowFromModal()" class="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-[0.2em] uppercase transition flex items-center justify-center gap-2 shadow-lg">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            BUY NOW (ক্যাশ অন ডেলিভারি)
          </button>
          
          <button onclick="addToCartFromModal()" class="w-full py-3.5 border-2 border-[var(--accent)] text-[var(--text-primary)] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function changeModalImage(idx, src) {
  state.activeModalImageIndex = idx;
  const mainImg = document.getElementById("modal-main-img");
  if (mainImg) mainImg.src = src;

  document.querySelectorAll(".thumbnail-btn").forEach((btn, i) => {
    btn.classList.toggle("border-white", i === idx);
    btn.classList.toggle("border-transparent", i !== idx);
    btn.classList.toggle("opacity-60", i !== idx);
  });
}

function selectSize(size) {
  state.activeSelectedSize = size;
  const label = document.getElementById("selected-size-label");
  if (label) label.innerText = size;

  document.querySelectorAll(".size-btn").forEach(btn => {
    const isSelected = btn.innerText.trim() === size;
    btn.className = `size-btn py-2.5 border text-xs font-bold tracking-widest transition ${
      isSelected 
        ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' 
        : 'border-[var(--border-color)] text-neutral-300 hover:border-neutral-500'
    }`;
  });
}

function selectColor(color) {
  state.activeSelectedColor = color;
  const label = document.getElementById("selected-color-label");
  if (label) label.innerText = color;

  document.querySelectorAll(".color-btn").forEach(btn => {
    const isSelected = btn.innerText.trim() === color;
    btn.className = `color-btn px-4 py-1.5 border text-xs tracking-wider font-medium transition ${
      isSelected 
        ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]' 
        : 'border-[var(--border-color)] text-neutral-300'
    }`;
  });
}

function changeModalQuantity(delta) {
  state.modalQuantity = Math.max(1, state.modalQuantity + delta);
  const qtyEl = document.getElementById("modal-qty");
  if (qtyEl) qtyEl.innerText = state.modalQuantity;
}

// Cart Management
function quickAddToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  addItemToCart(product, product.sizes[0], product.colors[0], 1);
  showToast(`Added ${product.name} (Size ${product.sizes[0]}) to cart`);
  openCartDrawer();
}

function addToCartFromModal() {
  if (!state.selectedProduct) return;
  addItemToCart(state.selectedProduct, state.activeSelectedSize, state.activeSelectedColor, state.modalQuantity);
  closeProductModal();
  showToast(`Added to your bag!`);
  openCartDrawer();
}

function orderNowFromModal() {
  if (!state.selectedProduct) return;
  state.directCheckoutItem = {
    product: state.selectedProduct,
    size: state.activeSelectedSize,
    color: state.activeSelectedColor,
    quantity: state.modalQuantity
  };
  closeProductModal();
  openCheckoutModal(true);
}

function addItemToCart(product, size, color, quantity) {
  const existingIndex = state.cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
}

function updateCartItemQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
    showToast("Item removed from cart");
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast("Item removed");
}

function saveCart() {
  localStorage.setItem("bg_cart", JSON.stringify(state.cart));
}

function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(badge => {
    badge.innerText = totalItems;
    badge.classList.toggle("hidden", totalItems === 0);
  });

  // Render drawer items
  const container = document.getElementById("cart-drawer-items");
  const subtotalEl = document.getElementById("cart-drawer-subtotal");
  const freeShippingBar = document.getElementById("free-shipping-progress");
  const freeShippingText = document.getElementById("free-shipping-text");

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (subtotalEl) subtotalEl.innerText = `৳${subtotal}`;

  // Free shipping over 2000 BDT
  const freeThreshold = 2000;
  if (freeShippingBar && freeShippingText) {
    const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    freeShippingBar.style.width = `${progress}%`;
    if (subtotal >= freeThreshold) {
      freeShippingText.innerHTML = `🎉 <b>You unlocked FREE Delivery!</b>`;
    } else {
      freeShippingText.innerHTML = `Add <b>৳${freeThreshold - subtotal}</b> more for FREE nationwide delivery`;
    }
  }

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center p-6 text-neutral-400">
        <svg class="w-12 h-12 stroke-current mb-3 opacity-40" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p class="text-sm font-medium uppercase tracking-wider mb-2">Your Bag is Empty</p>
        <p class="text-xs text-neutral-500 mb-4">Discover our high-end streetwear collection.</p>
        <button onclick="closeCartDrawer()" class="px-6 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition">Start Shopping</button>
      </div>
    `;
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = state.cart.map((item, idx) => `
    <div class="flex gap-4 py-4 border-b border-[var(--border-color)]">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-24 object-cover bg-neutral-900 border border-[var(--border-color)] flex-shrink-0">
      
      <div class="flex flex-col justify-between flex-grow">
        <div>
          <div class="flex justify-between items-start">
            <h4 class="text-xs font-bold text-[var(--text-primary)] tracking-wide line-clamp-1 pr-2">${item.name}</h4>
            <button onclick="removeCartItem(${idx})" class="text-neutral-500 hover:text-red-500 transition" title="Remove">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <p class="text-[11px] text-neutral-400 mt-0.5">Size: <span class="font-bold text-[var(--text-primary)]">${item.size}</span> | ${item.color}</p>
        </div>

        <div class="flex justify-between items-center mt-3">
          <!-- Quantity control -->
          <div class="flex items-center border border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <button onclick="updateCartItemQuantity(${idx}, -1)" class="w-7 h-7 flex items-center justify-center text-xs text-neutral-300 hover:bg-neutral-800">-</button>
            <span class="w-8 text-center text-xs font-bold text-[var(--text-primary)]">${item.quantity}</span>
            <button onclick="updateCartItemQuantity(${idx}, 1)" class="w-7 h-7 flex items-center justify-center text-xs text-neutral-300 hover:bg-neutral-800">+</button>
          </div>
          
          <div class="text-right">
            <span class="text-xs font-bold text-[var(--text-primary)]">৳${item.price * item.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  drawer.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  drawer.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// 1-Page Cash on Delivery Checkout Flow
function openCheckoutModal(isDirect = false) {
  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  
  if (!isDirect) {
    state.directCheckoutItem = null;
  }

  updateCheckoutSummary();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function setDeliveryZone(zone) {
  state.deliveryZone = zone;
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const items = state.directCheckoutItem 
    ? [{
        name: state.directCheckoutItem.product.name,
        price: state.directCheckoutItem.product.price,
        size: state.directCheckoutItem.size,
        quantity: state.directCheckoutItem.quantity,
        image: state.directCheckoutItem.product.images[0]
      }]
    : state.cart;

  const itemsListEl = document.getElementById("checkout-items-list");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const shippingEl = document.getElementById("checkout-shipping");
  const grandTotalEl = document.getElementById("checkout-grand-total");

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Free delivery threshold: 2000 BDT
  let shippingFee = state.deliveryZone === "inside" ? 70 : 130;
  if (subtotal >= 2000) {
    shippingFee = 0;
  }

  const grandTotal = subtotal + shippingFee;

  if (itemsListEl) {
    itemsListEl.innerHTML = items.map(item => `
      <div class="flex justify-between items-center py-2 text-xs border-b border-[var(--border-color)]">
        <div class="flex items-center gap-2">
          <img src="${item.image}" class="w-9 h-11 object-cover bg-neutral-900 border border-[var(--border-color)]">
          <div>
            <p class="font-bold text-[var(--text-primary)] line-clamp-1">${item.name}</p>
            <p class="text-[10px] text-neutral-400">Size: ${item.size} × ${item.quantity}</p>
          </div>
        </div>
        <span class="font-bold text-[var(--text-primary)]">৳${item.price * item.quantity}</span>
      </div>
    `).join("");
  }

  if (subtotalEl) subtotalEl.innerText = `৳${subtotal}`;
  if (shippingEl) shippingEl.innerText = shippingFee === 0 ? "FREE" : `৳${shippingFee}`;
  if (grandTotalEl) grandTotalEl.innerText = `৳${grandTotal}`;
}

// Handle Order Form Submit
function submitCheckoutOrder(event) {
  event.preventDefault();

  const name = document.getElementById("checkout-name").value.trim();
  const phone = document.getElementById("checkout-phone").value.trim();
  const address = document.getElementById("checkout-address").value.trim();
  const note = document.getElementById("checkout-note") ? document.getElementById("checkout-note").value.trim() : "";

  if (!name || !phone || !address) {
    showToast("Please fill in Name, Phone, and Address!");
    return;
  }

  // Phone validation (Bangladesh format: 11 digits starting with 01)
  const cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.length < 10) {
    showToast("Please enter a valid mobile number!");
    return;
  }

  const items = state.directCheckoutItem 
    ? [{
        name: state.directCheckoutItem.product.name,
        price: state.directCheckoutItem.product.price,
        size: state.directCheckoutItem.size,
        quantity: state.directCheckoutItem.quantity
      }]
    : [...state.cart];

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let shippingFee = state.deliveryZone === "inside" ? 70 : 130;
  if (subtotal >= 2000) shippingFee = 0;
  const grandTotal = subtotal + shippingFee;

  const orderId = "BG-" + Math.floor(100000 + Math.random() * 900000);
  const newOrder = {
    orderId,
    timestamp: new Date().toISOString(),
    customer: { name, phone, address, note, zone: state.deliveryZone },
    items,
    subtotal,
    shippingFee,
    grandTotal,
    status: "Pending Confirmation"
  };

  // Save order to state and localStorage
  state.orders.unshift(newOrder);
  localStorage.setItem("bg_orders", JSON.stringify(state.orders));

  // Clear cart if ordered from cart
  if (!state.directCheckoutItem) {
    state.cart = [];
    saveCart();
    updateCartUI();
  }

  closeCheckoutModal();
  renderAdminOrders();
  openSuccessModal(newOrder);
}

// Order Success Receipt Modal
function openSuccessModal(order) {
  const modal = document.getElementById("success-modal");
  const receiptEl = document.getElementById("success-receipt-details");

  receiptEl.innerHTML = `
    <div class="p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded mb-6 text-left">
      <div class="flex justify-between items-center border-b border-[var(--border-color)] pb-3 mb-3">
        <span class="text-xs uppercase tracking-wider text-neutral-400">Order Reference</span>
        <span class="text-sm font-mono font-bold text-emerald-400">${order.orderId}</span>
      </div>
      
      <div class="text-xs space-y-1 mb-4 text-neutral-300">
        <p><b class="text-white">Customer:</b> ${order.customer.name}</p>
        <p><b class="text-white">Phone:</b> ${order.customer.phone}</p>
        <p><b class="text-white">Address:</b> ${order.customer.address} (${order.customer.zone === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'})</p>
      </div>

      <div class="border-t border-[var(--border-color)] pt-3 space-y-1.5">
        ${order.items.map(item => `
          <div class="flex justify-between text-xs text-neutral-300">
            <span>${item.name} (${item.size}) × ${item.quantity}</span>
            <span class="font-bold text-white">৳${item.price * item.quantity}</span>
          </div>
        `).join("")}
        <div class="flex justify-between text-xs text-neutral-400 pt-2 border-t border-[var(--border-color)]">
          <span>Delivery Charge</span>
          <span>${order.shippingFee === 0 ? 'FREE' : '৳' + order.shippingFee}</span>
        </div>
        <div class="flex justify-between text-sm font-bold text-white pt-1">
          <span>Total Payable (COD)</span>
          <span class="text-emerald-400">৳${order.grandTotal}</span>
        </div>
      </div>
    </div>

    <!-- WhatsApp Share button -->
    <a href="https://wa.me/8801707197808?text=${encodeURIComponent(`Hello BE GENIUS, I placed order ${order.orderId} for ৳${order.grandTotal}. Name: ${order.customer.name}, Phone: ${order.customer.phone}`)}" target="_blank" class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 mb-3 transition shadow-lg">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.088-.18.183-.077.36.103.177.458.756.982 1.223.676.602 1.246.788 1.423.876.177.088.281.074.385-.045.104-.119.444-.517.562-.695.118-.178.236-.148.397-.089.161.059 1.023.482 1.198.57.175.088.291.132.334.206.043.074.043.43-.101.835z"/></svg>
      Send Order Confirmation to WhatsApp
    </a>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Size Guide Modal
function openSizeGuideModal() {
  const modal = document.getElementById("size-guide-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeSizeGuideModal() {
  const modal = document.getElementById("size-guide-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Admin Panel Drawer
function openAdminDrawer() {
  const drawer = document.getElementById("admin-drawer");
  drawer.classList.remove("translate-x-full");
  renderAdminOrders();
}

function closeAdminDrawer() {
  const drawer = document.getElementById("admin-drawer");
  drawer.classList.add("translate-x-full");
}

function renderAdminOrders() {
  const container = document.getElementById("admin-orders-list");
  const countEl = document.getElementById("admin-order-count");
  if (!container) return;

  if (countEl) countEl.innerText = state.orders.length;

  if (state.orders.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-neutral-400">
        <p class="text-xs uppercase tracking-widest">No customer orders placed yet.</p>
        <p class="text-[11px] text-neutral-500 mt-1">Place a test order to see it appear here in real-time!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.orders.map((ord, idx) => `
    <div class="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-3 rounded">
      <div class="flex justify-between items-center mb-2">
        <span class="font-mono font-bold text-xs text-emerald-400">${ord.orderId}</span>
        <span class="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded uppercase tracking-wider">${ord.status}</span>
      </div>
      <div class="text-xs text-neutral-300 space-y-0.5 mb-2">
        <p><b class="text-white">${ord.customer.name}</b> (${ord.customer.phone})</p>
        <p class="text-neutral-400 text-[11px]">${ord.customer.address}</p>
      </div>
      <div class="border-t border-[var(--border-color)] pt-2 text-[11px] flex justify-between items-center">
        <span class="text-neutral-400">${ord.items.length} item(s)</span>
        <span class="font-bold text-white">৳${ord.grandTotal}</span>
      </div>
    </div>
  `).join("");
}

// Toast Notification
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// Event Listeners
function setupEventListeners() {
  // Category buttons
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => {
        b.classList.remove("bg-white", "text-black");
        b.classList.add("bg-neutral-900", "text-neutral-300");
      });
      btn.classList.add("bg-white", "text-black");
      btn.classList.remove("bg-neutral-900", "text-neutral-300");

      state.currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort selector
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }
}
