# JV Boekhouding — standalone static site

Upload `index.html`, `style.css`, and both SVG files together to your website's document root (for example, `httpdocs/`). No Next.js, Prismic, npm, build step, database, or JavaScript is required. Opening `index.html` locally also works.

Edit the text, email links, and service list directly in `index.html`. The colors and layout live in `style.css`. The footer year is literal HTML (`2026`), so update it in a later year if desired. The Adobe Typekit stylesheet is the only external styling dependency; the page falls back to Arial if it cannot load.

If your hosting still serves an old Next.js app, point the domain's document root at this folder or replace the old deployment with these files. Back up existing server files before removing them.
