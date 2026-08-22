/* =========================================================================
   AL-ABYAZ — PRODUCT DETAILS PAGE
   Reads ?id= from the URL and renders the matching product from
   data/products.js, including any live/upcoming offer.
   ========================================================================= */

function initProductDetails() {
  const root = document.getElementById("pd-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  document.title = `${product.name} — ${SITE_CONFIG.businessName}`;

  const match = OfferEngine.getOfferForProduct(product.id);
  const isActive = match && match.status === "active";
  const isUpcoming = match && match.status === "upcoming";
  const currentPrice = isActive ? match.offer.offerPrice : product.price;

  const waMessage = `Hello ${SITE_CONFIG.businessName}, I want to order ${product.name}, ${product.size}, ${formatPrice(currentPrice)}.`;

  let priceHtml = `<div class="pd-price-block"><span class="price-now">${formatPrice(product.price)}</span></div>`;
  let offerPanel = "";

  if (isActive) {
    const offer = match.offer;
    priceHtml = `
      <div class="pd-price-block">
        <span class="price-now">${formatPrice(offer.offerPrice)}</span>
        <span class="price-was">${formatPrice(offer.originalPrice)}</span>
        <span class="price-off">${OfferEngine.discountPercent(offer)}</span>
      </div>`;
    offerPanel = `
      <div class="pd-offer-panel">
        <div class="offer-title">🔥 ${offer.title} — ends ${OfferEngine.formatDate(offer.endDate)}</div>
        <div class="countdown" data-countdown="${offer.id}" data-end="${offer.endDate}"></div>
      </div>`;
  } else if (isUpcoming) {
    offerPanel = `
      <div class="pd-offer-panel">
        <div class="offer-title">Offer starts soon — from ${OfferEngine.formatDate(match.offer.startDate)}</div>
      </div>`;
  }

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a> / <a href="products.html">Products</a> / ${product.name}
    </div>
    <div class="pd-grid mt-40">
      <div class="pd-media">
        <img src="${product.image}" alt="${product.name} bottle" onerror="this.src='images/products/placeholder.svg'">
      </div>
      <div class="pd-info">
        <span class="eyebrow">${(product.categories || []).map((c) => CATEGORY_META[c]?.label || c).join(" · ")}</span>
        <h1>${product.name}</h1>
        <div class="pd-notes">${product.notes || ""}</div>
        <p class="pd-desc">${product.description}</p>
        ${priceHtml}
        ${offerPanel}
        <div class="pd-meta">
          <div><span>Size</span><strong>${product.size}</strong></div>
          <div><span>Availability</span><strong>${product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</strong></div>
        </div>
        <div class="pd-actions">
          <a class="btn btn-primary" href="${buildWhatsAppLink(waMessage)}" target="_blank" rel="noopener">Order on WhatsApp</a>
          <a class="btn btn-outline" href="products.html">Continue Browsing</a>
        </div>
      </div>
    </div>
  `;
  startCountdownTimers(root);

  // Related products: same category, excluding this one
  const relatedGrid = document.getElementById("related-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(
      (p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c))
    ).slice(0, 4);
    renderProductGrid(relatedGrid, related.length ? related : PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4));
  }
}

document.addEventListener("DOMContentLoaded", initProductDetails);
