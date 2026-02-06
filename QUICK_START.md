# 🚀 Quick Start Guide - Landing Page Xà Lách SanChu

## 📦 Installation (Cài Đặt)

### Option 1: Sử dụng shadcn CLI (Recommended)

```bash
npx shadcn-ui@latest init my-project
cd my-project
```

Sau đó, copy toàn bộ file từ project này vào.

### Option 2: Cài đặt thủ công

```bash
# 1. Clone project
git clone <your-repo-url>
cd project

# 2. Install dependencies
npm install

# 3. Chạy development server
npm run dev
```

Truy cập `http://localhost:3000` để xem website.

## 🎯 Các Bước Tùy Chỉnh Nhanh

### 1️⃣ Thay Đổi Nội Dung Chính

#### A. Thay Thế Tên & Thông Tin Sản Phẩm
**File**: `app/layout.tsx`
```tsx
// Thay đổi meta title & description
title: 'Hạt Giống Xà Lách SanChu...',
description: 'Hạt giống chuẩn Xà Lách SanChu...',
```

#### B. Cập Nhật Lợi Ích (Benefits)
**File**: `components/benefits.tsx`
```tsx
const benefits = [
  {
    icon: '🌿',
    title: 'Tiêu đề của bạn',
    description: 'Mô tả của bạn',
  },
  // ... thêm/chỉnh sửa khác
];
```

#### C. Cập Nhật Giá & Ưu Đãi
**File**: `components/pricing.tsx`
```tsx
<span className="text-5xl font-bold text-primary">
  20.000đ  {/* Thay số này */}
</span>
<span className="text-lg text-foreground/60 line-through">
  25.000đ  {/* Thay số này */}
</span>
```

#### D. Cập Nhật Đánh Giá
**File**: `components/testimonials.tsx`
```tsx
const testimonials = [
  {
    name: 'Tên khách hàng',
    city: 'Thành phố',
    rating: 5,
    comment: 'Nhận xét/review của khách hàng',
  },
  // ...
];
```

### 2️⃣ Thay Đổi Hình Ảnh

#### A. Thay Hero Image
1. Đặt hình ảnh mới vào `/public/` folder
2. Sửa `components/hero.tsx`:
```tsx
<Image
  src="/lettuce-hero.jpg"  {/* Đổi thành tên file của bạn */}
  alt="Hạt giống Xà Lách SanChu tươi mát"
  ...
/>
```

#### B. Thay Hình Gallery
1. Đặt 3 ảnh mới vào `/public/` folder
2. Sửa `components/gallery.tsx`:
```tsx
const galleryItems = [
  {
    src: '/your-image-1.jpg',  {/* Sửa tên file */}
    alt: 'Mô tả hình 1',
    title: 'Tiêu đề hình 1',
  },
  // ...
];
```

### 3️⃣ Thay Đổi Màu Sắc (Theme)

**File**: `app/globals.css`

Tìm section `:root` và thay đổi các giá trị HSL:

```css
:root {
  --primary: 140 65% 42%;      /* Xanh lá (thay đổi ở đây) */
  --secondary: 40 60% 75%;     /* Vàng nhạt */
  --accent: 140 75% 50%;       /* Xanh sáng */
  /* ... các màu khác ... */
}
```

**Công cụ**: Sử dụng [Coolors.co](https://coolors.co) để tìm màu HSL.

### 4️⃣ Cập Nhật Liên Hệ

**File**: `components/footer.tsx`

```tsx
<a href="https://zalo.me/0123456789">  {/* Sửa số Zalo */}
  Zalo: 0123 456 789
</a>
<a href="https://facebook.com/your-page">  {/* Sửa link FB */}
  Facebook: SanChu
</a>
<a href="mailto:your-email@example.com">  {/* Sửa email */}
  hello@sanchu.vn
</a>
```

### 5️⃣ Thay Đổi Hướng Dẫn Trồng

**File**: `components/growing-guide.tsx`

```tsx
const steps = [
  {
    step: '1',
    title: 'Tiêu đề bước 1',
    description: 'Mô tả chi tiết bước 1',
    icon: '🪴',
  },
  // ... chỉnh sửa các bước khác
];
```

## 🎨 Thay Đổi Fonts

**File**: `app/layout.tsx`

```tsx
import { Poppins, Roboto } from 'next/font/google'  // Đổi fonts

const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-sans' })
const roboto = Roboto({ subsets: ['latin'], weight: '700', variable: '--font-heading' })

// Cập nhật className:
<html className={`${poppins.variable} ${roboto.variable}`}>
```

Danh sách fonts: [Google Fonts](https://fonts.google.com/)

## 🚢 Deploy (Triển Khai)

### Deploy lên Vercel (Dễ nhất)

```bash
# 1. Đẩy code lên GitHub
git push origin main

# 2. Vào https://vercel.com
# 3. Click "New Project" → Select repo → Deploy
# Xong! Tự động deploy khi push code.
```

### Deploy lên Server Khác

```bash
# Build production
npm run build

# Start server
npm start

# Hoặc sử dụng PM2:
pm2 start "npm start" --name "sanchu-landing"
```

## 📊 Tối Ưu SEO Thêm

### 1. Thêm Google Analytics
**File**: `app/layout.tsx`
```tsx
{/* Thêm vào <head> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  // ... GA code
</script>
```

### 2. Thêm Sitemap
Tạo file `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3. Thêm Robots.txt
Tạo file `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## ✅ Checklist Trước Launch

- [ ] Cập nhật tất cả nội dung text
- [ ] Thay đổi hình ảnh sản phẩm
- [ ] Cộng hồ thông tin liên hệ (Zalo, Facebook, Email)
- [ ] Thay đổi giá & ưu đãi
- [ ] Kiểm tra trên mobile (responsive)
- [ ] Kiểm tra tất cả links hoạt động
- [ ] Cập nhật SEO meta tags
- [ ] Test CTAs & forms
- [ ] Deploy & xác minh live
- [ ] Setup Google Analytics

## 🆘 Troubleshooting

### ❌ Lỗi: "Image optimization failed"
**Giải pháp**: Chắc chắn hình ảnh nằm trong folder `/public/`

### ❌ Lỗi: "Module not found"
**Giải pháp**: Chạy `npm install` lại

### ❌ Animations không chạy
**Giải pháp**: Chắc chắn đã cài `framer-motion`:
```bash
npm install framer-motion
```

### ❌ Màu sắc không đúng
**Giải pháp**: Xóa `.next` folder và chạy `npm run dev` lại:
```bash
rm -rf .next
npm run dev
```

## 📚 Tài Liệu Thêm

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 💡 Tips & Tricks

- **Scroll Smooth**: Đã tự động trong `globals.css` (`scroll-behavior: smooth`)
- **Mobile First**: Thiết kế đã responsive, kiểm tra trên điện thoại
- **Performance**: Next.js tự động optimize images, code splitting
- **SEO**: Tất cả semantic HTML & meta tags đã setup

## 🎓 Học Thêm

- Xem cấu trúc file để hiểu logic
- Mỗi component là self-contained (tự quản lý)
- Copy pattern để thêm section mới
- Dùng TailwindCSS classes cho styling

---

**Chúc bạn thành công! 🚀**

Nếu có vấn đề, xem README.md để hiểu thêm về cấu trúc project.
