# BookNest

BookNest is a small responsive book discovery website built with HTML, CSS and vanilla JavaScript.

## Features
- Search by book title or author
- Filter books by genre
- Save and remove favourites using `localStorage`
- Responsive navigation for mobile screens
- Contact form validation (demo only)

## Open the project correctly
1. Download the ZIP file.
2. In Windows, right-click it and choose **Extract All...**.
3. Open the extracted `BookNest` folder in VS Code.
4. Make sure `index.html`, `styles.css` and `app.js` are together in the same folder.
5. Open `index.html` in a browser, or use the VS Code Live Server extension.

**Important:** Do not open `index.html` from inside the ZIP preview. The browser may not load the linked CSS and JavaScript correctly from that temporary path.

## Publish with GitHub Pages
1. Open the repository's **Settings → Pages**.
2. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. Since BookNest is in a subfolder, GitHub Pages does not publish that folder directly as the site root. To publish it, configure a workflow or copy the project files to the repository root only if that is safe for the other project.
4. Test the published URL before sharing it.

Published website: _Not published yet._

## Testing checklist
- [ ] Search and genre filters
- [ ] Add/remove favourites and reload the page
- [ ] Invalid and valid form submissions
- [ ] Mobile, tablet and desktop layouts
- [ ] Current Chrome and Firefox
- [ ] Lighthouse results recorded after running the audit

## Limitations
The catalogue contains four sample books. The contact form validates entries in the browser but does not send messages to a server. Browser testing and Lighthouse measurements must be completed and recorded before final submission.
