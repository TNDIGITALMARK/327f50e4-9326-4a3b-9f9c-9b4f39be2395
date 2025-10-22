export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Matching design reference exactly */}
      <section className="bg-[#FFD966] relative py-16 px-4 overflow-hidden">
        {/* Decorative Cloud Illustrations */}
        <div className="absolute top-8 left-12 text-white text-6xl opacity-90">☁️</div>
        <div className="absolute top-4 right-16 text-white text-5xl opacity-80">☁️</div>
        <div className="absolute bottom-8 left-1/4 text-white text-4xl opacity-70">☁️</div>
        <div className="absolute top-12 right-1/3 text-white text-3xl opacity-60">☁️</div>

        {/* Decorative Elements */}
        <div className="absolute top-16 left-1/4 text-4xl">🌼</div>
        <div className="absolute bottom-12 right-1/4 text-3xl">🌻</div>
        <div className="absolute top-1/3 right-12 text-3xl">🎁</div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-['Comfortaa'] text-3xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-4 max-w-4xl mx-auto">
            BINE AI VENIT ÎN STUPUL PLIN DE
            <br />
            HAINE VESELE PENTRU CEI MICI!
          </h1>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Yellow Dress */}
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-3 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src="/generated/yellow-dress.png"
                  alt="Rochița cu albinuțe brodate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Striped Romper */}
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-3 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src="/generated/striped-romper.png"
                  alt="Salopetă cu dungi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Blue Onesie */}
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-3 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src="/generated/blue-onesie.png"
                  alt="Body albastru cu nori"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Knit Hats */}
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-3 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src="/generated/knit-hats.png"
                  alt="Căciulițe tricotate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards with Bee Theme */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Handmade Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🐝</div>
              <h3 className="font-['Comfortaa'] text-xl font-bold text-[#1E1E1E] mb-3">
                Realizat cu dragoste
                <br />
                pentru cei mici
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fiecare piesă este cusută manual cu atenție la detalii și materiale naturale, pentru confortul copilului tău.
              </p>
            </div>

            {/* Custom Order Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">🐝</div>
              <h3 className="font-['Comfortaa'] text-xl font-bold text-[#1E1E1E] mb-3">
                Comandă personalizată
              </h3>
              <Link
                href="/comanda-personalizata"
                className="inline-block bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-semibold px-6 py-2.5 rounded-full transition-colors mt-2"
              >
                Creează unica!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-center text-[#1E1E1E] mb-8">Colecții</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Collection 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/generated/yellow-dress.png"
                  alt="Vara Albinuțelor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E]">Vara Albinuțelor</h4>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/generated/blue-onesie.png"
                  alt="Vara Albinuțelor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E]">Vara Albinuțelor</h4>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src="/generated/knit-hats.png"
                  alt="Sezonul Pufos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E]">Sezonul Pufos</h4>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/colectii"
              className="inline-block bg-[#1E1E1E] hover:bg-[#333333] text-white font-semibold px-8 py-3 rounded-full transition-colors"
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
