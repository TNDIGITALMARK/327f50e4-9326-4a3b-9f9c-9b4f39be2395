export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingWhatsApp />

      {/* Hero Section - Enhanced with animations */}
      <section className="bg-gradient-to-br from-[#FFD966] via-[#FFE082] to-[#FFD966] bg-gradient-animated relative py-12 md:py-16 px-4 overflow-hidden">
        {/* Decorative Cloud Illustrations with float animations */}
        <div className="absolute top-8 left-4 md:left-12 text-white text-4xl md:text-6xl opacity-90 animate-float-slow">☁️</div>
        <div className="absolute top-4 right-8 md:right-16 text-white text-3xl md:text-5xl opacity-80 animate-float" style={{animationDelay: '0.5s'}}>☁️</div>
        <div className="absolute bottom-8 left-1/4 text-white text-2xl md:text-4xl opacity-70 animate-float-slow" style={{animationDelay: '1s'}}>☁️</div>
        <div className="absolute top-12 right-1/3 text-white text-xl md:text-3xl opacity-60 animate-float" style={{animationDelay: '1.5s'}}>☁️</div>

        {/* Decorative Elements with gentle bounce */}
        <div className="absolute top-16 left-1/4 text-3xl md:text-4xl animate-gentle-bounce" style={{animationDelay: '0.3s'}}>🌼</div>
        <div className="absolute bottom-12 right-1/4 text-2xl md:text-3xl animate-gentle-bounce" style={{animationDelay: '0.6s'}}>🌻</div>
        <div className="absolute top-1/3 right-8 md:right-12 text-2xl md:text-3xl animate-gentle-bounce" style={{animationDelay: '0.9s'}}>🎁</div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-['Comfortaa'] text-2xl sm:text-3xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-4 max-w-4xl mx-auto animate-fade-in-up px-4">
            BINE AI VENIT ÎN STUPUL PLIN DE
            <br />
            HAINE VESELE PENTRU CEI MICI!
          </h1>

          {/* WhatsApp CTA Button */}
          <Link
            href="https://wa.me/40736024836"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#333] text-white font-semibold px-8 py-3 md:py-4 rounded-full transition-all duration-300 mt-6 shadow-lg hover:shadow-2xl hover-lift animate-scale-in"
            style={{animationDelay: '0.3s'}}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Comandă pe WhatsApp</span>
          </Link>
        </div>
      </section>

      {/* Product Showcase - Enhanced with animations */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-['Comfortaa'] text-2xl md:text-3xl font-bold text-center text-[#1E1E1E] mb-8 animate-fade-in-up">
            Produse Populare
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Yellow Dress */}
            <div className="bg-white rounded-2xl shadow-md p-3 md:p-4 card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="aspect-square relative mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/generated/yellow-dress.png"
                  alt="Rochița cu albinuțe brodate"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-800 group-hover:text-[#FFC107] transition-colors">Rochița cu albinuțe</p>
            </div>

            {/* Striped Romper */}
            <div className="bg-white rounded-2xl shadow-md p-3 md:p-4 card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="aspect-square relative mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/generated/striped-romper.png"
                  alt="Salopetă cu dungi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-800 group-hover:text-[#FFC107] transition-colors">Salopetă cu dungi</p>
            </div>

            {/* Blue Onesie */}
            <div className="bg-white rounded-2xl shadow-md p-3 md:p-4 card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="aspect-square relative mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/generated/blue-onesie.png"
                  alt="Body albastru cu nori"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-800 group-hover:text-[#FFC107] transition-colors">Body cu nori</p>
            </div>

            {/* Knit Hats */}
            <div className="bg-white rounded-2xl shadow-md p-3 md:p-4 card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="aspect-square relative mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/generated/knit-hats.png"
                  alt="Căciulițe tricotate"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center text-sm md:text-base font-medium text-gray-800 group-hover:text-[#FFC107] transition-colors">Căciulițe tricotate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards with Bee Theme - Enhanced */}
      <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Handmade Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center hover:shadow-2xl card-interactive hover-lift animate-slide-in-left group">
              <div className="text-5xl md:text-6xl mb-4 animate-wiggle group-hover:scale-110 transition-transform duration-300">🐝</div>
              <h3 className="font-['Comfortaa'] text-lg md:text-xl font-bold text-[#1E1E1E] mb-3">
                Realizat cu dragoste
                <br />
                pentru cei mici
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Fiecare piesă este cusută manual cu atenție la detalii și materiale naturale, pentru confortul copilului tău.
              </p>
            </div>

            {/* Custom Order Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center hover:shadow-2xl card-interactive hover-lift animate-slide-in-right group">
              <div className="text-5xl md:text-6xl mb-4 animate-wiggle group-hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>🐝</div>
              <h3 className="font-['Comfortaa'] text-lg md:text-xl font-bold text-[#1E1E1E] mb-3">
                Comandă personalizată
              </h3>
              <Link
                href="/comanda-personalizata"
                className="inline-block bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-semibold px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 mt-2 shadow-md hover:shadow-lg btn-press"
              >
                Creează unica!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview - Enhanced */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-['Comfortaa'] text-2xl md:text-3xl font-bold text-center text-[#1E1E1E] mb-8 animate-fade-in-up">Colecții</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Collection 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src="/generated/yellow-dress.png"
                  alt="Vara Albinuțelor"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD966]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-base md:text-lg text-[#1E1E1E] group-hover:text-[#FFC107] transition-colors">Vara Albinuțelor</h4>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src="/generated/blue-onesie.png"
                  alt="Nori și Vise"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#87CEEB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-base md:text-lg text-[#1E1E1E] group-hover:text-[#FFC107] transition-colors">Nori și Vise</h4>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden card-interactive hover-lift group animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src="/generated/knit-hats.png"
                  alt="Sezonul Pufos"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#90EE90]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-base md:text-lg text-[#1E1E1E] group-hover:text-[#FFC107] transition-colors">Sezonul Pufos</h4>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              href="/colectii"
              className="inline-block bg-[#1E1E1E] hover:bg-[#333333] text-white font-semibold px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover-lift btn-press"
            >
              Vezi toate colecțiile
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
