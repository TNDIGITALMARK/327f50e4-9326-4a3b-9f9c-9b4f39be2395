export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function CustomOrderPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[#FFD966] py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-['Comfortaa'] text-4xl font-bold text-[#1E1E1E] mb-3">
            Comandă Personalizată
          </h1>
          <p className="text-[#1E1E1E] text-lg max-w-2xl mx-auto">
            Creează o haină unică pentru copilul tău, cusută cu dragoste și atenție la detalii
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-['Comfortaa'] text-2xl font-bold text-center text-[#1E1E1E] mb-8">
            Cum funcționează?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD966] rounded-full flex items-center justify-center text-2xl font-bold text-[#1E1E1E] mx-auto mb-4">
                1
              </div>
              <h3 className="font-['Comfortaa'] font-semibold text-lg mb-2">Completează formularul</h3>
              <p className="text-sm text-gray-600">Spune-ne ce îți dorești</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD966] rounded-full flex items-center justify-center text-2xl font-bold text-[#1E1E1E] mx-auto mb-4">
                2
              </div>
              <h3 className="font-['Comfortaa'] font-semibold text-lg mb-2">Confirmăm detaliile</h3>
              <p className="text-sm text-gray-600">Te contactăm în 24h</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD966] rounded-full flex items-center justify-center text-2xl font-bold text-[#1E1E1E] mx-auto mb-4">
                3
              </div>
              <h3 className="font-['Comfortaa'] font-semibold text-lg mb-2">Cusem cu dragoste</h3>
              <p className="text-sm text-gray-600">7-14 zile lucrătoare</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFD966] rounded-full flex items-center justify-center text-2xl font-bold text-[#1E1E1E] mx-auto mb-4">
                4
              </div>
              <h3 className="font-['Comfortaa'] font-semibold text-lg mb-2">Livrare</h3>
              <p className="text-sm text-gray-600">La adresa ta</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact and Examples */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* WhatsApp Contact Card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-6">
                Comandă pe WhatsApp
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Pentru a face o comandă personalizată, te rugăm să ne contactezi pe WhatsApp.
                  Vom discuta împreună despre detaliile comenzii tale:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFC107] text-xl">✓</span>
                    <span>Tipul de produs dorit (rochie, body, pantaloni, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFC107] text-xl">✓</span>
                    <span>Vârsta copilului și mărimea necesară</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFC107] text-xl">✓</span>
                    <span>Materialul preferat (bumbac organic, in natural, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFC107] text-xl">✓</span>
                    <span>Culorile și detaliile dorite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FFC107] text-xl">✓</span>
                    <span>Broderie personalizată (nume, motive speciale)</span>
                  </li>
                </ul>

                <div className="bg-[#FFF9E6] rounded-xl p-6 mt-6">
                  <h3 className="font-['Comfortaa'] font-bold text-lg text-[#1E1E1E] mb-3">
                    De ce WhatsApp?
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Preferăm comunicarea directă pentru comenzile personalizate, astfel încât să putem
                    înțelege perfect dorințele tale și să îți oferim cele mai bune sugestii pentru
                    realizarea hăinuței perfecte.
                  </p>
                </div>

                <Link
                  href="https://wa.me/40736024836?text=Salut!%20Aș%20dori%20să%20discut%20despre%20o%20comandă%20personalizată."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-bold py-4 rounded-full transition-colors text-lg shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Deschide WhatsApp</span>
                </Link>
              </div>
            </div>

            {/* Example Work */}
            <div>
              <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-6">
                Exemple de Comenzi Anterioare
              </h2>

              <div className="space-y-6">
                {/* Example 1 */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    <Image
                      src="/generated/yellow-dress.png"
                      alt="Comandă personalizată"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-['Comfortaa'] font-semibold text-lg mb-2">
                      Rochie cu broderie personalizată
                    </h4>
                    <p className="text-sm text-gray-600">
                      "Calitatea este extraordinară și fetița mea adoră rochia cu flori brodate manual!"
                    </p>
                    <p className="text-xs text-[#FFC107] mt-2 font-semibold">- Maria din București</p>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    <Image
                      src="/generated/blue-onesie.png"
                      alt="Comandă personalizată"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-['Comfortaa'] font-semibold text-lg mb-2">
                      Body cu nume brodat
                    </h4>
                    <p className="text-sm text-gray-600">
                      "Comanda personalizată a fost perfectă, exact ce ne-am dorit pentru băiețelul nostru!"
                    </p>
                    <p className="text-xs text-[#FFC107] mt-2 font-semibold">- Alexandru din Cluj</p>
                  </div>
                </div>

                {/* Pricing Info */}
                <div className="bg-[#FFF9E6] rounded-2xl p-6">
                  <h4 className="font-['Comfortaa'] font-bold text-lg text-[#1E1E1E] mb-3">
                    Informații Despre Preț
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Comenzile personalizate pornesc de la 85 RON</li>
                    <li>• Broderie personalizată: +15 RON</li>
                    <li>• Timp de realizare: 7-14 zile lucrătoare</li>
                    <li>• Livrare gratuită pentru comenzi peste 150 RON</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
