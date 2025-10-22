export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-[#FFD966] py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-['Comfortaa'] text-4xl font-bold text-[#1E1E1E] mb-3">Contact</h1>
          <p className="text-[#1E1E1E] text-lg max-w-2xl mx-auto">
            Suntem aici pentru tine! Contactează-ne pentru orice întrebare
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="font-['Comfortaa'] text-3xl font-bold text-[#1E1E1E] mb-8">
                Informații de Contact
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-1">
                      Telefon / WhatsApp
                    </h3>
                    <p className="text-gray-600">+40 700 000 000</p>
                    <p className="text-sm text-gray-500 mt-1">Luni - Vineri: 9:00 - 18:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-1">
                      Email
                    </h3>
                    <a href="mailto:contact@stuparici.ro" className="text-gray-600 hover:text-[#FFC107]">
                      contact@stuparici.ro
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Răspundem în maxim 24h</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1E1E1E]" />
                  </div>
                  <div>
                    <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-1">
                      Locație
                    </h3>
                    <p className="text-gray-600">București, România</p>
                    <p className="text-sm text-gray-500 mt-1">Livrăm în toată țara</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-4">
                    Urmărește-ne pe Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/stuparici_ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://facebook.com/stuparici"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/40700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#FFD966] rounded-full flex items-center justify-center text-[#1E1E1E] hover:bg-[#FFC107] transition-colors"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Etichetează-ne în pozele cu Stupărici pe Instagram <strong>@stuparici_ro</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-['Comfortaa'] text-2xl font-bold text-[#1E1E1E] mb-6">
                Trimite-ne un mesaj
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Nume
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Telefon (opțional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Subiect
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors bg-white">
                    <option value="">Alege un subiect</option>
                    <option value="comanda">Întrebări despre comandă</option>
                    <option value="personalizare">Personalizare produse</option>
                    <option value="livrare">Livrare și returnări</option>
                    <option value="colaborare">Oportunități de colaborare</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
                    Mesaj
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFD966] focus:outline-none transition-colors resize-none bg-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-[#FFD966] text-[#1E1E1E] font-bold py-4 rounded-full transition-colors"
                >
                  Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-['Comfortaa'] text-3xl font-bold text-center text-[#1E1E1E] mb-12">
            Întrebări Frecvente
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-2">
                Care este timpul de livrare?
              </h3>
              <p className="text-gray-600">
                Pentru produsele din stoc, livrarea se face în 2-3 zile lucrătoare. Pentru comenzile personalizate,
                timpul de realizare este de 7-14 zile lucrătoare plus 2-3 zile pentru livrare.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-2">
                Pot returna un produs?
              </h3>
              <p className="text-gray-600">
                Da! Produsele din colecțiile standard pot fi returnate în 14 zile de la primire, dacă sunt în stare originală.
                Produsele personalizate nu pot fi returnate, conform legislației în vigoare.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-2">
                Cum îngrijesc hainele handmade?
              </h3>
              <p className="text-gray-600">
                Recomandăm spălare la mână sau la mașină pe program delicat, la maxim 30°C. Nu folosiți înălbitori.
                Uscați la aer liber, evitând expunerea directă la soare. Călcați la temperatură medie.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-['Comfortaa'] font-semibold text-lg text-[#1E1E1E] mb-2">
                Oferiți comenzi personalizate pentru evenimente speciale?
              </h3>
              <p className="text-gray-600">
                Da! Realizăm haine personalizate pentru botezuri, zile de naștere și alte evenimente speciale.
                Contactează-ne pentru a discuta detaliile și a primi o ofertă personalizată.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
