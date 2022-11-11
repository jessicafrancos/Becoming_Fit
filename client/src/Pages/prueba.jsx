const json = [
  {
    name: "Adidas Essentials Jacket",
    category: "Jacket",
    type: "All-around",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "black",
    },
    brand: "Adidas",
    rating: 3.0,
    description:
      "Fabric type: Cotton, Main material: Cotton, Composition: 53% cotton / 36% recycled polyester / 11% viscose, Recommended uses: Training, With pockets: Yes",
    price: "74",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_750910-MLU51264755911_082022-O.webp",
  },
  {
    name: "Jacket Reebok Accelerate Negro",
    category: "Jacket",
    type: "All-around",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 4.0,
    description:
      "Made with soft fleece fabric for warmth and comfort. Fleece fabric for extra softness and warmth on the inside. Full zipper and hood for adjustable protection. Front pockets for storage of small items.",
    price: "66",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_937748-MLU46233265080_062021-O.webp",
  },
  {
    name: "Jacket Nike W NSW ESSNTL HOODIE FZ FLC",
    category: "Jacket",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 4.3,
    description:
      "Nike Sportswear Essential women's Fleece Essential full-zip hooded jacket. Semi-sheer fleece fabric in a zippered design provides the perfect softness and lightness for everyday wear. Zippered design and adjustable drawstring hood keep you protected from the elements..",
    price: "62",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_714567-MLU46233272230_062021-F.webp",
  },
  {
    name: "Puma Parka Jacket",
    category: "Jacket",
    type: "Running",
    gender: "Male",
    size: {
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Puma",
    rating: 4.6,
    description:
      "Waterproof nylon jacket, with external pockets and hood, Launching season: Fall/Winter",
    price: "62",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_735498-MLU50136848716_052022-F.webp",
  },
  {
    name: "Penarol Puma Jacket",
    category: "Jacket",
    type: "Training",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "green",
      color2: "yellow",
    },
    brand: "Puma",
    rating: 4.8,
    description:
      "Cotton jacket with pockets and hood, Recommended uses: Everyday, casual",
    price: "99",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_887920-MLU52065788155_102022-F.webp",
  },
  {
    name: "Puma Running Sport Coat Jacket with Hood and Zipper",
    category: "Jacket",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Puma",
    rating: 4.0,
    description:
      "Cotton sport jacket with pockets and hood, Launch season: Spring/Summer",
    price: "80",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_834953-MLU47250849478_082021-F.webp",
  },
  {
    name: "Puma Ess Track Sporty Coat Jacket With Pockets",
    category: "Jacket",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Puma",
    rating: 4.2,
    description:
      "Cotton sports jacket with pockets and hood, Launch season: Fall/Winter. Waterproof: No",
    price: "71",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_633234-MLU47598408161_092021-F.webp",
  },
  {
    name: "Jacket Reebok Accelerate Negro",
    category: "Jacket",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Reebok",
    rating: 3.2,
    description:
      "100% polyester sports jacket with external pockets. Waterproof: Yes",
    price: "77",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_905847-MLU51553904674_092022-F.webp",
  },
  {
    name: "Adidas Sport Jacket Superstar",
    category: "Jacket",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "black",
    },
    brand: "Adidas",
    rating: 4.2,
    description:
      "Made from the original sporty polyester fabric that's smooth inside and out and slightly stretchy. The Adicolor Collection Inspired by adidas heritage, Adicolor is authentic yet modern Iconic details 3-Stripes, contrast piping and Trefoil logo show adidas pride Two-way zipper Multi-functional zipper for style options.",
    price: "160",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_705545-MLU48319981344_112021-F.webp",
  },
  {
    name: "Nike Miami Heat Dri-fit Jacket",
    category: "Jacket",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 5.0,
    description:
      "Sports jacket composed of 90% polyester, Main material: Dry Fit, External pockets: 2, Recommended uses: Urban",
    price: "77",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_873287-MLU50454016004_062022-O.webp",
  },
  {
    name: "Topper Rtc Jogger",
    category: "Pants",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Topper",
    rating: 4,
    description:
      "Loose trousers with side pockets and elasticated hem, wide cotton drawstring, Topper retro brand tag",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_693903-MLA50544894698_072022-O.webp",
  },
  {
    name: "Nike Dri-fit Cr7",
    category: "Pants",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "blue",
    },
    brand: "Nike",
    rating: 4.5,
    description:
      "The Nike Dri-Fit Cr7 Short is an excellent garment for the most demanding moments of the athleths. Made of a fabric with Dri-FIT technology that wicks perspiration so that they never stop being fresh and comfortable. In addition, this garment is made with 100% recycled polyester, so you can commit to caring for the planet.",
    price: "200",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_943215-MLA51090378629_082022-O.webp",
  },
  {
    name: "Jogging Topper Frs Boys",
    category: "Pants",
    type: "Training",
    gender: "Male",
    size: {
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "grey",
    },
    brand: "Topper",
    rating: 3.5,
    description:
      "Basic chupin-type pants with side pockets, elastic waist and internal drawstring.",
    price: "200",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_814260-MLA44602226070_012021-O.webp",
  },
  {
    name: "Classics Vector Reebok Blast",
    category: "Pants",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXS: "XS",
      sizeXL: "XL",
    },
    color: {
      color1: "grey",
      color2: "white",
    },
    brand: "Reebok",
    rating: 4,
    description:
      "Old school sports style. These slim fit sweatpants come with ankle zips and large Vector logos to amp up your look. Adjust the waistband for a personalized and comfortable fit.",
    price: "275",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_838086-MLA52062553989_102022-O.webp",
  },
  {
    name: "Shorts Designed For Training",
    category: "Pants",
    type: "Training",
    gender: "Male",
    size: {
      sizeL: "L",
      sizeM: "M",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Adidas",
    rating: 4.5,
    description:
      "These shorts are designed to move with you. From seam placement for comfort, to ventilation where you need it most, they've got you covered. These stretchy, durable shorts are made from robust, stretchy fabric that can withstand even the deepest squats, and adidas AEROREADY technology keeps you company through the most intense moments of training. adidas AEROREADY wicking technology keeps your skin cool and dry at all times.",
    price: "300",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_647876-MLA50012664221_052022-O.webp",
  },
  {
    name: "Nike Nsw Essential Women Ng",
    category: "Pants",
    type: "All-around",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeSM: "SM",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 5,
    description:
      "The Nike Sportswear Essential Women's Fleece Pants give you uncompromising warmth. Made from soft semi-brushed fleece, they feature ribbed cuffs so you can show off your sneakers. Semi-brushed fleece fabric is soft and lightweight, perfect for everyday wear. Ribbed cuffs let you show off your sneakers. Elastic waist lets you adjust the fit. Slim fit for a custom fit. Fabric: 80% cotton/20% polyester.",
    price: "350",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_764098-MLA52158951139_102022-O.webp",
  },
  {
    name: "Sportswear Future Icons Animal Print",
    category: "Pants",
    type: "All-around",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "grey",
    },
    brand: "Adidas",
    rating: 4,
    description:
      "Face your day to day with the comfort provided by its soft and pleasant to the touch fabric. The fun print adds a fresh touch to your look. This product is made with Primegreen, a series of high performance recycled materials.",
    price: "315",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_762920-MLA48626577821_122021-F.webp",
  },
  {
    name: "Jogging Topper Rtc Wmn Basic",
    category: "Pants",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXS: "XS",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Topper",
    rating: 3.5,
    description:
      "The Topper Rtc Wmn pants are that basic that you always had to have in your drawers. In addition to being extremely comfortable, it allows you to dress easily and quickly in your daily plans, without losing style. The garment is made with a predominance of soft cotton so that you can feel comfort all the time you wear them and it makes you not feel cold at any time.",
    price: "300",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_985507-MLA51360825334_082022-O.webp",
  },
  {
    name: "Own The Run Astro Wind",
    category: "Pants",
    type: "Running",
    gender: "Male",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXS: "XS",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Adidas",
    rating: 4.5,
    description:
      "Wind-resistant pants are a necessary garment if you want to train 365 days a year. Wear these adidas running pants alone or over leggings on cooler days. Its fluid design with preformed knees favors the movement of runners. It shows off reflective details so you can be visible in low light conditions. Keep your house key in your sweat-proof pocket and you're ready to devour the asphalt.",
    price: "350",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_831235-MLA49175616264_022022-O.webp",
  },
  {
    name: "Evostripe Core",
    category: "Pants",
    type: "Training",
    gender: "Unisex",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Puma",
    rating: 5,
    description:
      "Complete your wardrobe with the smart street essentials for the serious athlete in these Evostripe sweatpants, featuring dryCELL technology for intelligent moisture wicking.",
    price: "350",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_654647-MLA51456667805_092022-O.webp",
  },
  {
    name: "Reebok W680lv7",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "grey",
    },
    brand: "Reebok",
    rating: 4,
    description:
      "The FreshFoam 680v7 sneaker is ideal for those who want to run in a shoe that is fashionable and comfortable to wear. Featuring a dual-density Fresh Foam technology midsole for comfort, a molded sockliner for support, and optimal rubber coverage for durability, this shoe provides a soft feel with every step. With a smooth technical mesh upper, this women's running shoe gives your feet an experience you'll love.",
    price: "56",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_601088-MLA47805427813_102021-F.webp",
  },
  {
    name: "Reebok 411 V2 Fitness Training W411",
    category: "Shoes",
    type: "All-around",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "grey",
      color2: "pink",
      color3: "violet",
    },
    brand: "Reebok",
    rating: 4.2,
    description:
      "Reebok 411 Women's Shoes. The NB 411v2 helps you move comfortably to face the day. Featuring a Ground Contact Eva outsole, these women's shoes deliver incredibly lightweight cushioning, abrasion resistance and durability with every step. A sublimated print on the vamp completes this sneaker with a sleek look to perfectly combine function and fashion.",
    price: "59",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_910152-MLA51756298219_092022-F.webp",
  },
  {
    name: "Running Reebok Wkozelp1",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Reebok",
    rating: 4.5,
    description:
      "Reebok WKOZELP1 shoes excellent running style model, ideal for your physical training or simply to wear comfortable shoes during the day!",
    price: "51",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_785933-MLA31037345754_062019-F.webp",
  },

  {
    name: "Reebok Wtntrrf1 Trail",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "orange",
    },
    brand: "Reebok",
    rating: 4.1,
    description:
      "Featuring trail-leading technology and a sleek, modern look, the Women's NITREL FuelCore offers a winning combination of speed, traction and style. The lightweight, protective upper features breathable materials with seamless overlays sitting atop an ultralight REVlite midsole. The AT TREAD hybrid outsole is designed for road and trail use, while the Toe Protect feature offers additional protection between harsh environments.",
    price: "73",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_854308-MLA31602599679_072019-F.webp",
  },

  {
    name: "Reebok Tempo Fresh Foam",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "blue",
      color2: "red",
      color3: "green",
    },
    brand: "Reebok",
    rating: 5.0,
    description:
      "Built with a plush Fresh Foam technology midsole, this running shoe is designed based on objective data in real tests to offer comfort and response with a light weight and a smooth ride for both long distances and on the treadmill. And to provide fit at strategic points from heel to toe, this women's running shoe has a low-profile upper made of stylish breathable mesh and synthetic materials.",
    price: "134",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_834057-MLA50613168757_072022-F.webp",
  },
  {
    name: "Reebok Fitness Training M411v2",
    category: "Shoes",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "red",
      color2: "blue",
    },
    brand: "Reebok",
    rating: 4.9,
    description:
      "The NB 411v2 helps you move comfortably to face the day. Featuring a Ground Contact Eva outsole, these men's shoes deliver incredibly lightweight cushioning, abrasion resistance and durability with every step. A sublimated print on the vamp completes this sneaker with a sleek look to seamlessly blend functionality and fashion.",
    price: "59",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_693423-MLA51754248187_092022-F.webp",
  },

  {
    name: "Reebok Tempo Cr Fresh Foam",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "green",
      color3: "yellow",
    },
    brand: "Reebok",
    rating: 5.0,
    description:
      "Don't miss a beat on the run in our Fresh Foam Tempo running shoes. Constructed with a super-soft Fresh Foam midsole, this shoe is designed based on real-world testing data to provide lightweight comfort and response with a smooth ride for both long-distance and treadmill running. And to provide fit at strategic points from the heel to the forefoot. It also has a low-profile upper made with elegant breathable mesh and synthetic materials.",
    price: "124",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_658383-MLA50513820972_062022-F.webp",
  },

  {
    name: "Reebok Fresh Foam Cruz V2 Sport Kb",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Reebok",
    rating: 4.4,
    description:
      "Improve your performance with the Reebok Fresh Foam Cruz v2 Sport running shoes. It features a comfortable bootie construction and an elastic heel for easy slip-on. A reflective fit in the midfoot provides support while Fresh Foam technology gives you soft cushioning.",
    price: "88",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_969346-MLA49987664196_052022-F.webp",
  },

  {
    name: "Reebok M413cl1",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "blue",
    },
    brand: "Reebok",
    rating: 4.4,
    description:
      "MESH UPPER, ADJUSTMENT SYSTEM WITH LACES, RUBBER SOLE, DETAILS IN SYNTHETIC MATERIAL.",
    price: "65",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_862818-MLA51388850996_092022-F.webp",
  },

  {
    name: "Reebok Arishi",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "orange",
    },
    brand: "Reebok",
    rating: 4.6,
    description:
      "Feel light and fast with the Fresh Foam Arishiv3. These men's deluxe running shoes include innovative features like a cored outsole for superior flexibility and a comfortable feel that take you from your morning run to your daily errands with ease. A knit upper keeps these shoes light, while a Fresh Foam midsole provides rebound and cushioning to keep you moving forward.",
    price: "99",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_612312-MLA51954084504_102022-F.webp",
  },
  {
    name: "Nike Classic cotton straigh pants ",
    category: "Pants",
    type: "All-around",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "yellow",
      color4: "green",
      color5: "white",
      color6: "blue",
    },
    brand: "Nike",
    rating: 4.2,
    description: "versatile and stylish ruched pants with a high-waist",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_960269-MCO48665775519_122021-O.jpg",
  },
  {
    name: "Nike running slim-fit pants",
    type: "Running",
    category: "Pants",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "pink",
      color4: "green",
      color5: "white",
    },
    brand: "Nike",
    rating: 4.8,
    description:
      "High-Rise Ruched Pants are engineered with a flat front waistband for a clean aesthetic. Adaptable tie cord funnels on the legs can be ruched up for a sophisticated silhouette.",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_622646-MCO51390369899_092022-O.jpg",
  },
  {
    name: "Trainig lycra short waterproof",
    category: "Pants",
    type: "Training",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "pink",
      color4: "green",
      color5: "white",
    },
    brand: "Nike",
    rating: 4.8,
    description:
      "comfortable, versatile ciclying short nike one mid-waist waterproof fabric",
    price: "250",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_988718-MCO50098458864_052022-O.jpg",
  },
  {
    name: "Cross-country ski pants waterproof",
    category: "Pants",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "pink",
      color4: "green",
      color5: "white",
    },
    brand: "Adidas",
    rating: 4.3,
    description:
      "These overpants are designed for cross-country skiing at a low intensity. The 150 overpants are very practical thanks to their loose fit. Can be worn over a base layer and full zipper opening at the sides.The side openings let you adapt your outfit to your body temperature.",
    price: "150",
    image:
      "https://contents.mediadecathlon.com/p1352305/0c15bd8fc3bb08d2e7e5c0868a6cb67845ee83818b8ad07f5155c4325430e9fa/xc-s-150-cross-country-ski-overpants-women.jpg?format=auto&f=650x650",
  },
  {
    name: "Shorts training essential 100% lycra",
    category: "Pants",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "yellow",
      color4: "green",
      color5: "white",
    },
    brand: "Adidas",
    rating: 4,
    description: "comfortable traing shorts made by reclicled plastic bottles",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_834561-MCO50232883063_062022-O.jpg",
  },
  {
    name: "Jogger fit comtemporaneum",
    category: "Pants",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "yellow",
      color4: "green",
      color5: "white",
    },
    brand: "Nike",
    rating: "4",
    description: "versatile and stylish jogger pants with a high-waist",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_822646-MCO46337578491_062021-O.jpg",
  },
  {
    name: "Sailing ski pants 100% cotton",
    category: "Pants",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "pink",
      color4: "green",
      color5: "white",
    },
    brand: "Reebok",
    rating: 4.1,
    description:
      "These waterproof pants were developed for inshore sailing in stormy weather. These waterproof sailing overpants have a handy pocket and adjustable ankle cuffs. Plus, they are ultra-comfortable and lightweight.",
    price: "350",
    image:
      "https://contents.mediadecathlon.com/p1527898/4e7c48e5bfe5a6600bef417aec6dac1ee5b192bccf295e47c1fe47af9bf6742c/womens-top-layer-sailing-pants-100-navy.jpg?format=auto&f=650x650",
  },
  {
    name: "Training winter pants 100% cotton",
    category: "Pants",
    type: "Training",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "pink",
      color4: "green",
      color5: "white",
    },
    brand: "Adidas",
    rating: 4,
    description:
      "Are you looking for pants that you can wear for your daily activities and also on the pitch? The search ends with these adidas pants. Incorporating AEROREADY wicking technology and an elasticated drawstring waist that complements the classic silhouette that never goes out of style. Rather, it has everything.",
    price: "230",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_834282-MCO50233600125_062022-O.jpg",
  },
  {
    name: "Slim-fit leggings pants",
    category: "Pants",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "grey",
      color3: "yellow",
      color4: "green",
      color5: "white",
    },
    brand: "Nike",
    rating: 4.6,
    description: "versatile and stylish jogger pants with a high-waist",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_988371-MCO51390509811_092022-O.jpg",
  },
  {
    name: "Leggings soccer pants",
    category: "Pants",
    type: "Training",
    gender: "Unisex",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 3.9,
    description:
      "Kids love comfort and looking and feeling great, and these Nike Sportswear Leggings deliver it all. They're so soft and stretchy, you'll never want to take them off.",
    price: "180",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_927823-MCO52065954067_102022-O.jpg",
  },
  {
    name: "Nike Downshifter 11 - Cw3411-006",
    category: "Shoes",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Nike",
    rating: 4.5,
    description:
      "The Nike Downshifter 11 Shoes are perfect for your running days, the upper mesh gives you breathable comfort, with flexible grooves in the sole gives you better traction, reaction, and cushioning in each step, plus the metallic swoosh logo adds a sporty touch and original.",
    price: "72",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_799214-MLA47321513551_092021-F.webp",
  },

  {
    name: "Resolve Street Adp Puma",
    category: "Shoes",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "blue",
    },
    brand: "Puma",
    rating: 4.2,
    description:
      "The Puma Resolve Street Shoes keep your feet light throughout the day. They feature a mesh upper part without laces. SOFTFOAM + insole provides the soft cushioning that each step deserves. With rubber sole, adherent to the ground and urban style.",
    price: "56",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_986689-MLA47491523775_092021-O.webp",
  },

  {
    name: "Galaxar Run Fw1185 Adidas",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "black",
    },
    brand: "Adidas",
    rating: 3.9,
    description:
      "The upper of the Galaxar Run is made of Primegreen, a textile mesh made from at least 50% recycled material. This mesh is breathable and flexible, adapting perfectly to the shape of your foot for a highly comfortable experience. A lace-up closure lets you make quick adjustments to support and keep the shoe on top as you train. A Bounce midsole gives you high cushioning and reduces impacts with each step. Meanwhile, an advanced, durable rubber outsole gives you organic, consistent traction on urban surfaces. Galaxar Run shoes.",
    price: "79",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_628808-MLA52235610968_112022-O.webp",
  },
  {
    name: "Energy Falcon X Adidas",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "pink",
    },
    brand: "Adidas",
    rating: 4.7,
    description:
      "The Adidas Energyfalcon X shoes are designed as the first option for your running days. The cushioned midsole works with a soft sockliner to cushion every step. Add kilometers with the Adiwear sole and the midsole with Cloudfoam cushioning.",
    price: "64",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_907618-MLA49175636827_022022-O.webp",
  },

  {
    name: "Retaliate 2 Adp Puma",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
    },
    brand: "Puma",
    rating: 4.8,
    description:
      "Get ready for the road in the Retaliate 2 running shoe. Lightweight and ergonomic, with a burrito collar construction for a snug fit to the foot, a comfortable and supportive midsole, rubber zoning to improve outsole traction, the bold PUMA branding and a pull tab for easy on and off, you'll have total control over whatever surface you're training on.",
    price: "86",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_941393-MLA51424958797_092022-O.webp",
  },

  {
    name: "Wmns Zoom Winflo 8 Nike",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "blue",
    },
    brand: "Nike",
    rating: 4.3,
    description:
      "The Nike Air Zoom Winflo 8 shoes have EVA foam for comfort and lightness in contact with the surface. The Zoom Air unit raises the level of cushioning for more response with each step and the rubber outsole offers secure traction.",
    price: "118",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_651457-MLA51372827339_092022-O.webp",
  },

  {
    name: "Terrex Eastrail Hiking",
    category: "Shoes",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "red",
    },
    brand: "Adidas",
    rating: 4,
    description:
      "Terrex Eastrail shoes. Accumulate. Built for a stable feel and secure traction on wet and uneven terrain, they feature a cushioned midsole for all-day comfort. Mesh and synthetic material upper for lightness and comfort.",
    price: "92",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_824522-MLA51919238198_102022-O.webp",
  },

  {
    name: "Fortarun Lace Running",
    category: "Shoes",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "blue",
    },
    brand: "Adidas",
    rating: 4.9,
    description:
      "The durable, non-marking outsole stands up to the wear and tear of kids. This product is made with Primegreen, a series of high performance recycled materials. 50% of the exterior is made from recycled material.",
    price: "56",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_993646-MLA48258348451_112021-O.webp",
  },

  {
    name: "Puma Comet 2",
    category: "Shoes",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "pink",
    },
    brand: "Puma",
    rating: 3.7,
    description:
      "The Puma Comet 2 Alt Beta sneakers are made with lightweight materials for better wear. The Softride foam in the heel gives you the necessary cushioning for your steps, while the SoftFOAM+ insole adds more comfort. The lacing system provides a personalized fit, while their sporty design makes them suitable for all types of training.",
    price: "49",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_783914-MLA52105243060_102022-O.webp",
  },

  {
    name: "Racer Tr21 Buzz Lightyear",
    category: "Shoes",
    type: "Running",
    gender: "Unisex",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "green",
      color2: "white",
    },
    brand: "Adidas",
    rating: 3.4,
    description:
      "The breathable mesh upper sits on top of a chunky rubber outsole, so kids can run, jump and play non-stop and always land firmly again. Made from a range of recycled materials, this exterior incorporates at least 50% recycled content.",
    price: "68",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_793024-MLA51603311228_092022-O.webp",
  },
  {
    name: "Reebok Training Essentials Vector Anorak Gj0646 Jacket",
    category: "Jacket",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "blue",
      color3: "red",
    },
    brand: "Reebok",
    rating: 4.5,
    description:
      "Don't let a little weather coop you up. Zip up this men's jacket and do your routine in the fresh, frosty air. The fleece build is soft and warm. The ribbed cuffs and hem keep the jacket close to your body, so your core stays warm. A big Vector logo out front lets you show your Reebok pride.",
    price: "300",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_628100-MLA49373572392_032022-F.webp",
  },
  {
    name: "OG Hear Box Boxing Jacket",
    category: "Jacket",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "blue",
      color3: "red",
    },
    brand: "Adidas",
    rating: 3.25,
    description:
      " Stay warm and comfortable in an adidas hoodie, made with French terry cotton-blend, the material is soft, providing comfort in everyday and active wear. Move with ease in a ultra-flexible VRCT jacket, ideal for pre-training and warm-ups, this jacket resembles the classic college jacket. A symbol of achievement and pride, this jacket, like boxing, embraces personal expression and individuality. Sweat through high intensity sessions with a tank top or t-shirt, designed with breathable quick-drying materials that manage your heat and moisture. ",
    price: "150",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_827002-MLA51280766874_082022-F.webp",
  },
  {
    name: "Nike Sportswear Storm-Fit Windrunner Jacket",
    category: "Jacket",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "green",
      color3: "grey",
    },
    brand: "Nike",
    rating: 3.25,
    description:
      " Ready for cold and windy weather, the Nike Sportswear Hooded Jacket offers plush warmth in a lightweight package. High-loft down traps heat without adding excess weight. Windrunner design details create a heritage look that won't disappoint when the temperatures really drop.",
    price: "340",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_777822-MLA52233877292_112022-F.webp",
  },
  {
    name: "Puma Sportswear Woven Track Jacket",
    category: "Jacket",
    type: "All-around",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "grey",
      color2: "pink",
    },
    brand: "Puma",
    rating: 1.5,
    description:
      "The Puma Sportswear Woven Track Jacket is full of style and promises all the comfort you're looking for for your day-to-day. It has a waterproof outer fabric that repels water and keeps you dry on rainy and wet days. It is partially made with recycled materials, as part of one of PUMA's solutions to reduce its environmental impact. The regular fit adjusts to all body types, while the full closure and pockets protect you from the cold, so you can enjoy your entire day without distractions. Puma Sportswear Woven Track Jacket in Grey/Pink | Moov",
    price: "550",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_647681-MLA47484155703_092021-F.webp",
  },
  {
    name: "Adidas Marathon Space Race Jacket",
    category: "Jacket",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "grey",
    },
    brand: "Adidas",
    rating: 5.0,
    description:
      " New perspectives come when you break free from the known. adidas joined forces with NASA to develop unique visions that we couldn't achieve here on Earth. This running jacket celebrates this alliance with an Artemis mission logo on the chest. Use it while you train or for your day-to-day activities        This product is made with Primegreen, a series of high-performance recycled materials. ",
    price: "750",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_673065-MLA49096049634_022022-F.webp",
  },
  {
    name: "Topper Frisa Basic Jacket",
    category: "Jacket",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "blue",
      color3: "grey",
    },
    brand: "Topper",
    rating: 4.0,
    description:
      " The Topper Frisa Básic jacket is that garment that you cannot miss when the cold starts. It has a classic design that allows you to dress for any occasion and with any look, without losing focus on the coat. Made of friezed cotton fabric, it has a hood, cuffs, waistband and kangaroo pockets so that all parts of your torso are always covered and protected. Warm and subtle, this jacket is your perfect winter companion.",
    price: "200",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_811551-MLA45772648855_042021-F.webp",
  },
  {
    name: "Puma MCS Iconic Man City Jacket",
    category: "Jacket",
    gender: "Unisex",
    type: "All-around",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "blue",
    },
    brand: "Puma",
    rating: 4.3,
    description:
      "Stand out with the avant-garde supporters wardrobe from our Manchester City collection, a perfect addition to any football fan's wardrobe. The MCS Iconic Manchester City line combines two legendary franchises, Manchester City and our MCS track suit, a signature design from the PUMA archives that pays homage to the disco scene of the 1980s. The MCS Iconic Manchester Soccer Track Jacket City incorporates the famous chevron lines of the original MCS design, but reinterpreted with team-specific colors. Incorporates recycled fibers and the latest dryCELL technology.",
    price: "700",
    image:
      "https://sporting.vtexassets.com/arquivos/ids/549406-800-800?v=637919317275870000&width=800&height=800&aspect=true",
  },
  {
    name: "Nike Dry Fz 86f220-g5r Jacket",
    category: "Jacket",
    type: "All-around",
    gender: "Male",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
      color2: "blue",
      color3: "grey",
    },
    brand: "Nike",
    rating: 3.75,
    description:
      "A soft fleece fleece with a soft texture and moisture-absorbing technology from the Nike Dri-FIT hood ensures dryness and comfort. Nike's print is blurry for a speed effect. Dri-FIT technology wicks moisture away to a surface where it evaporates quickly, providing comfort and full concentration. Soft fleece fleece for more comfort. Standard fit offers comfort and convenience. Full length zipper. Front pockets.",
    price: "340",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_623737-MLA46205032862_052021-F.webp",
  },
  {
    name: "Adidas Yg E 3s Fz Hd Jacket",
    category: "Jacket",
    type: "Training",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "pink",
      color2: "white",
    },
    brand: "Adidas",
    rating: 2.3,
    description:
      "Train outside in this hooded training jacket. It's made of soft cotton fleece in a slim fit. Ribbed cuffs and hem give you a secure fit, while kangaroo pockets help protect your hands from the cold. The classic 3-Stripes give it a unique sporty style. Slim fit that's snug through the torso and arms. Long sleeves with ribbed cuffs. 70% cotton / 30% recycled polyester fleece. Kangaroo pockets. Front closure. ribbed hem. We work with the Better Cotton Initiative to improve cotton farming globally. This hooded jacket is made with recycled polyester to save resources and reduce emissions.",
    price: "200",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_762600-MLA40412931426_012020-F.webp",
  },
  {
    name: "Topper Unisex To 165095 Jacket",
    category: "Jacket",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "black",
      color2: "white",
    },
    brand: "Topper",
    rating: 4.3,
    description:
      "Jacket with wadding filling. Narrow horizontal matting on front and back. Side pockets. Printed logo. This winter keep you warm with the new cool Topper jackets",
    price: "655",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_851404-MLA49889308216_052022-F.webp",
  },
  {
    name: "T-shirts Puma Home Manchester City",
    category: "T-shirts",
    type: "Training",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "blue",
    },
    brand: "Puma",
    rating: 3.5,
    description:
      "PUMA, a global sports brand, offers consumers innovative products that successfully fuse creative influences from the worlds of sports, lifestyle and fashion.",
    price: "10.69",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_731357-MLA51455279110_092022-F.webp",
  },
  {
    name: "Topper Basic T-shirt In Petrol Blue | Dexter",
    category: "T-shirts",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "blue",
    },
    brand: "Topper",
    rating: 3.2,
    description:
      "Never miss the basics for the little ones!! Wear the Topper Basic T-shirt and always enjoy the softness and versatility it has to offer. The classic cut is combined with soft fabric to give you a garment that adapts to all your routines and goes well with all your joggers or sneakers.",
    price: "9",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_949885-MLA51002122386_082022-O.webp",
  },
  {
    name: "Reebok Girls' T-Shirt",
    category: "T-shirts",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "pink",
      color2: "white",
    },
    brand: "Reebok",
    rating: 4.8,
    description:
      "short sleeve t-shirt for girls; greatness doesn't come from standing still, living an active life allows people to be their best selves",
    price: "8.99",
    image: "https://m.media-amazon.com/images/I/714NOw4-ehL._AC_UX466_.jpg",
  },
  {
    name: "Puma Sneaker Graphic Tee Original Men's T-Shirt",
    category: "T-shirts",
    type: "Running",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "grey",
      color2: "white",
    },
    brand: "Puma",
    rating: 4.8,
    description:
      "Bring an urban style to your outfit with this Puma t-shirt. All this without abandoning the comfort provided by its other garments, such as the dryCELL technology, which dissipates sweat. The original drawing on the front with the brand's logo provides a sporty style.",
    price: "11",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_619619-MLA50770830663_072022-O.webp",
  },
  {
    name: "Puma Modern Sports Loose Crew Neck T-Shirt For Women",
    category: "T-shirts",
    type: "Training",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "pink",
      color2: "white",
      color3: "grey",
    },
    brand: "Puma",
    rating: 4.4,
    description:
      "Give an extra touch to your training days with the Puma Modern Sports T-shirt.",
    price: "11",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_913846-MLA51446767632_092022-O.webp",
  },
  {
    name: "Reebok Running T-shirt",
    category: "T-shirts",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
    },
    color: {
      color1: "black",
    },
    brand: "Reebok",
    rating: 4.5,
    description:
      "T-shirt with a round neckline with the edge made in the reebok brand, it is made of 100% soft and high-performance cotton, it is light, fresh and perfect for physical activities such as running.",
    price: "9",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_654673-MLA41511642109_042020-O.webp",
  },
  {
    name: "Puma Modern Sports White Crew Neck T-Shirt For Women",
    category: "T-shirts",
    type: "Running",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
    },
    color: {
      color1: "pink",
    },
    brand: "Puma",
    rating: 4.5,
    description:
      "T-shirt with a round neckline with the edge made in the Puma brand, it is made of 100% soft and high-performance cotton, it is light, fresh and perfect for physical activities such as running.",
    price: "9",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_913846-MLA51446767632_092022-O.webp",
  },
  {
    name: "Puma Amplified Graphic Cotton T-shirt For Women",
    category: "T-shirts",
    type: "Running",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "pink",
    },
    brand: "Puma",
    rating: 4.8,
    description:
      "T-shirt with a round neckline with the edge made in the Puma brand, it is made of 100% soft and high-performance cotton, it is light, fresh and perfect for physical activities such as running.",
    price: "11",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_741619-MLA49211347596_022022-O.webp",
  },
  {
    name: "Reebok Team Sport Vector T-Shirt Official Store",
    type: "All-around",
    category: "T-shirts",
    gender: "Male",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "black",
    },
    brand: "Reebok",
    rating: 4.2,
    description:
      "This men's Reebok graphic tee puts your respect for the sport on your chest for all to see. It has a slim fit for a stylish look. Soft cotton jersey is comfortable to wear all day. Our cotton products come entirely from sustainable cotton farms and are made with at least 50% Better Cotton.",
    price: "10",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_908200-MLA50739256968_072022-O.webp",
  },
  {
    name: "Reebok Stacked T Shirt In Navy/red | Stock Center",
    type: "All-around",
    category: "T-shirts",
    gender: "Male",
    size: {
      sizeS: "S",
      sizeM: "M",
    },
    color: {
      color1: "blue",
      color2: "red",
    },
    brand: "Reebok",
    rating: 4.7,
    description:
      "The Reebok Stacked T-Shirt is cut from a cotton single jersey fabric. Its regular style features a round neckline and short sleeves, while the logo design on the chest gives it the sporty touch you need to wear it all day.",
    price: "9",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_959618-MLA48555956650_122021-O.webp",
  },
  {
    name: "T-Shirt Adidas Fast Graphic Men 1487 Dash",
    category: "T-shirt",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "white",
      color2: "black",
    },
    brand: "Adidas",
    rating: 4.2,
    description:
      "Knock your training goals out in total comfort in this adidas AEROREADY t-shirt. Made to manage moisture, the shirt is soft and durable, a perfect combination for your next gym session. Slits in the elongated hem help you move freely, whether you're lifting, running or just out for a vigorous stroll.",
    price: "30",
    image:
      "ttps://http2.mlstatic.com/D_NQ_NP_2X_739115-MLA49138415619_022022-F.webp",
  },
  {
    name: "Argentine 22 Home Jersey",
    category: "T-shirt",
    type: "Training",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "white",
    },
    gender: "Unisex",
    brand: "Adidas",
    rating: 5.0,
    description:
      "Argentina to the core. Throughout soccer history, those three blue stripes have stood for mesmerizing footwork and unrivaled commitment. For the team's latest home jersey, adidas returned to that winning look. Made for fans, it keeps things comfortable with smooth fabric and moisture-wicking AEROREADY. Those details on the inside back neck take design cues from the national flag the players so proudly represent.",
    price: "90",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8fecaae3166e428b9cf0ae830109e23e_9366/Argentina_22_Home_Jersey_White_HF2158_21_model.jpg",
  },
  {
    name: "Future Icons Logo Graphic Tee",
    category: "T-shirt",
    type: "All-around",
    gender: "Unisex",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "white",
      color2: "black",
      color3: "red",
      color4: "green",
      color5: "grey",
    },
    brand: "Adidas",
    rating: 3.5,
    description:
      "There are times to go hard, and then there are moments to give into the stillness. Both are a showcase of strength. Whatever the speed, this adidas t-shirt is down for it. Soft material hangs on the body with a loose, casual shape for total comfort. A logo graphic on the front puts your dedication on full display — not like it wasn't already clear.",
    price: "15",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7558b605842b467ead58ad1700b2276b_9366/Future_Icons_Logo_Graphic_Tee_White_GR4111_21_model.jpg",
  },
  {
    name: "Own The Run Tee",
    category: "T-shirt",
    type: "Running",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
    },
    color: {
      color1: "white",
      color2: "black",
      color3: "blue",
      color4: "grey",
    },
    gender: "Female",
    brand: "Adidas",
    rating: 3.9,
    description:
      "The drawer is full of running t-shirts that didn't quite work out. Too thick, too thin. Too tight, too loose. But the one that always seems to find its way to the top of the pile is this adidas Own the Run Tee. Made with recycled materials as part of our commitment to sustainability, it keeps you comfortable on a long loop on Sunday and a lunchtime 5K on Monday. Never settle for not-quite-right again",
    price: "21",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97b6d8b45f4f4d4ebd72acfb01538343_9366/Own_the_Run_Tee_Grey_H34487_21_model.jpg",
  },
  {
    name: "Nike Dri-Fit ADV Aura",
    category: "T-shirt",
    type: "Training",
    gender: "Female",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "pink",
      color2: "black",
      color3: "white",
    },
    brand: "Nike",
    rating: 4.3,
    description:
      "Matching effortless comfort with technical performance, the Nike Dri-FIT ADV Aura Top checks all the boxes. Soft, lightweight fabric (with plenty of stretch) wicks sweat and dries fast. It's also incredibly breathable with panels of mesh blended into a smooth and virtually seamless design. Feel confident knowing you can take on any workout in comfort. This product is made with at least 75% recycled nylon fibers.",
    price: "70",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0ceabd71-a0dd-4b0b-a8c5-883b8643746b/dri-fit-adv-aura-womens-slim-fit-long-sleeve-training-top-GBv7wV.png",
  },
  {
    name: "Jordan Sport",
    category: "T-shirt",
    type: "All-around",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
      size3XL: "3XL",
    },
    color: {
      color1: "blue",
      color2: "black",
    },
    brand: "Nike",
    rating: 4.9,
    description:
      "Let your outfit adapt to your needs as you move through your day in this 2-in-1 top. If you're craving breathability, remove the long-sleeve portion to reveal an asymmetrical tank. The tight fit and shelf bra feel supportive, seeing you through your activities of choice.",
    price: "55",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e5370f52-ce2c-45b0-b2a1-c97982ffa172/jordan-sport-womens-2-in-1-long-sleeve-top-lLwgKW.png",
  },

  {
    name: "Nike Dri-Fit Miler",
    category: "T-shirt",
    type: "Running",
    gender: "Male",
    size: {
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "white",
      color2: "black",
      color3: "orange",
      color4: "yellow",
      color5: "blue",
    },
    brand: "Nike",
    rating: 3.6,
    description:
      "Take on your daily route with the Nike Dri-FIT Miler Top. It features lightweight performance and mobility for the entry-level runner. This product is made with at least 50% recycled polyester fibers",
    price: "35",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7303fc54-9e65-47ec-8916-e2a1879d0207/dri-fit-miler-mens-running-top-95KFGR.png",
  },

  {
    name: "Shirt team base",
    category: "T-shirt",
    type: "Training",
    gender: "Female",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "white",
    },
    brand: "Nike",
    rating: 3.6,
    description:
      "When the weather doesn't warrant a sweatshirt, wear this base tee. The long-sleeved, slim-fit design of this adidas Team Base T-Shirt makes it perfect to wear under your football jersey for added protection from the cold. It incorporates AEROREADY absorption technology that keeps your skin dry and is made of elastic fabric that allows you to move with fluidity at all times. This product is made with Primegreen, a series of high performance recycled materials.",
    price: "20",
    image:
      "https://topperarg.vtexassets.com/arquivos/ids/254974-800-800?width=800&height=800&aspect=true",
  },

  {
    name: "Basic Training shirt",
    category: "T-shirt",
    type: "Training",
    gender: "Male",
    size: {
      sizeXS: "XS",
      sizeS: "S",
      sizeM: "M",
      sizeL: "L",
      sizeXL: "XL",
      size2XL: "2XL",
    },
    color: {
      color1: "white",
      color2: "blue",
    },
    brand: "Nike",
    rating: 2.9,
    description:
      "Short-sleeved shirt glued with cleaning strip. Transfer logos.",
    price: "25",
    image:
      "https://topperarg.vtexassets.com/arquivos/ids/289040-800-800?width=800&height=800&aspect=true",
  },
  {
    name: "Nike Sportswear Icon Clash T-Shirt In Red | Stock Center",
    category: "T-shirt",
    type: "All-around",
    gender: "Female",
    size: {
      sizeM: "M",
      sizeL: "L",
    },
    color: {
      color1: "red",
    },
    brand: "Nike",
    rating: 3.5,
    description:
      "Fashion passes, but style remains, reflect your good taste with the Nike Sportswear Icon Clash T-shirt made of soft cotton that gives you freshness and warmth, its design above the croptop waist gives you a loose and urban look so you can look with your favorite jeans or shorts. Its print with figures, the black and white checkered pattern and the label on the back of the neck give you a modern and differential style that will make you stand out from the crowd.",
    price: "20",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_913856-MLA49589991592_042022-O.webp",
  },
];

function changeObject(parameter) {
  let sizeObject = parameter.filter((e) => (e.size = Object.values(e.size)));
  return sizeObject;
}

function productsLength(parameter) {
  return parameter.map((p) => p.name).length;
}

//console.log(changeObject(json));

function brands(parameter) {
  let brands = parameter.map((p) => p.brand);
  let uniqueBrands = new Set(brands);
  return uniqueBrands;
}

console.log(brands(json));
console.log("HOLA");
