'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '🌞',
    title: 'Thu hoạch nhanh chóng',
    description: 'Chỉ sau 25-30 ngày là có thể thu hoạch và ăn được quanh năm',
  },
  {
    icon: '🌿',
    title: 'Trồng tại nhà – An toàn',
    description: 'Sạch, không lo thuốc hóa học',
  },
  {
    icon: '🏠',
    title: 'Siêu tiện lợi',
    description: 'Vườn nhỏ, ban công cũng trồng được',
  },
  {
    icon: '🥬',
    title: 'Lá to, xanh tươi',
    description: 'Mềm nhưng giòn, ăn ngon ngọt, dễ chế biến',
  },
  {
    icon: '🍲',
    title: 'Đa dụng',
    description: 'Ăn sống, cuốn thịt nướng, salad đều hợp',
  },
  {
    icon: '🌱',
    title: 'Dễ chăm sóc',
    description: 'Hợp khí hậu, trồng chậu hay đất vườn đều tốt',
  },
  {
    icon: '💪',
    title: 'Tốt cho sức khỏe',
    description: 'Cung cấp vitamin A, C, chất chống oxy hoá',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Benefits() {
  return (
    <section className="relative py-4 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tại Sao Nên Chọn Hạt Giống Xà Lách <span className="text-primary">SanChu</span>?
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex group bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
