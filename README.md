# DigiSpherEMR landing page

The English page is `index.html` and the French page is `fr.html`. Both load `assets/css/style.min.css` and `assets/js/main.min.js`. Edit the readable sources `style.css` and `main.js`, then regenerate the minified files. The landing theme is the light clinical monograph on `body.home-praxis`. Dark mode uses the same navy family. The blog index (`blogs/blogs-list.html`) loads `assets/css/theme-sphere.min.css`. Articles load `blogs/blog-post-themes.min.css`. The toolkit page loads `blogs/lead-magnet.min.css`.

Open `index.html` in a browser. Minify with esbuild, for example `npx esbuild assets/css/style.css --minify --outfile=assets/css/style.min.css`.

## Edit the demo path

Every “Get a Demo” button goes to `#requestDemo`. The form name is `demo-request` (Netlify). Fields are name, work email, optional phone, practice size, specialty, current records, and a privacy consent checkbox. Do not add patient-information fields.

## Theme

The footer switch stores `light`, `dark`, or `auto` in `localStorage` under `ds-theme`. Auto follows the system setting. The choice is applied in the page head before paint. Adding `?theme=dark` (or `light` or `auto`) previews that mode without saving it.

## Proof

Do not add testimonials, awards, certifications, or hours-saved numbers unless they are real and written into `CLAIMS.md` with a source. Empty slots on the page are marked with square brackets.

Prices are $239 (one PC) and $359 (two PC). Inventory stays on the two PC license only.

## What this folder does not include

Specialty pages, a video story, mega-menus, and a split CSS/JS template set are not part of this landing page. The physician video was removed on purpose. The demo section replaces it.
