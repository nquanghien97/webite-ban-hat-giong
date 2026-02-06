'use client';

import { motion } from 'framer-motion';
import { Zap, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PromoBanner() {
  const offers = [
    {
      icon: '🎁',
      title: '5 Gói Xà Lách',
      original: '100K',
      price: '100K',
      badge: 'MIỄN PHÍ SHIP',
    },
    {
      icon: '🌟',
      title: '10 Gói Xà Lách',
      original: '150K',
      price: '150K',
      badge: 'MIỄN PHÍ SHIP',
      highlight: true,
    },
    {
      icon: '👑',
      title: '20 Gói Xà Lách',
      original: '250K',
      price: '250K',
      badge: 'MIỄN PHÍ SHIP',
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-y border-green-200">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="w-6 h-6 text-amber-500" />
            <span className="text-sm md:text-base font-bold text-amber-600 uppercase tracking-wide">
              Khuyến Mãi Hôm Nay
            </span>
            <Zap className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Giá Ưu Đãi Đặc Biệt
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Đặt mua ngay để nhận được giá tốt nhất và miễn phí vận chuyển
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 md:p-8 text-center transition-all hover:shadow-lg ${offer.highlight
                ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-900 border border-green-200'
                }`}
            >
              {/* Badge */}
              {offer.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Bán Chạy Nhất
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4">{offer.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{offer.title}</h3>

              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold">{offer.price}</span>
                  <span className="text-lg">đ</span>
                </div>
              </div>

              {/* Shipping Badge */}
              <div className="flex items-center justify-center gap-2 mb-6 bg-green-100 bg-opacity-20 py-2 px-3 rounded-lg">
                <Truck className={`w-4 h-4 ${offer.highlight ? 'text-white' : 'text-green-600'}`} />
                <span className={`text-sm font-semibold ${offer.highlight ? 'text-white' : 'text-green-600'}`}>
                  {offer.badge}
                </span>
              </div>
              <a href="#order">
                <Button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${offer.highlight
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                >
                  Đặt Mua Ngay
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-green-200"
        >
          <p className="text-gray-700 mb-4">
            ✓ Hàng Chính Hãng &nbsp;&nbsp;✓ Đảm Bảo Chất Lượng &nbsp;&nbsp;✓ Hỗ Trợ 24/7
          </p>
          <p className="text-sm text-gray-600">
            Số lượng hạn chế, đặt mua ngay để tránh hết hàng!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
