'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    productType: '',
    fabric: '',
    color: '',
    size: '',
    embroidery: '',
    specialRequests: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Mulțumim! Comanda ta va fi procesată în curând.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

      {/* Form and Examples */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Order Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-6">
                Formular de comandă
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Parent Info */}
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Numele tău
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Vârsta copilului
                  </label>
                  <input
                    type="text"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="ex: 2-3 ani"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Tip produs
                  </label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Alege...</option>
                    <option value="rochie">Rochie</option>
                    <option value="pantaloni">Pantaloni</option>
                    <option value="body">Body</option>
                    <option value="caciula">Căciulă</option>
                    <option value="jerseu">Jerseu</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Material
                    </label>
                    <select
                      name="fabric"
                      value={formData.fabric}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Alege...</option>
                      <option value="bumbac_organic">Bumbac organic</option>
                      <option value="in">In natural</option>
                      <option value="amestec">Amestec bumbac-modal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                      Culoare dorită
                    </label>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      placeholder="ex: galben, albastru"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Broderie personalizată (opțional)
                  </label>
                  <input
                    type="text"
                    name="embroidery"
                    value={formData.embroidery}
                    onChange={handleChange}
                    placeholder="ex: nume, desen special"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Cerințe speciale
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descrie aici detaliile suplimentare pentru comanda ta..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-bold py-4 rounded-full transition-colors text-lg"
                >
                  Trimite comanda
                </button>
              </form>
            </div>

            {/* Example Work */}
            <div>
              <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-6">
                Exemple de comenzi anterioare
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
                    Informații despre preț
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
