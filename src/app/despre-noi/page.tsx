export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[#FFD966] py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-['Comfortaa'] text-4xl font-bold text-[#1E1E1E] mb-3">Despre Noi</h1>
          <p className="text-[#1E1E1E] text-lg max-w-2xl mx-auto">
            Povestea Stupărici - creat cu dragoste pentru cei mici
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🐝</div>
            <h2 className="font-['Comfortaa'] text-3xl font-bold text-[#1E1E1E] mb-4">
              Povestea Noastră
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong className="text-[#1E1E1E]">Stupărici</strong> a început din dorința de a oferi copiilor haine unice,
              create cu dragoste și atenție la fiecare detaliu. Ca și albinuțele harnice din stup, noi lucrăm cu pasiune
              pentru a aduce culoare și bucurie în garderoba celor mici.
            </p>

            <p>
              Fiecare piesă este <strong className="text-[#1E1E1E]">cusută manual</strong>, folosind materiale naturale
              și tehnici tradiționale de broderie. Credem că hainele pentru copii trebuie să fie nu doar frumoase,
              ci și confortabile, sigure și durabile.
            </p>

            <p>
              Inspirația noastră vine din <strong className="text-[#1E1E1E]">lumea copilăriei și a naturii</strong> -
              flori colorate, albinuțe vesele, nori pufoși și detalii jucăușe care aduc zâmbete pe fețele copiilor.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-center text-[#1E1E1E] mb-12">
            Ce Ne Face Speciali
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-5xl mb-4">🌼</div>
              <h3 className="font-['Comfortaa'] font-bold text-xl text-[#1E1E1E] mb-3">
                Handmade cu dragoste
              </h3>
              <p className="text-gray-600 text-sm">
                Fiecare piesă este cusută manual, cu atenție la detalii și finisaje perfecte.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-['Comfortaa'] font-bold text-xl text-[#1E1E1E] mb-3">
                Materiale naturale
              </h3>
              <p className="text-gray-600 text-sm">
                Folosim doar bumbac organic, in natural și fire certificate pentru pielea sensibilă a copiilor.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-['Comfortaa'] font-bold text-xl text-[#1E1E1E] mb-3">
                Personalizare unică
              </h3>
              <p className="text-gray-600 text-sm">
                Oferim posibilitatea de a personaliza fiecare piesă cu broderie sau detalii speciale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-center text-[#1E1E1E] mb-12">
            Procesul Nostru de Creație
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-[#FFD966] rounded-full flex items-center justify-center text-3xl font-bold text-[#1E1E1E] mx-auto md:mx-0">
                  1
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-['Comfortaa'] font-bold text-2xl text-[#1E1E1E] mb-3">
                  Selectarea materialelor
                </h3>
                <p className="text-gray-600">
                  Alegem cu grijă materiale naturale certificate, plăcute la atingere și sigure pentru copii.
                  Fiecare țesătură este testată pentru confort și durabilitate.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 order-2 md:order-1">
                <h3 className="font-['Comfortaa'] font-bold text-2xl text-[#1E1E1E] mb-3">
                  Croirea și cusutul
                </h3>
                <p className="text-gray-600">
                  Fiecare piesă este croită și cusută manual, cu atenție la fiecare cusătură.
                  Folosim tehnici tradiționale combinate cu modele moderne.
                </p>
              </div>
              <div className="md:w-1/3 order-1 md:order-2">
                <div className="w-20 h-20 bg-[#FFD966] rounded-full flex items-center justify-center text-3xl font-bold text-[#1E1E1E] mx-auto">
                  2
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-[#FFD966] rounded-full flex items-center justify-center text-3xl font-bold text-[#1E1E1E] mx-auto md:mx-0">
                  3
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-['Comfortaa'] font-bold text-2xl text-[#1E1E1E] mb-3">
                  Broderia și finisajele
                </h3>
                <p className="text-gray-600">
                  Adăugăm detaliile speciale - broderii handmade, aplicații decorative și finisaje care
                  fac fiecare piesă unică și personală.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#FFF9E6]">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="text-6xl mb-6">🐝</div>
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-[#1E1E1E] mb-4">
            Hai în stupul nostru!
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Descoperă colecțiile noastre sau creează o comandă personalizată pentru cel mic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/colectii"
              className="inline-block bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Vezi Colecțiile
            </a>
            <a
              href="/comanda-personalizata"
              className="inline-block bg-[#1E1E1E] hover:bg-[#333333] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Comandă Personalizată
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
