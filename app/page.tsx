import { Hero } from '@/components/hero';
import { Benefits } from '@/components/benefits';
import { Gallery } from '@/components/gallery';
import { Comparison } from '@/components/comparison';
import { OrderForm } from '@/components/order-form';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';
import { PromoBanner } from '@/components/promo-banner';

export default function Page() {
  return (
    <main>
      <Hero />
      <PromoBanner />
      <Benefits />
      <Gallery />
      <Comparison />
      <section id="order" className="py-8 bg-gray-50">
        <OrderForm />
      </section>
      <Testimonials />
      <Footer />
    </main>
  );
}
