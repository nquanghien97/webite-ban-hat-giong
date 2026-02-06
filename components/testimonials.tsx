'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Nguyễn Thị Hoa',
    city: 'Hà Nội',
    rating: 5,
    comment:
      'Mình trồng xà lách SanChu trên ban công nhà chung cư. Sau 30 ngày, có xà lách tươi ngon để ăn. Rất hài lòng! Giá 20.000đ rẻ lắm.',
  },
  {
    name: 'Trần Văn Minh',
    city: 'TP. Hồ Chí Minh',
    rating: 5,
    comment:
      'Lần đầu trồng rau mà thành công. Hạt SanChu này thật tuyệt vời. Gia đình mình ăn mỗi ngày. Sẽ mua thêm 10 túi nữa!',
  },
  {
    name: 'Võ Thị Thanh',
    city: 'Đà Nẵng',
    rating: 5,
    comment:
      'Xà lách tự trồng ăn an toàn hơn, không lo dư lượng thuốc. Hạt giống SanChu mọc đều, lá to, giòn ngọt.',
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Testimonials() {
  return (
    <section className="pb-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Đánh Giá Từ <span className="text-primary">Khách Hàng</span>
          </h2>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div
          className="mt-4 flex flex-col md:flex-row justify-center gap-8 md:gap-12"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
            <p className="text-foreground/70">Khách hàng hài lòng</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-foreground/70">Đánh giá trung bình</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-foreground/70">Giải quyết khiếu nại</p>
          </div>
        </div>
      </div>
    </section>
  );
}
