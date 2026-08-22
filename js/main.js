/* =========================================================================
   AL-ABYAZ — SITE CONFIG & SHARED BEHAVIOUR
   =========================================================================
   SITE_CONFIG is the ONLY place you need to edit to change the WhatsApp
   number, UPI ID, address, or social links across the ENTIRE site.
   ========================================================================= */

const SITE_CONFIG = {
  businessName: "Al-Abyaz Perfumes & Attars",
  tagline: "Discover the Essence of Luxury",

  /* IMPORTANT: replace this with your real WhatsApp business number,
     in international format WITHOUT + or spaces (e.g. 919876543210). */
  whatsappNumber: "919876543210", // TODO: replace with your real WhatsApp number

  /* Your UPI ID for customers who ask to pay directly (shown on Contact page). */
  upiId: "alabyazperfumes@upi", // TODO: replace with your real UPI ID
  upiPayeeName: "Al-Abyaz Perfumes & Attars",

  address: "Jogeshwari, Mumbai, Maharashtra, India",
  email: "hello@alabyazperfumes.com", // TODO: replace with your real email

  instagram: "https://www.instagram.com/al_abyaz_perfumes/",
  facebook: "#",

  currency: "₹"
};

/** Builds a wa.me link with a pre-filled order message. */
function buildWhatsAppLink(message) {
  const base = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function formatPrice(n) {
  return `${SITE_CONFIG.currency}${Number(n).toLocaleString("en-IN")}`;
}

/* ---------- Navbar: mobile menu + scroll shadow + active link ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  // Mark the current page's nav link as active
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Wire up any generic WhatsApp buttons that use data-wa-message
  document.querySelectorAll("[data-wa-message]").forEach((el) => {
    el.setAttribute("href", buildWhatsAppLink(el.getAttribute("data-wa-message")));
  });

  // Footer year
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Populate any [data-config="field"] placeholders (address, email, etc.)
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (SITE_CONFIG[key] !== undefined) el.textContent = SITE_CONFIG[key];
  });
  document.querySelectorAll("[data-wa-float]").forEach((el) => {
    el.setAttribute(
      "href",
      buildWhatsAppLink(`Hello ${SITE_CONFIG.businessName}, I'd like to know more about your perfumes.`)
    );
  });
});
