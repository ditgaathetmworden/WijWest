# Wij West Dichtbij — Officiële Website

Officiële, responsive en toegankelijke webapplicatie voor **Wij West Dichtbij** in Delft: een laagdrempelige, warme en mensgerichte toegangspoort tot hulp, ondersteuning en inloopspreekuren.

> **Belangrijk uitgangspunt**: Wij West Dichtbij is een fysieke wijklocatie voor **vrije inloopspreekuren** aan Westerkwartier 1 in Delft. Inwoners hebben geen afspraak nodig en hoeven vooraf niet te bellen of te mailen.

---

## 🎨 Huisstijl & Kleurenpalet

- **Primair antraciet**: `#201B20` (Primaire tekst, knoppen en footer)
- **Donkergrijs**: `#404040`
- **Middelgrijs**: `#595959`
- **Lichtgrijs**: `#8C8C8C`
- **Lichtgeel**: `#F1EA90` (Accent, Geldzaken)
- **Zalmroze**: `#D99F9D` (Accent, Werk en inkomen)
- **Lavendel**: `#B4ADD6` (Accent, Wonen)
- **Saliegroen**: `#B8D1A8` (Accent, Welzijn en gezondheid)
- **Lichtblauw**: `#A3D6F2` (Accent, Jongeren)
- **Warm oranje**: `#EAB176` (Accent, Veiligheid en thuissituatie)
- **Canvas / Achtergrond**: `#FAF9F6` & `#FFFFFF`
- **Typografie**: Nunito & Plus Jakarta Sans (vriendelijk, afgerond en helder leesbaar)

---

## 🧭 Paginastructuur & URL's

1. **Homepage** (`/`): Hero, kernwaarden, vrije inloop stappenplan, 6 hulpgebieden, actueel weekrooster, samenwerkende partners, FAQ en contact.
2. **Hulp & ondersteuning overzicht** (`/hulp`): Uitgebreid overzicht van alle 6 thema's en spoedinstructie (112 / Veilig Thuis).
3. **Detailpagina's per hulpgebied**:
   - Geldzaken (`/hulp/geldzaken`)
   - Werk en inkomen (`/hulp/werk-en-inkomen`)
   - Wonen (`/hulp/wonen`)
   - Welzijn en gezondheid (`/hulp/welzijn`)
   - Jongeren (`/hulp/jongeren`)
   - Veiligheid en thuissituatie (`/hulp/veiligheid`)
4. **Organisaties** (`/organisaties`): Overzicht van alle 16 samenwerkende organisaties met live zoekfunctie en categoriefilters.
5. **Detailpagina per organisatie** (`/organisaties/[slug]`): Profiel, diensten, hulpgebieden en specifieke spreekuren.
6. **Rooster** (`/rooster`): Interactieve weekagenda, dagkiezers, weekwisselaar (Vorige/Deze/Volgende week), zoekbalk, afdrukweergave (printvriendelijk) en CSV-export.
7. **Contact & Inloop** (`/contact`): Bezoekadres (Westerkwartier 1, Delft), openingstijden (09:00 - 17:00), routebeschrijving (bus, fiets, auto) en algemeen contactformulier met validatie.
8. **Over ons** (`/over-ons`): Verhaal, missie 'Gelijke kansen in Delft', fotoreportage en de 8 kernwaarden.
9. **Veelgestelde vragen** (`/veelgestelde-vragen`): Doorzoekbare FAQ met categorieën en toegankelijke accordeons.
10. **Privacyverklaring** (`/privacy`): Begrijpelijke uitleg (B1) over gegevensverwerking en vertrouwelijkheid.
11. **Toegankelijkheidsverklaring** (`/toegankelijkheid`): Naleving van WCAG 2.2 AA standaarden.
12. **Beheerpaneel / CMS Demo** (`/beheer`): Beheerdersinterface voor medewerkers om spreekuren aan te maken, te bewerken, te publiceren of als concept te markeren.
13. **Niet gevonden** (`/404`): Vriendelijke foutpagina met directe navigatie-opties.

---

## 📋 Geverifieerde Organisaties & Roosterdata

Gebaseerd op het bronbestand `WWD rooster 0326-1 .pptx` (Maart 2026, versie 1):

1. **Instituut Sociaal Raadslieden** — Maandag 09:30–12:30 (Spreekruimte 1)
2. **Spreekuur Huiselijk Geweld** — Maandag 10:00–12:00 (Spreekruimte 2)
3. **Geldzaken voor Elkaar** — Maandag 10:00–12:00 en 14:00–16:00 (Spreekruimte 3)
4. **Stedelink** — Maandag 10:00–12:00 (Spreekruimte 4)
5. **KesslerPerspektief** — Dinsdag 13:00–15:00 (Spreekruimte 2)
6. **IDO/DOK** — Woensdag 13:00–15:00 en Donderdag 15:00–17:00 (Spreekruimte 1)
7. **Financiële Winkel – Gemeente Delft**
8. **Werkse!**
9. **Delft voor Elkaar**
10. **UWV**
11. **KCC Inkomen – Gemeente Delft**
12. **Reclassering Nederland**
13. **Lekker bezig – Doel Delfland**
14. **Doel Delfland**
15. **Jongeren Informatie Punt (JIP)**
16. **KOTA – Gemeente Delft**

---

## 🛠️ Technische Installatie & Ontwikkeling

### Vereisten
- Node.js >= 18.0.0
- npm of bun

### Installatie
```bash
# Installeer afhankelijkheden
npm install
```

### Lokaal starten
```bash
# Start de lokale Vite ontwikkelserver op poort 3000
npm run dev
```

### Productie Build
```bash
# Bouw de geoptimaliseerde statische bundel
npm run build

# Bekijk de productiebuild lokaal
npm run preview
```

### Linting & Typencontrole
```bash
npm run lint
```

---

## ✏️ Rooster & Data Bijwerken (CMS)

### Via de Web-interface
Medewerkers kunnen via de pagina **`/beheer`** (bereikbaar via de link in de footer):
- Nieuwe spreekuren toevoegen met dag, starttijd, eindtijd, ruimte en toelichting.
- Bestaande spreekuren aanpassen of verwijderen.
- Wisselen tussen `Gepubliceerd` en `Concept`.
- Het volledige rooster downloaden als CSV-bestand.
- Met één klik de fabrieksinstellingen herstellen naar het officiële basisrooster.

### Via de Codebasis
De brongegevens bevinden zich in `src/data/initialData.ts`:
- `CATEGORIES`: Definieert de 6 hulpgebieden, kleuren en iconen.
- `ORGANIZATIONS`: Definieert alle 16 partnerorganisaties en gekoppelde diensten.
- `INITIAL_SCHEDULE`: Bevat de roosterrecords conform het PowerPoint-bestand.
- `FAQS`: Bevat de veelgestelde vragen en antwoorden.

---

## 🔍 Overzicht Ontbrekende Gegevens (door Wij West Dichtbij aan te leveren)

Voor de definitieve livegang dienen onderstaande zaken formeel te worden bevestigd door Wij West Dichtbij:

1. **Officiële logo-bestanden (vector SVG/PNG)**: Het actuele logo is typografisch en geometrisch verwerkt; eventuele officiële vectorbestanden kunnen direct worden ingevoegd.
2. **Definitief weekrooster**: Indien actuele tijden afwijken van maart 2026 versie 1, kunnen deze via `/beheer` of `initialData.ts` direct worden bijgewerkt.
3. **Officiële partnerlogo's**: De huidige website toont herkenbare, kleurgecodeerde monogram-avatars voor elke partner. Officiële vectorlogo's kunnen desgewenst per organisatie worden geüpload.
4. **Juridische privacyverklaring**: Formele toetsing van de privacy- en verwerkersovereenkomsten met de Delftse partners.
5. **Officiële sociale-mediakanalen**: Zodra officiële accounts operationeel zijn, kunnen de links in de footer worden geactiveerd.

---

## 🔗 Externe Integraties & Toekomstige Uitbreidingen

- **CMS / Headless Database**: Koppeling met bijv. Supabase, Firebase Firestore of een headless CMS (zoals Strapi) voor centrale roosterpublicatie over meerdere schermen.
- **E-mailservice**: Koppeling van het algemene contactformulier met bijv. Resend, SendGrid of een beveiligde SMTP-dienst van de Gemeente Delft.
- **Narrowcasting / Schermen in het pand**: Het rooster (`/rooster`) beschikt reeds over een print- en exportmodus en kan direct als schermweergave in de wachtruimte aan Westerkwartier 1 worden getoond.
