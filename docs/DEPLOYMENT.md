# Visualian Website Deployment Guide

## Deployment Options

### 1. GitHub Pages (Recommended for Static Sites)

#### Setup:

1. Push code ke GitHub repository
2. Pergi ke Settings > Pages
3. Pilih source: Deploy from a branch
4. Pilih branch: main
5. Folder: / (root)

#### Custom Domain:

1. Tambahkan file CNAME dengan domain Anda
2. Configure DNS A record ke GitHub IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

### 2. Netlify

#### Via Git:

1. Connect GitHub repository
2. Build command: (leave empty for static)
3. Publish directory: /
4. Auto-deploy on push

#### Via Drag & Drop:

1. Build project locally
2. Drag folder ke Netlify deploy area

#### Netlify Config (\_redirects):

```
# Redirect all 404s to index.html for SPA behavior
/*    /index.html   200

# Force HTTPS
http://visualian.id/*    https://visualian.id/:splat    301!
http://www.visualian.id/*    https://visualian.id/:splat    301!

# Cache static assets
/assets/*  Cache-Control: max-age=31536000
/css/*     Cache-Control: max-age=31536000
/js/*      Cache-Control: max-age=31536000
```

### 3. Vercel

#### Setup:

1. Import GitHub repository
2. Framework Preset: Other
3. Build Command: (leave empty)
4. Output Directory: ./
5. Install Command: (leave empty)

#### Vercel Config (vercel.json):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. Traditional Hosting (cPanel, etc.)

#### Files to Upload:

- All files except node_modules, .git
- Ensure index.html is in root directory
- Upload to public_html or www folder

#### Apache .htaccess:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static files
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Pre-Deployment Checklist

### Content Review:

- [ ] Update all placeholder text
- [ ] Add real images and optimize them
- [ ] Update contact information
- [ ] Test all links and forms
- [ ] Verify social media links

### Technical Optimization:

- [ ] Minify CSS and JavaScript
- [ ] Optimize images (WebP format)
- [ ] Test page speed with PageSpeed Insights
- [ ] Verify mobile responsiveness
- [ ] Test across different browsers

### SEO Setup:

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Configure Facebook Pixel (if needed)
- [ ] Add Schema.org markup
- [ ] Test social media previews

### Security & Performance:

- [ ] Enable HTTPS
- [ ] Set up proper caching headers
- [ ] Configure security headers
- [ ] Enable GZIP compression
- [ ] Test with Google Lighthouse

## Post-Deployment

### Monitoring:

- Google Analytics
- Google Search Console
- Uptime monitoring (UptimeRobot)
- Performance monitoring (GTmetrix)

### Maintenance:

- Regular content updates
- Security updates
- Performance optimization
- Backup procedures

## Domain Configuration

### DNS Records:

```
Type    Name    Value                   TTL
A       @       [Your Server IP]        300
A       www     [Your Server IP]        300
CNAME   www     visualian.id           300
```

### SSL Certificate:

- Use Let's Encrypt for free SSL
- Most hosting providers offer auto-SSL
- Cloudflare provides free SSL proxy

## Performance Targets

### Core Web Vitals:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Additional Metrics:

- **TTFB** (Time to First Byte): < 600ms
- **FCP** (First Contentful Paint): < 1.8s
- **Speed Index**: < 3.4s
