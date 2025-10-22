'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Phone, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar - Social Icons - Reduced padding */}
        <div className="flex justify-end items-center py-1.5 border-b border-gray-100">
          <div className="flex gap-3 text-gray-600">
            <Link href="https://instagram.com/stuparici_ro" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://facebook.com/stuparici" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </Link>
            <Link href="https://wa.me/40736024836" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Main Navigation - Reduced padding */}
        <nav className="flex items-center justify-between py-2.5">
          {/* Logo - Smaller size, higher z-index for mobile menu overlay */}
          <Link href="/" className="flex items-center z-[60] relative">
            <Image
              src="/generated/stuparici-logo.png"
              alt="Stupărici Logo"
              width={90}
              height={45}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop - Reduced spacing and font size */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[14px]">
                Acasă
              </Link>
            </li>
            <li>
              <Link href="/despre-noi" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[14px]">
                Despre Noi
              </Link>
            </li>
            <li>
              <Link href="/colectii" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[14px]">
                Colecții
              </Link>
            </li>
            <li>
              <Link
                href="/comanda-personalizata"
                className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[14px]"
              >
                Comandă Personalizată
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[14px]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button - Higher z-index to stay above menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg z-[60] relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Slide-in */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20">
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className="block text-gray-800 hover:text-[#FFC107] font-medium text-lg transition-colors"
                onClick={toggleMobileMenu}
              >
                Acasă
              </Link>
            </li>
            <li>
              <Link
                href="/despre-noi"
                className="block text-gray-800 hover:text-[#FFC107] font-medium text-lg transition-colors"
                onClick={toggleMobileMenu}
              >
                Despre noi
              </Link>
            </li>
            <li>
              <Link
                href="/colectii"
                className="block text-gray-800 hover:text-[#FFC107] font-medium text-lg transition-colors"
                onClick={toggleMobileMenu}
              >
                Colecții
              </Link>
            </li>
            <li>
              <Link
                href="/comanda-personalizata"
                className="block text-gray-800 hover:text-[#FFC107] font-medium text-lg transition-colors"
                onClick={toggleMobileMenu}
              >
                Comandă personalizată
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-800 hover:text-[#FFC107] font-medium text-lg transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu - WhatsApp CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="https://wa.me/40736024836"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#FFD966] hover:bg-[#FFC107] text-[#1E1E1E] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Comandă pe WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
