export type Destination = {
  slug: string
  name: string
  region: string
  tagline: string
  description: string
  image: string
  lat: string
  established: string
  highlights: string[]
}

export type Suite = {
  slug: string
  name: string
  category: string
  price: number
  size: string
  guests: number
  beds: string
  image: string
  description: string
  amenities: string[]
}

export type Experience = {
  title: string
  category: string
  image: string
  description: string
}

export const destinations: Destination[] = [
  {
    slug: 'hawassa',
    name: 'Lewi Hawassa',
    region: 'Lake Hawassa',
    tagline: 'Where the rift valley meets still water',
    description:
      'Our flagship sanctuary rests on the shores of Lake Hawassa, where morning mist lifts off the water and fish eagles circle overhead. A place of glassy calm and golden light.',
    image: '/images/dest-hawassa.png',
    lat: '7.05° N',
    established: 'Est. 2009',
    highlights: ['Lakefront infinity pool', 'Private jetty & sunset cruises', 'Signature lakeside dining'],
  },
  {
    slug: 'arba-minch',
    name: 'Lewi Arba Minch',
    region: 'The Twin Lakes',
    tagline: 'Suspended between two lakes and the sky',
    description:
      'Perched above the twin lakes of Abaya and Chamo, this retreat frames one of Ethiopia’s most dramatic panoramas — the Bridge of God ridge dividing endless water and rift valley green.',
    image: '/images/dest-arbaminch.png',
    lat: '6.03° N',
    established: 'Est. 2014',
    highlights: ['Panoramic ridge terrace', 'Nechisar safari excursions', 'Cliffside wellness pavilion'],
  },
  {
    slug: 'bonga',
    name: 'Lewi Bonga',
    region: 'The Coffee Forest',
    tagline: 'In the birthplace of coffee',
    description:
      'Hidden in the cloud forests of Kaffa — the ancestral home of coffee — Lewi Bonga is an intimate eco-retreat of timber and glass, wrapped in birdsong and the scent of wild arabica.',
    image: '/images/dest-bonga.png',
    lat: '7.27° N',
    established: 'Est. 2019',
    highlights: ['Forest canopy walks', 'Wild coffee origin tours', 'Cloud-forest spa cabins'],
  },
  {
    slug: 'wolaita-sodo',
    name: 'Lewi Wolaita Sodo',
    region: 'The Southern Highlands',
    tagline: 'A highland gateway to the south',
    description:
      'A refined urban resort at the heart of the southern highlands — the ideal base for exploring Ethiopia’s cultural south, with warm service and effortless modern comfort.',
    image: '/images/dest-hawassa.png',
    lat: '6.86° N',
    established: 'Est. 2016',
    highlights: ['Rooftop highland lounge', 'Cultural heritage tours', 'Conference & events hall'],
  },
]

export const suites: Suite[] = [
  {
    slug: 'lake-view-suite',
    name: 'Lake View Suite',
    category: 'Signature Suite',
    price: 285,
    size: '68 m²',
    guests: 2,
    beds: 'King',
    image: '/images/suite-lakeview.png',
    description:
      'Floor-to-ceiling glass opens onto an uninterrupted view of the lake. Wake to water and golden light, framed by warm timber and Ethiopian textiles.',
    amenities: ['Private lake-facing balcony', 'Rainfall wet room', 'Nespresso & tea ritual', 'Egyptian cotton linens'],
  },
  {
    slug: 'garden-terrace-room',
    name: 'Garden Terrace Room',
    category: 'Deluxe Room',
    price: 165,
    size: '42 m²',
    guests: 2,
    beds: 'Queen',
    image: '/images/suite-garden.png',
    description:
      'A serene retreat opening onto lush private gardens. Natural textures and soft light make this our most quietly beloved room.',
    amenities: ['Private garden terrace', 'Walk-in shower', 'Handwoven throws', 'Daily turndown'],
  },
  {
    slug: 'signature-pool-suite',
    name: 'Signature Pool Suite',
    category: 'Pool Villa',
    price: 480,
    size: '110 m²',
    guests: 3,
    beds: 'King + Sofa',
    image: '/images/suite-signature.png',
    description:
      'Our most exclusive residence — a private plunge pool suspended above the water, an expansive living space, and butler service on request.',
    amenities: ['Private plunge pool', 'Butler service', 'Outdoor rain shower', 'Curated minibar'],
  },
]

export const experiences: Experience[] = [
  {
    title: 'Lakeside Fine Dining',
    category: 'Culinary',
    image: '/images/exp-dining.png',
    description: 'A candlelit table at the water’s edge, where Ethiopian ingredients meet contemporary craft.',
  },
  {
    title: 'The Coffee Ceremony',
    category: 'Culture',
    image: '/images/exp-coffee.png',
    description: 'Roasted, brewed and poured in the traditional way — a ritual of welcome in the land where coffee began.',
  },
  {
    title: 'Rift Valley Spa',
    category: 'Wellness',
    image: '/images/exp-spa.png',
    description: 'Treatments drawn from indigenous botanicals, in pavilions open to the sound of water.',
  },
]

export const events = [
  {
    date: 'Sep 27',
    title: 'Meskel Festival Celebration',
    location: 'Lewi Hawassa',
    description: 'A candlelit evening honouring the finding of the True Cross, with a lakeside bonfire and traditional feast.',
  },
  {
    date: 'Oct 12',
    title: 'Origin Coffee Harvest',
    location: 'Lewi Bonga',
    description: 'Walk the wild coffee forest at harvest and taste single-origin lots at their source.',
  },
  {
    date: 'Nov 03',
    title: 'Rift Valley Wellness Retreat',
    location: 'Lewi Arba Minch',
    description: 'A three-day residency of yoga, sound and highland cuisine above the twin lakes.',
  },
]

export const testimonials = [
  {
    quote:
      'The most quietly perfect stay of our lives. We woke each morning to mist on the lake and a coffee ceremony we still dream about.',
    name: 'Amara & Daniel',
    origin: 'London, UK',
  },
  {
    quote:
      'Lewi understands luxury as stillness. Every detail was considered, every staff member gracious. Ethiopia’s best-kept secret.',
    name: 'Selam T.',
    origin: 'Addis Ababa',
  },
  {
    quote:
      'We came for a weekend and rebooked before we left. The Signature Pool Suite is worth the journey alone.',
    name: 'The Okonkwo Family',
    origin: 'Lagos, Nigeria',
  },
]
