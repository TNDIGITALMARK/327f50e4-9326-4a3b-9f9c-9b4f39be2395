'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar - Social Icons */}
        <div className="flex justify-end items-center py-2 border-b border-gray-100">
          <div className="flex gap-3 text-gray-600">
            <Link href="https://instagram.com/stuparici_ro" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://facebook.com/stuparici" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://wa.me/40700000000" target="_blank" className="hover:text-[#FFD966] transition-colors">
              <Phone className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/generated/stuparici-logo.png"
              alt="Stupărici Logo"
              width={120}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[15px]">
                Acasă
              </Link>
            </li>
            <li>
              <Link href="/despre-noi" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[15px]">
                Despre noi
              </Link>
            </li>
            <li>
              <Link href="/colectii" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[15px]">
                Colecții
              </Link>
            </li>
            <li>
              <Link
                href="/comanda-personalizata"
                className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[15px]"
              >
                Comandă personalizată
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-[#FFC107] font-medium transition-colors text-[15px]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
