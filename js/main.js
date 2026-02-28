// ============================================================
//  MUMBAI REALTY — Shared Utilities
// ============================================================

/* ── Page Loader ── */
function hideLoader() {
  const l = document.getElementById('pageLoader');
  if (l) { l.classList.add('hidden'); setTimeout(() => l.remove(), 500); }
}

/* ── WhatsApp Button ── */
function initWhatsApp() {
  const wa = document.getElementById('waBtn');
  if (wa) wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20am%20interested%20in%20your%20property%20in%20Mumbai`;
}

/* ── Format Price (Indian style) ── */
function formatPrice(price) {
  const n = Number(price);
  if (!n) return '₹ —';
  if (n >= 10000000) return `₹ ${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000)   return `₹ ${(n / 100000).toFixed(2)} L`;
  return `₹ ${n.toLocaleString('en-IN')}`;
}

/* ── Toast notification ── */
function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const id = 'toast_' + Date.now();
  const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
  const bg   = type === 'success' ? '#16a34a' : type === 'error' ? '#dc2626' : '#2563eb';
  container.insertAdjacentHTML('beforeend', `
    <div id="${id}" style="
      background:${bg}; color:#fff; padding:14px 20px; border-radius:10px;
      margin-bottom:10px; display:flex; align-items:center; gap:10px;
      box-shadow:0 4px 20px rgba(0,0,0,0.2); min-width:280px;
      animation: fadeInRight 0.3s ease;
    ">
      <i class="fas fa-${icon}"></i>
      <span style="font-family:'DM Sans',sans-serif;font-size:0.9rem;">${msg}</span>
    </div>
  `);
  setTimeout(() => { const el = document.getElementById(id); if(el) el.remove(); }, 4000);
}

/* ── Build property card HTML ── */
function buildPropertyCard(doc) {
  const p = doc.data ? doc.data() : doc;
  const id = doc.id || doc._id;
  const img = p.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70';
  const sold = p.status === 'Sold';
  return `
  <div class="col-lg-4 col-md-6">
    <div class="prop-card">
      <div class="prop-card-img-wrap">
        <img src="${img}" alt="${p.title}" class="prop-card-img" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70'">
        <span class="prop-badge ${sold ? 'sold' : ''}">${sold ? 'Sold' : 'For Sale'}</span>
        <span class="prop-type-badge">${p.type || 'Flat'}</span>
      </div>
      <div class="prop-card-body">
        <div class="prop-price">${formatPrice(p.price)}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
        <div class="prop-meta">
          ${p.bedrooms ? `<span><i class="fas fa-bed"></i> ${p.bedrooms} Bed</span>` : ''}
          ${p.bathrooms ? `<span><i class="fas fa-bath"></i> ${p.bathrooms} Bath</span>` : ''}
          ${p.area ? `<span><i class="fas fa-expand-arrows-alt"></i> ${p.area} sqft</span>` : ''}
        </div>
        <a href="pages/property-detail.html?id=${id}" class="btn-view w-100 text-center">View Details <i class="fas fa-arrow-right ms-1"></i></a>
      </div>
    </div>
  </div>`;
}

/* ── Auth guard (call on protected pages) ── */
function requireAuth(redirectTo = '../pages/login.html') {
  auth.onAuthStateChanged(user => {
    if (!user) window.location.href = redirectTo;
  });
}

/* ── Logout ── */
function logout() {
  auth.signOut().then(() => window.location.href = '../pages/login.html');
}
