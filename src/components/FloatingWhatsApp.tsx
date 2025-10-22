'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Show button after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Stop pulsing after 5 seconds to avoid being annoying
    const pulseTimer = setTimeout(() => {
      setIsPulsing(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(pulseTimer)
    }
  }, [])

  return (
    <Link
      href="https://wa.me/40736024836"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${isPulsing ? 'animate-pulse-glow' : ''}`}
      aria-label="Comandă pe WhatsApp"
    >
      <Phone className="w-7 h-7 md:w-8 md:h-8" />

      {/* Ripple effect rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
    </Link>
  )
}
