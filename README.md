# Stupărici - Haine Handmade pentru Copii

Un site web modern și jucăuș pentru un brand românesc de haine handmade pentru copii, inspirat de lumea copilăriei și tema albinuțelor.

## 🐝 Despre Proiect

Stupărici este un brand românesc care vinde articole vestimentare pentru copii, cu accent pe produse handmade și personalizabile la comandă. Site-ul capturează spiritul jucăuș, cald și autentic al brandului, cu o paletă de culori inspirată de albine (galben, alb, negru).

## 🎨 Design System

### Culori
- **Honey Yellow**: `#FFD966` - Culoarea principală a brandului
- **Golden Yellow**: `#FFC107` - Butoane CTA și accentuări
- **White**: `#FFFFFF` - Fundal curat
- **Charcoal**: `#1E1E1E` - Text și footer
- **Soft accents**: Verde și albastru pentru elemente naturale

### Tipografie
- **Headings**: Comfortaa, Quicksand - fonturi rotunjite, prietenoase
- **Body text**: Inter - curat și ușor de citit
- Toate fonturile sunt importate din Google Fonts

### Stiluri Vizuale
- Colțuri rotunjite (12-20px border-radius)
- Umbre soft pentru depth
- Ilustrații desenate manual (albinuțe, flori, nori)
- Animații subtile la hover

## 📁 Structura Site-ului

### Pagini Implementate

1. **Acasă** (`/`)
   - Hero section cu mesaj de bun venit pe fundal galben
   - Showcase de produse (4 articole featured)
   - Carduri info cu tema albinuțelor
   - Preview colecții
   - CTA-uri către comenzi personalizate

2. **Despre Noi** (`/despre-noi`)
   - Povestea brandului
   - Valori și misiune
   - Procesul de creație
   - CTA către colecții și comenzi

3. **Colecții** (`/colectii`)
   - Filtre pe categorii
   - Grid de produse cu 8 articole
   - Detalii produs (preț, mărimi, descriere)
   - CTA comandă personalizată

4. **Comandă Personalizată** (`/comanda-personalizata`)
   - Explicație proces în 4 pași
   - Formular detaliat pentru comenzi custom
   - Exemple de lucrări anterioare
   - Testimoniale clienți
   - Informații despre prețuri

5. **Contact** (`/contact`)
   - Informații de contact (telefon, email, locație)
   - Link-uri social media
   - Formular de contact
   - Secțiune FAQ

## 🛠️ Tehnologii Folosite

- **Framework**: Next.js 15.5.2 (App Router)
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **Componente UI**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Typography**: Google Fonts (Comfortaa, Quicksand, Inter)
- **Images**: Next.js Image Optimization

## 📦 Componente Create

### Layout Components
- `Header.tsx` - Navigație sticky cu logo și meniu
- `Footer.tsx` - Footer cu informații contact și social media

### Assets Generate
Toate imaginile sunt generate AI și salvate în `/public/generated/`:
- `stuparici-logo.png` - Logo brand cu albinuță
- `yellow-dress.png` - Rochie galbenă cu broderie
- `striped-romper.png` - Salopetă cu dungi
- `blue-onesie.png` - Body albastru cu nori
- `knit-hats.png` - Căciulițe tricotate

## 🎯 Funcționalități Cheie

### Design Features
- **Responsive Design**: Optimizat pentru mobile, tablet și desktop
- **Bee Theme**: Elemente decorative cu albinuțe în tot site-ul
- **Smooth Animations**: Hover effects și tranziții subtile
- **Rounded Aesthetic**: Design prietenos cu colțuri rotunjite

### User Experience
- **Clear Navigation**: Meniu intuitiv cu link-uri clare
- **Product Showcase**: Grid responsive cu hover effects
- **Custom Orders**: Formular detaliat pentru personalizare
- **Social Integration**: Link-uri directe către Instagram, Facebook, WhatsApp

### Technical Features
- **SEO Optimized**: Meta tags în Română, semantic HTML
- **Fast Loading**: Next.js optimization, image lazy loading
- **Type Safe**: TypeScript cu strict mode
- **Accessible**: ARIA labels, keyboard navigation

## 🚀 Comenzi Utile

```bash
# Instalare dependențe
npm install

# Rulare development server
npm run dev

# Build pentru producție
npm run build

# Start production server
npm start
```

## 📱 Social Media

- **Instagram**: @stuparici_ro
- **Facebook**: /stuparici
- **WhatsApp**: +40 700 000 000

## 📧 Contact

- **Email**: contact@stuparici.ro
- **Telefon**: +40 700 000 000

## 🎨 Design Reference

Design-ul este realizat cu atenție la detalii pentru a reproduce exact referința vizuală furnizată, cu:
- Paletă de culori exactă (honey yellow #FFD966, golden yellow #FFC107)
- Fonturi identice (Comfortaa pentru headings, Inter pentru body)
- Layout și spacing precise
- Componente stilizate identic cu mockup-ul

## 📄 Licență

© 2025 Stupărici. Toate drepturile rezervate.
