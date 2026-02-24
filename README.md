# Mehul Saxena — Developer Portfolio ⚡️

[![GitHub license](https://img.shields.io/github/license/mehulsaxena/mehul-saxena.github.io?color=blue)](https://github.com/mehulsaxena/mehul-saxena.github.io/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/mehulsaxena/mehul-saxena.github.io)](https://github.com/mehulsaxena/mehul-saxena.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mehulsaxena/mehul-saxena.github.io)](https://github.com/mehulsaxena/mehul-saxena.github.io/network/members)

> A clean, responsive, and fully customizable developer portfolio built with React — showcasing cloud infrastructure, DevOps automation, Gen-AI platform engineering, and enterprise-scale projects.

**Live:** [mehul-saxena.github.io](https://mehulsaxena.github.io)

---

## What's Inside

| Section | Description |
|---|---|
| Hero / Greeting | Name, title, and one-liner positioning |
| Skills | Tech icons grouped by domain + proficiency bars |
| Work Experience | Role-by-role cards with achievement-oriented bullets |
| Key Projects | Project cards with problem → solution → outcome format |
| Certifications | AWS, RHCSA, Scrum — with badge images |
| Contact | Email, phone, and social links |

---

## Fork & Customize It for Yourself

### 1. Fork this repository

Click **Fork** on the top right of this page, or use the GitHub CLI:

```bash
gh repo fork mehulsaxena/mehul-saxena.github.io --clone
```

### 2. Rename it to your GitHub Pages URL (optional)

```bash
gh repo rename <your-username>.github.io --repo <your-username>/mehul-saxena.github.io
```

### 3. Clone and install

```bash
git clone git@github.com:<your-username>/<your-username>.github.io.git
cd <your-username>.github.io
npm install
```

### 4. Start the local dev server

```bash
npm start
# Opens at http://localhost:3000
```

---

## Personalize the Content

**All portfolio content lives in a single file:**

```
src/portfolio.js
```

Edit these sections:

```js
// 1. Your name and headline
const greeting = { ... }

// 2. GitHub + LinkedIn + email
const socialMediaLinks = { ... }

// 3. Skills bullets and tech icons
const skillsSection = { ... }

// 4. Proficiency bars
const techStack = { ... }

// 5. Work experience
const workExperiences = { ... }

// 6. Projects
const bigProjects = { ... }

// 7. Certifications
const achievementSection = { ... }

// 8. Contact info
const contactInfo = { ... }
```

To show or hide any section, set `display: true` or `display: false` on it.

---

## Add Your Own Images

Place images in the following directories:

```
src/assets/images/
├── companies/          # Company logos for experience cards
│   └── <company>.png   # Square PNG, min 200×200px, transparent bg preferred
│
├── certifications/     # Certification badge images
│   └── <cert>.png      # PNG or WebP
│
└── projects/           # Project thumbnails
    └── <project>.png   # PNG or WebP, ~250×250px
```

Then reference them in `portfolio.js`:

```js
companylogo: require("./assets/images/companies/your-company.png")
image: require("./assets/images/projects/your-project.png")
```

---

## Customize the Theme

Global colors are controlled in one file:

```
src/_globalColor.scss
```

Change the primary color, background, card colors, and more — it updates everywhere automatically.

---

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)

Push to `master` and GitHub Actions will build and deploy automatically.

Make sure GitHub Pages is enabled in your repo settings:
**Settings → Pages → Source → GitHub Actions**

### Option B — Manual deploy

```bash
# Install the deploy tool
npm install -g gh-pages

# Add to package.json
"homepage": "https://<your-username>.github.io"

# Deploy
npm run build
npx gh-pages -d build
```

---

## Tech Stack

- [React](https://reactjs.org/) — UI framework
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji) — cross-platform emoji
- [react-headroom](https://github.com/KyleAMathews/react-headroom) — sticky header
- [color-thief](https://github.com/lokesh/color-thief) — auto-generates card banner colors from logos
- [Font Awesome](https://fontawesome.com/) — skill icons

---

## Requirements

```
Node.js  v10.16.0 or higher
npm      v6.9.0 or higher
Git      v2.17.1 or higher
```

---

## Credits

Built on top of [developerFolio](https://github.com/saadpasta/developerFolio) by [@saadpasta](https://github.com/saadpasta).
Personalized and extended by [Mehul Saxena](https://www.linkedin.com/in/mehul-saxena-cloud-engineer/).

---

## License

Open source under the [MIT License](LICENSE). Free to fork, customize, and deploy.
If you use this as a base for your own portfolio, a star would be appreciated!
