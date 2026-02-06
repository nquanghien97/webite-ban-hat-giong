import { Hero } from '@/components/hero';
import { Benefits } from '@/components/benefits';
import { Gallery } from '@/components/gallery';
import { Comparison } from '@/components/comparison';
import { OrderForm } from '@/components/order-form';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';
import { ImageSlider } from '@/components/image-slider';
import { FlashOffer } from '@/components/flash-offer';

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
      <Testimonials />
      {/* <Footer /> */}
    </main>
  );
}
