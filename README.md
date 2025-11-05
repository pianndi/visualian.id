# 🚀 Visualian Website

Modern and elegant single-page website for **Visualian** (visualian.id) - a technology company specializing in web development, applications, and multimedia services.

Built with HTML, TailwindCSS v4, GSAP, and AOS - optimized for GitHub Pages deployment.

## ✨ Features

- **Modern & Elegant Design**: Clean, professional UI with smooth gradients
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: GSAP and AOS for stunning scroll effects
- **Fast Performance**: Optimized assets with lazy loading
- **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
- **Accessible**: WCAG compliant with proper structure
- **Static Hosting**: Ready for GitHub Pages deployment

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with accessibility features
- **TailwindCSS v4**: Modern utility-first CSS framework
- **GSAP**: Professional animation library with ScrollTrigger
- **AOS**: Animate On Scroll for smooth transitions
- **Vanilla JavaScript**: No heavy frameworks, pure performance
- **Google Fonts**: Inter font family for modern typography

## 📁 Struktur Project

```
VISUALIAN/WEBSITE/
├── index.html              # File HTML utama
├── css/
│   └── styles.css          # Stylesheet utama
├── js/
│   └── script.js           # JavaScript interaktif
├── assets/
│   ├── images/             # Gambar dan aset visual
│   └── README.md           # Panduan aset gambar
├── README.md               # Dokumentasi project
└── .gitignore             # Git ignore file
```

## 🎨 Design System

### Color Palette

- **Primary**: #3b82f6 (Blue)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #06b6d4 (Cyan)
- **Success**: #10b981 (Green)
- **Gray Scale**: #f9fafb hingga #111827

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Font Sizes**: Responsive dengan clamp()

### Spacing

- **Base Unit**: 1rem (16px)
- **Scale**: 0.25rem hingga 8rem
- **Container**: Max 1200px dengan padding responsive

## 🛠️ Instalasi & Setup

### Persyaratan

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, Atom)
- Local server (Live Server, XAMPP, atau serupa)

### Langkah Instalasi

1. **Clone/Download project**

   ```bash
   git clone [repository-url]
   cd visualian-website
   ```

2. **Setup gambar**

   - Siapkan gambar sesuai panduan di `assets/images/README.md`
   - Atau gunakan placeholder sementara

3. **Jalankan local server**

   ```bash
   # Menggunakan Python
   python -m http.server 8000

   # Menggunakan Node.js
   npx http-server

   # Atau gunakan Live Server di VS Code
   ```

4. **Buka di browser**
   ```
   http://localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Small**: 576px - 768px
- **Medium**: 768px - 992px
- **Large**: 992px - 1200px
- **Extra Large**: > 1200px

## 🎭 Animasi & Interaktivitas

### AOS Animations

- **Fade**: fade-up, fade-left, fade-right
- **Zoom**: zoom-in, zoom-out
- **Slide**: slide-up, slide-down
- **Duration**: 1000ms default
- **Delay**: Staggered untuk multiple elements

### GSAP Animations

- **Hero Timeline**: Title, description, buttons sequence
- **Scroll Triggers**: Service cards, advantages, portfolio
- **Counter Animation**: Stats numbers dengan easing
- **Stagger Effects**: Multiple elements dengan delay

### Interactive Elements

- **Sticky Navigation**: Header yang menempel saat scroll
- **Active Link**: Highlight menu berdasarkan scroll position
- **Smooth Scroll**: Navigasi anchor yang mulus
- **Mobile Menu**: Hamburger menu untuk mobile
- **Testimonial Slider**: Auto-play dengan manual controls
- **Back to Top**: Button yang muncul saat scroll
- **Hover Effects**: Transform dan shadow pada cards

## 🔧 Customization

### Mengubah Warna

```css
:root {
  --primary-color: #your-color;
  --gradient-primary: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

### Mengubah Font

```html
<!-- Ganti link Google Fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

```css
:root {
  --font-primary: "YourFont", sans-serif;
}
```

### Mengubah Konten

1. Edit text di `index.html`
2. Ganti gambar di folder `assets/images/`
3. Update informasi kontak dan social media
4. Sesuaikan meta tags untuk SEO

## 📈 SEO & Performance

### SEO Optimization

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Semantic HTML**: Proper heading hierarchy
- **Alt Attributes**: Semua gambar memiliki alt text
- **Schema Markup**: Structured data untuk search engines

### Performance Features

- **Lazy Loading**: Gambar dimuat saat dibutuhkan
- **Minified Assets**: CSS dan JS yang optimal
- **Responsive Images**: Ukuran sesuai device
- **Optimized Fonts**: Font display swap
- **Critical CSS**: Above-the-fold content

## 🌐 Browser Support

- **Chrome**: ✅ Latest
- **Firefox**: ✅ Latest
- **Safari**: ✅ Latest
- **Edge**: ✅ Latest
- **IE**: ❌ Not supported

## 📞 Kontak & Support

Untuk pertanyaan atau dukungan teknis:

- **Email**: hello@visualian.id
- **WhatsApp**: +62 812-3456-7890
- **Website**: https://visualian.id

## 📄 License

© 2025 Visualian. All rights reserved.

---

**Dibuat dengan ❤️ di Indonesia**
