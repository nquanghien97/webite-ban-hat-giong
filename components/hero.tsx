'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-block bg-accent/20 text-accent rounded-full px-4 py-2 mb-4">
                <p className="text-sm font-semibold">🌱 Trồng Rau Sạch Tại Nhà</p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              Hạt Giống Xà Lách{' '}
              <span className="text-primary">SanChu</span>
              <br />
              Giòn Ngọt Chuẩn Vị Hàn Quốc
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed"
            >
              Trồng tại nhà, sạch và an toàn. Vườn nhỏ hay ban công cũng được. Lá to, xanh tươi, giòn ngọt như nhà hàng chuyên nghiệp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col gap-4 sm:flex-row sm:gap-4 pt-4"
            >
              <a href="#order">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-semibold"
                >
                  Mua Ngay
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/lettuce-hero.png"
              alt="Hạt giống Xà Lách SanChu tươi mát"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
