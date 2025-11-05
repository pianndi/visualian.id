# 🎯 Quick Start Guide - Visualian Website

Get your Visualian website up and running in minutes!

## 📦 Installation (5 minutes)

### Step 1: Setup Project

```bash
# Navigate to the project directory
cd D:/VISUALIAN/WEBSITE

# Install dependencies
npm install
```

### Step 2: Build Assets

```bash
# Build TailwindCSS and optimize files
npm run build
```

### Step 3: Start Development Server

```bash
# Start live server with hot reload
npm run dev
```

Your website is now running at: **http://localhost:5500** 🎉

## ✏️ Quick Customization

### Update Company Information

Edit `index.html` and search for:

1. **Company Name & Logo**

   - Line ~41: Update logo src
   - Line ~42: Update company name

2. **Contact Information**

   - Search for `hello@visualian.id` - replace with your email
   - Search for `6281234567890` - replace with your WhatsApp number

3. **Social Media Links**
   - Section: Footer social media icons
   - Update href attributes with your profile URLs

### Change Colors & Branding

Edit `css/tailwind.src.css`:

```css
/* Change gradient colors */
.bg-gradient-primary {
  background-image: linear-gradient(
    to right,
    rgb(YOUR, COLORS, HERE),
    rgb(YOUR, COLORS, HERE)
  );
}
```

Or directly in `index.html`:

```html
<!-- Search and replace -->
from-blue-600 to-purple-600
<!-- with your colors -->
from-[YOUR-COLOR] to-[YOUR-COLOR]
```

### Add Your Content

1. **Hero Section**

   - Main heading (line ~88)
   - Subheading (line ~94)

2. **Services Section**
   - Service titles and descriptions (lines ~165-218)
3. **Portfolio Section**

   - Project details (lines ~242-275)

4. **Contact Section**
   - Contact information (lines ~318-380)

## 🖼️ Adding Images

### Required Images

Place your images in `assets/images/`:

```
assets/images/
├── visualian-logo.png          # Main logo (colored)
├── visualian-logo-white.png    # White logo for dark backgrounds
└── hero-illustration.svg       # Hero section illustration
```

### Recommended Sizes

- **Logo**: 200x60px (PNG with transparency)
- **Hero Illustration**: 800x600px (SVG preferred)
- **Portfolio Images**: 1200x800px (JPG/PNG, optimized)

## 🚀 Deploy to GitHub Pages (10 minutes)

### Step 1: Build for Production

```bash
npm run build:prod
```

### Step 2: Update Links to Minified Files

In `index.html`, change:

```html
<!-- From -->
<link rel="stylesheet" href="/css/tailwind.css" />
<link rel="stylesheet" href="/css/app.css" />
<script src="/js/script.js"></script>

<!-- To -->
<link rel="stylesheet" href="/css/tailwind.min.css" />
<link rel="stylesheet" href="/css/app.min.css" />
<script src="/js/script.min.js"></script>
```

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Production build"
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to: `https://github.com/YOUR-USERNAME/YOUR-REPO/settings/pages`
2. Under **Source**, select `main` branch and `/ (root)` folder
3. Click **Save**
4. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 🔧 Common Tasks

### Update Content

```bash
# Edit index.html
# Save changes
# If CSS/JS changed, rebuild:
npm run build
```

### Test Responsiveness

Open DevTools (F12) and test these breakpoints:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1920px

### Check Performance

```bash
npm run lighthouse
```

Open `lighthouse-report.html` to see results.

### Validate HTML

```bash
npm run validate
```

## 📝 Configuration Files

### `package.json`

- Project metadata and npm scripts
- Don't edit unless adding new dependencies

### `tailwind.config.js`

- TailwindCSS configuration
- Add custom colors, fonts, spacing here

### `postcss.config.js`

- PostCSS plugins configuration
- Handles TailwindCSS processing

### `visualian.yaml`

- Content structure reference
- Not used by build, just for documentation

## 🐛 Troubleshooting

### CSS not applying?

```bash
# Rebuild TailwindCSS
npm run build
# Hard refresh browser: Ctrl+Shift+R
```

### Animations not working?

Check that GSAP and AOS scripts are loaded:

```html
<!-- Before closing </body> tag -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### Images not showing?

1. Check file paths are correct (use absolute paths: `/assets/images/...`)
2. Verify images exist in the correct folder
3. Check file names match exactly (case-sensitive)

### Mobile menu not working?

Check browser console (F12) for JavaScript errors.
Ensure `script.js` is loaded correctly.

## 📞 Need Help?

- **Documentation**: Read the full [README.md](README.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contact**: hello@visualian.id

## ✅ Checklist Before Going Live

- [ ] All placeholder content replaced
- [ ] Images optimized and added
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Tested on mobile, tablet, desktop
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Forms working correctly
- [ ] All links tested
- [ ] Performance score > 90 (Lighthouse)
- [ ] SEO meta tags configured
- [ ] Favicon added
- [ ] Analytics tracking added (optional)
- [ ] SSL certificate active
- [ ] Domain configured (if using custom domain)

---

**That's it! You're ready to launch your Visualian website! 🎉**

Need more detailed information? Check out the [full README](README.md).
