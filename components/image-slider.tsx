'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const sliderData = [
  {
    id: 8,
    main: '/sc8.jpg',
    alt: '5 gói hạt giống xà lách trồng tại nhà',
    description: 'Xà lách tươi được trồng tại nhà, sạch sẽ và an toàn',
  },
  {
    id: 1,
    main: '/sc1.jpg',
    alt: 'Xà lách trồng tại nhà',
    description: 'Xà lách tươi được trồng tại nhà, sạch sẽ và an toàn',
  },
  {
    id: 2,
    main: '/sc2.jpg',
    alt: 'Xà lách tươi sống động',
    description: 'Xà lách SanChu với màu sắc tươi sống, dinh dưỡng cao',
  },
  {
    id: 3,
    main: '/sc3.jpg',
    alt: 'Salad xà lách',
    description: 'Xà lách dùng để làm các món salad ngon lành',
  },
  {
    id: 4,
    main: '/sc4.jpg',
    alt: 'Xà lách cuốn',
    description: 'Xà lách dùng để cuốn với các loại thịt nướng',
  },
  {
    id: 5,
    main: '/sc5.jpg',
    alt: 'Xà lách trong chậu',
    description: 'Xà lách trồng trong chậu, dễ chăm sóc và bảo quản',
  },
  {
    id: 6,
    main: '/sc6.jpg',
    alt: 'Xà lách trong chậu',
    description: 'Xà lách trồng trong chậu, dễ chăm sóc và bảo quản',
  },
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Slider */}
        <div className="relative w-full mb-6">
          <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[16/9] overflow-hidden rounded-2xl bg-gray-200">
            <Image
              src={sliderData[currentIndex].main || "/placeholder.svg"}
              alt={sliderData[currentIndex].alt}
              fill
              className="w-full h-full"
              priority
            />

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3 md:gap-4 justify-center md:justify-start overflow-x-auto pb-2">
          {sliderData.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                index === currentIndex
                  ? 'border-green-600 shadow-lg scale-105'
                  : 'border-gray-200 opacity-75 hover:opacity-100'
              }`}
            >
              <Image
                src={slide.main || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
