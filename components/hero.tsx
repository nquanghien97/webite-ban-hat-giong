'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div
            className="space-y-2"
          >
            <div>
              <Image src="/banner.png" alt="Banner SanChu" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
