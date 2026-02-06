# 📈 SEO Optimization Checklist

## ✅ Already Implemented

### Meta Tags
- ✅ Page title: "Hạt Giống Xà Lách SanChu Hàn Quốc - Trồng Tại Nhà An Toàn, Sạch"
- ✅ Meta description: Full product benefits & CTA
- ✅ Keywords: "hạt giống xà lách sanchu, trồng xà lách tại nhà, xà lách cuốn thịt nướng, hạt giống rau sạch"
- ✅ Open Graph tags: title, description, type
- ✅ Theme color: #35A44B (brand green)
- ✅ Viewport: mobile responsive config
- ✅ Language: `lang="vi"` for Vietnamese

### HTML Structure
- ✅ Semantic HTML: `<main>`, `<section>`, `<header>` tags
- ✅ Proper heading hierarchy: H1 (once) → H2 (sections) → H3 (subsections)
- ✅ Alt text: All images have descriptive alt text
- ✅ Image optimization: Using Next.js Image component (automatic)
- ✅ No broken links: All internal links verified

### Performance
- ✅ Fast page load: TailwindCSS optimized, Next.js optimizations
- ✅ Mobile responsive: Mobile-first design
- ✅ CSS optimization: TailwindCSS purging unused classes
- ✅ Image optimization: Next.js Image component handles srcset, lazy-loading
- ✅ Font optimization: Google Fonts with Next.js integration

### Content
- ✅ Target keywords: Naturally placed throughout content
- ✅ Content length: ~2000+ words (optimal)
- ✅ Internal linking: Ready for internal links
- ✅ Fresh content: Updated timestamp ready
- ✅ Unique content: Not duplicated elsewhere

## 📋 Pre-Launch Checklist

### 1. Google Search Console Setup
- [ ] Verify domain ownership
- [ ] Submit sitemap.xml
- [ ] Request indexing of homepage
- [ ] Check for indexing issues/errors
- [ ] Monitor search queries

```bash
# Create sitemap.xml in /public/
# Add to robots.txt:
Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Google Analytics Setup
- [ ] Add GA4 tracking code
- [ ] Set up goals (CTA clicks, form submissions)
- [ ] Configure ecommerce tracking if needed
- [ ] Set up custom events

Add to `app/layout.tsx`:
```tsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
`}} />
```

### 3. Structured Data / Schema
- [ ] Add JSON-LD for Product schema
- [ ] Add LocalBusiness schema
- [ ] Add BreadcrumbList schema (optional)
- [ ] Test with [Schema.org Validator](https://validator.schema.org/)

Example Product Schema:
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Hạt Giống Xà Lách SanChu Hàn Quốc",
  "description": "Hạt giống chuẩn...",
  "brand": "SanChu",
  "offers": {
    "@type": "Offer",
    "price": "20000",
    "priceCurrency": "VND"
  }
}
```

### 4. Mobile Optimization
- [ ] Test on actual mobile devices
- [ ] Check touch targets (min 48x48px)
- [ ] Verify viewport meta tag
- [ ] Test Google Mobile-Friendly Test
- [ ] Check Core Web Vitals

[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 5. Page Speed
- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Optimize images further if needed
- [ ] Use CDN (Vercel automatically does this)
- [ ] Enable compression

[PageSpeed Insights](https://pagespeed.web.dev/)

### 6. Backlinks & Authority
- [ ] Register in local Vietnamese business directories
- [ ] Get business mentions on product review sites
- [ ] Reach out for relevant local links
- [ ] Submit to Zalo Business Directory
- [ ] Create business profiles (Google My Business)

### 7. Local SEO (Vietnam-specific)
- [ ] Add address in footer with schema
- [ ] Add local phone number
- [ ] Use Vietnamese keywords
- [ ] Mention Vietnam/Vietnamese in content
- [ ] Add city/location specific content
- [ ] Register on Chotot, Shopee, Lazada (ecommerce)

```tsx
{/* Add to footer or schema */}
"areaServed": "VN",
"address": {
  "@type": "PostalAddress",
  "streetAddress": "...",
  "addressLocality": "TP. Hồ Chí Minh",
  "addressRegion": "Hồ Chí Minh",
  "postalCode": "70000",
  "addressCountry": "VN"
}
```

### 8. Meta Tags for Social Sharing
- [ ] Add Open Graph tags for FB sharing
- [ ] Add Twitter Card tags
- [ ] Add social share buttons (optional)
- [ ] Test sharing preview

Already in `app/layout.tsx` - just ensure image URLs are correct:
```tsx
openGraph: {
  title: '...',
  description: '...',
  type: 'website',
  // url: 'https://yourdomain.com',
  // images: [{url: 'https://...', width: 1200, height: 630}],
}
```

### 9. Content Optimization
- [ ] Keyword density: 1-2% for main keyword
- [ ] Use LSI keywords (related keywords)
- [ ] Bold important phrases
- [ ] Use lists and formatting
- [ ] Include FAQ schema (optional)

### 10. Technical SEO
- [ ] robots.txt file created
- [ ] sitemap.xml created
- [ ] Canonical URLs set (auto in Next.js)
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] No duplicate content
- [ ] Fix 404 errors

Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /.next

Sitemap: https://yourdomain.com/sitemap.xml
```

Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2026-02-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🔍 Keyword Research & Strategy

### Primary Keywords
- "hạt giống xà lách sanchu" - HIGH volume
- "trồng xà lách tại nhà" - HIGH intent
- "xà lách cuốn thịt nướng" - Commercial
- "hạt giống rau sạch" - Broad

### Secondary Keywords
- "cách trồng xà lách" 
- "xà lách Hàn Quốc"
- "rau sạch không thuốc"
- "trồng rau tại nhà"
- "xà lách giòn ngọt"

### Long-tail Keywords
- "cách trồng xà lách SanChu tại nhà dễ dàng"
- "hạt giống xà lách Hàn Quốc giá rẻ"
- "xà lách cuốn thịt nướng cách làm"
- "trồng rau ban công không sáng"

## 📊 Monitoring & Maintenance

### Monthly Tasks
- [ ] Check Google Search Console for errors
- [ ] Monitor keyword rankings
- [ ] Check traffic in Google Analytics
- [ ] Review Core Web Vitals
- [ ] Update content if needed
- [ ] Fix broken links

### Tools to Use
- **Search Rankings**: [SE Ranking](https://seranking.com/), [Semrush](https://semrush.com/)
- **Backlink Analysis**: [Backlinko](https://backlinko.com/), [Ahrefs](https://ahrefs.com/)
- **Keyword Research**: [Ubersuggest](https://ubersuggest.com/), [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- **Site Audit**: [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
- **Mobile Test**: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🎯 Ranking Optimization

### On-Page SEO
1. **Title Tag** ✅ Already optimized (60 chars)
2. **Meta Description** ✅ Already optimized (160 chars)
3. **H1 Tag** ✅ Unique, keyword-rich
4. **Content** ✅ 2000+ words, keyword-dense
5. **Images** ✅ Optimized, alt text included
6. **Internal Links** ⏳ Add contextual links between sections
7. **URL** ⏳ Consider: `/san-pham/` or `/hat-giong-xa-lach/`

### Off-Page SEO
1. Build Vietnamese business directory listings
2. Get mentions in local agriculture blogs
3. Partner with food/lifestyle Vietnamese bloggers
4. Social signals (Zalo, Facebook shares)
5. Local citations & reviews

### Technical SEO
1. Page Speed ✅ Verified with Next.js
2. Mobile Responsiveness ✅ Mobile-first design
3. HTTPS ✅ Automatic on Vercel
4. Core Web Vitals ✅ Monitor regularly
5. Structured Data ⏳ Add JSON-LD

## 🚀 Post-Launch Actions

### Week 1
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add Google Analytics
- [ ] Monitor for 404 errors
- [ ] Check mobile experience

### Week 2-4
- [ ] Get indexed in Google
- [ ] Monitor search queries in GSC
- [ ] Create content for low-volume keywords
- [ ] Start link building (Vietnamese directories)
- [ ] Monitor rankings

### Month 2-3
- [ ] Analyze top-performing pages
- [ ] Create more content around high-intent keywords
- [ ] Build more backlinks
- [ ] Optimize for featured snippets
- [ ] Monitor Core Web Vitals

## 💡 Additional Tips

### Vietnamese Market Specifics
1. **Language**: Make sure Vietnamese is natural, not translated
2. **Currency**: Use VND (Đồng Việt Nam)
3. **Local Payment**: Accept Zalo Pay, MoMo, transfer
4. **Local Directories**: Register on:
   - Chotot.com
   - Shopee.vn
   - Lazada.vn
   - Google My Business (Vietnam)
5. **Social**: Focus on Zalo, Facebook (more popular in Vietnam)

### Content Ideas for More Traffic
1. Blog posts: "5 Cách Chăm Sóc Xà Lách SanChu"
2. Guides: "Hướng Dẫn Trồng Rau Tại Nhà Cho Người Mới"
3. FAQs: "Tại Sao Xà Lách Của Tôi Không Mọc?"
4. Reviews: "Đánh Giá Chi Tiết: SanChu vs Các Loại Rau Khác"
5. Videos: YouTube tutorials for growing lettuce

---

**Remember**: SEO is long-term. Expect 3-6 months to see significant rankings.
Focus on quality content and user experience first - rankings will follow!
