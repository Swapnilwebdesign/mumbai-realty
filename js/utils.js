// ============================================================
// SHARED UTILITIES
// ============================================================

function hideLoader() {
  const l = document.getElementById('pageLoader');
  if (l) { l.classList.add('hidden'); setTimeout(() => l.remove(), 600); }
}

function initWA() {
  const link = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20in%20Mumbai`;
  document.querySelectorAll('[id$="Wa"], #waBtn').forEach(el => el && (el.href = link));
}

function formatPrice(price) {
  const n = Number(price);
  if (!n) return '₹ —';
  if (n >= 10000000) return `₹ ${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000)   return `₹ ${(n / 100000).toFixed(2)} L`;
  return `₹ ${n.toLocaleString('en-IN')}`;
}

function showToast(msg, type = 'success') {
  let wrap = document.querySelector('.toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
  const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
  const id = 'toast_' + Date.now();
  wrap.insertAdjacentHTML('beforeend', `
    <div id="${id}" class="toast-msg ${type}">
      <i class="fas fa-${icon}"></i><span>${msg}</span>
    </div>`);
  setTimeout(() => { const el = document.getElementById(id); if (el) el.remove(); }, 4000);
}

function buildCard(doc) {
  const p  = typeof doc.data === 'function' ? doc.data() : doc;
  const id = doc.id || p._id || '';
  const img = p.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70';
  const sold = p.status === 'Sold';
  // Detect if we're in root or sub-folder
  const detailPath = window.location.pathname.includes('/mumbai-realty/') 
    ? (window.location.pathname.endsWith('/mumbai-realty/') || window.location.pathname.endsWith('index.html') 
        ? `property.html?id=${id}` 
        : `property.html?id=${id}`)
    : `property.html?id=${id}`;
  return `
  <div class="col-lg-4 col-md-6">
    <div class="prop-card">
      <div class="prop-card-img-wrap">
        <img src="${img}" alt="${p.title || ''}" class="prop-card-img" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70'">
        <span class="prop-badge ${sold ? 'sold' : ''}">${sold ? 'Sold' : 'For Sale'}</span>
        <span class="prop-type">${p.type || 'Flat'}</span>
      </div>
      <div class="prop-body">
        <div class="prop-price">${formatPrice(p.price)}</div>
        <div class="prop-title">${p.title || ''}</div>
        <div class="prop-location"><i class="fas fa-map-marker-alt"></i> ${p.location || ''}</div>
        <div class="prop-meta">
          ${p.bedrooms  ? `<span><i class="fas fa-bed"></i>${p.bedrooms} Bed</span>`    : ''}
          ${p.bathrooms ? `<span><i class="fas fa-bath"></i>${p.bathrooms} Bath</span>` : ''}
          ${p.area      ? `<span><i class="fas fa-vector-square"></i>${p.area} sqft</span>` : ''}
        </div>
        <a href="${detailPath}" class="btn-view">View Details <i class="fas fa-arrow-right ms-1"></i></a>
      </div>
    </div>
  </div>`;
}

function requireAuth() {
  auth.onAuthStateChanged(user => {
    if (!user || user.email !== AGENT_EMAIL) {
      window.location.href = 'login.html';
    }
  });
}

function logout() {
  auth.signOut().then(() => window.location.href = 'login.html');
}
