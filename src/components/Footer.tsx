'use client'

import Link from 'next/link'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Decorative Bee Illustrations */}
      <div className="absolute top-4 left-8 opacity-30">
        <div className="text-[#FFD966] text-4xl">🐝</div>
      </div>
      <div className="absolute bottom-4 right-12 opacity-30">
        <div className="text-[#FFD966] text-3xl">🌼</div>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-20">
        <div className="text-[#FFD966] text-2xl">🐝</div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-['Comfortaa'] font-bold text-lg mb-4 text-[#FFD966]">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+40 736 024 836</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@stuparici.ro" className="hover:text-[#FFD966] transition-colors">
                  contact@stuparici.ro
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Comfortaa'] font-bold text-lg mb-4 text-[#FFD966]">Link-uri Rapide</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/despre-noi" className="hover:text-[#FFD966] transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/colectii" className="hover:text-[#FFD966] transition-colors">
                  Colecții
                </Link>
              </li>
              <li>
                <Link href="/comanda-personalizata" className="hover:text-[#FFD966] transition-colors">
                  Comandă Personalizată
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD966] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-['Comfortaa'] font-bold text-lg mb-4 text-[#FFD966]">Urmărește-ne</h4>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/stuparici_ro"
                target="_blank"
                className="w-10 h-10 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/stuparici"
                target="_blank"
                className="w-10 h-10 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/40736024836"
                target="_blank"
                className="w-10 h-10 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">@stuparici_ro</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Stupărici. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
