'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '1',
    title: 'Chuẩn Bị Đất & Chậu',
    description: 'Chuẩn bị đất tơi xốp, chậu hoặc thùng có lỗ thoáng nước. Đất trồng rau hoặc đất vườn đều được.',
    icon: '🪴',
  },
  {
    step: '2',
    title: 'Gieo Hạt Giống',
    description: 'Gieo hạt vào đất, che mỏng một lớp đất và giữ ẩm. Không cần quá sâu, cứ 0.5-1cm là đủ.',
    icon: '🌱',
  },
  {
    step: '3',
    title: 'Giữ Ẩm & Tưới Nước',
    description: 'Tưới nước đều mỗi ngày sáng hoặc chiều. Giữ đất ẩm nhưng không úng nước. Chỉ cần nước mưa cũng được.',
    icon: '💧',
  },
  {
    step: '4',
    title: 'Chăm Sóc & Ánh Sáng',
    description: 'Để nơi có ánh sáng gián tiếp. Xà lách SanChu chịu bóng mát tốt, không cần nắng quá gắt.',
    icon: '☀️',
  },
  {
    step: '5',
    title: 'Thu Hoạch',
    description: 'Sau 25-30 ngày, xà lách sẽ lớn đủ để ăn. Có thể hái từng lá hoặc hái cả cây.',
    icon: '✂️',
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
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function GrowingGuide() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hướng Dẫn <span className="text-primary">Trồng</span> Đơn Giản
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            5 bước đơn giản để có xà lách tươi ngon tại nhà. Bắt đầu trồng hôm nay!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Left content or right content based on index */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:border-primary/30 transition-colors">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center circle */}
                <div className="flex justify-center md:flex-none">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.1,
                    }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl md:text-4xl shadow-lg relative z-10 flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Right content or left content based on index */}
                <div className="flex-1 hidden md:flex md:flex-col md:justify-center" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            💡 Mẹo Trồng Thành Công
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🌿</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Đất Tốt</p>
                <p className="text-sm text-foreground/70">
                  Dùng đất tơi xốp, có thể thêm phân hữu cơ cho kết quả tốt hơn
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">💧</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Tưới Nước Đều</p>
                <p className="text-sm text-foreground/70">
                  Giữ đất ẩm nhưng không bị úng. Sáng hoặc chiều là lúc tốt nhất
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">☀️</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Ánh Sáng Gián Tiếp</p>
                <p className="text-sm text-foreground/70">
                  Xà lách thích bóng mát, nắng gián tiếp giúp lá xanh và giòn
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🐛</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Phòng Sâu Bệnh</p>
                <p className="text-sm text-foreground/70">
                  Kiểm tra lá thường xuyên. Nếu thấy sâu, dùng nước muối loãng phun
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
