# 📐 Project Architecture - Landing Page SanChu

## 🗂️ Cấu Trúc File Đầy Đủ

```
project-root/
│
├── app/
│   ├── layout.tsx              ← ROOT LAYOUT (SEO, Fonts)
│   ├── page.tsx                ← MAIN PAGE (Tập hợp sections)
│   ├── globals.css             ← GLOBAL STYLES (Theme variables)
│   └── favicon.ico
│
├── components/
│   ├── hero.tsx                ← HERO SECTION (Banner chính)
│   ├── benefits.tsx            ← BENEFITS (6 lợi ích grid)
│   ├── gallery.tsx             ← GALLERY (3 ảnh sản phẩm)
│   ├── comparison.tsx          ← COMPARISON (Bảng so sánh)
│   ├── pricing.tsx             ← PRICING (Giá & ưu đãi)
│   ├── growing-guide.tsx       ← GUIDE (5 bước trồng)
│   ├── testimonials.tsx        ← TESTIMONIALS (3 đánh giá)
│   ├── footer.tsx              ← FOOTER (Liên hệ)
│   │
│   └── ui/                     ← SHADCN COMPONENTS
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ... (30+ UI components)
│
├── public/                     ← STATIC ASSETS
│   ├── lettuce-hero.jpg
│   ├── homegrown-lettuce.jpg
│   ├── lettuce-wraps.jpg
│   ├── lettuce-salad.jpg
│   └── favicon.ico
│
├── lib/
│   └── utils.ts               ← UTILITY (cn function)
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
│
├── README.md                  ← DOCUMENTATION
├── QUICK_START.md             ← QUICK SETUP GUIDE
└── ARCHITECTURE.md            ← THIS FILE
```

## 🔄 Page Flow & Section Order

```
┌─────────────────────────────────────┐
│  1. HERO SECTION                    │
│  - Full-width image                 │
│  - Title + subtitle                 │
│  - 2 CTAs (Mua ngay, Hướng dẫn)     │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  2. BENEFITS SECTION                │
│  - 3x2 Grid (6 cards)               │
│  - Icons + Title + Description      │
│  - Hover effects                    │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  3. GALLERY SECTION                 │
│  - 3 ảnh sản phẩm                   │
│  - Aspect square                    │
│  - Overlay text on hover            │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  4. COMPARISON SECTION              │
│  - Table: Feature vs SanChu vs Chợ  │
│  - Striped rows                     │
│  - ✅ vs ❌ icons                    │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  5. PRICING SECTION                 │
│  - Card: Giá + Ưu đãi              │
│  - Benefits list (4 items)          │
│  - CTA Button                       │
│  - Trust badges (3 stats)           │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  6. GROWING GUIDE SECTION           │
│  - Timeline: 5 bước                 │
│  - Animated icons                   │
│  - Tips box (4 items)               │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  7. TESTIMONIALS SECTION            │
│  - 3 review cards                   │
│  - Stars + Quote + Author           │
│  - Trust metrics (5000+, 4.9/5...)  │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  8. FOOTER SECTION                  │
│  - 4 columns (Brand, Product, Info, Contact)
│  - Social links (Zalo, FB, Email)   │
│  - Copyright                        │
└─────────────────────────────────────┘
```

## 🎬 Component Details

### 1️⃣ **Hero Component** (`components/hero.tsx`)
```
Layout: 2-column grid (text left, image right)
- Motion animation: fade-in + slide
- Content:
  - Badge (Trồng Rau Sạch Tại Nhà)
  - H1 Title (Hạt Giống Xà Lách SanChu)
  - Paragraph description
  - 2 buttons (Mua ngay, Xem hướng dẫn)
  - Trust signs (✅ Hạn chế, 📦 Hướng dẫn)
- Image: Full-width responsive
```

### 2️⃣ **Benefits Component** (`components/benefits.tsx`)
```
Layout: 3-column grid (2 rows)
- 6 benefit cards with:
  - Large emoji icon (🌿, 🏠, 🥬, etc.)
  - Title (bold)
  - Description
  - Hover: shadow + scale effect
- Animation: Stagger children on view
```

### 3️⃣ **Gallery Component** (`components/gallery.tsx`)
```
Layout: 3-column grid
- 3 image cards:
  - Aspect square
  - Rounded corners
  - Hover: zoom + overlay with title
  - Shadow on hover
- Images: Optimized with Next.js Image
```

### 4️⃣ **Comparison Component** (`components/comparison.tsx`)
```
Layout: Full-width table
- Rows: 6 features
- Columns: 
  - Feature name
  - SanChu (✅ green)
  - Market (❌ red)
- Striped rows
- Animation: Row by row fade-in
```

### 5️⃣ **Pricing Component** (`components/pricing.tsx`)
```
Layout: Centered card + 3-column grid below
- Main card:
  - Badge (Ưu Đãi HOT)
  - Title + subtitle
  - Large price (20.000đ)
  - Strikethrough original (25.000đ)
  - 4 benefit bullets
  - CTA button
  - Stock warning text
- Below: 3 trust badges (Quà tặng, Giao hàng, Đảm bảo)
```

### 6️⃣ **Growing Guide Component** (`components/growing-guide.tsx`)
```
Layout: Timeline with alternating layout
- 5 step cards:
  - Left/right alternating
  - Center: Animated icon circle
  - Card: Title + Description
- Tips section:
  - Gradient background
  - 2x2 grid of tips
  - Each tip: icon + heading + text
```

### 7️⃣ **Testimonials Component** (`components/testimonials.tsx`)
```
Layout: 3-column grid + stats below
- 3 review cards:
  - 5 stars rating
  - Quote text
  - Author info (avatar + name + city)
  - Hover: shadow + border color change
- Below: 3 trust metrics
  - Large number + label
```

### 8️⃣ **Footer Component** (`components/footer.tsx`)
```
Layout: 4-column grid + divider + bottom section
- Columns:
  1. Brand info (Logo + description)
  2. Product links
  3. Info links
  4. Contact (Zalo, FB, Email, Location)
- Bottom: Copyright + legal links
- All with hover effects & animations
```

## 🎨 Styling Architecture

### CSS Variables (Theme Tokens)
**File**: `app/globals.css`

```css
:root {
  /* Colors */
  --primary: 140 65% 42%;        /* Green - Main brand color */
  --secondary: 40 60% 75%;       /* Light Yellow - Accent */
  --accent: 140 75% 50%;         /* Bright Green - Highlights */
  --background: 100 20% 97%;     /* Light green-tinted white */
  --foreground: 140 20% 15%;     /* Dark green-text */
  
  /* Spacing & Sizing */
  --radius: 0.75rem;             /* Rounded corners */
  
  /* Other semantic tokens */
  --card, --border, --input, etc.
}
```

### Tailwind Utility Classes
- **Layout**: `flex`, `grid`, `container`
- **Spacing**: `px-4`, `py-8`, `gap-6`, `mb-4`
- **Typography**: `text-lg`, `font-bold`, `leading-relaxed`
- **Colors**: `bg-primary`, `text-foreground`, `border-border`
- **Effects**: `shadow-lg`, `rounded-2xl`, `hover:shadow-xl`
- **Responsive**: `md:grid-cols-2`, `lg:text-5xl`

## 🎭 Animation System

### Framer Motion Setup
```tsx
// Used in every component for entrance animations
import { motion } from 'framer-motion';

// Common patterns:
1. Initial → Animate on mount
2. WhileInView → Animate on scroll into view
3. Stagger → Children animate one by one
4. Hover → Interactive animations
```

### Animation Types Used
1. **Fade-in**: `opacity: 0 → 1`
2. **Slide**: `x/y: -50/20 → 0`
3. **Scale**: `scale: 0.95 → 1`
4. **Stagger**: `staggerChildren: 0.1`
5. **Pulse**: `scale: [1, 1.05, 1]`
6. **Hover**: Icon scale, shadow change

## 📱 Responsive Breakpoints

### Tailwind MD/LG Prefixes
- `md:` = 768px (tablets)
- `lg:` = 1024px (desktops)

### Mobile-First Approach
```
Mobile (default)
├─ Single column
├─ Smaller fonts
└─ Touch-friendly buttons

↓ Tablet (md:)
├─ 2 columns (some)
├─ Medium fonts
└─ Hover effects visible

↓ Desktop (lg:)
├─ 3 columns (most)
├─ Large fonts
└─ Full animations
```

## 🔗 Data Flow

### Props & State
```
page.tsx (no props, imports sections)
  ├─ Hero (no props, static data)
  ├─ Benefits (no props, static benefits array)
  ├─ Gallery (no props, static galleryItems array)
  ├─ Comparison (no props, static comparisonData array)
  ├─ Pricing (no props, static data)
  ├─ GrowingGuide (no props, static steps array)
  ├─ Testimonials (no props, static testimonials array)
  └─ Footer (no props, static links)
```

All data is **static** (hardcoded in arrays). To make dynamic:
1. Move arrays to database/CMS
2. Pass as props: `<Hero benefits={data} />`
3. Use hooks: `const [data] = useState()`

## 🚀 Performance Optimization

### Already Implemented
- ✅ Next.js Image optimization
- ✅ Code splitting per component
- ✅ TailwindCSS purging (unused classes removed)
- ✅ Lazy loading with `whileInView`
- ✅ Semantic HTML (proper heading hierarchy)

### Further Optimizations
1. **Static Generation** - All pages static (pre-built at deploy)
2. **ISR** - Could revalidate on-demand
3. **Font Optimization** - Using next/font (already done)
4. **CSS Extraction** - TailwindCSS handles (already done)

## 🔐 Security & SEO

### SEO Features
- ✅ Meta tags (title, description, keywords, OG)
- ✅ Semantic HTML (`<main>`, `<section>`, headings)
- ✅ Image alt text
- ✅ Mobile responsive
- ✅ Fast load times
- ✅ Structured data ready

### Security Features
- ✅ No inline scripts
- ✅ CSP compatible
- ✅ No sensitive data in frontend
- ✅ Links have proper rel attributes
- ✅ Forms ready for backend integration

## 🔧 Extending the Project

### Add New Section
1. Create `components/new-section.tsx`
2. Copy pattern from existing component
3. Import in `app/page.tsx`
4. Add to render order

### Add New Data (Testimonials, etc.)
1. Find the array in component file
2. Add new object following structure
3. Component automatically renders

### Change Colors
1. Edit CSS variables in `app/globals.css`
2. All components automatically update

### Change Fonts
1. Import new fonts in `app/layout.tsx`
2. Update `const` declarations
3. Update tailwind.config.ts if needed

---

**This architecture ensures**
- ✅ Clean separation of concerns
- ✅ Easy to modify content
- ✅ Easy to extend with new features
- ✅ Maintainable & scalable
- ✅ Performance optimized
