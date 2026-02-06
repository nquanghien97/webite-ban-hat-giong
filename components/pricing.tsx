'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Pricing() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Giá & Ưu Đãi
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Giá chỉ 20.000đ, ưu đãi hạn chế cho khách hàng sớm
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-primary/20 max-w-md w-full"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block bg-accent/20 text-accent rounded-full px-4 py-2 mb-4"
              >
                <p className="text-sm font-bold">🔥 Ưu Đãi HOT</p>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                1 Túi Hạt Giống
              </h3>
              <p className="text-foreground/70 mb-6">Hạt Giống Xà Lách SanChu Chuẩn Vị Hàn Quốc</p>
            </div>

            <div className="mb-8 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold text-primary">
                  20.000đ
                </span>
                <span className="text-lg text-foreground/60 line-through">
                  25.000đ
                </span>
              </div>
              <p className="text-sm text-accent font-semibold mt-2">Tiết kiệm 5.000đ (20%)</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xl">✅</span>
                <span className="text-foreground">Hạt giống chuẩn chất lượng</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📖</span>
                <span className="text-foreground">Hướng dẫn trồng chi tiết</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <span className="text-foreground">Hỗ trợ tận tình 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <span className="text-foreground">Trồng được sau 30 ngày</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-base font-bold mb-4">
              🛒 Mua Ngay - 20.000đ
            </Button>

            <p className="text-xs text-center text-foreground/60">
              Số lượng hạn chế | Chỉ còn ít sản phẩm để ưu đãi này
            </p>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl mb-3">🎁</div>
            <h4 className="font-bold text-foreground mb-2">Quà Tặng Kèm</h4>
            <p className="text-foreground/70 text-sm">
              Nhận combo hạt giống khi mua lượng lớn
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📦</div>
            <h4 className="font-bold text-foreground mb-2">Giao Hàng Nhanh</h4>
            <p className="text-foreground/70 text-sm">
              Giao trong 1-2 ngày tại TP Hồ Chí Minh
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✨</div>
            <h4 className="font-bold text-foreground mb-2">Đảm Bảo Chất Lượng</h4>
            <p className="text-foreground/70 text-sm">
              Hoàn tiền 100% nếu không hài lòng
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
