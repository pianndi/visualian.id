# 📚 Website Structure & Content Guide

Complete documentation of the Visualian website structure, sections, and content.

## 🏗️ Overall Architecture

```
┌─────────────────────────────────────────┐
│         Navigation (Sticky)             │
├─────────────────────────────────────────┤
│         Hero Section (Full Screen)      │
├─────────────────────────────────────────┤
│         Services Section                │
├─────────────────────────────────────────┤
│         Portfolio Section               │
├─────────────────────────────────────────┤
│         Contact Section                 │
├─────────────────────────────────────────┤
│         Footer                          │
└─────────────────────────────────────────┘
```

## 🧭 Navigation Bar

**Location**: Fixed at top, sticky on scroll

### Components:

- **Logo** (Left): Visualian logo with company name
- **Menu Links** (Center): Beranda, Layanan, Portfolio, Kontak
- **CTA Button** (Right): "Mulai Proyek" button
- **Mobile Menu**: Hamburger icon for responsive view

### Features:

- Transparent on hero section
- Becomes solid blue with shadow on scroll
- Smooth scroll to sections on click
- Active link highlighting based on scroll position
- Hide/show on scroll up/down

### Customization:

```html
<!-- Logo -->
<img src="/assets/images/visualian-logo.png" alt="Visualian Logo" />

<!-- Menu Items -->
<a href="#hero">Beranda</a>
<a href="#services">Layanan</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Kontak</a>
```

---

## 🎨 Section 1: Hero

**ID**: `#hero`  
**Purpose**: First impression, main value proposition

### Content Structure:

```
Heading (Main Tagline)
  ├─ "Wujudkan dunia digital secara profesional dan elegan"
  └─ "dengan inovasi tanpa batas"

Subheading
  └─ "Website | Aplikasi | Multimedia"

Call-to-Action Buttons
  ├─ Primary: "Diskusikan Proyekmu" → #contact
  └─ Secondary: "Lihat Portfolio" → #portfolio

Hero Illustration
  └─ SVG illustration representing digital innovation
```

### Design Features:

- **Background**: Animated gradient (blue-600 → purple-600 → blue-800)
- **Animations**:
  - Fade-in heading with delay
  - Slide-up buttons with stagger
  - Parallax effect on background
- **Scroll Indicator**: Animated arrow at bottom

### Content Guidelines:

- **Heading**: Max 20 words, compelling value proposition
- **Subheading**: Services summary, 3-5 words each
- **Tone**: Professional, inspiring, confident

---

## 🛠️ Section 2: Services

**ID**: `#services`  
**Purpose**: Showcase main service offerings

### Content Structure:

```
Section Heading
  └─ "Layanan Kami"

Section Description
  └─ "Solusi digital lengkap untuk mengembangkan bisnis..."

Service Cards (3 items)
  ├─ Card 1: Website & Web App
  │   ├─ Icon: Globe
  │   ├─ Title
  │   └─ Description
  │
  ├─ Card 2: Aplikasi & Sistem Voting
  │   ├─ Icon: Mobile
  │   ├─ Title
  │   └─ Description
  │
  └─ Card 3: Desain & Multimedia
      ├─ Icon: Paint Brush
      ├─ Title
      └─ Description

CTA Button
  └─ "Hubungi Kami" → #contact
```

### Design Features:

- **Layout**: 3-column grid (responsive to 1 column on mobile)
- **Cards**: White background with shadow, hover lift effect
- **Icons**: Gradient background (blue-purple)
- **Animations**:
  - Fade-up on scroll (AOS)
  - Staggered delays (100ms, 200ms, 300ms)
  - Hover scale and shadow increase

### Service Card Structure:

```html
<div class="service-card">
  <div class="icon-container">
    <svg><!-- Icon --></svg>
  </div>
  <h3>Service Title</h3>
  <p>Service Description</p>
</div>
```

### Content Guidelines:

- **Title**: 2-5 words, clear service name
- **Description**: 10-20 words, benefit-focused
- **Icons**: Simple, recognizable, consistent style

---

## 💼 Section 3: Portfolio

**ID**: `#portfolio`  
**Purpose**: Showcase recent projects and build credibility

### Content Structure:

```
Section Heading
  └─ "Proyek Terbaru"

Section Description
  └─ "Karya-karya terbaik kami yang telah dipercaya oleh klien"

Portfolio Items (2+ items)
  ├─ Item 1: Featured Project
  │   ├─ Image/Thumbnail
  │   ├─ Title
  │   ├─ Description
  │   ├─ Tags (Technology/Features)
  │   └─ Hover Overlay: "Lihat Detail"
  │
  └─ Item 2: Coming Soon Placeholder
      ├─ Placeholder Image
      ├─ "Segera Hadir" Title
      └─ Teaser Description
```

### Design Features:

- **Layout**: 2-column grid (responsive to 1 column)
- **Images**: Aspect ratio 16:9, gradient overlay on hover
- **Cards**: White background, rounded corners, shadow
- **Animations**:
  - Zoom-in on scroll (AOS)
  - Hover overlay fade-in
  - Image scale on hover

### Portfolio Item Structure:

```html
<div class="portfolio-item">
  <div class="portfolio-image">
    <img src="..." alt="..." />
    <div class="hover-overlay">
      <span>Lihat Detail</span>
    </div>
  </div>
  <div class="portfolio-content">
    <h3>Project Title</h3>
    <p>Description</p>
    <div class="tags">
      <span>Tag 1</span>
      <span>Tag 2</span>
    </div>
  </div>
</div>
```

### Content Guidelines:

- **Title**: Project name, clear and concise
- **Description**: 10-25 words, key features/results
- **Tags**: 2-4 tags, technology or feature highlights
- **Images**: High quality, 1200x800px minimum

---

## 📞 Section 4: Contact

**ID**: `#contact`  
**Purpose**: Enable visitors to get in touch

### Content Structure:

```
Section Heading
  └─ "Hubungi Kami"

Section Description
  └─ "Kami siap berdiskusi untuk membantu mewujudkan ide digitalmu"

Layout (2 Columns)
  ├─ Left: Contact Information Card
  │   ├─ Welcome Message
  │   ├─ Contact Details
  │   │   ├─ Email: hello@visualian.id
  │   │   ├─ WhatsApp: +62 812-3456-7890
  │   │   └─ Location: Indonesia
  │   └─ Social Media Links
  │       ├─ Facebook
  │       ├─ Instagram
  │       ├─ Twitter
  │       └─ LinkedIn
  │
  └─ Right: Contact Form
      ├─ Name Field
      ├─ Email Field
      ├─ Phone Field (Optional)
      ├─ Message Field
      └─ Submit Button
```

### Design Features:

- **Info Card**: Gradient background (blue-purple), white text
- **Form**: White background, clean inputs with focus states
- **Icons**: Enclosed in semi-transparent circles
- **Animations**:
  - Fade-right for info card
  - Fade-left for form
  - Form submission feedback

### Form Functionality:

```javascript
// Current: Client-side with notification
// Options for implementation:
1. FormSubmit.co - Free form backend
2. EmailJS - JavaScript email service
3. Custom backend API
4. WhatsApp direct message
```

### Contact Card Structure:

```html
<div class="contact-info">
  <h3>Mari Berkolaborasi!</h3>
  <p>Description...</p>

  <div class="contact-item">
    <div class="icon">📧</div>
    <div class="details">
      <p>Email</p>
      <a href="mailto:...">hello@visualian.id</a>
    </div>
  </div>

  <!-- Repeat for other contact methods -->
</div>
```

### Content Guidelines:

- **Welcome Message**: Friendly, inviting tone
- **Contact Details**: Always up-to-date and monitored
- **Form Labels**: Clear, concise
- **Submit Button**: Action-oriented text

---

## 🦶 Footer

**Purpose**: Legal info, branding, quick links

### Content Structure:

```
Layout (Horizontal)
  ├─ Left: Logo & Company Name
  └─ Right: Copyright & Credits
      ├─ "© 2025 Visualian. All rights reserved."
      └─ "Made with ❤️ in Indonesia"
```

### Design Features:

- **Background**: Dark gray (gray-900)
- **Text**: White with gray-400 for copyright
- **Layout**: Flexbox, responsive to stack on mobile

### Footer Structure:

```html
<footer>
  <div class="container">
    <div class="footer-content">
      <div class="logo-section">
        <img src="..." alt="..." />
        <span>Visualian</span>
      </div>
      <div class="copyright-section">
        <p>© 2025 Visualian. All rights reserved.</p>
        <p>Made with ❤️ in Indonesia</p>
      </div>
    </div>
  </div>
</footer>
```

---

## 🎨 Design System Reference

### Color Palette

```css
/* Primary Colors */
--blue-600: #2563eb
--purple-600: #9333ea
--blue-800: #1e40af

/* Neutral Colors */
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-600: #4b5563
--gray-900: #111827

/* Gradients */
--gradient-primary: linear-gradient(to right, #2563eb, #9333ea)
--gradient-hero: linear-gradient(to bottom right, #2563eb, #9333ea, #1e40af)
```

### Typography

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Font Sizes */
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-4xl: 2.25rem (36px)
--text-5xl: 3rem (48px)

/* Font Weights */
--light: 300
--regular: 400
--medium: 500
--semibold: 600
--bold: 700
```

### Spacing Scale

```
0.25rem = 4px
0.5rem = 8px
1rem = 16px
1.5rem = 24px
2rem = 32px
3rem = 48px
4rem = 64px
6rem = 96px
8rem = 128px
```

### Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

---

## 🎭 Animation Guidelines

### AOS (Animate On Scroll)

**Available Animations**:

- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`

**Usage**:

```html
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
  Content
</div>
```

### GSAP

**Common Patterns**:

```javascript
// Fade in from bottom
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 1,
});

// Stagger multiple elements
gsap.from(elements, {
  opacity: 0,
  y: 30,
  stagger: 0.2,
});

// Scroll-triggered animation
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top center",
  },
  opacity: 0,
  y: 50,
});
```

---

## 📱 Responsive Behavior

### Mobile (<768px)

- Single column layout
- Hamburger menu
- Stacked hero content
- Larger touch targets
- Simplified animations

### Tablet (768px-1024px)

- 2-column grid for services
- Side-by-side hero content
- Full navigation menu
- Moderate animations

### Desktop (>1024px)

- 3-column grid for services
- Full animations and parallax
- Hover effects enabled
- Optimal spacing and typography

---

## 🔍 SEO Structure

### Meta Tags

```html
<title>Visualian - Inovasi Digital Tanpa Batas</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
```

### Open Graph

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

### Structured Data (Future Implementation)

- Organization schema
- WebSite schema
- Service schema
- ContactPoint schema

---

This structure provides a solid foundation that's:

- ✅ Easy to navigate
- ✅ Visually appealing
- ✅ Conversion-focused
- ✅ Mobile-optimized
- ✅ Performance-oriented
- ✅ SEO-friendly
