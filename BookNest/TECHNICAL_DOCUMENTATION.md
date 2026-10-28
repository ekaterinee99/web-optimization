# Technical Documentation — BookNest

## Overview
BookNest is a single-page book discovery website using semantic HTML, CSS and vanilla JavaScript. It does not use a framework or backend.

## File structure
- `index.html`: navigation, catalogue controls, book grid, about section, contact form and footer.
- `styles.css`: colours, spacing, layout, book cards and responsive breakpoints.
- `app.js`: sample book data, filtering, favourites and form validation.

## Functionality
The book catalogue is stored in a JavaScript array. Search matches book titles and author names. Genre selection works through a dropdown and quick-filter buttons. Favourites are stored in `localStorage`, so they can persist after a page reload in the same browser. The contact form checks the name, email and message locally; it does not submit data to a server.

## Responsive design
CSS Grid lays out the book cards. Flexbox is used for navigation and form controls. Media queries adapt the layout for smaller screens. Test at approximately 360px, 768px and 1280px.

## Optimization and accessibility
The script uses `defer`, no JavaScript framework is loaded, and the book covers are made with CSS rather than external image files. The page includes semantic landmarks, form labels, a live status message, accessible names for favourite buttons, and reduced-motion support.

## Testing
Test in current Chrome and Firefox. Check search, filters, favourites persistence, mobile menu, and invalid/valid form submissions. Run Lighthouse in Chrome DevTools and enter the real scores here. These checks are recommended and are not claimed as completed.

## Running locally
Extract the ZIP before opening the site. Keep `index.html`, `styles.css` and `app.js` in the same directory. Opening the HTML file directly from a ZIP preview can prevent relative CSS and JavaScript files from loading.

## Deployment status
The project has been added to the `BookNest/` subfolder of the `web-optimization` repository. It has not been published with GitHub Pages yet.
