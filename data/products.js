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
    name: "Purple Oud",
    categories: ["perfumes", "unisex"],
    description:
      "a simple, vibrant blend of citrus and warm spices layered over deep wood.",
    notes: "Oud · citrus · warm spicy · soft spicy · sweet · matellic · fresh spicy · leather · msky · tobacco",
    image: "images/categories/Unisex/Purple Oud.jpeg",
    price: 350,
    size: "50ml",
    stock: 15,
    featured: true
  },
  {
    id: 2,
    name: "Purple Oud",
    categories: ["attars","men"],
    description:
      "a simple, vibrant blend of citrus and warm spices layered over deep wood.",
    notes: "Oud · citrus · warm spicy · soft spicy · sweet · matellic · fresh spicy · leather · msky · tobacco",
    image: "images/categories/Mens/Purple Attar.png",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 3,
    name: "Bombshell",
    categories: ["perfumes", "unisex"],
    description:
      "Bombshell Eau de Parfum is a floral fruity fragrance built around bright tropical fruits, sweet florals, and an earthy base.",
    notes: "Purple passion fruit · tart pineapple · grapefruit · tangerine · big sweet strawberry.",
    image: "images/categories/Unisex/Bombshell.png",
    price: 350,
    size: "50ml",
    stock: 15,
    featured: true
  },
  {
    id: 4,
    name: "Bombshell",
    categories: ["attars", "men"],
    description:
      "Bombshell Eau de Parfum is a floral fruity fragrance built around bright tropical fruits, sweet florals, and an earthy base.",
    notes: "Purple passion fruit · tart pineapple · grapefruit · tangerine · big sweet strawberry.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 5,
    name: "Blue D Chanel",
    categories: ["attars", "men"],
    description:
      "Bleu de Chanel by Chanel is a woody aromatic fragrance for men presented on the market in 2010.",
    notes: "citrus · woody · fresh spicy · aromatic · amber · smoky · balsamic · warm spicy · green · fresh.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 6,
    name: "L.V Imagination",
    categories: ["attars", "men"],
    description:
      "Bombshell Eau de Parfum is a floral fruity fragrance built around bright tropical fruits, sweet florals, and an earthy base.",
    notes: "Citron · Calabrian bergamot · Sicilian Orange · Tunisian Neroli · Nigerian Ginger · Ceylon Cinnamon · Chinese Black Tea · Ambroxan · Guaiac Wood · Olibanum.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 7,
    name: "Cool Water",
    categories: ["attars", "men"],
    description:
      "The scent unfolds with aromatic notes of mint and lavender, blended with the sensuality of ambergris accord. A unique composition that delivers an immediate freshness.",
    notes: "Coriander · Lavender · green · Calone · Rosemary Mint · Sea Water · Geranium · Neroli · Jasmine · Sandalwood · Amber · Tobacco · Cedar · Oakmoss · Musk.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 8,
    name: "CR7",
    categories: ["attars", "men"],
    description:
      "This travel size perfume combines the masculine allure of wood and spice with the softness of floral notes, creating a unique scent that truly represents the fearless, ambitious man.",
    notes: "Lavender · Cardamom · Artemisia · Bergamot · Tobacco · Cinnamon · Cedar · Vanilla · Musk · Sandalwood · Amber · Iris.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 8,
    name: "Gucci Flora",
    categories: ["attars", "men"],
    description:
      "Flora by Gucci Eau de Parfum is characterized by fresh notes of agrums in the opening, combined with beautiful peony. A heart introduces balanced aromas of rose and osmanthus, while a base is created of patchouli and sandalwood.",
    notes: "Pear blossom · red berries · Italian mandarin · White gardenia · jasmine absolute · frangipani flower · Patchouli · brown sugar .",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 9,
    name: "Musk Rose",
    categories: ["attars", "men","women"],
    description:
      "A musk and rose perfume is a delicate dance between two iconic notes: the deep, sensual warmth of musk and the timeless, romantic whisper of rose. This pairing, a true cornerstone of niche and Middle Eastern perfumery, creates a scent that feels both profoundly personal and eternally sophisticated.",
    notes: "Fresh rose petals · Soft floral · dewy · Warm musk.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 10,
    name: "Lacoste White",
    categories: ["attars", "men"],
    description:
      "This classic floral woody fragrance's white hue stands for elegance, simplicity, and freshness. Its blend of grapefruit, ylang-ylang, and cedar gives you a manly aroma of leadership spirits so that you can influence everyone around you.",
    notes: "Grapefruit · Rosemary · Cardamom · Ylang-Ylang · Tuberose · Virginia Cedar · Suede · Vetiver · Leather.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 11,
    name: "Shanaya",
    categories: ["attars", "men","women"],
    description:
      "Bombshell Eau de Parfum is a floral fruity fragrance built around bright tropical fruits, sweet florals, and an earthy base.",
    notes: "Saffron · Rose · Agarwood (Oud) · Caramel · Floral Notes · Patchouli · Resins · Amber · Incense · Musk · Woody notes.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 12,
    name: "White Oud",
    categories: ["attars", "unisex"],
    description:
      "White oud is a lighter, cleaner, and more delicate commercial interpretation of traditional heavy oud.",
    notes: "airy · creamy · delicately woody · subtle musky · floral undertones.",
    image: "images/products/mukhallat-malaki.svg",
    price: 200,
    size: "12ml",
    stock: 15,
  },
  {
    id: 13,
    name: "Cool Water",
    categories: ["perfumes","Men"],
    description:
      "The scent unfolds with aromatic notes of mint and lavender, blended with the sensuality of ambergris accord. A unique composition that delivers an immediate freshness.",
    notes: "Coriander · Lavender · green · Calone · Rosemary Mint · Sea Water · Geranium · Neroli · Jasmine · Sandalwood · Amber · Tobacco · Cedar · Oakmoss · Musk.",
    image: "images/products/mukhallat-malaki.svg",
    price: 350,
    size: "50ml",
    stock: 15,
  },
  {
    id: 14,
    name: "CR7",
    categories: ["perfumes"],
    description:
      "This travel size perfume combines the masculine allure of wood and spice with the softness of floral notes, creating a unique scent that truly represents the fearless, ambitious man.",
    notes: "Lavender · Cardamom · Artemisia · Bergamot · Tobacco · Cinnamon · Cedar · Vanilla · Musk · Sandalwood · Amber · Iris.",
    image: "images/products/mukhallat-malaki.svg",
    price: 350,
    size: "50ml",
    stock: 15,
  },
  {
    id: 15,
    name: "Gucci Flora",
    categories: ["perfumes","women"],
    description:
      "Flora by Gucci Eau de Parfum is characterized by fresh notes of agrums in the opening, combined with beautiful peony. A heart introduces balanced aromas of rose and osmanthus, while a base is created of patchouli and sandalwood.",
    notes: "Oud · citrus · warm spicy · soft spicy · sweet · matellic · fresh spicy · leather · msky · tobacco",
    image: "images/products/mukhallat-malaki.svg",
    price: 350,
    size: "50ml",
    stock: 15,
  },
  {
    id: 16,
    name: "Lacoste White",
    categories: ["perfumes","Men"],
    description:
      " This classic floral woody fragrance's white hue stands for elegance, simplicity, and freshness. Its blend of grapefruit, ylang-ylang, and cedar gives you a manly aroma of leadership spirits so that you can influence everyone around you.",
    notes: "Grapefruit · Rosemary · Cardamom · Ylang-Ylang · Tuberose · Virginia Cedar · Suede · Vetiver · Leather.",
    image: "images/products/mukhallat-malaki.svg",
    price: 350,
    size: "50ml",
    stock: 15,
  },
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
