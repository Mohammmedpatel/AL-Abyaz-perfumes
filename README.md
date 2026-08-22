# Al-Abyaz Perfumes & Attars — Website

A complete, static, premium e-commerce website for Al-Abyaz Perfumes & Attars
(Jogeshwari, Mumbai). Pure HTML5, CSS3 and vanilla JavaScript — no backend,
no database, no build step. Deploys straight to Netlify for free.

Everything is driven by two plain-JavaScript data files, so you can add
products and offers without ever touching HTML.

---

## 1. Project structure

```
al-abyaz/
├── index.html            Homepage
├── products.html         Full catalogue with search + category filters
├── product.html          Product detail page (reads ?id=)
├── about.html
├── contact.html
├── css/
│   ├── style.css         Design tokens, layout, components
│   └── responsive.css    Breakpoints (tablet / mobile)
├── js/
│   ├── main.js           SITE CONFIG (WhatsApp, UPI, address...) + navbar
│   ├── offers.js         OFFER CONFIG + the date-based offer engine
│   ├── products.js       Renders product cards on the home & products pages
│   └── product-details.js Renders the single product page
├── data/
│   └── products.js       PRODUCT CATALOGUE — add/edit products here
├── images/
│   ├── logo/              favicon
│   ├── hero/               hero bottle graphic
│   └── products/           one placeholder bottle graphic per product
├── netlify.toml
└── README.md
```

## 2. Where to add products

Open **`data/products.js`**. Copy any existing product object, give it a new
unique `id`, and fill in the fields (name, categories, description, image,
price, size, stock, featured). Save the file — the card appears automatically
on the homepage (if `featured: true`) and on the Products page. No HTML
editing needed.

`categories` controls which filter chips a product shows up under. Use any
combination of: `perfumes`, `attars`, `combo`, `men`, `women`, `unisex`.

## 3. Where to change prices

Still in `data/products.js` — just edit the `price` number on the product.
If a product is currently part of a special offer, its **offer price** is
set separately in `js/offers.js` (see next section) and will override the
normal price while the offer is live.

## 4. Where to create offers

Open **`js/offers.js`** and look at the `OFFERS` array at the top. Copy an
existing offer object and fill in:

- `productId` — must match an `id` from `data/products.js`
- `startDate` / `endDate` — format `"YYYY-MM-DDTHH:mm:ss"`
- `originalPrice` / `offerPrice`
- `title` — shown above the countdown

Save the file. That's it — no toggling anything on or off manually.

## 5. How offer dates work

Every offer is checked against **today's date** every time a page loads:

- **Before `startDate`** → the product shows a small "Offer starts soon" tag.
- **Between `startDate` and `endDate`** → the product shows the 🔥 offer
  badge, the crossed-out original price, the discounted price, the discount
  percentage, and a live countdown.
- **After `endDate`** → everything reverts automatically: no badge, no
  countdown, no discounted price, normal price restored. You never need to
  remember to turn an offer off.

You can run several offers on different products at the same time — each one
only affects its own product.

## 6. How the countdown works

`js/products.js` starts a single `setInterval` (once per second) that
re-calculates the days/hours/minutes/seconds remaining for every visible
offer and updates the numbers in place. The moment an offer's end time
passes, that one product card is silently re-rendered back to its normal
(non-offer) state — the rest of the page is untouched.

## 7. How the pulsing/glow animation works

Only the specific `.product-card` that has a **currently active** offer gets
the `is-offer-active` class, which applies a soft pulsing border/glow and a
gentle badge scale animation (see `.card-pulse` / `.badge-pop` keyframes in
`css/style.css`). No other card, and no other part of the site, is affected
— nothing "blinks" globally. The animation is automatically removed the
moment the offer expires, because the card re-renders without the class.

Reduced-motion users (`prefers-reduced-motion: reduce`) get all animation
durations collapsed to near-zero automatically.

## 8. How to change the WhatsApp number

Open **`js/main.js`** and edit `SITE_CONFIG.whatsappNumber`. Use the full
international format with no `+`, spaces or dashes, e.g. `919876543210` for
an Indian number. This single value powers every "Order on WhatsApp" button,
the floating WhatsApp bubble, and the Contact page — on every page of the
site.

> **Note:** this project ships with a **placeholder** WhatsApp number
> (`919876543210`) and a placeholder UPI ID (`alabyazperfumes@upi`) because
> the original reference site could not be reached while this project was
> built. Replace both with your real details in `js/main.js` before you go
> live — search for `TODO` in that file to find them quickly.

## 9. How to replace images

Every product currently uses a generated placeholder "bottle" graphic
(`images/products/*.svg`) so the site works out of the box. To use real
product photography:

1. Export your photos as optimized `.jpg` or `.webp` files (roughly
   800×1000px is plenty for product cards).
2. Drop them into `images/products/`.
3. In `data/products.js`, update the `image` path on each product to point
   at your new file, e.g. `"image": "images/products/signature-oud.jpg"`.

The hero graphic (`images/hero/hero-bottle.svg`) and favicon
(`images/logo/favicon.svg`) can be swapped the same way — just keep the
filenames the same, or update the `<img>`/`<link>` tags in the HTML files
that reference them.

## 10. How to upload to GitHub

```bash
cd al-abyaz
git init
git add .
git commit -m "Al-Abyaz Perfumes & Attars website"
git branch -M main
git remote add origin https://github.com/<your-username>/al-abyaz.git
git push -u origin main
```

(Create the empty repository on GitHub first, then run the commands above
from inside the `al-abyaz` folder.)

## 11. How to deploy to Netlify

**Option A — drag and drop (fastest):**
1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Go to **Sites** → drag the whole `al-abyaz` folder onto the page.
3. Netlify publishes it instantly at a `*.netlify.app` URL.

**Option B — connect to GitHub (recommended for future updates):**
1. Push the project to GitHub (see step 10).
2. In Netlify, click **Add new site → Import an existing project**.
3. Choose your GitHub repo.
4. Build command: leave blank. Publish directory: `.` (already set in
   `netlify.toml`).
5. Click **Deploy site**. Every future `git push` redeploys automatically.

You can later add a custom domain from **Site settings → Domain management**.

---

Built with HTML5, CSS3 and vanilla JavaScript only — no frameworks, no
backend, no database, fully static and Netlify-ready.
