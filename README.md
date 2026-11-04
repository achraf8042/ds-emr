# DigiSpherEMR landing page

The English page is `index.html` and the French page is `fr.html`. Both use `assets/css/style.css` and `assets/js/main.js`. The landing theme is the light clinical monograph on `body.home-praxis`. Dark mode uses the same navy family. The blog index (`blogs/blogs-list.html`) stays on the dark sphere theme in `assets/css/theme-sphere.css`. Articles use `blogs/blog-post-themes.css`.

Open `index.html` in a browser. No build step.

## Edit the demo path

Every “Get a Demo” button goes to `#requestDemo`. The form name is `demo-request` (Netlify). Fields are name, work email, optional phone, practice size, specialty, current records, and a privacy consent checkbox. Do not add patient-information fields.

## Theme

The footer switch stores `light`, `dark`, or `auto` in `localStorage` under `ds-theme`. Auto follows the system setting. The choice is applied in the page head before paint. Adding `?theme=dark` (or `light` or `auto`) previews that mode without saving it.

## Proof

Do not add testimonials, awards, certifications, or hours-saved numbers unless they are real and written into `CLAIMS.md` with a source. Empty slots on the page are marked with square brackets.

Prices are $239 (one PC) and $359 (two PC). Inventory stays on the two PC license only.

## What this folder does not include

Specialty pages, a video story, mega-menus, and a split CSS/JS template set are not part of this landing page. The physician video was removed on purpose. The demo section replaces it.
