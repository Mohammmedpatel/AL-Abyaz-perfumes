/* =========================================================================
   AL-ABYAZ — PRODUCT RENDERING
   Builds every product card on the site from data/products.js + the offer
   engine in js/offers.js. Nothing here needs editing to add a product —
   edit the data files instead.
   ========================================================================= */

const CATEGORY_META = {
  perfumes: { icon: "✦", label: "Perfumes", desc: "Alcohol-based fragrances, long-lasting projection." },
  attars: { icon: "◈", label: "Attars", desc: "Traditional oil-based attars, alcohol-free." },
  combo: { icon: "❖", label: "Combo Offers", desc: "Gift-boxed duos at special bundle prices." },
  men: { icon: "♂", label: "Men's", desc: "Bold, woody and spiced signatures." },
  women: { icon: "♀", label: "Women's", desc: "Floral, soft and long-wearing scents." },
  unisex: { icon: "◎", label: "Unisex", desc: "Versatile scents made to be shared." }
};

/** Builds the inner HTML for one product card, including any live offer. */
function renderProductCard(product) {
  const match = OfferEngine.getOfferForProduct(product.id);
  const isActive = match && match.status === "active";
  const isUpcoming = match && match.status === "upcoming";

  const stockClass = product.stock === 0 ? "out" : product.stock <= 5 ? "low" : "";
  const stockText = product.stock === 0 ? "Out of stock" : product.stock <= 5 ? `Only ${product.stock} left` : "In stock";

  let priceBlock = `<div class="price-row"><span class="price-now">${formatPrice(product.price)}</span></div>`;
  let badgeHtml = "";
  let countdownHtml = "";

  if (isActive) {
    const offer = match.offer;
    priceBlock = `
      <div class="price-row">
        <span class="price-now">${formatPrice(offer.offerPrice)}</span>
        <span class="price-was">${formatPrice(offer.originalPrice)}</span>
      </div>
      <div class="price-off">${OfferEngine.discountPercent(offer)} · ends ${OfferEngine.formatDate(offer.endDate)}</div>`;
    badgeHtml = `<div class="offer-badge"><span class="fire">🔥</span><span class="pct">${OfferEngine.discountPercent(offer)}</span></div>`;
    countdownHtml = `<div class="countdown" data-countdown="${offer.id}" data-end="${offer.endDate}"></div>`;
  } else if (isUpcoming) {
    badgeHtml = `<div class="offer-soon-badge">Offer starts soon</div>`;
  }

  const waMessage = `Hello ${SITE_CONFIG.businessName}, I want to order ${product.name}, ${product.size}, ${formatPrice(
    isActive ? match.offer.offerPrice : product.price
  )}.`;

  return `
    <article class="product-card${isActive ? " is-offer-active" : ""}" data-id="${product.id}">
      <a href="product.html?id=${product.id}" class="product-media" aria-label="View ${product.name}">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name} bottle" loading="lazy" onerror="this.src='images/products/placeholder.svg'">
        <span class="stock-flag ${stockClass}">${stockText}</span>
      </a>
      <div class="product-body">
        <span class="product-cat">${(product.categories || []).map((c) => CATEGORY_META[c]?.label || c).join(" · ")}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <span class="product-size">${product.size}</span>
        ${priceBlock}
        ${countdownHtml}
        <div class="product-actions">
          <a class="btn btn-outline btn-sm" href="product.html?id=${product.id}">View</a>
          <a class="btn btn-whatsapp btn-sm" href="${buildWhatsAppLink(waMessage)}" target="_blank" rel="noopener">Order on WhatsApp</a>
        </div>
      </div>
    </article>`;
}

function renderProductGrid(container, list) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state">No products match your search. Try a different keyword or filter.</div>`;
    return;
  }
  container.innerHTML = list.map(renderProductCard).join("");
  startCountdownTimers(container);
}

/** Ticks every live countdown inside a container once a second and removes
    a product's offer decoration automatically the moment it expires. */
function startCountdownTimers(scope = document) {
  function tick() {
    scope.querySelectorAll("[data-countdown]").forEach((el) => {
      const offerId = el.getAttribute("data-countdown");
      const offer = OFFERS.find((o) => o.id === offerId);
      if (!offer) return;

      if (OfferEngine.getStatus(offer) !== "active") {
        // Offer just expired — re-render this single card back to normal.
        const card = el.closest(".product-card");
        const productId = Number(card?.dataset.id);
        const product = PRODUCTS.find((p) => p.id === productId);
        if (card && product) card.outerHTML = renderProductCard(product);
        return;
      }
      const { days, hours, minutes, seconds } = OfferEngine.formatCountdown(offer);
      el.innerHTML = `
        <div class="cd-unit"><span class="cd-num">${days}</span><span class="cd-label">Days</span></div>
        <div class="cd-unit"><span class="cd-num">${hours}</span><span class="cd-label">Hrs</span></div>
        <div class="cd-unit"><span class="cd-num">${minutes}</span><span class="cd-label">Min</span></div>
        <div class="cd-unit"><span class="cd-num">${seconds}</span><span class="cd-label">Sec</span></div>`;
    });
  }
  tick();
  if (!window.__abyazCountdownInterval) {
    window.__abyazCountdownInterval = setInterval(tick, 1000);
  }
}

/* ---------------------------------------------------------------------- */
/* Homepage sections                                                      */
/* ---------------------------------------------------------------------- */
function initHomeSections() {
  const bestSellers = document.getElementById("best-sellers-grid");
  if (bestSellers) {
    const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
    renderProductGrid(bestSellers, featured.length ? featured : PRODUCTS.slice(0, 8));
  }

  const categoryGrid = document.getElementById("home-category-grid");
  if (categoryGrid) {
    categoryGrid.innerHTML = CATEGORIES.filter((c) => c.key !== "all")
      .map((c) => {
        const meta = CATEGORY_META[c.key];
        return `
        <a class="category-card" href="products.html?category=${c.key}">
          <div class="category-icon">${meta.icon}</div>
          <h3>${meta.label}</h3>
          <p>${meta.desc}</p>
        </a>`;
      })
      .join("");
  }

  const offerStrip = document.getElementById("offer-strip");
  if (offerStrip) {
    const activeOfferProducts = PRODUCTS.filter((p) => {
      const m = OfferEngine.getOfferForProduct(p.id);
      return m && m.status === "active";
    }).slice(0, 3);

    if (!activeOfferProducts.length) {
      offerStrip.innerHTML = `<div class="empty-state">No live offers right now — check back soon, or explore the full collection.</div>`;
    } else {
      offerStrip.innerHTML = activeOfferProducts.map(renderProductCard).join("");
      startCountdownTimers(offerStrip);
    }
  }
}

/* ---------------------------------------------------------------------- */
/* Products page: search + category filter + pagination                   */
/* ---------------------------------------------------------------------- */
const PRODUCTS_PER_PAGE = 8;   // <-- change to 10, 12, etc. whenever you like

function initProductsPage() {
  const grid = document.getElementById("products-grid");
  const chipRow = document.getElementById("category-chips");
  const searchInput = document.getElementById("product-search");
  const pager = document.getElementById("pagination");
  if (!grid || !chipRow) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";
  let query = "";
  let currentPage = 1;

  chipRow.innerHTML = CATEGORIES.map(
    (c) => `<button class="chip${c.key === activeCategory ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");

  function getFiltered() {
    let list = PRODUCTS.slice();
    if (activeCategory !== "all") {
      list = list.filter((p) => p.categories.includes(activeCategory));
    }
    if (query.trim()) {
      const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
      list = list.filter((p) => {
        const haystack = [
          p.name,
          p.description,
          p.notes || "",
          (p.categories || []).map((c) => CATEGORY_META[c]?.label || c).join(" ")
        ]
          .join(" ")
          .toLowerCase();
        return words.every((w) => haystack.includes(w));
      });
    }
    return list;
  }

  function renderPager(totalPages) {
    if (!pager) return;
    if (totalPages <= 1) {
      pager.innerHTML = "";
      return;
    }
    let html = `<button class="page-btn page-nav" data-page="${currentPage - 1}" ${
      currentPage === 1 ? "disabled" : ""
    }>‹ Prev</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn${i === currentPage ? " active" : ""}" data-page="${i}">${i}</button>`;
    }
    html += `<button class="page-btn page-nav" data-page="${currentPage + 1}" ${
      currentPage === totalPages ? "disabled" : ""
    }>Next ›</button>`;
    pager.innerHTML = html;

    pager.querySelectorAll(".page-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = Number(btn.dataset.page);
        if (p >= 1 && p <= totalPages && p !== currentPage) {
          currentPage = p;
          apply(false);
          grid.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function apply(resetPage = true) {
    if (resetPage) currentPage = 1;
    const list = getFiltered();
    const totalPages = Math.ceil(list.length / PRODUCTS_PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const pageItems = list.slice(start, start + PRODUCTS_PER_PAGE);

    renderProductGrid(grid, pageItems);
    renderPager(totalPages);
  }

  chipRow.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      apply();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      apply();
    });
  }

  apply();
}

document.addEventListener("DOMContentLoaded", () => {
  initHomeSections();
  initProductsPage();
});