import { Category, Organization, ScheduleEntry, FAQItem } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'geldzaken',
    slug: 'geldzaken',
    name: 'Geldzaken',
    shortDescription: 'Schulden, toeslagen, brieven en budget.',
    fullDescription: 'Heb je moeite om rond te komen, vragen over schulden of hulp nodig bij je geldzaken? We helpen je overzicht te krijgen.',
    color: '#F1EA90', // Lichtgeel
    badgeBg: '#FEFCE8',
    textColor: '#201B20',
    iconName: 'Coins',
    exampleQuestions: [
      'Ik snap een brief van de Belastingdienst of een incassobureau niet.',
      'Hoe vraag ik huurtoeslag of zorgtoeslag aan?',
      'Ik heb moeite met rondkomen aan het einde van de maand.',
      'Waar kan ik terecht met beginnende of problematische schulden?'
    ],
    whatWeDo: 'Tijdens onze vrije inloopspreekuren kun je direct aanschuiven bij deskundigen zoals Geldzaken voor Elkaar, Financiële Winkel Delft en Instituut Sociaal Raadslieden. Zij bekijken je brieven, berekenen je recht op voorzieningen en helpen je weer rust in je administratie te krijgen.'
  },
  {
    id: 'werk-en-inkomen',
    slug: 'werk-en-inkomen',
    name: 'Werk en inkomen',
    shortDescription: 'Werk vinden, solliciteren, uitkeringen en advies.',
    fullDescription: 'Zoek je werk, heb je vragen over inkomen of wil je weten welke mogelijkheden er zijn? We denken met je mee.',
    color: '#D99F9D', // Zalmroze
    badgeBg: '#FDF2F2',
    textColor: '#201B20',
    iconName: 'Briefcase',
    exampleQuestions: [
      'Ik wil graag weer aan de slag, maar weet niet waar te beginnen.',
      'Wat zijn mijn rechten en plichten bij een WW- of bijstandsuitkering?',
      'Hulp nodig bij het schrijven van een modern cv of sollicitatie.',
      'Welke leer-werktrajecten en omscholingen zijn er in Delft?'
    ],
    whatWeDo: 'Bij Wij West Dichtbij vind je specialisten van o.a. Werkse!, UWV en KCC Inkomen van de Gemeente Delft. Samen onderzoeken we jouw kansen, bespreken we opleidingsmogelijkheden en helpen we je stap voor stap verder.'
  },
  {
    id: 'wonen',
    slug: 'wonen',
    name: 'Wonen',
    shortDescription: 'Woonproblemen, huur, inschrijving en gezin.',
    fullDescription: 'Heb je vragen over je woning, huur of je woonsituatie? We helpen je de juiste organisatie te vinden.',
    color: '#B4ADD6', // Lavendel
    badgeBg: '#F3F0F9',
    textColor: '#201B20',
    iconName: 'Home',
    exampleQuestions: [
      'Hoe schrijf ik me in voor een sociale huurwoning in regio Delft?',
      'Ik heb een conflict met mijn verhuurder over onderhoud of huurprijs.',
      'Mijn woonsituatie is onhoudbaar en ik zoek begeleiding naar een passende oplossing.',
      'Ondersteuning nodig bij zelfstandig blijven wonen.'
    ],
    whatWeDo: 'Organisaties zoals KesslerPerspektief en Instituut Sociaal Raadslieden staan voor je klaar met advies over huurrechten, woonbegeleiding en contact met woningcorporaties in Delft.'
  },
  {
    id: 'welzijn',
    slug: 'welzijn',
    name: 'Welzijn en gezondheid',
    shortDescription: 'Zorgen, mentale gezondheid, meedoen en relaties.',
    fullDescription: 'Wil je meer contact, heb je zorgen of zoek je ondersteuning in het dagelijks leven? Je kunt bij ons terecht.',
    color: '#B8D1A8', // Saliegroen
    badgeBg: '#F2F7F0',
    textColor: '#201B20',
    iconName: 'HeartHandshake',
    exampleQuestions: [
      'Ik voel me vaak eenzaam en zoek leuke activiteiten of vrijwilligerswerk.',
      'Ik ervaar stress of somberheid en zoek een luisterend oor zonder wachttijd.',
      'Zorgen over een familielid of buurman die achteruitgaat.',
      'Waar vind ik laagdrempelige dagbesteding in Delft?'
    ],
    whatWeDo: 'Onze partners zoals Delft voor Elkaar, Stedelink, Doel Delfland en Lekker bezig organiseren dagelijks ontmoetingen, laagdrempelige gesprekken en mentale ondersteuning. Gewoon binnenlopen voor een kopje koffie en een goed gesprek.'
  },
  {
    id: 'jongeren',
    slug: 'jongeren',
    name: 'Jongeren',
    shortDescription: 'School, geld, studie, vrije tijd en zelfstandig worden.',
    fullDescription: 'Ben je jong en heb je vragen over school, werk, geld of thuis? Je hoeft het niet alleen uit te zoeken.',
    color: '#A3D6F2', // Lichtblauw
    badgeBg: '#F0F8FD',
    textColor: '#201B20',
    iconName: 'Sparkles',
    exampleQuestions: [
      'Ik ben 18 geworden: wat moet ik allemaal zelf regelen?',
      'Ik loop vast op school of stage en weet niet wat ik wil.',
      'Ik heb geldzorgen, schulden of vragen over studiefinanciering.',
      'Thuis is de sfeer gespannen en ik zoek een neutrale plek om te praten.'
    ],
    whatWeDo: 'Het Jongeren Informatie Punt (JIP) en KOTA van de Gemeente Delft zijn er speciaal voor jongeren van 12 t/m 27 jaar. Gratis, vertrouwelijk en zonder oordeel. Loop gewoon binnen en vertel wat er speelt.'
  },
  {
    id: 'veiligheid',
    slug: 'veiligheid',
    name: 'Veiligheid en thuissituatie',
    shortDescription: 'Zorgen over veiligheid, relatie en huiselijke spanningen.',
    fullDescription: 'Maak je je zorgen over jezelf of iemand anders? We helpen je om passende en veilige ondersteuning te vinden.',
    color: '#EAB176', // Warm oranje
    badgeBg: '#FEF6EE',
    textColor: '#201B20',
    iconName: 'ShieldAlert',
    exampleQuestions: [
      'Er is veel ruzie, spanning of agressie bij mij thuis.',
      'Ik maak me grote zorgen over een kind, partner of familielid.',
      'Ik wil in vertrouwen advies vragen zonder dat iemand het direct te weten komt.'
    ],
    whatWeDo: 'Tijdens het speciale Spreekuur Huiselijk Geweld en via Sociaal Raadslieden kun je in een afgesloten, veilige spreekruimte vertrouwelijk je verhaal doen. Ervaren hulpverleners luisteren en adviseren zonder dat je ergens aan vastzit.',
    emergencyNotice: 'Let op: Is er sprake van direct gevaar of een acute crisissituatie? Bel dan altijd direct 112 of neem contact op met Veilig Thuis (0800-2000, 24/7 gratis bereikbaar).'
  }
];

export const ORGANIZATIONS: Organization[] = [
  {
    id: 'instituut-sociaal-raadslieden',
    slug: 'instituut-sociaal-raadslieden',
    name: 'Instituut Sociaal Raadslieden',
    shortDescription: 'Gratis juridisch en praktisch advies voor iedereen in Delft.',
    fullDescription: 'Het Instituut Sociaal Raadslieden biedt gratis deskundige hulp bij wetten, regelingen en instanties. Loop binnen voor hulp bij officiële brieven, bezwaarschriften, toeslagen, sociale zekerheid en consumentenzaken.',
    categories: ['geldzaken', 'wonen', 'werk-en-inkomen'],
    spreekruimteDefault: 'Spreekruimte 1',
    contactNote: 'Aanwezig tijdens het inloopspreekuur op maandagochtend. Geen afspraak nodig.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'spreekuur-huiselijk-geweld',
    slug: 'spreekuur-huiselijk-geweld',
    name: 'Spreekuur Huiselijk Geweld',
    isServiceOnly: true,
    shortDescription: 'Vertrouwelijk en veilig advies bij spanningen en geweld thuis.',
    fullDescription: 'Dit spreekuur biedt een veilige, discrete plek om te praten over onveilige situaties in de relationele sfeer. Of het nu gaat om psychische druk, fysiek geweld, financiële uitbuiting of zorgen om kinderen: deskundigen luisteren in alle rust.',
    categories: ['veiligheid', 'welzijn'],
    spreekruimteDefault: 'Spreekruimte 2',
    contactNote: 'Vertrouwelijk inloopspreekuur in een afgesloten ruimte op maandagochtend. Bij spoed: bel 112.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'geldzaken-voor-elkaar',
    slug: 'geldzaken-voor-elkaar',
    name: 'Geldzaken voor Elkaar',
    shortDescription: 'Praktische hulp bij administratie, toeslagen en financieel overzicht.',
    fullDescription: 'Geldzaken voor Elkaar helpt Delftenaren om grip te krijgen en te houden op hun geld. Vrijwilligers en consulenten helpen met ordenen van brieven, invullen van formulieren, controleren van regelingen en het voorkomen van schulden.',
    categories: ['geldzaken'],
    spreekruimteDefault: 'Spreekruimte 3',
    contactNote: 'Wekelijks inloopspreekuur op maandag in zowel de ochtend (10:00 - 12:00) als middag (14:00 - 16:00).',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'financiele-winkel-delft',
    slug: 'financiele-winkel-gemeente-delft',
    name: 'Financiële Winkel – Gemeente Delft',
    shortDescription: 'Professionele ondersteuning en regelingen bij schulden en budgetteren.',
    fullDescription: 'De Financiële Winkel van de Gemeente Delft is het centrale loket voor schuldhulpverlening, sanering en gemeentelijke inkomensregelingen. Zij denken mee over structurele oplossingen om schuldenvrij te worden.',
    categories: ['geldzaken'],
    contactNote: 'Aangesloten bij Wij West Dichtbij. Loop binnen voor een doorverwijzing of bekijk het rooster voor speciale spreekuren.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'werkse',
    slug: 'werkse',
    name: 'Werkse!',
    shortDescription: 'Hulp naar werk, ontwikkeling en kansen op de arbeidsmarkt.',
    fullDescription: 'Werkse! begeleidt inwoners van Delft naar passend werk, leer-werktrajecten en re-integratie. Of je nu langere tijd niet hebt gewerkt of een steuntje in de rug zoekt bij je loopbaan, Werkse! biedt praktische coaching.',
    categories: ['werk-en-inkomen'],
    contactNote: 'Partner binnen Wij West Dichtbij. Informeer aan de balie naar aanwezigheid en trajecten.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'delft-voor-elkaar',
    slug: 'delft-voor-elkaar',
    name: 'Delft voor Elkaar',
    shortDescription: 'Voor en door Delftenaren: welzijn, ontmoeten en buurtkracht.',
    fullDescription: 'Delft voor Elkaar verbindt inwoners en maatschappelijke organisaties. Van praktische burenhulp en mantelzorgondersteuning tot gezellige wijkactiviteiten en het ontdekken van vrijwilligerswerk.',
    categories: ['welzijn'],
    contactNote: 'Regelmatig aanwezig in de wijk. Loop gerust binnen voor ontmoeting en welzijnsvragen.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'uwv',
    slug: 'uwv',
    name: 'UWV',
    shortDescription: 'Werk en inkomen, rechten, plichten en uitkeringen.',
    fullDescription: 'Het Uitvoeringsinstituut Werknemersverzekeringen biedt informatie over WW, Ziektewet, arbeidsongeschiktheid en ondersteuning bij het vinden van nieuw werk via het Werkbedrijf.',
    categories: ['werk-en-inkomen'],
    contactNote: 'Periodiek aanwezig voor adviesvragen. Vrije inloop tijdens spreekuren.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'stedelink',
    slug: 'stedelink',
    name: 'Stedelink',
    shortDescription: 'Ondersteuning bij psychische en mentale gezondheid.',
    fullDescription: 'Stedelink helpt mensen die te maken hebben met psychische kwetsbaarheden, somberheid, eenzaamheid of herstel. Met laagdrempelige begeleiding en inloopmogelijkheden om weer mee te doen in de samenleving.',
    categories: ['welzijn'],
    spreekruimteDefault: 'Spreekruimte 4',
    contactNote: 'Inloopspreekuur op maandagochtend (10:00 - 12:00) in Spreekruimte 4.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'kcc-inkomen-delft',
    slug: 'kcc-inkomen-gemeente-delft',
    name: 'KCC Inkomen – Gemeente Delft',
    shortDescription: 'Informatie over bijstand, bijzondere bijstand en minimaregelingen.',
    fullDescription: 'Het Klant Contact Centrum Inkomen van Gemeente Delft beantwoordt vragen over de Participatiewet, levensonderhoud, de Delftpas, toeslagen voor lage inkomens en bijzondere bijstand.',
    categories: ['geldzaken', 'werk-en-inkomen'],
    contactNote: 'Vraag aan de ontvangstbalie van Wij West Dichtbij naar gemeentelijke inkomensvragen.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'reclassering-nederland',
    slug: 'reclassering-nederland',
    name: 'Reclassering Nederland',
    shortDescription: 'Begeleiding en advies gericht op een nieuw begin.',
    fullDescription: 'Reclassering Nederland biedt ondersteuning en toezicht aan mensen die in aanraking zijn gekomen met justitie, gericht op werk, huisvesting en een stabiel leven in de maatschappij.',
    categories: ['veiligheid', 'werk-en-inkomen'],
    contactNote: 'Aanwezig volgens rooster of op afspraak via de reclasseringswerker.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'lekker-bezig-doel-delfland',
    slug: 'lekker-bezig-doel-delfland',
    name: 'Lekker bezig – Doel Delfland',
    shortDescription: 'Activerende dagbesteding, creativiteit en werkervaring.',
    fullDescription: 'Lekker bezig biedt een fijne, gestructureerde plek waar je met je handen bezig kunt zijn, talenten kunt ontplooien, mensen ontmoet en werkritme opbouwt.',
    categories: ['welzijn', 'werk-en-inkomen'],
    contactNote: 'Vrijblijvend binnenlopen om kennis te maken met de activiteiten.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'ido-dok',
    slug: 'ido-dok',
    name: 'IDO/DOK',
    shortDescription: 'Informatiepunt Digitale Overheid: hulp bij DigiD, websites en formulieren.',
    fullDescription: 'Vind je het lastig om digitaal zaken te regelen met de overheid? Bij het IDO (samenwerking met DOK Bibliotheek Delft) helpen geduldige medewerkers je gratis op weg met DigiD, MijnOverheid, het CBR of toeslagen.',
    categories: ['geldzaken', 'welzijn', 'werk-en-inkomen'],
    spreekruimteDefault: 'Spreekruimte 1',
    contactNote: 'Inloopspreekuren op woensdag (13:00 - 15:00) en donderdag (15:00 - 17:00). Geen bibliotheeklidmaatschap nodig.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'doel-delfland',
    slug: 'doel-delfland',
    name: 'Doel Delfland',
    shortDescription: 'Herstelondersteuning, meedoen en mentale fitheid.',
    fullDescription: 'Doel Delfland helpt inwoners met een psychische kwetsbaarheid bij hun herstelproces. Met inloopactiviteiten, ontmoeting, cursussen en ervaringsdeskundigheid.',
    categories: ['welzijn'],
    contactNote: 'Onderdeel van het netwerk van Wij West Dichtbij.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'jongeren-informatie-punt',
    slug: 'jongeren-informatie-punt-jip',
    name: 'Jongeren Informatie Punt (JIP)',
    shortDescription: 'Gratis en anoniem advies voor jongeren van 12 tot 27 jaar.',
    fullDescription: 'Het JIP beantwoordt alle vragen waar je als jongere tegenaan loopt: van studiekosten, bijbaan en zorgverzekering tot op jezelf wonen, seks of problemen thuis. Alles is gratis en anoniem.',
    categories: ['jongeren', 'geldzaken', 'werk-en-inkomen'],
    contactNote: 'Vrije inloop voor jongeren. Je kunt gewoon binnenstappen.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'kota-gemeente-delft',
    slug: 'kota-gemeente-delft',
    name: 'KOTA – Gemeente Delft',
    shortDescription: 'Kansen voor Talent: jongeren ondersteunen bij hun toekomst.',
    fullDescription: 'KOTA ondersteunt jongeren in Delft bij talentontwikkeling, opleiding en het realiseren van gelijke kansen. Het team biedt coaching op maat en helpt jongeren hun doelen te bereiken.',
    categories: ['jongeren', 'werk-en-inkomen'],
    contactNote: 'Spreek met een talentcoach tijdens de inloop van Wij West Dichtbij.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  },
  {
    id: 'kesslerperspektief',
    slug: 'kesslerperspektief',
    name: 'KesslerPerspektief',
    shortDescription: 'Maatschappelijke opvang, woonbegeleiding en herstel.',
    fullDescription: 'KesslerPerspektief biedt zorg en professionele begeleiding aan mensen in sociaal kwetsbare omstandigheden. Ze ondersteunen bij het vinden en behouden van woonruimte, financiën en het herwinnen van eigen regie.',
    categories: ['wonen', 'welzijn'],
    spreekruimteDefault: 'Spreekruimte 2',
    contactNote: 'Inloopspreekuur op dinsdagmiddag (13:00 - 15:00) in Spreekruimte 2.',
    publicationStatus: 'gepubliceerd',
    verifiedInRooster: true
  }
];

export const INITIAL_SCHEDULE: ScheduleEntry[] = [
  {
    id: 'entry-isr-ma-ochtend',
    organizationId: 'instituut-sociaal-raadslieden',
    serviceName: 'Juridisch & Sociaal Spreekuur',
    dayOfWeek: 1, // Maandag
    startTime: '09:30',
    endTime: '12:30',
    location: 'Spreekruimte 1',
    notes: 'Gratis hulp bij brieven, instanties, formulieren en juridische vragen.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-huiselijkgeweld-ma',
    organizationId: 'spreekuur-huiselijk-geweld',
    serviceName: 'Spreekuur Huiselijk Geweld',
    dayOfWeek: 1, // Maandag
    startTime: '10:00',
    endTime: '12:00',
    location: 'Spreekruimte 2',
    notes: 'Vertrouwelijk gesprek in een afgesloten ruimte over thuissituaties en veiligheid.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-geldzaken-ma-ochtend',
    organizationId: 'geldzaken-voor-elkaar',
    serviceName: 'Inloopspreekuur Geldzaken',
    dayOfWeek: 1, // Maandag
    startTime: '10:00',
    endTime: '12:00',
    location: 'Spreekruimte 3',
    notes: 'Hulp bij administratie, toeslagen en budgetvragen.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-stedelink-ma',
    organizationId: 'stedelink',
    serviceName: 'Spreekuur Mentale Gezondheid & Welzijn',
    dayOfWeek: 1, // Maandag
    startTime: '10:00',
    endTime: '12:00',
    location: 'Spreekruimte 4',
    notes: 'Laagdrempelig gesprek over mentaal welbevinden, herstel en meedoen.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-geldzaken-ma-middag',
    organizationId: 'geldzaken-voor-elkaar',
    serviceName: 'Inloopspreekuur Geldzaken (Middag)',
    dayOfWeek: 1, // Maandag
    startTime: '14:00',
    endTime: '16:00',
    location: 'Spreekruimte 3',
    notes: 'Middagspreekuur voor hulp bij financiële administratie en formulieren.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-kessler-di',
    organizationId: 'kesslerperspektief',
    serviceName: 'Spreekuur Wonen & Maatschappelijke Begeleiding',
    dayOfWeek: 2, // Dinsdag
    startTime: '13:00',
    endTime: '15:00',
    location: 'Spreekruimte 2',
    notes: 'Begeleiding en advies bij wonen, opvang en zelfredzaamheid.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-ido-wo',
    organizationId: 'ido-dok',
    serviceName: 'Informatiepunt Digitale Overheid',
    dayOfWeek: 3, // Woensdag
    startTime: '13:00',
    endTime: '15:00',
    location: 'Spreekruimte 1',
    notes: 'Hulp bij DigiD, online overheidswebsites en digitale brieven.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  },
  {
    id: 'entry-ido-do',
    organizationId: 'ido-dok',
    serviceName: 'Informatiepunt Digitale Overheid (Donderdag)',
    dayOfWeek: 4, // Donderdag
    startTime: '15:00',
    endTime: '17:00',
    location: 'Spreekruimte 1',
    notes: 'Namiddagspreekuur voor al je digitale overheidsvragen.',
    publicationStatus: 'gepubliceerd',
    updatedAt: '2026-03-01',
    sourceReference: 'WWD rooster 0326-1 .pptx (Maart 2026, versie 1)'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'algemeen',
    question: 'Wat is Wij West Dichtbij?',
    answer: 'Wij West Dichtbij is de centrale, warme ontmoetings- en inloopplek in Delft waar meerdere maatschappelijke organisaties samenwerken onder één dak. Hier kun je zonder drempels terecht met vragen over geld, werk, wonen, welzijn en je gezin.'
  },
  {
    id: 'faq-2',
    category: 'inloop',
    question: 'Moet ik van tevoren een afspraak maken?',
    answer: 'Nee! Bij Wij West Dichtbij werken we uitsluitend met vrije inloopspreekuren. Je hoeft dus vooraf niet te bellen, te mailen of een afspraak in te plannen. Je kunt tijdens de spreekuren gewoon binnenlopen bij onze ontvangstbalie aan Westerkwartier 1 in Delft.'
  },
  {
    id: 'faq-3',
    category: 'algemeen',
    question: 'Kost de hulp bij Wij West Dichtbij geld?',
    answer: 'Nee, de hulp en het advies tijdens alle inloopspreekuren zijn volledig gratis voor alle inwoners van Delft.'
  },
  {
    id: 'faq-4',
    category: 'hulp',
    question: 'Wat moet ik meenemen naar een inloopspreekuur?',
    answer: 'Het is handig om relevante brieven, formulieren of e-mails mee te nemen. Heb je een vraag over je inkomen of DigiD? Neem dan ook een geldig identiteitsbewijs (paspoort of ID-kaart) en eventueel je telefoon mee.'
  },
  {
    id: 'faq-5',
    category: 'organisaties',
    question: 'Welke organisaties zijn aanwezig bij Wij West Dichtbij?',
    answer: 'Onder meer Instituut Sociaal Raadslieden, Geldzaken voor Elkaar, Stedelink, IDO/DOK, KesslerPerspektief, UWV, Werkse!, Delft voor Elkaar, Financiële Winkel, JIP en KOTA Gemeente Delft zijn verbonden aan Wij West Dichtbij.'
  },
  {
    id: 'faq-6',
    category: 'inloop',
    question: 'Waar vind ik het actuele rooster?',
    answer: 'Op onze roosterpagina vind je altijd het actuele overzicht per dag en tijdstip. Tijden kunnen tussentijds wijzigen. Let op: het basisrooster is gebaseerd op het geverifieerde rooster maart 2026 (versie 1).'
  },
  {
    id: 'faq-7',
    category: 'privacy',
    question: 'Wat gebeurt er met mijn persoonsgegevens?',
    answer: 'Wij West Dichtbij hecht veel waarde aan jouw privacy. Gesprekken tijdens inloopspreekuren zijn vertrouwelijk. Wij slaan via de website geen medische of financiële dossiers op. Zie onze privacyverklaring voor meer details.'
  },
  {
    id: 'faq-8',
    category: 'inloop',
    question: 'Kan ik jullie bellen of mailen voor advies?',
    answer: 'Nee, er is geen centrale telefonische helpdesk of advies per e-mail. Wij West Dichtbij is bewust een fysieke inlooplocatie in de wijk. Kom gerust langs; een medewerker aan de ontvangstbalie luistert direct naar je vraag.'
  }
];
