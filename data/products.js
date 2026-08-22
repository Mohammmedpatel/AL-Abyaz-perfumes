/* =========================================================================
   AL-ABYAZ PERFUMES & ATTARS — PRODUCT DATA
   =========================================================================
   This is the ONLY file you need to touch to add, remove or edit products.
   No HTML editing required — the site builds every product card from here.

   HOW TO ADD A PRODUCT
   ---------------------
   1. Copy any object below (from the opening { to the closing },).
   2. Give it a unique "id" (just increase the number by 1).
   3. Fill in the fields. "categories" controls which filter chips the
      product shows up under on the Products page — pick any combination
      of: "perfumes", "attars", "combo", "men", "women", "unisex".
   4. Put the product photo inside /images/products/ and point "image" at it.
   5. Save the file. That's it — the card appears automatically.

   HOW TO CHANGE A PRICE
   ----------------------
   Just edit the "price" number on the product you want to change.
   (If the product is part of an active offer, the offer price is managed
   separately in data/offers.js — see that file for discounts.)
   ========================================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Al-Abyaz Signature Oud",
    categories: ["perfumes", "unisex"],
    description:
      "Our house-signature blend — deep Cambodian oud wrapped in smoky amber and a whisper of rose. Rich, smooth and unmistakably Al-Abyaz.",
    notes: "Oud · Amber · Rose · Musk",
    image: "images/products/signature-oud.svg",
    price: 1499,
    size: "50ml",
    stock: 18,
    featured: true
  },
  {
    id: 2,
    name: "White Musk Attar",
    categories: ["attars", "unisex"],
    description:
      "A clean, powdery white musk attar rooted in classic Arabian tradition. Alcohol-free and long-lasting on skin.",
    notes: "White Musk · Sandalwood · Vanilla",
    image: "images/products/white-musk-attar.svg",
    price: 399,
    size: "12ml",
    stock: 42,
    featured: true
  },
  {
    id: 3,
    name: "Mukhallat Malaki",
    categories: ["attars", "men"],
    description:
      "A regal mukhallat built for evenings — saffron and oud at the core, held together by warm spice and leather.",
    notes: "Saffron · Oud · Leather · Spice",
    image: "images/products/mukhallat-malaki.svg",
    price: 899,
    size: "12ml",
    stock: 25,
    featured: true
  },
  {
    id: 4,
    name: "Rose Damascena Attar",
    categories: ["attars", "women"],
    description:
      "Pure Damask rose attar, steam-distilled to capture the flower at its most fragrant. A timeless attar for everyday wear.",
    notes: "Damask Rose · Green Stem · Honey",
    image: "images/products/rose-damascena.svg",
    price: 549,
    size: "12ml",
    stock: 30,
    featured: false
  },
  {
    id: 5,
    name: "Jasmine Noor",
    categories: ["perfumes", "women"],
    description:
      "Night-blooming jasmine layered over creamy sandalwood — soft, romantic and quietly confident.",
    notes: "Jasmine · Sandalwood · Musk",
    image: "images/products/jasmine-noor.svg",
    price: 1299,
    size: "50ml",
    stock: 20,
    featured: true
  },
  {
    id: 6,
    name: "Sultan's Musk",
    categories: ["perfumes", "men"],
    description:
      "A commanding blend of black musk, cardamom and dry woods. Built for the boardroom and the majlis alike.",
    notes: "Black Musk · Cardamom · Cedarwood",
    image: "images/products/sultans-musk.svg",
    price: 1599,
    size: "50ml",
    stock: 15,
    featured: false
  },
  {
    id: 7,
    name: "Bakhoor Al-Abyaz",
    categories: ["attars", "unisex"],
    description:
      "Our bakhoor-inspired attar — smoky agarwood and frankincense captured in a single roll-on bottle.",
    notes: "Agarwood · Frankincense · Amber",
    image: "images/products/bakhoor-al-abyaz.svg",
    price: 649,
    size: "12ml",
    stock: 28,
    featured: false
  },
  {
    id: 8,
    name: "Kashmiri Kesar Attar",
    categories: ["attars", "unisex"],
    description:
      "Saffron sourced in the spirit of Kashmir, softened with sandalwood oil for a warm, golden trail.",
    notes: "Saffron · Sandalwood · Amber",
    image: "images/products/kashmiri-kesar.svg",
    price: 799,
    size: "12ml",
    stock: 22,
    featured: false
  },
  {
    id: 9,
    name: "Heena Musk Attar",
    categories: ["attars", "unisex"],
    description:
      "An earthy, herbal musk built on a traditional heena base — a favourite for daily prayer wear.",
    notes: "Heena · Musk · Herbal Notes",
    image: "images/products/heena-musk.svg",
    price: 349,
    size: "12ml",
    stock: 50,
    featured: false
  },
  {
    id: 10,
    name: "Non-Alcoholic Oudh Spray",
    categories: ["perfumes", "unisex"],
    description:
      "All the projection of an EDP with none of the alcohol — a travel-friendly oudh spray for daily use.",
    notes: "Oudh · Musk · Light Amber",
    image: "images/products/oudh-spray.svg",
    price: 749,
    size: "30ml",
    stock: 35,
    featured: false
  },
  {
    id: 11,
    name: "Zafar Combo — Oud & Musk Duo",
    categories: ["combo", "men"],
    description:
      "Two of our bestsellers together at a special price — Signature Oud (50ml) and White Musk Attar (12ml), gift-boxed.",
    notes: "Oud · White Musk",
    image: "images/products/zafar-combo.svg",
    price: 1799,
    size: "50ml + 12ml",
    stock: 12,
    featured: true
  },
  {
    id: 12,
    name: "Rose & Jasmine Combo",
    categories: ["combo", "women"],
    description:
      "Rose Damascena Attar paired with Jasmine Noor perfume — a floral duo, beautifully gift-boxed for her.",
    notes: "Rose · Jasmine · Sandalwood",
    image: "images/products/rose-jasmine-combo.svg",
    price: 1599,
    size: "12ml + 50ml",
    stock: 10,
    featured: false
  },
  {
    id: 13,
    name: "Amber Rose Attar",
    categories: ["attars", "women"],
    description:
      "Warm amber grounding a bouquet of rose petals — a cozy, comforting attar for cooler evenings.",
    notes: "Amber · Rose · Vanilla",
    image: "images/products/amber-rose.svg",
    price: 599,
    size: "12ml",
    stock: 24,
    featured: false
  },
  {
    id: 14,
    name: "Oud Al-Abyaz Extrait",
    categories: ["perfumes", "unisex"],
    description:
      "The concentrated extrait version of our signature oud — higher oil content, deeper trail, made for special occasions.",
    notes: "Oud · Amber · Musk · Vetiver",
    image: "images/products/oud-extrait.svg",
    price: 2299,
    size: "50ml",
    stock: 8,
    featured: false
  }
];

/* Category labels shown as filter chips on the Products page.
   The "key" must match a value used inside a product's "categories" array. */
const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "perfumes", label: "Perfumes" },
  { key: "attars", label: "Attars" },
  { key: "combo", label: "Combo Offers" },
  { key: "men", label: "Men's" },
  { key: "women", label: "Women's" },
  { key: "unisex", label: "Unisex" }
];
