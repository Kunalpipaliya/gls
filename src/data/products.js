export const PRODUCTS = [
  {
    id: "spiced-tea",
    name: "Instant Spiced Tea",
    tagline: "Masala Tea Made Better • 5g Protein In Every Cup",
    shortDesc: "Traditional Kadak Masala Chai powered with 5g pure protein, crushed ginger, cardamom, cinnamon and cloves. Zero added sugars.",
    longDesc: "Experience the royal heritage of Indian Masala Chai reinvented for modern functional health. Gomzi Lifesciences Instant Spiced Tea infuses handpicked Assam black tea extracts with 5 grams of micro-filtered, cold-processed protein and freshly crushed whole spices—green cardamom, warming ginger, sweet Ceylon cinnamon, and aromatic cloves. It delivers the comforting flavor of authentic home-brewed kadak chai while providing sustained physical energy and essential amino acids without sugar crashes or dairy heaviness.",
    category: "Protein Beverages",
    price: 379,
    originalPrice: 499,
    discount: "-24%",
    rating: 4.9,
    reviewsCount: 156,
    image: "/products/tea-480.webp",
    gallery: [
      "/products/tea-480.webp",
      "/images/why-gomzi-lifestyle.jpg"
    ],
    badges: ["Best Seller", "5g Protein", "Authentic Spices", "100% Vegetarian"],
    netWeight: "14g Sachet / 140g Pack",
    servings: "10 Sachets per Box",
    proteinPerServing: "5.0g per 14g serving",
    calories: "49 kcal",
    caffeine: "35 mg (Gentle Tea Theanine)",
    flavors: ["Kadak Spiced Masala", "Cardamom Elaichi Classic"],
    sizes: [
      { label: "Pack of 10 Sachets (140g)", price: 379, original: 499, servings: "10 Servings" },
      { label: "Pack of 30 Sachets (Monthly Pack)", price: 999, original: 1497, bestValue: true, servings: "30 Servings" },
      { label: "Single Sachet Trial (14g)", price: 49, original: 60, servings: "1 Serving" }
    ],
    features: [
      "5g Cold-Processed Bio-Available Protein per Serving",
      "Infused with Pure Ginger, Cardamom, Cinnamon & Cloves",
      "Zero Added Cane Sugar & No Artificial Sweeteners",
      "Supports Digestive Metabolism (Agni) & Gut Comfort",
      "Instant Preparation: Just Add 150ml Hot Milk or Water"
    ],
    benefits: [
      { title: "Sustained Metabolic Energy", desc: "Clean tea theanine and protein provide calm, alert focus without caffeine tremors." },
      { title: "Digestive Wellness", desc: "Sun-dried ginger and cardamom soothe the stomach lining and reduce post-meal bloating." },
      { title: "Muscle Tissue Preservation", desc: "Helps fulfill daily protein deficits without requiring heavy gym supplement shakers." },
      { title: "Potent Antioxidants", desc: "Delivers 140mg of protective tea polyphenols against oxidative cellular stress." }
    ],
    howToUse: [
      { step: "1", title: "Empty Sachet", desc: "Tear open 1 single-serve sachet (14g) into your favorite mug." },
      { step: "2", title: "Pour Warm Liquid", desc: "Add 150ml - 180ml of hot water or steaming milk (dairy or plant-based)." },
      { step: "3", title: "Stir & Relish", desc: "Stir briskly for 15 seconds until completely dissolved. Sip and enjoy!" }
    ],
    ingredients: "Premium Assam Tea Extract, Micro-Filtered Whey Protein Isolate, Sun-Dried Ginger, Green Cardamom, Ceylon Cinnamon, Cloves, Black Pepper, Natural Stevia Leaf Extract.",
    nutrition: [
      { label: "Serving Size", value: "14g (1 sachet)" },
      { label: "Protein", value: "5.0 g" },
      { label: "Energy", value: "49 kcal" },
      { label: "Total Fat", value: "0.4 g" },
      { label: "Carbohydrates", value: "2.8 g" },
      { label: "Added Sugar", value: "0.0 g" },
      { label: "Dietary Fibre", value: "1.2 g" },
      { label: "Antioxidants (Polyphenols)", value: "140 mg" }
    ],
    labTested: {
      reportNo: "AAL-GLS-TEA-2026-0814",
      lab: "Assure Analytical Laboratories LLP",
      batchNo: "GLS-TEA-2608",
      testedFor: ["Protein Verification (Kjeldahl)", "Pesticide Residue Free", "Zero Heavy Metals (Pb, As, Cd, Hg)", "Zero Microbials"],
      result: "PASSED (100% Purity & Safety Compliant)"
    },
    faqs: [
      { q: "Can I prepare this with chilled milk for Iced Chai?", a: "Yes! Dissolve the sachet in 2 tablespoons of warm water first, then pour in 150ml of chilled milk and ice cubes for a delicious Iced Protein Chai." },
      { q: "Is it suitable for people with lactose sensitivity?", a: "We use micro-filtered whey protein isolate with minimal residual lactose (< 0.1g per serving). Most individuals with mild sensitivity digest it comfortably." }
    ]
  },
  {
    id: "mocha-coffee",
    name: "Instant Mocha Coffee",
    tagline: "Mocha Moments Better You • 5g Protein & Arabica Roast",
    shortDesc: "A rich fusion of roasted Arabica coffee, pure Dutch cocoa, and 5g of bio-available protein. Perfect morning energizer without crashes.",
    longDesc: "Wake up to an extraordinary café-style sensory experience formulated by nutritionists. Gomzi Lifesciences Instant Mocha Coffee unites premium medium-roasted Arabica coffee beans with rich Dutch-processed dark cocoa and 5 grams of instantized whey protein isolate. Designed to eliminate afternoon fatigue and brain fog, this invigorating beverage provides natural metabolic stimulation and muscle recovery nutrients in one silky cup.",
    category: "Protein Beverages",
    price: 399,
    originalPrice: 499,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 128,
    image: "/products/mocha.webp",
    gallery: [
      "/products/mocha.webp",
      "/images/why-gomzi-lifestyle.jpg"
    ],
    badges: ["Apex Vitals", "5g Protein", "Rich Cocoa", "100% Arabica"],
    netWeight: "14g Sachet / 140g Pack",
    servings: "10 Sachets per Box",
    proteinPerServing: "5.0g per 14g serving",
    calories: "52 kcal",
    caffeine: "75 mg (Natural Coffee Caffeine)",
    flavors: ["Rich Dutch Mocha", "Espresso Hazelnut"],
    sizes: [
      { label: "Pack of 10 Sachets (140g)", price: 399, original: 499, servings: "10 Servings" },
      { label: "Pack of 30 Sachets (Monthly Pack)", price: 1049, original: 1499, bestValue: true, servings: "30 Servings" },
      { label: "Single Sachet Trial (14g)", price: 55, original: 70, servings: "1 Serving" }
    ],
    features: [
      "5g High-Bioavailability Protein in Every Cup",
      "Crafted with 100% Selected Arabica Beans & Real Cocoa",
      "Sustained Mental Focus & Metabolic Energy",
      "No Chemical Additives, 0g Added Sugar",
      "Ready in 30 Seconds with Warm Water or Milk"
    ],
    benefits: [
      { title: "Cognitive Focus & Alertness", desc: "75mg of natural Arabica caffeine fuels neural clarity without jittery spikes." },
      { title: "Rich Cocoa Polyphenols", desc: "Natural theobromine enhances cardiovascular circulation and positive mood." },
      { title: "Active Muscle Recovery", desc: "Provides high BCAA concentration to jumpstart daily muscle protein synthesis." },
      { title: "Zero Added Cane Sugar", desc: "Sweetened purely with natural stevia extract for an indulgence with zero guilt." }
    ],
    howToUse: [
      { step: "1", title: "Open Sachet", desc: "Pour 1 sachet (14g) into your favorite mug or travel tumbler." },
      { step: "2", title: "Add Liquid", desc: "Pour 150ml hot water or warm milk. For cold frappe, blend with ice." },
      { step: "3", title: "Stir & Savor", desc: "Mix for 15 seconds to create a silky, frothy mocha crema." }
    ],
    ingredients: "Premium Arabica Coffee Powder, Whey Protein Isolate, Organic Dutch Cocoa Powder, MCT Oil Extract, Natural Stevia Leaf Extract, Cocoa Butter Extracts.",
    nutrition: [
      { label: "Serving Size", value: "14g (1 sachet)" },
      { label: "Protein", value: "5.0 g" },
      { label: "Energy", value: "52 kcal" },
      { label: "Total Fat", value: "0.6 g" },
      { label: "Carbohydrates", value: "3.2 g" },
      { label: "Added Sugar", value: "0.0 g" },
      { label: "Dietary Fibre", value: "1.1 g" },
      { label: "Caffeine", value: "75 mg" }
    ],
    labTested: {
      reportNo: "AAL-GLS-COF-2026-0819",
      lab: "Assure Analytical Laboratories LLP",
      batchNo: "GLS-COF-2608",
      testedFor: ["Protein Verification (5.12g Verified)", "Zero Aflatoxins", "No Amino Spiking", "Heavy Metals Free"],
      result: "PASSED (100% Purity & Safety Compliant)"
    },
    faqs: [
      { q: "Can I drink this before a workout?", a: "Absolutely! The combination of 75mg caffeine and 5g protein makes it an ideal pre-workout energizer 30 minutes prior to exercise." },
      { q: "Does it have bitter medicinal aftertaste?", a: "None at all. Premium Dutch cocoa and micro-filtered whey give it the creamy taste of a specialty coffee shop mocha." }
    ]
  },
  {
    id: "multigrain-atta",
    name: "Multi Grain Atta with Protein",
    tagline: "Goodness of Protein in Every Roti • Soft & Wholesome",
    shortDesc: "A nutrient-dense blend of golden wheat, roasted gram, oats, and pure protein. Makes super soft, fluffy rotis with up to 3x more protein.",
    longDesc: "Revolutionize your family's staple diet with India's most advanced functional flour. Gomzi Lifesciences Multi Grain Atta with Protein takes the beloved tradition of hot, puffed rotis and supercharges them with 28% bio-available protein and 14.5% dietary fibre. Formulated with selected MP Sharbati wheat, roasted Bengal gram (chana dal), rolled whole oats, isolated plant protein, and flaxseeds, it helps manage blood glucose spikes, promotes satiety for 4+ hours, and keeps rotis soft and moist for hours.",
    category: "Functional Staples",
    price: 249,
    originalPrice: 329,
    discount: "-24%",
    rating: 5.0,
    reviewsCount: 94,
    image: "/products/atta-480.webp",
    gallery: [
      "/products/atta-480.webp",
      "/images/why-gomzi-lifestyle.jpg"
    ],
    badges: ["Daily Essential", "High Fibre", "Natural Grains", "Low GI"],
    netWeight: "500g Fresh Resealable Zip Pouch",
    servings: "Approx 15-18 Rotis",
    proteinPerServing: "28g Protein / 100g",
    calories: "362 kcal / 100g",
    flavors: ["Traditional Multi-Grain Formulation"],
    sizes: [
      { label: "500g Fresh Zip Pouch", price: 249, original: 329, servings: "16 Rotis" },
      { label: "1kg Family Value Pack (2 x 500g)", price: 469, original: 658, bestValue: true, servings: "32 Rotis" },
      { label: "5kg Monthly Box (10 x 500g)", price: 2199, original: 3290, servings: "160 Rotis" }
    ],
    features: [
      "28% Pure Protein – Highest in its Category (Up to 3x Regular Wheat)",
      "Low Glycemic Index (GI) for Sustained Energy & Blood Sugar Control",
      "Rich in Soluble & Insoluble Dietary Fibre (14.5g / 100g)",
      "Zero Preservatives, No Bleaching Agents, 100% Natural Whole Grains",
      "Guaranteed Soft & Puffed Rotis That Stay Fresh All Day"
    ],
    benefits: [
      { title: "Effortless Family Protein", desc: "Eliminates protein deficiency naturally across all age groups from children to elders." },
      { title: "Diabetic-Friendly Low GI", desc: "Slow-digesting complex carbs and dietary fibre prevent post-meal sugar spikes." },
      { title: "Digestive Regularity", desc: "Abundant soluble fibre from oats and psyllium husk keeps gut motility smooth." },
      { title: "Ultra Soft Texture", desc: "Specialty stone-grinding process retains moisture, ensuring soft rotis even in lunchboxes." }
    ],
    howToUse: [
      { step: "1", title: "Knead with Lukewarm Water", desc: "Take Gomzi Atta and knead using slightly warm water for 3-5 minutes until smooth." },
      { step: "2", title: "Rest the Dough", desc: "Allow dough to rest covered with a damp cloth for 10 minutes to activate grain moisture." },
      { step: "3", title: "Roll & Puff on Tawa", desc: "Roll thin and cook on a medium-hot tawa, flipping once until puffed. Apply pure ghee if desired." }
    ],
    ingredients: "Selected MP Sharbati Wheat, Roasted Chana Dal (Bengal Gram), Whole Rolled Oats, Soya Protein Isolate, Defatted Flaxseeds, Psyllium Husk (Isabgol).",
    nutrition: [
      { label: "Serving Size", value: "100g (Approx 3-4 rotis)" },
      { label: "Protein", value: "28.0 g" },
      { label: "Dietary Fibre", value: "14.5 g" },
      { label: "Energy", value: "362 kcal" },
      { label: "Carbohydrates", value: "48.0 g" },
      { label: "Total Fat", value: "3.2 g" },
      { label: "Iron", value: "6.4 mg (45% RDA)" },
      { label: "Calcium", value: "120 mg" }
    ],
    labTested: {
      reportNo: "AAL-GLS-ATT-2026-0824",
      lab: "Assure Analytical Laboratories LLP",
      batchNo: "GLS-ATT-2608",
      testedFor: ["Protein Content (28.4g Verified)", "Zero Added Chemicals", "Gluten Quality Index", "Moisture & Freshness Control"],
      result: "PASSED (100% Purity & Safety Compliant)"
    },
    faqs: [
      { q: "Do the rotis become hard after cooling down?", a: "No! Unlike many high-protein flours that turn rubbery, our balanced inclusion of Sharbati wheat, roasted chana, and psyllium husk keeps the rotis soft even 8 hours later in tiffins." },
      { q: "Can I use this for parathas, puris, or baking?", a: "Yes, it works splendidly for stuffed parathas, chapatis, and high-protein wholesome pan cakes." }
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: "protein-deficiency-india",
    title: "Why 73% of Indian Diets Are Protein Deficient (And How Your Morning Chai Can Fix It)",
    category: "Nutrition Science",
    date: "September 18, 2026",
    readTime: "4 min read",
    author: "Dr. S. K. Mukherjee, Chief Nutrition Scientist",
    image: "/images/why-gomzi-lifestyle.jpg",
    summary: "Most Indian meals are heavy on simple carbohydrates while lacking bio-available dietary protein. Learn how functional daily tea and coffee bridge this nutrition gap effortlessly.",
    content: [
      "In India, tea and coffee are sacred morning rituals. Over 90% of households begin their day with a steaming cup of chai or filter coffee. However, traditional tea offers virtually zero protein and is often packed with refined sugar.",
      "According to recent nutritional surveys by the Indian Council of Medical Research (ICMR), over 73% of Indians do not consume sufficient daily dietary protein. The standard recommendation is 0.8g to 1g of protein per kilogram of body weight.",
      "By fortifying traditional spiced tea with 5g of cold-filtered, bio-available protein isolate, Gomzi Lifesciences allows individuals to hit their protein targets without having to rely on synthetic chalky gym powders. It turns an existing daily habit into a powerhouse of longevity and vitality."
    ]
  },
  {
    id: "multigrain-atta-benefits",
    title: "The Glycemic Revolution: Why High-Protein Multi Grain Atta Prevents Post-Meal Fatigue",
    category: "Functional Food",
    date: "September 12, 2026",
    readTime: "5 min read",
    author: "Gomzi Food Science Team",
    image: "/products/atta-480.webp",
    summary: "Standard wheat flour causes sharp glycemic spikes followed by afternoon sluggishness. Discover how oats, roasted gram, and protein isolate maintain steady blood sugar levels.",
    content: [
      "Rotis are the backbone of Indian lunches and dinners. Yet, highly refined wheat flour breaks down quickly into simple glucose, causing post-prandial glycemic spikes.",
      "When flour is enriched with stone-ground roasted chana dal, rolled whole oats, defatted flaxseed meal, and clean protein isolate, the digestion rate slows down significantly.",
      "The result is a Low Glycemic Index staple that delivers 28% protein and 14.5% dietary fibre, supporting sustained insulin sensitivity, reducing cravings, and preventing post-lunch lethargy."
    ]
  },
  {
    id: "clean-label-transparency",
    title: "See the Lab Report: The Critical Importance of Third-Party Testing in India",
    category: "Transparency",
    date: "September 05, 2026",
    readTime: "3 min read",
    author: "Quality & Compliance Desk",
    image: "/images/bulk-warehouse.jpg",
    summary: "Hidden fillers, amino spiking, and heavy metal contamination are silent hazards in food manufacturing. Here is how Gomzi Lifesciences verifies every batch with NABL accreditation.",
    content: [
      "Transparency shouldn't be an afterthought. Consumers deserve to know the exact chemical purity of what they ingest every single day.",
      "At Gomzi Lifesciences, every single batch of Instant Spiced Tea, Mocha Coffee, and Multi Grain Atta undergoes independent testing at Assure Analytical Laboratories LLP.",
      "We test for protein content using the Kjeldahl method, screening for heavy metals (Lead, Mercury, Cadmium, Arsenic), pesticide residues, and microbial safety. Consumers can look up their batch number directly on our website."
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Joydeep Maniyar",
    role: "Verified Buyer • Surat",
    rating: 5,
    tag: "Instant Spiced Tea & Mocha",
    comment: "I used to have normal tea and coffee every day which gave me sugar spikes. Switching to Gomzi Lifesciences Spiced Tea and Mocha Coffee has been a game-changer! 5g of clean protein per cup with real natural spices, and the mocha aroma is incredible.",
  },
  {
    id: 2,
    name: "Jatinder Dua",
    role: "Fitness Coach & Father • Delhi",
    rating: 5,
    tag: "Multi Grain Atta with Protein",
    comment: "As someone who counts macronutrients, getting protein from regular Indian rotis was always tough. Gomzi Lifesciences Multi Grain Atta makes surprisingly soft rotis that my entire family enjoys without any aftertaste. 28g protein per 100g is phenomenal!",
  },
  {
    id: 3,
    name: "Hitesh Surati",
    role: "Verified Buyer • Ahmedabad",
    rating: 5,
    tag: "Instant Spiced Tea & Atta",
    comment: "Surat's best functional wellness brand! Genuine ingredients and third party lab reports you can actually verify. The Spiced Masala Chai gives clean energy before my client meetings, and the rotis stay soft till dinner time.",
  },
  {
    id: 4,
    name: "Dr. Ananya Roy",
    role: "Consultant Nutritionist • Mumbai",
    rating: 5,
    tag: "Protein Beverages",
    comment: "I recommend Gomzi Lifesciences to my clients who struggle with daily protein deficiency. Instead of bulky shakers, having 5g protein in their morning chai or mocha coffee fits seamlessly into their daily routine.",
  },
  {
    id: 5,
    name: "Vikram Rathore",
    role: "Software Architect • Bengaluru",
    rating: 5,
    tag: "Instant Mocha Coffee",
    comment: "Instant Mocha is my 3 PM savior. Real Arabica coffee taste, rich cocoa, and zero sugar crash. Plus the convenience of carrying 14g sachets to the office is unbeatable.",
  }
];

export const FAQS = [
  {
    category: "Beverages",
    question: "How much protein is in each sachet of Gomzi Instant Tea and Coffee?",
    answer: "Every single 14g sachet of Gomzi Instant Spiced Tea and Instant Mocha Coffee contains exactly 5 grams of micro-filtered, cold-processed protein. It gives you the natural taste of authentic tea and premium coffee while seamlessly boosting your daily protein intake."
  },
  {
    category: "Beverages",
    question: "How do I prepare the Instant Spiced Tea and Mocha Coffee?",
    answer: "It is effortless! Simply empty 1 sachet (14g) into your favorite cup, pour 150ml of warm water or hot milk, stir well for 15 seconds, and enjoy. No boiling, straining, or sugar required."
  },
  {
    category: "Atta",
    question: "How does Gomzi Multi Grain Atta differ from regular wheat flour?",
    answer: "Standard wheat atta contains only 8-10g of protein and causes rapid blood sugar spikes. Gomzi Multi Grain Atta is formulated with Sharbati wheat, roasted chana dal, rolled oats, and protein isolates, delivering 28g protein per 100g and 14.5g dietary fibre with a low glycemic index, while making soft and puffed rotis."
  },
  {
    category: "Quality",
    question: "Are there any artificial preservatives, hidden chemicals, or added cane sugar?",
    answer: "No. Gomzi Lifesciences adheres to a strict 100% clean-label standard. There are zero artificial preservatives, zero amino spiking, and zero added cane sugars. We use pure natural spices and extracts."
  },
  {
    category: "Quality",
    question: "Can I verify the third-party lab test reports for each batch?",
    answer: "Yes, absolutely! We believe in 100% transparency. Every batch is independently tested by Assure Analytical Laboratories LLP for protein content, heavy metals (Lead, Arsenic, Cadmium, Mercury), and microbiological purity. You can click 'Check Batch Report' right on our website to view and download certificates."
  },
  {
    category: "Shipping",
    question: "What is your shipping and return policy?",
    answer: "We offer Free Pan-India Shipping on orders above ₹499. Orders are dispatched within 24 hours from our facility in Surat, Gujarat, and typically reach you within 2-4 business days. We offer hassle-free replacements if products arrive damaged."
  }
];
