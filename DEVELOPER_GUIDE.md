# 👨‍💻 Developer Guide - SanChu Landing Page

A technical guide for developers to understand, modify, and extend this project.

---

## 🏗️ Project Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4 + CSS variables
- **Animations**: Framer Motion 11
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Optimization**: Next.js Image, automatic code splitting
- **Type Safety**: TypeScript 5.7

### Directory Structure
```
/app
  layout.tsx          # Root layout (fonts, metadata, providers)
  page.tsx            # Entry point (imports all sections)
  globals.css         # Global styles & CSS variables

/components
  ├── hero.tsx        # Hero section with CTA
  ├── benefits.tsx    # Benefits grid (6 items)
  ├── gallery.tsx     # Image gallery (3 items)
  ├── comparison.tsx  # Feature comparison table
  ├── pricing.tsx     # Pricing section with offers
  ├── growing-guide.tsx # Step-by-step guide (5 steps)
  ├── testimonials.tsx # Customer reviews (3 items)
  ├── footer.tsx      # Footer with contact info
  └── ui/             # shadcn/ui components

/public
  ├── lettuce-hero.jpg
  ├── homegrown-lettuce.jpg
  ├── lettuce-wraps.jpg
  └── lettuce-salad.jpg
```

---

## 🎨 Styling System

### CSS Variables (Theme Tokens)
Located in `app/globals.css`, all colors are HSL-based:

```css
:root {
  /* Primary colors */
  --primary: 140 65% 42%;          /* Green - main brand */
  --primary-foreground: 0 0% 98%;  /* White - text on primary */
  
  /* Secondary */
  --secondary: 40 60% 75%;         /* Light yellow - accent */
  --secondary-foreground: ...;     /* Text on secondary */
  
  /* Accent */
  --accent: 140 75% 50%;           /* Bright green - highlights */
  --accent-foreground: 0 0% 100%;  /* White - text on accent */
  
  /* Neutrals */
  --background: 100 20% 97%;       /* Light greenish white */
  --foreground: 140 20% 15%;       /* Dark green-gray - text */
  --card: 0 0% 100%;               /* Pure white - cards */
  --border: 140 15% 88%;           /* Light gray - borders */
  
  /* Rounded corners */
  --radius: 0.75rem;               /* 12px - soft, organic feel */
}
```

### Tailwind Color Mapping
Colors defined in `tailwind.config.ts` map to CSS variables:

```tsx
colors: {
  primary: 'hsl(var(--primary))',
  background: 'hsl(var(--background))',
  // ... etc
}
```

### Using Colors in Components
```tsx
// Good - use semantic colors
<div className="bg-primary text-primary-foreground">
<button className="bg-accent hover:bg-accent/90">

// Bad - avoid hardcoded colors
<div className="bg-green-500 text-blue-100">
```

### Changing the Theme
Edit HSL values in `app/globals.css`:
- **H** (Hue): 0-360 degrees
- **S** (Saturation): 0-100%
- **L** (Lightness): 0-100%

Use [Coolors.co](https://coolors.co) or HSL color pickers to find values.

---

## 🎭 Animation System

### Framer Motion Patterns

#### 1. Fade-in on Mount
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### 2. Slide-in on Mount
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  Content
</motion.div>
```

#### 3. Animate on Scroll (whileInView)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Content (animates when scrolled into view)
</motion.div>
```

#### 4. Stagger Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,        // Delay between children
      delayChildren: 0.2,          // Delay before first child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### 5. Continuous Animation
```tsx
<motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Pulsing content
</motion.div>
```

#### 6. Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05, shadow: '0 10px 25px rgba(0,0,0,0.1)' }}
  transition={{ duration: 0.3 }}
>
  Hover me
</motion.div>
```

### Performance Tips
- Use `once: true` in `whileInView` to animate only once
- Animate `opacity` and `transform` (CSS3 transforms)
- Avoid animating `width`, `height`, `position` (causes reflow)
- Test performance on low-end devices

---

## 📱 Responsive Design

### TailwindCSS Breakpoints
- `sm:` 640px
- `md:` 768px (tablet)
- `lg:` 1024px (desktop)
- `xl:` 1280px
- `2xl:` 1536px

### Mobile-First Approach
```tsx
// Mobile (default)
<div className="grid grid-cols-1 gap-4 ...">
  
// Tablet and up
<div className="md:grid-cols-2 ...">
  
// Desktop and up
<div className="lg:grid-cols-3 ...">
```

### Common Responsive Patterns

#### Grid
```tsx
// 1 col mobile → 2 col tablet → 3 col desktop
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
```

#### Text Size
```tsx
// Small mobile → Medium tablet → Large desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl">
```

#### Padding
```tsx
// Less padding mobile → more padding desktop
<div className="px-4 md:px-6 lg:px-8">
```

### Testing Responsive Design
```bash
# Use Chrome DevTools
- F12 → Device toggle (Ctrl+Shift+M)
- Test at 375px (mobile), 768px (tablet), 1024px (desktop)

# Or use Next.js preview on different devices
```

---

## 🖼️ Image Optimization

### Using Next.js Image
```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority              // Load immediately (hero images)
  className="..."
/>
```

### Benefits
- ✅ Automatic format conversion (WebP)
- ✅ Lazy loading by default
- ✅ Responsive srcset
- ✅ Placeholder blur support
- ✅ CDN caching

### Image Sizing
```tsx
// For responsive images, use fill prop:
<div className="relative w-full h-96">
  <Image
    src="/image.jpg"
    alt="..."
    fill
    className="object-cover"  // Important for fill
  />
</div>
```

### Image Best Practices
- Use WebP format (modern browsers)
- Optimize image size before uploading
- Use descriptive alt text (SEO + accessibility)
- Add `priority` to above-the-fold images
- Use `object-cover` or `object-contain` with fill

---

## 🔤 Font Management

### Adding Custom Fonts

In `app/layout.tsx`:
```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading'
})

// In html tag:
<html className={`${inter.variable} ${playfair.variable}`}>
```

In `globals.css`:
```css
body {
  font-family: var(--font-sans);
}

h1, h2, h3 {
  font-family: var(--font-heading);
}
```

### Font Performance
- Google Fonts are optimized automatically
- Font files are self-hosted (no external requests)
- Variable fonts reduce file size
- Preload important fonts

---

## 🧪 Component Development

### Component Structure
```tsx
'use client';  // If using hooks/interactivity

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function MyComponent() {
  // Animation variants
  const containerVariants = { ... };
  const itemVariants = { ... };

  // JSX
  return (
    <motion.section>
      {/* Content */}
    </motion.section>
  );
}
```

### File Naming
- Components: PascalCase (`Hero.tsx`, `Benefits.tsx`)
- Folders: lowercase (`/components`, `/public`)
- Constants: UPPER_SNAKE_CASE
- Functions: camelCase

### Exporting
```tsx
// Use named exports for components
export function Hero() { ... }
export function Benefits() { ... }

// Import them
import { Hero } from '@/components/hero';
```

---

## 🔍 SEO Best Practices

### Metadata
In `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: '...',
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
  },
};
```

### Semantic HTML
```tsx
// Good
<main>
  <section>
    <h1>Main title</h1>
    <h2>Section heading</h2>
  </section>
</main>

// Bad
<div>
  <div>
    <div>Main title</div>
  </div>
</div>
```

### Image Alt Text
```tsx
// Good
<Image
  src="/lettuce.jpg"
  alt="Fresh green SanChu lettuce leaves on white background"
/>

// Bad
<Image src="/lettuce.jpg" alt="image" />
```

### Structured Data
Add JSON-LD for rich snippets:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'SanChu Lettuce Seeds',
      // ...
    }),
  }}
/>
```

---

## 🚀 Performance Optimization

### Code Splitting
Next.js automatically code-splits by route/component.

### Image Optimization
- Use Next.js Image component
- Lazy load below-the-fold images
- Use `priority` for hero images

### Font Optimization
- Use `next/font` (self-hosted)
- Specify weights/subsets needed
- Use `font-display: swap`

### CSS Optimization
- TailwindCSS purges unused classes
- CSS-in-JS minimal (only Framer Motion)
- No unused dependencies

### Monitoring
```bash
# Check bundle size
npm run analyze

# Check Core Web Vitals
# Open DevTools → Lighthouse
```

---

## 🧩 Adding New Sections

### Step-by-Step

1. **Create component file**:
```bash
# Create components/new-section.tsx
```

2. **Use the template**:
```tsx
'use client';

import { motion } from 'framer-motion';

export function NewSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <motion.div>
        {/* Content */}
      </motion.div>
    </section>
  );
}
```

3. **Import in page.tsx**:
```tsx
import { NewSection } from '@/components/new-section';

export default function Page() {
  return (
    <main>
      {/* ... other sections ... */}
      <NewSection />
    </main>
  );
}
```

4. **Add styling**:
- Use TailwindCSS utility classes
- Reference color variables
- Test on mobile/tablet/desktop

---

## 🐛 Debugging

### Browser DevTools
```
F12 → Console
- Check for errors
- Log variables

DevTools → Elements
- Inspect HTML structure
- Check CSS applied

DevTools → Lighthouse
- Check performance score
- Check accessibility issues
```

### Next.js Debugging
```bash
# Enable debug mode
NODE_DEBUG=next npm run dev

# Check build output
npm run build
```

### Common Issues

#### Images not loading
- Check path in `/public/` folder
- Verify alt text exists
- Check Image component props

#### Animations not working
- Check `'use client'` directive
- Verify Framer Motion installed
- Check animation syntax

#### Responsive issues
- Test with DevTools device toggle
- Check media queries in DevTools
- Verify Tailwind breakpoints used

---

## 📦 Deployment

### Vercel (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Import to Vercel
# - Go to vercel.com
# - Click "New Project"
# - Select GitHub repo
# - Deploy

# Auto-deploying on future pushes
```

### Environment Variables
```
# .env.local (development)
# No secrets needed for this project

# Production: Set in Vercel dashboard
Settings → Environment Variables
```

### Build Process
```bash
npm run build     # Creates .next folder
npm start         # Runs production server
```

---

## 📚 Code Examples

### Typical Component Pattern
```tsx
'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ExampleSection() {
  return (
    <section className="py-20 bg-background">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Section Title
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        Content
      </motion.div>
    </section>
  );
}
```

### Typical Page Layout
```tsx
import { Section1 } from '@/components/section1';
import { Section2 } from '@/components/section2';

export default function Page() {
  return (
    <main>
      <Section1 />
      <Section2 />
    </main>
  );
}
```

---

## 🔗 Useful Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

### Tools
- [HSL Color Picker](https://hslpicker.com/)
- [Tailwind Config Viewer](https://tailwindcss.com/docs/configuration)
- [Next.js Analyze Bundle](https://nextjs.org/docs/advanced-features/measuring-performance)

---

## ✅ Code Quality Checklist

Before committing:
- [ ] No `console.log()` in production code
- [ ] All components use semantic HTML
- [ ] All images have alt text
- [ ] Responsive design tested
- [ ] Animations smooth on low-end devices
- [ ] No unused imports
- [ ] TypeScript no errors
- [ ] Tailwind classes optimized

---

## 🎓 Learning Resources

If you're new to these technologies:

1. **Next.js**: Start with App Router guide
2. **React**: Learn hooks (useEffect, useState)
3. **TailwindCSS**: Utility-first approach
4. **Framer Motion**: Start with simple animations
5. **TypeScript**: Basic types and interfaces

---

**Happy coding! 🚀**

For questions, refer to component source code - it's heavily commented.
