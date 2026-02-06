'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    src: '/homegrown-lettuce.jpg',
    alt: 'Xà lách trồng tại nhà',
    title: 'Trồng tại nhà',
  },
  {
    src: '/lettuce-wraps.jpg',
    alt: 'Xà lách cuốn thịt nướng',
    title: 'Cuốn thịt nướng',
  },
  {
    src: '/lettuce-salad.jpg',
    alt: 'Salad xà lách tươi',
    title: 'Salad tươi ngon',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export function Gallery() {
  return (
    <section className="pb-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hình Ảnh <span className="text-primary">Thực Tế</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Xem những cách sử dụng đa dạng của xà lách SanChu trong đời sống hàng ngày
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-white font-bold text-lg">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
