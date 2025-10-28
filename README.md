# Igor Portfolio

Frontend-only portfolio with dark theme (black/gray) and green accent.

## Structure
- `index.html`: structure and content
- `styles.css`: styles (responsive, dark)
- `script.js`: interactions (mobile nav, smooth scroll)
- `assets/`: favicon and assets

## Run locally
Open `index.html` in your browser.

## Deploy to GitHub Pages
1. Create a repo on GitHub (e.g., `portfolio`).
2. In this folder, run:
```bash
git init
git add .
git commit -m "feat: first portfolio version"
git branch -M main
git remote add origin https://github.com/<your-user>/portfolio.git
git push -u origin main
```
3. On GitHub: Settings -> Pages
   - Source: Deploy from a branch
   - Branch: main, Folder: /(root)
   - Save
4. After a minute, your site is live at: `https://<your-user>.github.io/portfolio/`

## Customize
- Update texts in sections
- Replace demo/code links
- Update social links in footer

## License
MIT
