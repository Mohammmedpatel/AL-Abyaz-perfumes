/* =========================================================================
   AL-ABYAZ — SPECIAL OFFER SYSTEM
   =========================================================================
   This is the ONLY file you need to touch to create or change an offer.
   Offers turn themselves on and off automatically based on today's date —
   you never need to manually enable or disable anything.

   HOW TO ADD AN OFFER
   ---------------------
   1. Copy an object below.
   2. Set "productId" to the id of the product (from data/products.js).
   3. Set "startDate" and "endDate" — format is "YYYY-MM-DDTHH:mm:ss".
      The countdown and "Offer starts soon" state are calculated from these.
   4. Set "originalPrice" and "offerPrice". The discount % is calculated
      automatically — you don't need to type it in, but you can override
      it with a "discountLabel" if you want custom text (e.g. "Festive Sale").
   5. Save. The product card and product page pick it up automatically:
        - Before startDate  -> "Offer starts soon"
        - Between the dates -> live countdown, badge, glow, discounted price
        - After endDate     -> everything reverts to normal, automatically

   You can run as many offers at once as you like — each one only affects
   its own product, and expired ones disappear on their own.
   ========================================================================= */

const OFFERS = [
  {
    id: "offer-signature-oud",
    productId: 1,
    title: "Founders' Week Special",
    startDate: "2026-08-24T00:00:00",
    endDate: "2026-08-26T23:59:59",
    originalPrice: 1499,
    offerPrice: 1099
  },
  // {
  //   id: "offer-white-musk",
  //   productId: 2,
  //   title: "Attar Fest Offer",
  //   startDate: "2026-08-20T00:00:00",
  //   endDate: "2026-08-25T23:59:59",
  //   originalPrice: 399,
  //   offerPrice: 299
  // },
  // {
  //   id: "offer-zafar-combo",
  //   productId: 11,
  //   title: "Combo Carnival",
  //   startDate: "2026-09-01T00:00:00",
  //   endDate: "2026-09-10T23:59:59",
  //   originalPrice: 1799,
  //   offerPrice: 1399
  // },
  // {
  //   id: "offer-oud-extrait",
  //   productId: 14,
  //   title: "Launch Week Offer",
  //   startDate: "2026-07-01T00:00:00",
  //   endDate: "2026-07-15T23:59:59",
  //   originalPrice: 2299,
  //   offerPrice: 1799
  // }
];

const OfferEngine = (() => {
  /** Returns "upcoming" | "active" | "expired" for a given offer, as of now. */
  function getStatus(offer, now = new Date()) {
    const start = new Date(offer.startDate);
    const end = new Date(offer.endDate);
    if (now < start) return "upcoming";
    if (now > end) return "expired";
    return "active";
  }

  /** Returns the single most relevant offer for a product (upcoming or active), or null. */
  function getOfferForProduct(productId, now = new Date()) {
    const candidates = OFFERS.filter((o) => o.productId === productId).map((o) => ({
      offer: o,
      status: getStatus(o, now)
    }));
    const active = candidates.find((c) => c.status === "active");
    if (active) return active;
    const upcoming = candidates.find((c) => c.status === "upcoming");
    if (upcoming) return upcoming;
    return null;
  }

  function discountPercent(offer) {
    if (offer.discountLabel) return offer.discountLabel;
    const pct = Math.round(
      ((offer.originalPrice - offer.offerPrice) / offer.originalPrice) * 100
    );
    return `${pct}% OFF`;
  }

  function formatCountdown(offer, now = new Date()) {
    const end = new Date(offer.endDate);
    let diff = Math.max(0, end.getTime() - now.getTime());

    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const days = Math.floor(diff / day);
    diff -= days * day;
    const hours = Math.floor(diff / hour);
    diff -= hours * hour;
    const minutes = Math.floor(diff / minute);
    diff -= minutes * minute;
    const seconds = Math.floor(diff / 1000);

    return { days, hours, minutes, seconds };
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  return { getStatus, getOfferForProduct, discountPercent, formatCountdown, formatDate };
})();
