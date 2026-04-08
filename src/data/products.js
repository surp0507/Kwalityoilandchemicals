export const products = [
  {
    slug: 'soya-lecithin-liquid',
    title: 'Soya Lecithin Liquid',
    category: 'Soya Oil',
    price: 'Get Latest Price',
    description: 'So as to accomplish high level of customer trust, we are keenly engaged in offering a broad consignment of Soya Lecithin Liquid. Widely used in food, cosmetics, and industrial applications.',
    image: '/soyalecithin.webp',
    features: [
      'Top-notch quality control',
      'Food Grade and Industrial Grade available',
      'Packed safely for transport'
    ],
    specifications: {
      "Packaging Type": "Plastic Bottle",
      "FFA (FREE FATTY ACID)": "Below 10%",
      "MOISTURE": "0.5% TO 1%",
      "IODINE VALUE": "90+",
      "META BOLIC ENERGY VALUE": "8400 Kcal",
      "COLOR": "Light Golden Brown",
      "APPEARANCE": "Free Flow In All Season"
    }
  },
  {
    slug: 'defatted-soya-flour',
    title: 'Defatted Soya Flour',
    category: 'Soya Flour',
    price: 'Get Latest Price',
    description: 'Reckoned amid one of the credible market names, we are willingly engaged in offering high-quality Defatted Soya Flour to our patrons. Excellent source of protein for bakery and food processing.',
    image: '/defattedsoyaflour.webp',
    features: [
      'High protein content',
      'Excellent binding properties',
      'Ideal for bakery and confectionery'
    ],
    specifications: {
      'Country of Origin': 'India',
      'Speciality': 'High in Protein, No Artificial Flavour, Gluten Free',
      'Cuisine': 'Indian',
      'Moisture': '06-08 %',
      'Fat': '1.20 %',
      'Protein': '50-52%'
    }
  },
  {
    slug: 'food-flavouring-essence',
    title: 'Food Flavouring Essence',
    category: 'Flavouring',
    price: 'Get Latest Price',
    description: 'We are a leading wholesaler and distributor of premium Food Flavouring Essences. Our food flavors are highly demanded in the bakery, confectionery, and dairy industries.',
    image: '/foodflavoure.webp',
    features: [
      'Wide variety of rich flavors',
      'Highly concentrated',
      'Food safe and lab tested'
    ],
    "specifications": {
      "Form": "Liquid",
      "Pack Type": "Bottle",
      "Pack Size": "1 Litre",
      "Purity": "99% Min",
      "Fragrance": "Kesar, Musk, Paan, Mint, Mango"
    }
  },
  {
    slug: 'full-fat-soya-flour',
    title: 'Full Fat Soya Flour',
    category: 'Soya Flour',
    price: 'Get Latest Price',
    description: 'Rich in natural oils, perfect for baking and commercial food products.',
    image: '/fullfatsoyaflour.webp',
    features: ['Rich natural oils', 'Great for baking', 'Sustainably sourced'],
    specifications: {
      "Country of Origin": "India",
      "Speciality": "Gluten Free, High in Protein, No Artificial Flavour",
      "Cuisine": "Indian",
      "Moisture": "06-08 %",
      "Protein": "50-52%"
    }

  },
  {
    slug: 'soya-lecithin-oil',
    title: 'Soya Lecithin Oil / Poultry Feed Oil',
    category: 'Soya Oil',
    price: 'Get Latest Price',
    description: 'High purity soya lecithin oil extracted systematically.',
    image: '/soyca lecithin.webp',
    features: ['High purity', 'Systematically extracted', 'Standard packaging'],
    specifications: {
      "Packaging Type": "Plastic Bottle",
      "FFA (FREE FATTY ACID)": "Below 10%",
      "MOISTURE": "0.5% TO 1%",
      "IODINE VALUE": "90+",
      "META BOLIC ENERGY VALUE": "8400 Kcal",
      "COLOR": "Light Golden Brown",
      "APPEARANCE": "Free Flow In All Season"
    }
  },
  {
    slug: 'soya-lecithin-oil-drum',
    title: 'Soya Lecithin Oil Drum',
    category: 'soya oil',
    price: 'Get Latest Price',
    description: 'High purity soya lecithin oil extracted systematically.',
    image: '/soyalecithindrum.webp',
    features: ['High purity', 'Systematically extracted', 'Standard packaging'],
    specifications: {
      "Packaging Type": "Plastic Drum",
      "FFA (FREE FATTY ACID)": "Below 10%",
      "MOISTURE": "0.5% TO 1%",
      "IODINE VALUE": "90+",
      "META BOLIC ENERGY VALUE": "8400 Kcal",
      "COLOR": "Light Golden Brown",
      "APPEARANCE": "Free Flow In All Season"
    }
  },
  {
    slug: 'super-tru-fat-oil',
    title: 'Super Tru Fat Oil',
    category: 'Tru Oil',
    price: 'Get Latest Price',
    description: 'Specialized fat oil for commercial food preparation.',
    image: '/supertruefatoil.webp',
    features: ['High fat content', 'Commercial quality', 'Standard packaging'],
    specifications: {
      "Color": "Light golden brown",
      "Ffa (free fatty acid)": "Below 20%",
      "Moisture": "0.5% to 1%",
      "Meta bolic energy value": "8400 kcal",
      "Appearance": "Free flow in all season"
    }
  },
  {
    slug: 'malt-extract',
    title: 'Malt Extract',
    categor: 'Malt Extract',
    price: 'Get Latest Price',
    description: 'High Quality Malt Extract extracted systematically.',
    image: '/maltextract.webp',
    features: ['High fat content', 'Commercial quality', 'Standard packaging'],
    specifications: {
      "Cuisine": "Indian",
      "Form": "Liquid",
      "Variety": "Liquid Malt Extract",
      "Packaging Size": "1 Litre",
      "Packaging Type": "Bottle"
    }
  }
];

export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}
