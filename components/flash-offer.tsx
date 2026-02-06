'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface FlashOfferProps {
  options?: 'button' | 'clock'
}

export function FlashOffer({ options = 'button' }: FlashOfferProps) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 15, seconds: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds -= 1
        } else {
          if (minutes > 0) {
            minutes -= 1
            seconds = 59
          } else {
            if (hours > 0) {
              hours -= 1
              minutes = 59
              seconds = 59
            }
          }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-4 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main offer container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Top text - Super offer */}
          <div className="text-center flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block"
            >
              <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                🔥 Siêu ưu đãi chỉ hôm nay
              </span>
            </motion.div>

            {/* Savings badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-400 px-6 py-3 rounded-2xl">
                <span className="text-sm font-semibold text-gray-700">Tiết kiệm</span>
                <span className="text-3xl font-bold text-orange-600">30%</span>
              </div>
            </motion.div>
          </div>

          {/* Price comparison */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 sm:gap-6"
          >
            {/* Old price */}
            <div className="text-center">
              <p className="text-xl font-bold text-gray-400 mb-1">Giá cũ</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">
                140.000đ
              </p>
              <p className="text-xl font-bold text-gray-400 mt-1">/5 gói hạt giống</p>
            </div>

            {/* New price - highlighted */}
            <motion.div
              className="text-center"
              animate={isVisible ? { scale: [0.95, 1.05, 1] } : { scale: 0.95 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
              }}
            >
              <p className="text-xl font-bold mb-1">Giá mới</p>
              <motion.p
                className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"
                animate={isVisible ? { scale: [1, 1.02, 1] } : { scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                }}
              >
                100.000đ
              </motion.p>
              <motion.p
                className="text-xl font-bold text-gray-600 mt-1"
                animate={isVisible ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                }}
              >
                /5 gói hạt giống
              </motion.p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          {options === 'button' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const orderSection = document.getElementById('order')
                  orderSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Đặt Hàng Ngay
              </motion.button>
            </motion.div>
          )}

          {options === 'clock' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="bg-white px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-4">
                <div>
                  <span className="text-red-600">⏰</span>
                  <span className="text-gray-700">Ưu đãi kết thúc trong:</span>
                </div>
                <span className="text-red-600 text-xl">{timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
