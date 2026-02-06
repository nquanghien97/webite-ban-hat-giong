import { Hero } from '@/components/hero';
import { Benefits } from '@/components/benefits';
import { Gallery } from '@/components/gallery';
import { Comparison } from '@/components/comparison';
import { OrderForm } from '@/components/order-form';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';
import { ImageSlider } from '@/components/image-slider';
import { FlashOffer } from '@/components/flash-offer';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <Hero />
      <FlashOffer />
      <ImageSlider />
      <Benefits />
      {/* <Gallery /> */}
      <Comparison />
      <section id="order" className="pb-4 bg-gray-50">
        <OrderForm />
      </section>
      <section className="mb-2 flex justify-center">
        <Image src="/huong-dan-trong.png" alt="Hướng dẫn trồng" width={800} height={1200} />
      </section>
      <Testimonials />
      {/* <Footer /> */}
      <div className="fixed bottom-0 left-0 right-0 ">
        <div className="font-bold flex gap-1 p-2">
          <div className="w-2/3 text-center text-xl bg-red-600 rounded-full py-1 px-2">
            <span className="inline-block text-white px-6 text-lg">
              Ưu đãi chỉ hôm nay
            </span>
            <div className="text-center text-white">
              <p className="text-xl font-bold">
                100.000đ /5 gói
              </p>
            </div>
          </div>
          <a href="#order" className="w-1/3 flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
            Mua Ngay
          </a>
        </div>
      </div>
    </main>
  );
}
