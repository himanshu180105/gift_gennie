/* ============================================================
   Gift Gennie — Birthday Gift Suggestion Engine
   app.js
   ============================================================ */

// ---- Gift Database ----
const GIFT_DATABASE = {

  // ============ CHILD (1-12) ============
  child: {
    "best friend": [
      { emoji: "🎮", name: "Gaming Bundle", desc: "A fun collection of age-appropriate video games or board games they can enjoy.", badge: "tech", tags: ["fun", "gaming", "interactive"], budget: { budget: "₹300–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹5,000", luxury: "₹10,000+" } },
      { emoji: "🎨", name: "Art & Craft Mega Kit", desc: "A massive creative kit with paints, clay, stencils, and project guides to unleash their inner artist.", badge: "creative", tags: ["art", "creative", "DIY"], budget: { budget: "₹250–₹450", mid: "₹600–₹1,200", premium: "₹1,500–₹3,000", luxury: "₹3,500+" } },
      { emoji: "📚", name: "Adventure Book Series", desc: "A gripping, age-appropriate book series to spark a love for reading and imagination.", badge: "personal", tags: ["reading", "imagination", "learning"], budget: { budget: "₹200–₹499", mid: "₹500–₹1,000", premium: "₹1,200–₹2,500", luxury: "₹3,000+" } },
      { emoji: "🧸", name: "Collectible Plush Set", desc: "A set of adorable, high-quality plush toys from their favourite cartoon or game universe.", badge: "physical", tags: ["cute", "collectible", "comfort"], budget: { budget: "₹300–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "🚀", name: "STEM Explorer Kit", desc: "Science experiments and engineering challenges packaged as a fun adventure kit.", badge: "tech", tags: ["STEM", "learning", "hands-on"], budget: { budget: "₹350–₹499", mid: "₹600–₹1,800", premium: "₹2,000–₹5,000", luxury: "₹6,000+" } },
      { emoji: "🎪", name: "Theme Park Experience", desc: "Treat them to a day out at their favourite theme park or adventure zone.", badge: "experience", tags: ["fun", "adventure", "memories"], budget: { budget: "₹400–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹8,000", luxury: "₹10,000+" } },
    ],
    friend: [
      { emoji: "🎨", name: "Art & Craft Kit", desc: "A colourful craft set with paints, crayons, and creative project ideas.", badge: "creative", tags: ["art", "fun", "creative"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,200", premium: "₹1,500–₹3,000", luxury: "₹3,500+" } },
      { emoji: "📚", name: "Illustrated Story Books", desc: "A set of beautifully illustrated storybooks to fuel their imagination.", badge: "personal", tags: ["reading", "stories", "imagination"], budget: { budget: "₹180–₹450", mid: "₹500–₹900", premium: "₹1,000–₹2,500", luxury: "₹3,000+" } },
      { emoji: "🧩", name: "Puzzle Collection", desc: "Age-appropriate jigsaw and 3D puzzles for hours of brain-boosting fun.", badge: "tech", tags: ["puzzles", "brain", "fun"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,200", premium: "₹1,500–₹3,000", luxury: "₹3,500+" } },
    ],
    default: [
      { emoji: "🧸", name: "Premium Soft Toy", desc: "A super-soft, huggable plush that becomes their favourite companion.", badge: "physical", tags: ["cute", "comfort", "companion"], budget: { budget: "₹250–₹499", mid: "₹600–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "🎮", name: "Interactive Toy Set", desc: "An engaging, age-appropriate interactive toy that mixes play with learning.", badge: "tech", tags: ["interactive", "learning", "fun"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹7,000", luxury: "₹8,000+" } },
      { emoji: "🍰", name: "Cake + Toy Combo", desc: "A customised birthday cake paired with a small surprise toy for the big day.", badge: "personal", tags: ["celebration", "cake", "surprise"], budget: { budget: "₹350–₹499", mid: "₹700–₹1,800", premium: "₹2,000–₹5,000", luxury: "₹6,000+" } },
    ]
  },

  // ============ TEEN (13-19) ============
  teen: {
    "best friend": [
      { emoji: "🎧", name: "Wireless Earbuds", desc: "Premium wireless earbuds for the music-loving teen — because great sound is everything.", badge: "tech", tags: ["music", "tech", "cool"], budget: { budget: "₹400–₹499", mid: "₹600–₹2,000", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "📸", name: "Instant Camera", desc: "A fun Polaroid-style instant camera to capture memories on the spot.", badge: "creative", tags: ["photography", "memories", "aesthetic"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹3,000", premium: "₹3,500–₹7,000", luxury: "₹8,000+" } },
      { emoji: "🎮", name: "Gaming Gift Card", desc: "A gift card for their favourite gaming platform — let them choose exactly what they want.", badge: "tech", tags: ["gaming", "freedom", "digital"], budget: { budget: "₹250–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹5,000", luxury: "₹6,000+" } },
      { emoji: "👟", name: "Trendy Sneakers", desc: "A pair of limited-edition or statement sneakers they'll show off to everyone.", badge: "physical", tags: ["fashion", "style", "streetwear"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹9,000", luxury: "₹12,000+" } },
      { emoji: "🎨", name: "Digital Art Tablet", desc: "A drawing tablet to unleash their digital creativity — perfect for the artsy teen.", badge: "creative", tags: ["art", "digital", "creative"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹3,500", premium: "₹4,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "🌟", name: "Custom Friendship Bracelet Set", desc: "A premium DIY bracelet set to create matching friendship jewellery — timeless and personal.", badge: "personal", tags: ["friendship", "DIY", "jewellery"], budget: { budget: "₹200–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
    ],
    partner: [
      { emoji: "💌", name: "Personalised Memory Book", desc: "A handcrafted scrapbook filled with photos, inside jokes, and your shared memories.", badge: "personal", tags: ["romantic", "memories", "heartfelt"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "💎", name: "Dainty Jewellery Piece", desc: "A minimalist necklace or bracelet they'll wear every single day.", badge: "physical", tags: ["jewellery", "elegant", "romantic"], budget: { budget: "₹300–₹499", mid: "₹800–₹2,000", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "🌹", name: "Romantic Date Night", desc: "Plan a magical surprise date — a rooftop dinner, movie screening, or stargazing experience.", badge: "experience", tags: ["romantic", "experience", "memorable"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ],
    default: [
      { emoji: "🎵", name: "Music Streaming Gift Card", desc: "A subscription gift card to their favourite music or podcast streaming service.", badge: "tech", tags: ["music", "digital", "entertainment"], budget: { budget: "₹199–₹499", mid: "₹500–₹1,200", premium: "₹1,500–₹3,000", luxury: "₹4,000+" } },
      { emoji: "📖", name: "Bestselling Novel", desc: "A gripping YA or bestselling novel to ignite their passion for reading.", badge: "personal", tags: ["reading", "stories", "knowledge"], budget: { budget: "₹180–₹399", mid: "₹400–₹900", premium: "₹1,000–₹2,500", luxury: "₹3,000+" } },
      { emoji: "🎒", name: "Designer Backpack", desc: "A stylish, durable backpack for school, travel, or just looking good.", badge: "physical", tags: ["style", "practical", "fashion"], budget: { budget: "₹400–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ]
  },

  // ============ YOUNG ADULT (20-35) ============
  young_adult: {
    "best friend": [
      { emoji: "✈️", name: "Weekend Getaway Plan", desc: "Plan a surprise road trip or weekend stay at a cozy resort or hill station.", badge: "experience", tags: ["travel", "adventure", "memories"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹3,000", premium: "₹5,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "📸", name: "Photography Workshop", desc: "Enrol them in a photography or creative skills workshop they've always wanted.", badge: "experience", tags: ["learning", "creative", "skill"], budget: { budget: "₹300–₹499", mid: "₹800–₹2,500", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "🍷", name: "Gourmet Gift Hamper", desc: "A luxurious hamper filled with artisan chocolates, cheese, wines, and gourmet snacks.", badge: "wellness", tags: ["gourmet", "indulgent", "foodie"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
      { emoji: "🎧", name: "Noise-Cancelling Headphones", desc: "Premium noise-cancelling headphones for music, work, or peaceful commutes.", badge: "tech", tags: ["music", "tech", "work"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹4,000", premium: "₹5,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "🌿", name: "Wellness & Self-Care Box", desc: "A curated box of face masks, aromatherapy oils, bath salts, and calming goodies.", badge: "wellness", tags: ["self-care", "wellness", "relaxing"], budget: { budget: "₹300–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "📚", name: "Personalised Book Stack", desc: "A carefully chosen collection of books matching their taste — fiction, self-help, or philosophy.", badge: "personal", tags: ["books", "intellectual", "personal"], budget: { budget: "₹250–₹499", mid: "₹600–₹1,500", premium: "₹1,800–₹4,000", luxury: "₹5,000+" } },
    ],
    partner: [
      { emoji: "💍", name: "Engraved Jewellery", desc: "A beautiful piece of jewellery with a personal engraving — a date, initials, or a love quote.", badge: "personal", tags: ["jewellery", "romantic", "forever"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹12,000", luxury: "₹15,000+" } },
      { emoji: "🌹", name: "Romantic Staycation", desc: "Book a luxury hotel night with rose petals, champagne, and a curated dinner experience.", badge: "experience", tags: ["romantic", "luxury", "intimate"], budget: { budget: "₹450–₹499", mid: "₹2,000–₹5,000", premium: "₹6,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "📖", name: "Custom Love Story Book", desc: "A professionally designed storybook where you and your partner are the main characters.", badge: "personal", tags: ["romantic", "unique", "heartfelt"], budget: { budget: "₹350–₹499", mid: "₹800–₹2,500", premium: "₹3,000–₹7,000", luxury: "₹9,000+" } },
      { emoji: "🧴", name: "Luxury Skincare Set", desc: "A premium skincare routine set from a top brand they've been eyeing for a while.", badge: "wellness", tags: ["skincare", "luxury", "self-care"], budget: { budget: "₹350–₹499", mid: "₹800–₹2,500", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "🎶", name: "Concert or Event Tickets", desc: "Tickets to see their favourite band, comedian, or live event together.", badge: "experience", tags: ["music", "live", "memories"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹10,000", luxury: "₹15,000+" } },
      { emoji: "🌟", name: "Star Naming Certificate", desc: "Name a star after them with a personalised sky map and framed certificate.", badge: "personal", tags: ["unique", "romantic", "eternal"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
    ],
    crush: [
      { emoji: "🌸", name: "Handwritten Letter + Flowers", desc: "A heartfelt handwritten letter paired with a beautiful bouquet — classic, tasteful, and charming.", badge: "personal", tags: ["romantic", "heartfelt", "flowers"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "🍫", name: "Artisan Chocolate Box", desc: "A premium selection of handcrafted chocolates — a sweet gesture without being too forward.", badge: "wellness", tags: ["sweet", "thoughtful", "food"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "📚", name: "Their Favourite Book", desc: "A beautifully wrapped copy of a book they've mentioned loving — shows you listen.", badge: "personal", tags: ["thoughtful", "personal", "books"], budget: { budget: "₹180–₹399", mid: "₹400–₹900", premium: "₹1,000–₹2,500", luxury: "₹3,000+" } },
      { emoji: "🕯️", name: "Luxury Candle + Note", desc: "An elegant scented candle with a charming handwritten birthday note.", badge: "wellness", tags: ["elegant", "subtle", "cozy"], budget: { budget: "₹250–₹450", mid: "₹600–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
    ],
    mother: [
      { emoji: "💆", name: "Spa Day Experience", desc: "Treat your mum to a full-day spa with massage, facials, and pampering she truly deserves.", badge: "wellness", tags: ["spa", "relaxation", "luxury"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹3,500–₹8,000", luxury: "₹10,000+" } },
      { emoji: "💎", name: "Gold Jewellery", desc: "A beautiful gold necklace, bangles, or earrings — because mums deserve the finest.", badge: "physical", tags: ["jewellery", "gold", "timeless"], budget: { budget: "₹350–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "📸", name: "Professional Photo Shoot", desc: "Book a professional family or portrait shoot — beautiful memories to cherish forever.", badge: "experience", tags: ["memories", "photos", "family"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹4,000", premium: "₹5,000–₹12,000", luxury: "₹15,000+" } },
    ],
    father: [
      { emoji: "⌚", name: "Premium Watch", desc: "A stylish, quality timepiece that he'll wear with pride every single day.", badge: "physical", tags: ["watch", "style", "classic"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹18,000", luxury: "₹25,000+" } },
      { emoji: "📖", name: "Personalised Leather Journal", desc: "A high-quality leather journal with his name embossed — for thoughts, plans, and wisdom.", badge: "personal", tags: ["leather", "classic", "personal"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
      { emoji: "☕", name: "Premium Coffee/Tea Set", desc: "An artisan coffee brewing kit or premium loose-leaf tea collection for the daily ritual.", badge: "wellness", tags: ["coffee", "tea", "daily"], budget: { budget: "₹300–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ],
    colleague: [
      { emoji: "☕", name: "Gourmet Coffee Kit", desc: "A premium home coffee brew kit with a curated selection of single-origin beans.", badge: "wellness", tags: ["coffee", "office", "professional"], budget: { budget: "₹250–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "📓", name: "Premium Notebook + Pen Set", desc: "A quality leather-bound notebook paired with a smooth writing pen.", badge: "personal", tags: ["professional", "stationery", "elegant"], budget: { budget: "₹200–₹450", mid: "₹500–₹1,500", premium: "₹2,000–₹4,000", luxury: "₹5,000+" } },
      { emoji: "🌱", name: "Desk Plant + Pot", desc: "A low-maintenance desk plant in a stylish pot to brighten their workspace.", badge: "wellness", tags: ["plant", "office", "green"], budget: { budget: "₹200–₹450", mid: "₹400–₹1,000", premium: "₹1,200–₹3,000", luxury: "₹4,000+" } },
    ],
    boss: [
      { emoji: "🥃", name: "Premium Whisky/Wine", desc: "A bottle of aged single malt or fine wine — a classic, universally appreciated gift.", badge: "wellness", tags: ["premium", "classic", "professional"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹4,000", premium: "₹5,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "📱", name: "Smart Desk Gadget", desc: "A premium desk gadget like a wireless charger stand, smart speaker, or leather organiser.", badge: "tech", tags: ["smart", "desk", "professional"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,500", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
      { emoji: "🌿", name: "Luxury Gift Hamper", desc: "A curated hamper with premium chocolates, teas, and branded items in a beautiful box.", badge: "physical", tags: ["luxury", "curated", "professional"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
    ],
    default: [
      { emoji: "📚", name: "Bestselling Book", desc: "A curated bestselling book in a genre they love — fiction, self-help, or biography.", badge: "personal", tags: ["books", "knowledge", "thoughtful"], budget: { budget: "₹180–₹399", mid: "₹400–₹1,000", premium: "₹1,200–₹2,500", luxury: "₹3,000+" } },
      { emoji: "🌿", name: "Self-Care Hamper", desc: "A thoughtfully curated self-care hamper with candles, bath products, and soothing essentials.", badge: "wellness", tags: ["self-care", "relaxing", "thoughtful"], budget: { budget: "₹300–₹499", mid: "₹600–₹1,800", premium: "₹2,000–₹5,000", luxury: "₹7,000+" } },
      { emoji: "🎮", name: "Experience Voucher", desc: "A voucher for an experience they can choose — dining, adventure sport, or an online class.", badge: "experience", tags: ["flexible", "experience", "memories"], budget: { budget: "₹300–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ]
  },

  // ============ ADULT (36-60) ============
  adult: {
    mother: [
      { emoji: "💆", name: "Luxury Spa Retreat", desc: "A full spa day or weekend retreat — the ultimate gift of relaxation and self-love.", badge: "wellness", tags: ["spa", "luxury", "relaxation"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹4,000", premium: "₹5,000–₹12,000", luxury: "₹15,000+" } },
      { emoji: "💎", name: "Heritage Jewellery", desc: "A timeless piece of jewellery — gold, silver, or gemstone — to treasure for generations.", badge: "physical", tags: ["jewellery", "heritage", "luxury"], budget: { budget: "₹400–₹499", mid: "₹2,000–₹6,000", premium: "₹8,000–₹20,000", luxury: "₹25,000+" } },
      { emoji: "🍽️", name: "Cooking Masterclass", desc: "Enrol her in a premium cooking or baking masterclass with a renowned chef.", badge: "experience", tags: ["cooking", "skill", "fun"], budget: { budget: "₹350–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
      { emoji: "📸", name: "Family Portrait Session", desc: "A professionally shot and framed family portrait — a memory that lasts forever.", badge: "personal", tags: ["family", "memories", "art"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹4,000", premium: "₹5,000–₹12,000", luxury: "₹15,000+" } },
      { emoji: "🌺", name: "Subscription Flower Box", desc: "A monthly fresh flower delivery subscription to brighten her home all year.", badge: "wellness", tags: ["flowers", "monthly", "fresh"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
      { emoji: "🧴", name: "Premium Skincare Collection", desc: "A luxury skincare set with serums, creams, and treatments from top global brands.", badge: "wellness", tags: ["skincare", "luxury", "self-care"], budget: { budget: "₹350–₹499", mid: "₹1,000–₹3,500", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
    ],
    father: [
      { emoji: "⌚", name: "Luxury Timepiece", desc: "A prestigious watch he'll wear daily — the ultimate symbol of style and achievement.", badge: "physical", tags: ["watch", "luxury", "timeless"], budget: { budget: "₹450–₹499", mid: "₹2,000–₹6,000", premium: "₹8,000–₹25,000", luxury: "₹35,000+" } },
      { emoji: "🏌️", name: "Golf Experience / Club Membership", desc: "A round of golf at a premium course or a short membership at his favourite club.", badge: "experience", tags: ["golf", "sport", "luxury"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹20,000", luxury: "₹25,000+" } },
      { emoji: "📖", name: "Personalised Legacy Book", desc: "A beautifully printed and bound book of family history, photos, and stories.", badge: "personal", tags: ["legacy", "family", "memories"], budget: { budget: "₹350–₹499", mid: "₹1,000–₹3,500", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
      { emoji: "🥃", name: "Aged Spirits Collection", desc: "A hand-picked selection of premium aged whisky, rum, or cognac.", badge: "wellness", tags: ["whisky", "premium", "connoisseur"], budget: { budget: "₹450–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹18,000", luxury: "₹25,000+" } },
      { emoji: "💻", name: "Smart Home Gadget", desc: "A premium smart home device to upgrade his comfort — from smart displays to massage chairs.", badge: "tech", tags: ["smart", "tech", "comfort"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹4,000", premium: "₹5,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "🚗", name: "Car Detailing + Accessories", desc: "A premium car detailing service paired with top-quality car accessories.", badge: "experience", tags: ["car", "premium", "practical"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,500", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
    ],
    partner: [
      { emoji: "✈️", name: "Holiday Getaway", desc: "Book a romantic holiday — a beach resort, mountains, or an international destination.", badge: "experience", tags: ["travel", "romantic", "luxury"], budget: { budget: "₹450–₹499", mid: "₹5,000–₹15,000", premium: "₹20,000–₹50,000", luxury: "₹75,000+" } },
      { emoji: "💍", name: "Fine Jewellery", desc: "A stunning piece of fine jewellery — diamonds, sapphires, or gold — to mark a milestone.", badge: "physical", tags: ["jewellery", "luxury", "milestone"], budget: { budget: "₹400–₹499", mid: "₹2,000–₹8,000", premium: "₹10,000–₹30,000", luxury: "₹40,000+" } },
      { emoji: "🍽️", name: "Fine Dining Experience", desc: "Reserve a table at a Michelin-star or award-winning restaurant for a magical evening.", badge: "experience", tags: ["dining", "romantic", "luxury"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹15,000", luxury: "₹20,000+" } },
    ],
    colleague: [
      { emoji: "☕", name: "Premium Coffee Station", desc: "A tabletop espresso maker or premium coffee subscription for the coffee-loving colleague.", badge: "tech", tags: ["coffee", "office", "daily"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,500", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
      { emoji: "🌿", name: "Desk Wellness Set", desc: "A desk plant, aromatherapy diffuser, and motivational desk pad — the perfect office upgrade.", badge: "wellness", tags: ["office", "wellness", "calm"], budget: { budget: "₹250–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "🍫", name: "Luxury Chocolate Hamper", desc: "A premium assortment of handcrafted artisan chocolates from around the world.", badge: "wellness", tags: ["chocolate", "premium", "thoughtful"], budget: { budget: "₹250–₹499", mid: "₹500–₹1,500", premium: "₹2,000–₹5,000", luxury: "₹6,000+" } },
    ],
    boss: [
      { emoji: "🖊️", name: "Luxury Pen & Stationery Set", desc: "A premium pen set like Montblanc or Cross — timeless, professional, and impressive.", badge: "physical", tags: ["luxury", "professional", "classic"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹18,000", luxury: "₹25,000+" } },
      { emoji: "🍷", name: "Fine Wine or Spirits", desc: "A celebrated bottle of vintage wine or rare spirits — sophisticated and appropriate.", badge: "wellness", tags: ["wine", "premium", "professional"], budget: { budget: "₹450–₹499", mid: "₹2,000–₹6,000", premium: "₹8,000–₹20,000", luxury: "₹25,000+" } },
      { emoji: "🎖️", name: "Personalised Desk Nameplate", desc: "A premium brass or crystal desk nameplate — a prestigious and personal touch.", badge: "personal", tags: ["personalised", "professional", "prestigious"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,500", premium: "₹3,000–₹7,000", luxury: "₹9,000+" } },
    ],
    default: [
      { emoji: "🌿", name: "Premium Wellness Hamper", desc: "A luxury wellness hamper with natural skincare, herbal teas, and relaxation essentials.", badge: "wellness", tags: ["wellness", "luxury", "thoughtful"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
      { emoji: "📸", name: "Personalised Photo Gift", desc: "A premium canvas print, photo book, or custom photo frame capturing a cherished memory.", badge: "personal", tags: ["memories", "personal", "art"], budget: { budget: "₹250–₹499", mid: "₹600–₹1,800", premium: "₹2,000–₹5,000", luxury: "₹6,000+" } },
      { emoji: "🎁", name: "Curated Experience Voucher", desc: "A gift voucher for an experience of their choice — adventure, dining, learning, or spa.", badge: "experience", tags: ["flexible", "experience", "choice"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,500", premium: "₹3,000–₹8,000", luxury: "₹10,000+" } },
    ]
  },

  // ============ SENIOR (60+) ============
  senior: {
    mother: [
      { emoji: "💆", name: "At-Home Spa Session", desc: "Book a professional masseuse or beautician to visit and give a pampering home session.", badge: "wellness", tags: ["spa", "home", "luxury"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹3,500–₹8,000", luxury: "₹10,000+" } },
      { emoji: "📖", name: "Family Memory Album", desc: "A beautifully printed hardcover album with decades of family photos and handwritten notes.", badge: "personal", tags: ["memories", "family", "legacy"], budget: { budget: "₹350–₹499", mid: "₹800–₹2,500", premium: "₹3,000–₹7,000", luxury: "₹9,000+" } },
      { emoji: "💎", name: "Fine Jewellery", desc: "A classic gold or diamond piece she can pass down as a family heirloom.", badge: "physical", tags: ["jewellery", "legacy", "timeless"], budget: { budget: "₹400–₹499", mid: "₹3,000–₹8,000", premium: "₹10,000–₹25,000", luxury: "₹30,000+" } },
      { emoji: "🌺", name: "Flower Delivery Subscription", desc: "Weekly or monthly delivery of fresh seasonal flowers to brighten her home.", badge: "wellness", tags: ["flowers", "joyful", "ongoing"], budget: { budget: "₹350–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "🍽️", name: "Family Celebration Dinner", desc: "Organise a special family dinner at her favourite restaurant with all loved ones present.", badge: "experience", tags: ["family", "celebration", "memories"], budget: { budget: "₹400–₹499", mid: "₹1,500–₹5,000", premium: "₹6,000–₹15,000", luxury: "₹20,000+" } },
      { emoji: "🧴", name: "Ayurvedic Wellness Kit", desc: "A luxurious set of Ayurvedic or herbal wellness products — oils, herbs, and tonics.", badge: "wellness", tags: ["ayurvedic", "natural", "health"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ],
    father: [
      { emoji: "⌚", name: "Heritage Watch", desc: "A timeless, prestigious watch that becomes a family heirloom to pass down.", badge: "physical", tags: ["watch", "heritage", "luxury"], budget: { budget: "₹450–₹499", mid: "₹3,000–₹8,000", premium: "₹10,000–₹30,000", luxury: "₹40,000+" } },
      { emoji: "📚", name: "Memoir Writing Service", desc: "Hire a writer to turn his life stories into a beautifully bound personal memoir.", badge: "personal", tags: ["legacy", "memoir", "unique"], budget: { budget: "₹400–₹499", mid: "₹2,000–₹6,000", premium: "₹8,000–₹20,000", luxury: "₹25,000+" } },
      { emoji: "🏡", name: "Home Comfort Upgrade", desc: "A premium recliner chair, smart TV, or home audio system for maximum comfort.", badge: "tech", tags: ["comfort", "home", "practical"], budget: { budget: "₹400–₹499", mid: "₹3,000–₹8,000", premium: "₹10,000–₹30,000", luxury: "₹40,000+" } },
    ],
    grandparent: [
      { emoji: "📸", name: "Personalised Family Photo Book", desc: "A premium hardcover photo book spanning generations of family memories and milestones.", badge: "personal", tags: ["family", "memories", "legacy"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "🎙️", name: "Digital Story Recording", desc: "Hire a professional to record their life stories as a digital audio or video memoir.", badge: "experience", tags: ["legacy", "stories", "memories"], budget: { budget: "₹350–₹499", mid: "₹1,000–₹3,500", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
      { emoji: "🌹", name: "Garden Care Subscription", desc: "A monthly gardening service or premium plant subscription for their cherished garden.", badge: "wellness", tags: ["garden", "nature", "ongoing"], budget: { budget: "₹300–₹499", mid: "₹600–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "💆", name: "Home Wellness Visit", desc: "Regular home visits from a professional masseuse or physiotherapist for comfort and care.", badge: "wellness", tags: ["wellness", "health", "comfort"], budget: { budget: "₹400–₹499", mid: "₹1,000–₹3,000", premium: "₹4,000–₹10,000", luxury: "₹12,000+" } },
      { emoji: "📱", name: "Easy-Use Smart Tablet", desc: "A senior-friendly large-screen tablet to video call family, read news, and enjoy photos.", badge: "tech", tags: ["tech", "family", "connection"], budget: { budget: "₹450–₹499", mid: "₹3,000–₹7,000", premium: "₹8,000–₹20,000", luxury: "₹25,000+" } },
      { emoji: "🍽️", name: "Heritage Recipe Book", desc: "A professionally compiled and printed book of all their treasured family recipes.", badge: "personal", tags: ["legacy", "food", "family"], budget: { budget: "₹300–₹499", mid: "₹800–₹2,500", premium: "₹3,000–₹7,000", luxury: "₹9,000+" } },
    ],
    default: [
      { emoji: "📖", name: "Family Legacy Photo Book", desc: "A hardcover memory book of cherished family photos across the years.", badge: "personal", tags: ["memories", "family", "legacy"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹5,000", luxury: "₹7,000+" } },
      { emoji: "💆", name: "Wellness & Comfort Hamper", desc: "A luxury hamper with soothing teas, essential oils, and premium comfort items.", badge: "wellness", tags: ["comfort", "wellness", "thoughtful"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
      { emoji: "🌿", name: "Health Supplement Set", desc: "A curated set of premium health supplements and superfoods for vitality and wellbeing.", badge: "wellness", tags: ["health", "practical", "care"], budget: { budget: "₹300–₹499", mid: "₹700–₹2,000", premium: "₹2,500–₹6,000", luxury: "₹8,000+" } },
    ]
  }
};

// ---- Helper: Get Age Group ----
function getAgeGroup(age) {
  if (age <= 12)  return 'child';
  if (age <= 19)  return 'teen';
  if (age <= 35)  return 'young_adult';
  if (age <= 60)  return 'adult';
  return 'senior';
}

// ---- Helper: Get Suggestions ----
function getSuggestions(relation, age) {
  const ageGroup = getAgeGroup(age);
  const db = GIFT_DATABASE[ageGroup];
  if (!db) return [];
  const specific = db[relation] || [];
  const def = db['default'] || [];
  const combined = [...specific, ...def];
  // Shuffle and pick up to 6
  return combined.sort(() => Math.random() - 0.5).slice(0, 6);
}

// ---- State ----
let selectedRelation = '';
let selectedBudget = 'mid';
let lastFormData = null;

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initRelationButtons();
  initBudgetButtons();
  initAgeSlider();
  initForm();
  initResultButtons();
  initSmoothScroll();
});

// ---- Particles ----
function initParticles() {
  const container = document.getElementById('bgParticles');
  const colors = ['#8b5cf6','#ec4899','#f59e0b','#14b8a6','#3b82f6'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 20;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${left}%;
      background:${color};
      animation-duration:${duration}s;
      animation-delay:-${delay}s;
    `;
    container.appendChild(p);
  }
}

// ---- Relation Buttons ----
function initRelationButtons() {
  document.querySelectorAll('.relation-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.relation-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedRelation = btn.dataset.value;
      document.getElementById('group-relation').classList.remove('has-error');
    });
  });
}

// ---- Budget Buttons ----
function initBudgetButtons() {
  document.querySelectorAll('.budget-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.budget-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBudget = btn.dataset.value;
    });
  });
}

// ---- Age Slider ----
function initAgeSlider() {
  const slider = document.getElementById('ageSlider');
  const input  = document.getElementById('recipientAge');

  function updateSlider(val) {
    const pct = ((val - 1) / 99) * 100;
    slider.style.setProperty('--pct', pct + '%');
  }

  slider.addEventListener('input', () => {
    input.value = slider.value;
    updateSlider(slider.value);
    document.getElementById('group-age').classList.remove('has-error');
  });

  input.addEventListener('input', () => {
    const v = parseInt(input.value);
    if (v >= 1 && v <= 100) {
      slider.value = v;
      updateSlider(v);
    }
    document.getElementById('group-age').classList.remove('has-error');
  });

  updateSlider(25);
}

// ---- Form Submission ----
function initForm() {
  document.getElementById('giftForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const name     = document.getElementById('recipientName').value.trim();
    const age      = parseInt(document.getElementById('recipientAge').value);
    const relation = selectedRelation;
    const budget   = selectedBudget;

    lastFormData = { name, age, relation, budget };

    const btn = document.getElementById('submitBtn');
    btn.classList.add('loading');
    btn.disabled = true;

    // Simulate AI processing
    await delay(1800);

    btn.classList.remove('loading');
    btn.disabled = false;

    showResults(name, age, relation, budget);
  });
}

// ---- Validate Form ----
function validateForm() {
  let valid = true;

  const name = document.getElementById('recipientName').value.trim();
  const ageVal = document.getElementById('recipientAge').value;

  if (!name) {
    document.getElementById('group-name').classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('group-name').classList.remove('has-error');
  }

  if (!selectedRelation) {
    document.getElementById('group-relation').classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('group-relation').classList.remove('has-error');
  }

  const age = parseInt(ageVal);
  if (!ageVal || isNaN(age) || age < 1 || age > 120) {
    document.getElementById('group-age').classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('group-age').classList.remove('has-error');
  }

  return valid;
}

// ---- Show Results ----
function showResults(name, age, relation, budget) {
  const section = document.getElementById('resultsSection');
  const grid = document.getElementById('giftsGrid');

  document.getElementById('recipientNameDisplay').textContent = name;
  document.getElementById('resultsSubtitle').textContent =
    `🎂 Turning ${age} • 💞 Your ${capitalise(relation)} • 💰 ${getBudgetLabel(budget)} Budget`;

  const gifts = getSuggestions(relation, age);

  grid.innerHTML = '';
  gifts.forEach((gift, i) => {
    const card = createGiftCard(gift, budget, i);
    grid.appendChild(card);
  });

  section.style.display = 'block';
  setTimeout(() => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    launchConfetti();
  }, 100);
}

// ---- Create Gift Card ----
function createGiftCard(gift, budget, index) {
  const card = document.createElement('div');
  card.className = 'gift-card';
  card.style.animationDelay = `${index * 0.1}s`;

  const price = gift.budget[budget] || '₹500–₹2,000';
  const tagsHtml = gift.tags.map(t => `<span class="gift-tag">#${t}</span>`).join('');

  card.innerHTML = `
    <div class="gift-card-top">
      <span class="gift-emoji">${gift.emoji}</span>
      <span class="gift-badge badge-${gift.badge}">${capitalise(gift.badge)}</span>
    </div>
    <h3 class="gift-name">${gift.name}</h3>
    <p class="gift-desc">${gift.desc}</p>
    <div class="gift-footer">
      <span class="gift-price">💰 ${price}</span>
      <div class="gift-tags">${tagsHtml}</div>
    </div>
  `;
  return card;
}

// ---- Result Buttons ----
function initResultButtons() {
  document.getElementById('regenerateBtn').addEventListener('click', () => {
    if (!lastFormData) return;
    const { name, age, relation, budget } = lastFormData;
    showResults(name, age, relation, budget);
  });

  document.getElementById('newSearchBtn').addEventListener('click', () => {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('finder').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('giftForm').reset();
    document.querySelectorAll('.relation-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.budget-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.budget-btn[data-value="mid"]').classList.add('active');
    selectedRelation = '';
    selectedBudget = 'mid';
    document.getElementById('ageSlider').value = 25;
    const slider = document.getElementById('ageSlider');
    slider.style.setProperty('--pct', '24%');
  });
}

// ---- Confetti ----
function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#8b5cf6','#ec4899','#f59e0b','#14b8a6','#3b82f6','#f87171','#34d399'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left   = Math.random() * 100;
    const size   = Math.random() * 8 + 5;
    const dur    = Math.random() * 2 + 2;
    const delay  = Math.random() * 1.5;
    const rot    = Math.random() * 360;
    piece.style.cssText = `
      left:${left}%;
      width:${size}px;height:${size}px;
      background:${color};
      transform:rotate(${rot}deg);
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), (dur + delay) * 1000 + 500);
  }
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ---- Utils ----
function capitalise(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}
function getBudgetLabel(b) {
  const labels = { budget: 'Budget', mid: 'Mid-Range', premium: 'Premium', luxury: 'Luxury' };
  return labels[b] || b;
}
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
