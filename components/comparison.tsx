'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    feature: 'Chất lượng',
    sanchu: 'Chuẩn vị Hàn Quốc, xanh tươi',
    market: 'Không rõ nguồn gốc',
  },
  {
    feature: 'An toàn',
    sanchu: 'Trồng tại nhà, 100% sạch',
    market: 'Dính thuốc hóa học',
  },
  {
    feature: 'Vị ăn',
    sanchu: 'Giòn ngọt, mềm mại',
    market: 'Có khi bị đắng',
  },
  {
    feature: 'Tiện lợi',
    sanchu: 'Trồng dễ, siêu tiện lợi',
    market: 'Phải mua liên tục',
  },
  {
    feature: 'Giá thành',
    sanchu: 'Rẻ hơn dài hạn',
    market: 'Đắt hơn theo thời gian',
  },
  {
    feature: 'Nutrition',
    sanchu: 'Tươi, đầy đủ vitamin',
    market: 'Bị mất vitamin khi vận chuyển',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function Comparison() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            So Sánh: SanChu vs Rau Ngoài Chợ
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tại sao xà lách SanChu tự trồng tốt hơn rau mua ngoài?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="overflow-hidden rounded-2xl border border-border shadow-lg bg-white"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 md:px-6 py-4 text-left font-bold text-base md:text-lg">
                  Tiêu Chí
                </th>
                <th className="px-4 md:px-6 py-4 text-center font-bold text-base md:text-lg">
                  🥬 SanChu
                </th>
                <th className="px-4 md:px-6 py-4 text-center font-bold text-base md:text-lg">
                  Rau Chợ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-primary/5'}
                >
                  <td className="px-4 md:px-6 py-4 font-semibold text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-green-700 font-medium">
                    ✅ {row.sanchu}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-center text-red-600 font-medium">
                    ❌ {row.market}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
