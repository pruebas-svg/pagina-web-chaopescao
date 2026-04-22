/* misScripts.js — Chao Pescao */

/* ═══════════════════════════════════════════
   1. SCROLL REVEAL
═══════════════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('in'), i * 60);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.rev').forEach(el => io.observe(el));

/* ═══════════════════════════════════════════
   2. FAVORITOS
═══════════════════════════════════════════ */
document.querySelectorAll('.p-fav').forEach(f => {
  f.addEventListener('click', e => {
    e.stopPropagation();
    f.textContent = f.textContent === '🤍' ? '❤️' : '🤍';
  });
});

/* ═══════════════════════════════════════════
   3. CARRITO
═══════════════════════════════════════════ */
const CART_KEY     = 'chaopescao-cart';
const FREE_SHIPPING = '0';
let cart = loadCart();

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
  catch (e) {}
}

function fmt(n) {
  return '$' + Number(n).toLocaleString('es-CO');
}

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCart();
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

function addToCart(id, name, price, emoji) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx >= 0) {
    cart[idx].qty++;
  } else {
    cart.push({ id, name, price: parseInt(price), emoji, qty: 1 });
  }
  saveCart();
  updateBadge();
  showToast('¡' + emoji + ' ' + name.split(' ').slice(0, 3).join(' ') + ' agregado!');
  animateFab();
}

function removeOne(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  cart[idx].qty--;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(); updateBadge(); renderCart();
}

function addOne(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  cart[idx].qty++;
  saveCart(); updateBadge(); renderCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateBadge(); renderCart();
}

function clearCart() {
  cart = [];
  saveCart(); updateBadge(); renderCart();
}

function updateBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) badge.textContent = total;
}

function animateFab() {
  const fab = document.querySelector('.cart-fab');
  if (!fab) return;
  fab.classList.remove('bounce');
  void fab.offsetWidth;
  fab.classList.add('bounce');
}

function showToast(msg) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2400);
}

function renderCart() {
  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotal');
  const shipEl   = document.getElementById('cartShippingBar');
  if (!itemsEl) return;

  if (cart.length === 0) {
    emptyEl.style.display  = 'flex';
    footerEl.style.display = 'none';
    shipEl.textContent = '🚚 Envío disponible';
    shipEl.style.color = '#2A9D3B';
    Array.from(itemsEl.children).forEach(c => { if (c !== emptyEl) c.remove(); });
    return;
  }

  emptyEl.style.display  = 'none';
  footerEl.style.display = 'block';
  Array.from(itemsEl.children).forEach(c => { if (c !== emptyEl) c.remove(); });

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" onclick="removeOne('${item.id}')">−</button>
        <span class="cart-qty">${item.qty}</span>
        <button class="cart-qty-btn" onclick="addOne('${item.id}')">+</button>
        <button class="cart-remove" onclick="removeItem('${item.id}')">🗑</button>
      </div>`;
    itemsEl.appendChild(row);
  });

  totalEl.textContent = fmt(subtotal);
  const remaining = FREE_SHIPPING - subtotal;
  if (remaining > 0) {
    shipEl.textContent = '🚚 Te faltan ' + fmt(remaining) + ' para envío gratis';
    shipEl.style.color = '';
  } else {
    shipEl.textContent = '🎉 ¡Envíos!';
    shipEl.style.color = '#2A9D3B';
  }
}

updateBadge();

/* ═══════════════════════════════════════════
   4. SELECTOR DE TAMAÑOS — Cambiar imagen y precio
═══════════════════════════════════════════ */
document.querySelectorAll('.p-sizes').forEach(grupo => {
  grupo.addEventListener('click', e => {
    const btn = e.target.closest('.size-btn');
    if (!btn) return;
    const card = btn.closest('.p-card');

    // Desactivar todos los botones del grupo y activar el elegido
    grupo.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Cambiar imagen con fade suave
    const img = card.querySelector('.p-main-img');
    if (img && btn.dataset.img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = btn.dataset.img;
        img.style.opacity = '1';
      }, 180);
    }

    // Cambiar precio
    const precio    = parseInt(btn.dataset.price, 10);
    const precioOld = btn.dataset.old ? parseInt(btn.dataset.old, 10) : 0;
    const priceEl   = card.querySelector('.p-price');
    const oldEl     = card.querySelector('.p-old');
    priceEl.textContent = '$' + precio.toLocaleString('es-CO');
    oldEl.textContent   = precioOld ? '$' + precioOld.toLocaleString('es-CO') : '';

    // Animación flash en el precio
    priceEl.classList.remove('flash');
    void priceEl.offsetWidth;
    priceEl.classList.add('flash');

    // Guardar datos actualizados en la tarjeta para que el carrito los lea
    const nombre = card.querySelector('.p-name')?.textContent?.trim() || '';
    card.dataset.productName  = nombre + ' ' + btn.dataset.size;
    card.dataset.productPrice = precio;
  });
});

/* ═══════════════════════════════════════════
   5. BOTONES + AGREGAR AL CARRITO
      Lee el tamaño activo si el producto tiene variantes
═══════════════════════════════════════════ */
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('[data-product-id]');
    if (!card) return;

    const activeBtn = card.querySelector('.size-btn.active');
    let id, nombre, precio;

    if (activeBtn) {
      // Producto con tamaños: usa el tamaño seleccionado
      id     = card.dataset.productId + '-' + activeBtn.dataset.size;
      nombre = (card.querySelector('.p-name')?.textContent?.trim() || '') + ' ' + activeBtn.dataset.size;
      precio = card.dataset.productPrice || activeBtn.dataset.price;
    } else {
      // Producto sin tamaños: comportamiento original
      id     = card.dataset.productId;
      nombre = card.dataset.productName;
      precio = card.dataset.productPrice;
    }

    addToCart(id, nombre, precio, card.dataset.productEmoji || '🐾');

    // Feedback visual en el botón
    this.textContent = '✓';
    this.style.background = 'var(--green)';
    setTimeout(() => {
      this.textContent = '+';
      this.style.background = 'var(--blue)';
    }, 1400);
  });
});

/*Nuevo*/
/* ═══════════════════════════════════════════
   6. ENVIAR PEDIDO A WHATSAPP
═══════════════════════════════════════════ */
function sendToWhatsApp() {
  const WHATSAPP_NUMBER = '573132108159'; // 👈 CAMBIA TU NÚMERO
  
  if (cart.length === 0) {
    alert('Tu carrito está vacío. ¡Agrega productos primero!');
    return;
  }

  let mensaje = '*PEDIDO CHAO PESCAO*\n\n';
  
  cart.forEach(function(item, index) {
    mensaje += (index + 1) + '. ' + item.name + '\n';
    mensaje += '   Cantidad: ' + item.qty + '\n';
    mensaje += '   Precio: ' + fmt(item.price * item.qty) + '\n\n';
  });

  const subtotal = cart.reduce(function(sum, item) {
    return sum + (item.price * item.qty);
  }, 0);
  
  mensaje += '*SUBTOTAL: ' + fmt(subtotal) + '*\n\n';
  mensaje += 'Gracias por tu pedido!';

  const urlWhatsApp = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(mensaje);
  window.open(urlWhatsApp, '_blank');
  
  // Vaciar el carrito automáticamente
  setTimeout(function() {
    clearCart();
    closeCart();
    showToast('Pedido enviado! Tu carrito se ha vaciado.');
  }, 1000);
}