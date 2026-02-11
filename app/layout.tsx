import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'
import Script from "next/script"
import FacebookPixel from "@/components/FacebookPixel"

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
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];
                t=b.createElement(e);t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
