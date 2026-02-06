import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Hạt Giống Xà Lách SanChu Hàn Quốc - Trồng Tại Nhà An Toàn, Sạch',
  description: 'Hạt giống chuẩn Xà Lách SanChu Hàn Quốc - Giòn ngọt, tươi mát. Trồng tại nhà, ban công đều được. An toàn, không thuốc hóa học. Giá chỉ 20.000đ/túi. Mua ngay!',
  keywords: 'hạt giống xà lách sanchu, trồng xà lách tại nhà, xà lách cuốn thịt nướng, hạt giống rau sạch',
  openGraph: {
    title: 'Hạt Giống Xà Lách SanChu Hàn Quốc',
    description: 'Hạt giống chuẩn Xà Lách SanChu - Giòn ngọt, tươi mát, an toàn 100%',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#35A44B',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
