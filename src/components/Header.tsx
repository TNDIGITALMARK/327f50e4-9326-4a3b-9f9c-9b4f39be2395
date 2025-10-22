'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Phone, X, Menu } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Top Bar - Social Icons - Desktop Only */}
        <div className="hidden md:flex justify-end items-center py-2 border-b border-gray-100">
          <div className="flex gap-4 text-gray-500">
            <Link
              href="https://instagram.com/stuparici_ro"
              target="_blank"
              className="hover:text-[#FFD966] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://facebook.com/stuparici"
              target="_blank"
              className="hover:text-[#FFD966] transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="https://wa.me/40736024836"
              target="_blank"
              className="hover:text-[#FFD966] transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Optimized sizing */}
          <Link href="/" className="flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/generated/stuparici-logo.png"
              alt="Stupărici Logo"
              width={80}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Modern horizontal layout */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-[#FFC107] font-medium transition-all duration-300 text-[15px] relative group"
              >
                Acasă
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/despre-noi"
                className="text-gray-700 hover:text-[#FFC107] font-medium transition-all duration-300 text-[15px] relative group"
              >
                Despre Noi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/colectii"
                className="text-gray-700 hover:text-[#FFC107] font-medium transition-all duration-300 text-[15px] relative group"
              >
                Colecții
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/comanda-personalizata"
                className="text-gray-700 hover:text-[#FFC107] font-medium transition-all duration-300 text-[15px] relative group"
              >
                Comandă Personalizată
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#FFC107] font-medium transition-all duration-300 text-[15px] relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* CTA Button - Desktop Only */}
          <div className="hidden lg:block">
            <Link
              href="https://wa.me/40736024836"
              target="_blank"
              className="flex items-center gap-2 bg-[#FFD966] hover:bg-[#FFC107] text-[#1E1E1E] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="text-[14px]">Comandă</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Panel - Full Screen */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-[101] lg:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <Link href="/" onClick={toggleMobileMenu}>
            <Image
              src="/generated/stuparici-logo.png"
              alt="Stupărici Logo"
              width={70}
              height={35}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="px-6 py-8 overflow-y-auto h-[calc(100%-80px)]">
          {/* Navigation Links */}
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="block text-gray-800 hover:text-[#FFC107] hover:bg-gray-50 font-medium text-base px-4 py-3 rounded-lg transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                🏠 Acasă
              </Link>
            </li>
            <li>
              <Link
                href="/despre-noi"
                className="block text-gray-800 hover:text-[#FFC107] hover:bg-gray-50 font-medium text-base px-4 py-3 rounded-lg transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                ℹ️ Despre noi
              </Link>
            </li>
            <li>
              <Link
                href="/colectii"
                className="block text-gray-800 hover:text-[#FFC107] hover:bg-gray-50 font-medium text-base px-4 py-3 rounded-lg transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                👗 Colecții
              </Link>
            </li>
            <li>
              <Link
                href="/comanda-personalizata"
                className="block text-gray-800 hover:text-[#FFC107] hover:bg-gray-50 font-medium text-base px-4 py-3 rounded-lg transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                ✨ Comandă personalizată
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-800 hover:text-[#FFC107] hover:bg-gray-50 font-medium text-base px-4 py-3 rounded-lg transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                📞 Contact
              </Link>
            </li>
          </ul>

          {/* Mobile CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="https://wa.me/40736024836"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#FFD966] hover:bg-[#FFC107] text-[#1E1E1E] font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={toggleMobileMenu}
            >
              <Phone className="w-5 h-5" />
              <span className="text-base">Comandă pe WhatsApp</span>
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm font-medium mb-4">Urmărește-ne</p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/stuparici_ro"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-[#FFD966] rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/stuparici"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-[#FFD966] rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/40736024836"
                target="_blank"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-[#FFD966] rounded-full transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
