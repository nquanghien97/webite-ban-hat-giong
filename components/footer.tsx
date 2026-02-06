'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">🥬</span> SanChu
            </h3>
            <p className="text-white/70 leading-relaxed">
              Hạt giống xà lách chuẩn vị Hàn Quốc. Trồng tại nhà, sạch, an toàn, giòn ngọt.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h4 className="font-bold mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hạt giống xà lách
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Combo tiết kiệm
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hướng dẫn trồng
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h4 className="font-bold mb-4">Thông Tin</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Chính sách riêng tư
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h4 className="font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Zalo: 0123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📘</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Facebook: SanChu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:hello@sanchu.vn"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  hello@sanchu.vn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-white/70">TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2026 SanChu. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Điều khoản
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Chính sách
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
