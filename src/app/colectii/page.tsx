export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Mock product data - Romanian children's clothing
const products = [
  {
    id: 1,
    name: 'Rochița cu albinuțe brodate',
    price: 89,
    category: 'Rochii',
    sizes: ['2-3 ani', '4-5 ani', '6-7 ani'],
    image: '/generated/yellow-dress.png',
    description: 'Rochie galbenă cu albinuțe brodate manual pe buzunare'
  },
  {
    id: 2,
    name: 'Salopetă cu dungi',
    price: 75,
    category: 'Pantaloni',
    sizes: ['6-12 luni', '12-18 luni', '18-24 luni'],
    image: '/generated/striped-romper.png',
    description: 'Salopetă din bumbac organic cu dungi'
  },
  {
    id: 3,
    name: 'Body cu nori',
    price: 45,
    category: 'Body-uri',
    sizes: ['0-3 luni', '3-6 luni', '6-9 luni'],
    image: '/generated/blue-onesie.png',
    description: 'Body albastru cu model de nori, 100% bumbac'
  },
  {
    id: 4,
    name: 'Căciulițe tricotate',
    price: 55,
    category: 'Accesorii',
    sizes: ['Unic'],
    image: '/generated/knit-hats.png',
    description: 'Set de căciulițe colorate tricotate manual'
  },
  {
    id: 5,
    name: 'Pantaloni comozi',
    price: 65,
    category: 'Pantaloni',
    sizes: ['2-3 ani', '4-5 ani', '6-7 ani'],
    image: '/generated/yellow-dress.png',
    description: 'Pantaloni din bumbac organic cu broderie personalizabilă'
  },
  {
    id: 6,
    name: 'Rochie de vară florală',
    price: 95,
    category: 'Rochii',
    sizes: ['3-4 ani', '5-6 ani', '7-8 ani'],
    image: '/generated/blue-onesie.png',
    description: 'Rochie ușoară de vară cu flori brodate'
  },
  {
    id: 7,
    name: 'Body personalizat',
    price: 50,
    category: 'Body-uri',
    sizes: ['0-3 luni', '3-6 luni', '6-12 luni'],
    image: '/generated/striped-romper.png',
    description: 'Body cu broderie personalizabilă cu nume'
  },
  {
    id: 8,
    name: 'Hăinuță tricotată',
    price: 85,
    category: 'Haine tricotate',
    sizes: ['6-12 luni', '12-24 luni'],
    image: '/generated/knit-hats.png',
    description: 'Jerseu tricotat manual din fire naturale'
  },
]

const categories = ['Toate', 'Rochii', 'Pantaloni', 'Body-uri', 'Accesorii', 'Haine tricotate']

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[#FFD966] py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-['Comfortaa'] text-4xl font-bold text-[#1E1E1E] mb-3">Colecțiile Noastre</h1>
          <p className="text-[#1E1E1E] text-lg max-w-2xl mx-auto">
            Descoperă haine handmade create cu dragoste pentru cei mici
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-[#FFD966] text-[#1E1E1E] font-medium hover:bg-[#FFD966] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs font-semibold text-[#FFC107] uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#1E1E1E]">{product.price} RON</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-2">Mărimi: {product.sizes.join(', ')}</p>
                    <button className="w-full bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-semibold py-2.5 rounded-full transition-colors">
                      Comandă
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="bg-[#FFF9E6] rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="text-5xl mb-4">🐝</div>
            <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-3">
              Nu ai găsit ceea ce căutai?
            </h2>
            <p className="text-gray-700 mb-6">
              Creează o comandă personalizată și lasă-ne să realizăm visul tău pentru cel mic!
            </p>
            <a
              href="/comanda-personalizata"
              className="inline-block bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Comandă personalizată
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
