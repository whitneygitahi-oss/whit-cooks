// ==================== 53 GLOBAL RECIPES DATABASE (DISH-MATCHED PHOTOS) ====================
const recipeDatabase = [
  // ==================== AFRICAN (9) ====================
  {
    name: "Jollof Rice",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80",
    description: "West Africa's celebrated smoky tomato rice infused with scotch bonnet, ginger, thyme, and bay leaves.",
    ingredients: [
      "3 cups long-grain parboiled rice, rinsed",
      "6 large ripe tomatoes, blended",
      "2 red bell peppers, seeded and blended",
      "1 scotch bonnet pepper",
      "2 medium red onions (1 blended, 1 sliced)",
      "3 tbsp tomato paste",
      "3 cups rich chicken or vegetable stock",
      "1/3 cup vegetable oil",
      "1 tsp curry powder, 1 tsp dried thyme, 2 bay leaves",
      "Salt and seasoning cubes to taste"
    ],
    steps: [
      "Blend the tomatoes, red bell peppers, scotch bonnet, and one onion into a smooth puree.",
      "Heat vegetable oil in a heavy pot over medium heat. Saute the sliced onion for 3 minutes, then stir in the tomato paste and fry for 5 minutes.",
      "Pour in the blended tomato mixture, curry powder, thyme, bay leaves, and seasoning. Simmer for 15 minutes until reduced and thickened.",
      "Add the chicken stock and bring to a rolling boil. Stir in the rinsed parboiled rice.",
      "Cover tightly with foil and a lid to trap steam. Reduce heat to low and cook for 25 to 30 minutes until tender.",
      "Fluff the rice gently with a fork and serve warm."
    ]
  },
  {
    name: "Nyama Choma & Kachumbari",
    cuisine: "African",
    prepTime: "25 mins",
    cookTime: "45 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "East African charcoal-grilled beef ribs paired with a crisp tomato, red onion, and cilantro relish.",
    ingredients: [
      "2 lbs bone-in beef short ribs or goat meat",
      "3 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp vegetable oil",
      "1 tsp coarse sea salt and 1/2 tsp black pepper",
      "3 ripe tomatoes, finely diced (for Kachumbari)",
      "1 red onion, thinly sliced and rinsed in salt water",
      "1/2 cup fresh cilantro, chopped",
      "Juice of 2 fresh limes"
    ],
    steps: [
      "Rub the beef ribs with minced garlic, grated ginger, vegetable oil, sea salt, and black pepper. Marinate for at least 30 minutes.",
      "Preheat a grill or broiler over medium-high heat.",
      "Grill the meat slowly for 35 to 45 minutes, turning occasionally until charred outside and tender inside.",
      "While grilling, combine diced tomatoes, rinsed red onions, cilantro, lime juice, and a pinch of salt in a bowl for the Kachumbari.",
      "Let the grilled meat rest for 5 minutes, slice into bite-sized pieces, and serve alongside the fresh Kachumbari."
    ]
  },
  {
    name: "Moroccan Chicken Tagine",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "45 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    description: "Slow-braised chicken thighs with preserved lemon, green olives, saffron, and warm North African spices.",
    ingredients: [
      "6 bone-in, skin-on chicken thighs",
      "1 large yellow onion, finely sliced",
      "3 cloves garlic, minced",
      "1 tsp ground cumin, 1 tsp ground ginger, 1/2 tsp turmeric",
      "1/2 tsp cinnamon and a pinch of saffron threads",
      "1 cup green olives, pitted",
      "1 preserved lemon, rind thinly sliced",
      "1.5 cups chicken broth",
      "2 tbsp olive oil and fresh cilantro for garnish"
    ],
    steps: [
      "Season chicken thighs with salt, cumin, ginger, turmeric, and cinnamon.",
      "Heat olive oil in a tagine or Dutch oven over medium-high heat. Sear chicken skin-side down for 5 minutes until golden, then set aside.",
      "Add sliced onions and garlic to the pot and cook for 6 minutes until softened.",
      "Pour in chicken broth and saffron, bring to a simmer, and return the chicken to the pot.",
      "Cover and simmer gently for 30 minutes. Add green olives and preserved lemon slices during the final 10 minutes.",
      "Garnish with fresh cilantro and serve with warm couscous or flatbread."
    ]
  },
  {
    name: "Doro Wat",
    cuisine: "African",
    prepTime: "30 mins",
    cookTime: "1 hr 15 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    description: "Ethiopian spiced chicken stew simmered in caramelized red onions, berbere spice, and hard-boiled eggs.",
    ingredients: [
      "2.5 lbs chicken drumsticks and thighs, scored",
      "4 large red onions, finely minced",
      "3 tbsp berbere spice blend",
      "3 tbsp niter kibbeh (Ethiopian spiced clarified butter) or unsalted butter",
      "1 tbsp garlic-ginger paste",
      "1.5 cups chicken stock",
      "4 hard-boiled eggs, peeled",
      "Juice of 1 lemon and 1 tsp salt"
    ],
    steps: [
      "Toss scored chicken pieces with lemon juice and salt; set aside for 20 minutes.",
      "Cook the minced red onions in a dry heavy pot over medium heat for 20 minutes, stirring frequently until deeply browned.",
      "Add the niter kibbeh and garlic-ginger paste, sauteing for 3 minutes.",
      "Stir in the berbere spice blend and cook for 2 minutes until fragrant, adding a splash of stock if needed.",
      "Add chicken pieces and remaining stock. Simmer covered over low heat for 40 minutes until chicken is tender.",
      "Prick the boiled eggs lightly and nestle them into the stew for the final 10 minutes before serving."
    ]
  },
  {
    name: "East African Beef Pilau",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    description: "Aromatic Swahili spiced rice cooked with tender beef cubes, caramelized onions, cumin, cardamom, and cloves.",
    ingredients: [
      "2 cups basmati rice, rinsed and soaked 15 minutes",
      "1.5 lbs tender beef sirloin, cut into 1-inch cubes",
      "2 large red onions, thinly sliced",
      "1 tbsp pilau masala (cumin, cardamom, cinnamon, cloves, black pepper)",
      "1 tbsp garlic-ginger paste",
      "2 medium potatoes, peeled and halved",
      "4 cups beef broth",
      "3 tbsp vegetable oil and 1 tsp salt"
    ],
    steps: [
      "Heat oil in a heavy pot and fry sliced red onions for 10 to 12 minutes until deep golden brown.",
      "Add beef cubes, garlic-ginger paste, and pilau masala; sear for 6 minutes until browned.",
      "Pour in 1 cup of beef broth and simmer covered for 15 minutes until beef is tender.",
      "Add potatoes, drained basmati rice, remaining broth, and salt. Bring to a boil.",
      "Cover tightly, reduce heat to low, and steam for 18 minutes until rice is fluffy and aromatic."
    ]
  },
  {
    name: "Ugali & Sukuma Wiki",
    cuisine: "African",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Kenya's beloved staple meal of firm white cornmeal paired with savory braised collard greens and tomatoes.",
    ingredients: [
      "2 cups white maize meal (cornmeal)",
      "4 cups water (for Ugali)",
      "2 bunches collard greens (sukuma wiki), finely shredded",
      "1 large onion, diced",
      "2 ripe tomatoes, diced",
      "2 tbsp vegetable oil",
      "1/2 tsp salt and 1/2 tsp Royco mchuzi mix or bouillon"
    ],
    steps: [
      "Heat oil in a skillet over medium heat. Saute diced onion for 4 minutes until translucent.",
      "Add diced tomatoes, salt, and seasoning; cook for 4 minutes until softened into a light sauce.",
      "Toss in shredded collard greens, stir well, and cook covered for 6 to 8 minutes until tender yet vibrant green.",
      "Meanwhile, bring 4 cups water to a rolling boil in a heavy saucepan. Gradually pour in maize meal while stirring continuously with a wooden spoon.",
      "Press and fold the thick cornmeal against the pot sides over medium-low heat for 5 minutes until firm and smooth. Shape into a mound and serve with greens."
    ]
  },
  {
    name: "Nigerian Egusi Soup",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80",
    description: "Rich West African melon seed stew simmered with palm oil, leafy greens, bell peppers, and tender beef.",
    ingredients: [
      "2 cups ground egusi (melon seeds)",
      "1.5 lbs cooked beef chunks and stock",
      "1/2 cup red palm oil",
      "2 red bell peppers and 1 scotch bonnet, blended",
      "1 large onion (half blended, half diced)",
      "3 cups chopped spinach or bitterleaf",
      "2 tbsp ground crayfish and 2 seasoning cubes"
    ],
    steps: [
      "Mix ground egusi with 1/2 cup warm water to form a thick, smooth paste.",
      "Heat palm oil in a pot over medium heat for 2 minutes, then saute diced onion.",
      "Pour in the blended pepper mixture and fry for 8 minutes until reduced.",
      "Spoon dollops of the egusi paste into the sauce, cover, and cook for 10 minutes without stirring so curds form.",
      "Add beef, 2 cups meat stock, ground crayfish, and seasoning. Simmer for 10 minutes, fold in spinach for 3 minutes, and serve."
    ]
  },
  {
    name: "South African Bobotie",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "45 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    description: "Spiced Cape Malay minced beef bake topped with a golden savory egg-milk custard and bay leaves.",
    ingredients: [
      "2 lbs lean ground beef",
      "2 slices white bread soaked in 1 cup milk (reserve milk)",
      "2 large onions, diced",
      "2 tbsp mild curry powder, 1 tsp turmeric, 1/2 tsp cinnamon",
      "3 tbsp fruit chutney and 1/3 cup raisins",
      "2 large eggs",
      "4 bay leaves and 2 tbsp butter"
    ],
    steps: [
      "Preheat oven to 350°F (175°C). Saute onions in butter until soft, then stir in curry powder, turmeric, and cinnamon.",
      "Add ground beef and cook for 8 minutes until browned.",
      "Squeeze milk from bread (saving the milk), mash the bread, and stir it into the beef along with chutney, raisins, and salt.",
      "Press the spiced beef mixture into a baking dish. Whisk eggs with the reserved milk and pour evenly over the top.",
      "Arrange bay leaves on the custard and bake for 35 to 40 minutes until golden and set."
    ]
  },
  {
    name: "Mandazi (East African Coconut Doughnuts)",
    cuisine: "African",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "12 pieces",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    description: "Light, pillowy Swahili spiced fried dough triangles infused with rich coconut milk and crushed cardamom.",
    ingredients: [
      "3 cups all-purpose flour",
      "1/3 cup granulated sugar",
      "2 tsp baking powder and 1/2 tsp ground cardamom",
      "2 tbsp unsalted butter, melted",
      "1 cup warm coconut milk",
      "1 large egg, beaten",
      "Vegetable oil for deep frying"
    ],
    steps: [
      "Whisk flour, sugar, baking powder, and ground cardamom in a large bowl.",
      "Mix in melted butter, beaten egg, and warm coconut milk until a soft, smooth dough forms.",
      "Knead for 4 minutes, cover, and let rest for 15 minutes.",
      "Roll dough to 1/3-inch thickness, cut into circles, and slice each circle into four triangles.",
      "Deep-fry in 350°F (175°C) oil for 2 minutes per side until puffed and golden brown. Drain and serve warm with chai."
    ]
  },

  // ==================== CHINESE (9) ====================
  {
    name: "Kung Pao Chicken",
    cuisine: "Chinese",
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    description: "Sichuan-style stir-fried diced chicken with roasted peanuts, dried chili peppers, and savory-tangy glaze.",
    ingredients: [
      "1.5 lbs boneless chicken breast, cut into 3/4-inch cubes",
      "1/2 cup unsalted roasted peanuts",
      "8 dried red chilies, snipped into halves",
      "3 scallions, cut into 1-inch pieces",
      "3 cloves garlic and 1 tbsp ginger, minced",
      "3 tbsp soy sauce, 2 tbsp Chinese black vinegar, 1 tbsp hoisin sauce",
      "1 tbsp honey or sugar",
      "2 tsp cornstarch mixed with 2 tbsp water",
      "2 tbsp vegetable oil"
    ],
    steps: [
      "Toss diced chicken with 1 tbsp soy sauce and 1 tsp cornstarch. Marinate for 15 minutes.",
      "Whisk remaining soy sauce, black vinegar, hoisin sauce, honey, and cornstarch slurry in a small bowl.",
      "Heat vegetable oil in a wok over high heat. Stir-fry chicken for 4 minutes until browned, then remove.",
      "Add dried chilies, garlic, and ginger to the wok for 30 seconds until aromatic.",
      "Return chicken to the wok, pour in the sauce, and toss for 2 minutes until glossy and thickened.",
      "Fold in roasted peanuts and scallions, then serve immediately with steamed jasmine rice."
    ]
  },
  {
    name: "Vegetable Fried Rice",
    cuisine: "Chinese",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    description: "Wok-tossed day-old jasmine rice with crisp carrots, peas, scrambled eggs, and toasted sesame oil.",
    ingredients: [
      "4 cups cooked jasmine rice, chilled overnight",
      "3 large eggs, lightly beaten",
      "1 cup frozen green peas and diced carrots",
      "3 green onions, finely chopped",
      "2 cloves garlic, minced",
      "3 tbsp light soy sauce",
      "1 tsp toasted sesame oil",
      "2.5 tbsp neutral cooking oil"
    ],
    steps: [
      "Heat 1 tbsp oil in a large wok over high heat. Scramble the eggs until just set, break into pieces, and remove.",
      "Add remaining oil to the wok. Stir-fry garlic, peas, and carrots for 2 minutes.",
      "Add chilled rice, pressing out any clumps with your spatula, and toss over high heat for 4 minutes.",
      "Drizzle soy sauce around the edges of the wok and toss well to coat every grain.",
      "Return scrambled eggs, add chopped green onions and sesame oil, toss for 1 minute, and serve hot."
    ]
  },
  {
    name: "Mapo Tofu",
    cuisine: "Chinese",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    description: "Silky cubes of tofu braised in a rich chili bean sauce with aromatics and Sichuan peppercorn.",
    ingredients: [
      "14 oz soft or medium-firm tofu, cut into 3/4-inch cubes",
      "6 oz ground pork or finely minced mushrooms",
      "2 tbsp doubanjiang (fermented chili bean paste)",
      "1 tbsp fermented black beans, rinsed and chopped",
      "3 cloves garlic and 1 tbsp ginger, minced",
      "1 cup chicken or vegetable broth",
      "1 tbsp soy sauce and 1 tsp ground Sichuan peppercorn",
      "1 tbsp cornstarch mixed with 2 tbsp water",
      "2 scallions, sliced"
    ],
    steps: [
      "Gently simmer tofu cubes in salted water for 2 minutes, then drain carefully to prevent breaking.",
      "Heat 2 tbsp oil in a wok over medium-high heat. Brown the ground pork (or mushrooms) for 3 minutes.",
      "Lower heat slightly and stir in doubanjiang, black beans, garlic, and ginger for 1 minute until red oil separates.",
      "Pour in broth and soy sauce, bring to a simmer, and gently slide in the tofu cubes.",
      "Simmer for 5 minutes, then stir in cornstarch slurry until the sauce thickens.",
      "Sprinkle with ground Sichuan peppercorn and sliced scallions before serving."
    ]
  },
  {
    name: "Sweet and Sour Pork",
    cuisine: "Chinese",
    prepTime: "25 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    description: "Crispy golden pork pieces tossed with pineapple chunks, bell peppers, and a bright tangy glaze.",
    ingredients: [
      "1.2 lbs pork tenderloin, cut into 1-inch cubes",
      "1 egg white and 1/2 cup cornstarch (for coating)",
      "1 green bell pepper and 1 red bell pepper, cut into squares",
      "1 cup pineapple chunks",
      "1/3 cup ketchup, 3 tbsp rice vinegar, 3 tbsp brown sugar",
      "1 tbsp soy sauce and 1/3 cup pineapple juice",
      "Oil for shallow frying"
    ],
    steps: [
      "Season pork cubes with salt, toss in egg white, and coat thoroughly in cornstarch.",
      "Shallow-fry pork in hot oil for 4 to 5 minutes until golden and crisp; drain on paper towels.",
      "Whisk ketchup, rice vinegar, brown sugar, soy sauce, and pineapple juice in a bowl.",
      "In a clean wok, stir-fry bell peppers and pineapple chunks for 2 minutes.",
      "Pour in the sauce and bring to a bubble until thickened. Toss in the crispy pork for 30 seconds and serve immediately."
    ]
  },
  {
    name: "Beef and Broccoli Stir-Fry",
    cuisine: "Chinese",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    description: "Velvety sliced flank steak wok-seared with crisp-tender broccoli florets in a rich garlic-oyster sauce.",
    ingredients: [
      "1 lb flank steak, thinly sliced against the grain",
      "4 cups fresh broccoli florets",
      "3 cloves garlic and 1 tbsp fresh ginger, minced",
      "1/3 cup beef broth",
      "3 tbsp soy sauce and 2 tbsp oyster sauce",
      "1 tbsp brown sugar and 1 tsp sesame oil",
      "1 tbsp cornstarch and 2 tbsp vegetable oil"
    ],
    steps: [
      "Toss sliced beef with 1 tbsp soy sauce and 1 tsp cornstarch; let sit for 10 minutes.",
      "Whisk beef broth, remaining soy sauce, oyster sauce, brown sugar, sesame oil, and remaining cornstarch.",
      "Blanch broccoli florets in boiling water for 90 seconds, then drain.",
      "Sear beef in a hot oiled wok for 2 minutes per side until browned; remove from pan.",
      "Stir-fry garlic and ginger for 30 seconds, return beef and broccoli, pour in sauce, and toss for 2 minutes until glossy."
    ]
  },
  {
    name: "Chicken Chow Mein",
    cuisine: "Chinese",
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    description: "Wok-fried egg noodles tossed with tender chicken strips, shredded cabbage, carrots, and savory soy glaze.",
    ingredients: [
      "12 oz Chinese egg noodles, cooked and drained",
      "1 lb boneless chicken breast, thinly sliced",
      "2 cups shredded green cabbage",
      "1 large carrot, julienned, and 3 scallions, sliced",
      "3 tbsp soy sauce, 1.5 tbsp oyster sauce, 1 tsp dark soy sauce",
      "1 tsp sesame oil and 2 tbsp vegetable oil"
    ],
    steps: [
      "Whisk soy sauce, oyster sauce, dark soy sauce, and sesame oil in a small bowl.",
      "Heat oil in a large wok over high heat. Stir-fry chicken slices for 4 minutes until cooked through.",
      "Add shredded cabbage and carrots; stir-fry for 2 minutes until crisp-tender.",
      "Toss in cooked egg noodles and pour the sauce evenly over the noodles.",
      "Stir-fry vigorously for 2 to 3 minutes until noodles are lightly charred and coated. Garnish with scallions."
    ]
  },
  {
    name: "Steamed Pork & Chive Dumplings",
    cuisine: "Chinese",
    prepTime: "30 mins",
    cookTime: "12 mins",
    servings: "24 dumplings",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    description: "Juicy handmade Jiaozi dumplings filled with seasoned pork, garlic chives, and ginger with dipping sauce.",
    ingredients: [
      "24 round dumpling wrappers",
      "12 oz ground pork",
      "1/2 cup finely chopped garlic chives or scallions",
      "1 tbsp grated ginger and 1 clove minced garlic",
      "2 tbsp soy sauce, 1 tbsp sesame oil, 1/4 tsp white pepper",
      "2 tbsp black rice vinegar and 1 tsp chili oil (for dipping)"
    ],
    steps: [
      "Mix ground pork, garlic chives, ginger, garlic, soy sauce, sesame oil, and white pepper in a bowl until sticky.",
      "Place 1 tbsp filling in the center of a wrapper, moisten edges with water, and pleat firmly to seal.",
      "Line a bamboo steamer with parchment paper and arrange dumplings with space between them.",
      "Steam over boiling water for 10 to 12 minutes until wrappers are translucent and filling is cooked.",
      "Serve hot alongside black vinegar and chili oil dipping sauce."
    ]
  },
  {
    name: "Egg Drop Soup",
    cuisine: "Chinese",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Velvety golden chicken broth laced with delicate ribbons of whisked egg, sweet corn, and sesame oil.",
    ingredients: [
      "4 cups rich chicken broth",
      "3 large eggs, lightly beaten",
      "1/2 cup sweet corn kernels",
      "1.5 tbsp cornstarch mixed with 3 tbsp water",
      "1/4 tsp ground turmeric (for golden color) and pinch of white pepper",
      "1/2 tsp toasted sesame oil and 2 sliced scallions"
    ],
    steps: [
      "Bring chicken broth, corn kernels, turmeric, and white pepper to a gentle simmer in a saucepan.",
      "Stir in the cornstarch slurry and simmer for 1 minute until the broth becomes silky.",
      "Stir the soup in a slow circular motion while gradually drizzling in the beaten eggs to form delicate ribbons.",
      "Remove from heat, drizzle with sesame oil, and top with sliced scallions."
    ]
  },
  {
    name: "Char Siu (Chinese BBQ Pork)",
    cuisine: "Chinese",
    prepTime: "15 mins",
    cookTime: "40 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=800&q=80",
    description: "Cantonese honey-glazed roasted pork tenderloin marinated in hoisin, soy sauce, and five-spice powder.",
    ingredients: [
      "1.5 lbs pork tenderloin or pork shoulder strips",
      "3 tbsp hoisin sauce and 2 tbsp soy sauce",
      "2 tbsp honey (plus 1 tbsp for glazing)",
      "1 tbsp Shaoxing wine or apple juice",
      "1 tsp Chinese five-spice powder and 2 minced garlic cloves"
    ],
    steps: [
      "Whisk hoisin sauce, soy sauce, 2 tbsp honey, Shaoxing wine, five-spice powder, and garlic; marinate pork for at least 1 hour.",
      "Preheat oven to 400°F (200°C) and place pork on a foil-lined roasting rack.",
      "Roast for 20 minutes, baste with remaining marinade, and flip.",
      "Brush with pure honey and roast another 15 to 20 minutes until caramelized and glossy. Slice thinly to serve."
    ]
  },

  // ==================== INTERNATIONAL (9) ====================
  {
    name: "Classic Pancakes",
    cuisine: "International",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
    description: "Light, fluffy golden breakfast pancakes served warm with maple syrup and melted butter.",
    ingredients: [
      "1.5 cups all-purpose flour",
      "3.5 tsp baking powder",
      "1 tbsp granulated sugar and 1/4 tsp salt",
      "1.25 cups whole milk",
      "1 large egg",
      "3 tbsp unsalted butter, melted",
      "1 tsp pure vanilla extract"
    ],
    steps: [
      "Whisk flour, baking powder, sugar, and salt together in a large mixing bowl.",
      "Make a well in the center and pour in milk, egg, melted butter, and vanilla extract. Whisk until just combined (a few small lumps are fine).",
      "Heat a lightly oiled griddle or non-stick skillet over medium heat.",
      "Pour 1/4 cup batter per pancake onto the griddle. Cook for 2 to 3 minutes until bubbles form on the surface.",
      "Flip and cook for another 1 to 2 minutes until golden brown on both sides."
    ]
  },
  {
    name: "Grilled Salmon with Lemon Herbs",
    cuisine: "International",
    prepTime: "10 mins",
    cookTime: "12 mins",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    description: "Tender Atlantic salmon fillets seared with garlic, fresh dill, olive oil, and bright lemon slices.",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "2 tbsp extra-virgin olive oil",
      "2 cloves garlic, minced",
      "1 tbsp fresh dill, chopped",
      "1 lemon, sliced into thin rounds",
      "1/2 tsp sea salt and 1/4 tsp black pepper"
    ],
    steps: [
      "Pat salmon fillets dry with paper towels and season evenly with sea salt and black pepper.",
      "Whisk olive oil, minced garlic, and chopped dill in a small bowl, then brush over the salmon.",
      "Preheat a grill pan or skillet over medium-high heat.",
      "Place salmon skin-side down and cook for 5 minutes until crisp. Flip carefully and cook for 4 to 5 minutes until flaky.",
      "Top with fresh lemon slices and serve warm."
    ]
  },
  {
    name: "Beef Tacos",
    cuisine: "International",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    description: "Seasoned ground beef in warm tortillas topped with crisp lettuce, cheddar cheese, tomatoes, and lime.",
    ingredients: [
      "1 lb lean ground beef",
      "8 warm corn or flour tortillas",
      "1 tbsp chili powder, 1 tsp ground cumin, 1/2 tsp paprika",
      "1/2 tsp garlic powder and 1/2 tsp salt",
      "1/3 cup tomato sauce or water",
      "1 cup shredded romaine lettuce",
      "1 cup diced Roma tomatoes and 1 cup shredded cheddar cheese",
      "Fresh lime wedges and cilantro"
    ],
    steps: [
      "Brown the ground beef in a skillet over medium-high heat for 6 to 7 minutes, breaking it apart with a wooden spoon.",
      "Drain excess fat, then stir in chili powder, cumin, paprika, garlic powder, salt, and tomato sauce.",
      "Simmer on low for 5 minutes until rich and well-coated.",
      "Warm tortillas in a dry skillet for 20 seconds per side.",
      "Fill tortillas with seasoned beef and top with lettuce, tomatoes, cheddar cheese, and fresh lime."
    ]
  },
  {
    name: "Shakshuka",
    cuisine: "International",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1590412227252-5679eb784d3c?auto=format&fit=crop&w=800&q=80",
    description: "Farm-fresh eggs poached directly in a spiced roasted tomato, bell pepper, and cumin skillet sauce.",
    ingredients: [
      "6 large eggs",
      "1 can (28 oz) crushed San Marzano tomatoes",
      "1 red bell pepper, diced",
      "1 medium yellow onion, diced",
      "3 cloves garlic, minced",
      "1 tsp ground cumin, 1 tsp smoked paprika, pinch of cayenne",
      "2 tbsp olive oil",
      "1/3 cup crumbled feta cheese and fresh parsley"
    ],
    steps: [
      "Heat olive oil in a large skillet over medium heat. Saute diced onion and bell pepper for 6 minutes until soft.",
      "Add garlic, cumin, paprika, and cayenne; stir for 1 minute until fragrant.",
      "Pour in crushed tomatoes, season with salt and pepper, and simmer for 10 minutes until thickened.",
      "Use the back of a spoon to make 6 small wells in the sauce and crack an egg into each well.",
      "Cover the skillet and cook for 5 to 7 minutes until egg whites are set and yolks remain soft. Top with feta and parsley."
    ]
  },
  {
    name: "Classic Cheeseburger",
    cuisine: "International",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Juicy seared beef patties topped with melted aged cheddar, crisp lettuce, tomato, and toasted brioche buns.",
    ingredients: [
      "1.5 lbs ground chuck beef (80/20 lean-to-fat)",
      "4 brioche burger buns, split and toasted",
      "4 slices sharp cheddar cheese",
      "4 leaves butter lettuce and 4 thick tomato slices",
      "1/2 red onion, thinly sliced, and dill pickle chips",
      "1 tsp kosher salt and 1/2 tsp freshly ground black pepper"
    ],
    steps: [
      "Divide beef into 4 loose balls, gently press into 3/4-inch patties, and make a shallow thumb indent in each center.",
      "Season both sides generously with kosher salt and black pepper right before cooking.",
      "Sear patties in a hot cast-iron skillet for 3 to 4 minutes per side.",
      "Place a slice of cheddar cheese on each patty during the final minute and cover briefly to melt.",
      "Assemble on toasted brioche buns with lettuce, tomato, red onion, and pickles."
    ]
  },
  {
    name: "Spanish Seafood Paella",
    cuisine: "International",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    description: "Saffron-infused short-grain rice simmered in a wide pan with shrimp, mussels, peas, and roasted peppers.",
    ingredients: [
      "2 cups Bomba or Arborio rice",
      "12 large shrimp, peeled and deveined",
      "12 fresh mussels, scrubbed",
      "4 cups warm seafood or chicken stock infused with a pinch of saffron",
      "1 red bell pepper, diced, and 1 onion, finely chopped",
      "1 tsp smoked paprika and 3 cloves garlic, minced",
      "1/2 cup green peas, 3 tbsp olive oil, and lemon wedges"
    ],
    steps: [
      "Heat olive oil in a wide paella pan over medium heat. Saute onion and bell pepper for 5 minutes.",
      "Stir in garlic, smoked paprika, and rice for 2 minutes until grains are coated.",
      "Pour in warm saffron stock, bring to a simmer, and cook uncovered without stirring for 15 minutes.",
      "Nestle shrimp, mussels, and green peas into the rice; cook for 8 to 10 minutes until shells open and shrimp turn pink.",
      "Rest for 5 minutes and serve with fresh lemon wedges."
    ]
  },
  {
    name: "Greek Village Salad (Horiatiki)",
    cuisine: "International",
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Crisp Mediterranean wedges of ripe tomato, cucumber, Kalamata olives, red onion, and block feta.",
    ingredients: [
      "4 large vine-ripened tomatoes, cut into wedges",
      "1 English cucumber, thickly sliced into half-moons",
      "1 green bell pepper, sliced into rings",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "7 oz block Greek feta cheese",
      "1/4 cup extra-virgin olive oil, 1 tbsp red wine vinegar, 1 tsp dried oregano"
    ],
    steps: [
      "Arrange tomato wedges, sliced cucumber, green bell pepper, and red onion in a wide shallow bowl.",
      "Scatter Kalamata olives evenly across the vegetables.",
      "Place the slab of Greek feta cheese on top and sprinkle generously with dried oregano.",
      "Drizzle extra-virgin olive oil and red wine vinegar over the salad just before serving."
    ]
  },
  {
    name: "French Onion Soup",
    cuisine: "International",
    prepTime: "15 mins",
    cookTime: "45 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description: "Deeply caramelized sweet onions simmered in rich beef broth and topped with broiled Gruyere baguette.",
    ingredients: [
      "4 large yellow onions, thinly sliced",
      "3 tbsp unsalted butter and 1 tbsp olive oil",
      "6 cups rich beef broth",
      "1/2 cup dry white wine",
      "4 thick slices crusty French baguette, toasted",
      "1.5 cups shredded Gruyere cheese",
      "3 sprigs fresh thyme, salt, and black pepper"
    ],
    steps: [
      "Melt butter and olive oil in a Dutch oven over medium-low heat. Cook sliced onions for 30 minutes, stirring occasionally until deep mahogany brown.",
      "Pour in white wine to deglaze the pan, scraping up browned bits.",
      "Add beef broth, thyme sprigs, salt, and pepper; simmer for 15 minutes.",
      "Ladle soup into oven-safe crocks, float toasted baguette slices on top, and pile with Gruyere cheese.",
      "Broil for 3 minutes until cheese is bubbling and golden."
    ]
  },
  {
    name: "Avocado & Poached Egg Toast",
    cuisine: "International",
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1525351484163-7529414342d8?auto=format&fit=crop&w=800&q=80",
    description: "Crusty toasted sourdough layered with lemon-mashed avocado, soft poached eggs, and chili flakes.",
    ingredients: [
      "2 thick slices artisan sourdough bread, toasted",
      "1 large ripe Hass avocado",
      "2 large fresh eggs",
      "1 tbsp fresh lemon juice",
      "1 tsp white vinegar (for poaching water)",
      "Flaky sea salt, black pepper, and red pepper flakes"
    ],
    steps: [
      "Mash the ripe avocado in a small bowl with lemon juice, flaky sea salt, and black pepper.",
      "Bring a saucepan of water to a gentle simmer and add white vinegar.",
      "Crack each egg into a small ramekin, swirl the water gently, and slide the egg in; poach for 3 minutes.",
      "Spread mashed avocado generously over warm sourdough toast, top with poached eggs, and finish with chili flakes."
    ]
  },

  // ==================== ITALIAN (9) ====================
  {
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    description: "Traditional Roman pasta tossed with crispy pancetta, aged Pecorino Romano, egg yolks, and black pepper.",
    ingredients: [
      "1 lb spaghetti",
      "6 oz pancetta or guanciale, diced",
      "4 large egg yolks plus 1 whole egg",
      "1 cup freshly grated Pecorino Romano cheese",
      "1.5 tsp freshly cracked black pepper",
      "1 tbsp kosher salt (for pasta water)"
    ],
    steps: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente. Reserve 1 cup of starchy pasta water before draining.",
      "While pasta boils, crisp the diced pancetta in a large skillet over medium heat for 6 minutes; turn off heat.",
      "Whisk egg yolks, whole egg, grated Pecorino Romano, and black pepper in a bowl until smooth.",
      "Transfer hot drained pasta into the skillet with pancetta (off heat) and toss well.",
      "Pour the egg-cheese mixture over the pasta while tossing rapidly, adding splashes of warm pasta water until a silky sauce coats every strand."
    ]
  },
  {
    name: "Margherita Pizza",
    cuisine: "Italian",
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "Crisp Neapolitan-style crust topped with crushed San Marzano tomatoes, fresh mozzarella, and sweet basil.",
    ingredients: [
      "1 lb fresh pizza dough",
      "1/2 cup crushed San Marzano tomatoes",
      "8 oz fresh mozzarella cheese, sliced",
      "10 fresh sweet basil leaves",
      "2 tbsp extra-virgin olive oil",
      "1/2 tsp sea salt"
    ],
    steps: [
      "Preheat your oven with a baking stone or inverted baking sheet to 475°F (245°C) for 20 minutes.",
      "Stretch the pizza dough on a floured surface into a 12-inch round.",
      "Spread crushed tomatoes thinly over the dough, leaving a 1-inch border, and sprinkle with sea salt.",
      "Arrange fresh mozzarella slices evenly on top and drizzle with olive oil.",
      "Bake for 10 to 12 minutes until the crust is blistered and cheese is bubbling. Top with fresh basil leaves before slicing."
    ]
  },
  {
    name: "Mushroom Risotto",
    cuisine: "Italian",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    description: "Creamy Arborio rice slow-simmered with sauteed cremini mushrooms, shallots, white wine, and Parmigiano.",
    ingredients: [
      "1.5 cups Arborio rice",
      "10 oz cremini mushrooms, sliced",
      "5 cups warm vegetable or chicken broth",
      "2 shallots, finely diced",
      "1/2 cup dry white wine",
      "3/4 cup freshly grated Parmigiano-Reggiano",
      "3 tbsp unsalted butter and 2 tbsp olive oil",
      "1 tbsp fresh thyme leaves"
    ],
    steps: [
      "Keep broth warm in a saucepan over low heat. In a wide pot, saute mushrooms in 1 tbsp butter and 1 tbsp oil until browned; set aside.",
      "Add remaining olive oil and diced shallots to the pot; cook for 3 minutes until translucent.",
      "Stir in Arborio rice for 2 minutes until edges turn translucent, then pour in white wine and stir until absorbed.",
      "Add warm broth one ladle at a time, stirring frequently until each addition is absorbed (about 20 minutes).",
      "Fold in cooked mushrooms, remaining butter, Parmigiano-Reggiano, and fresh thyme. Serve immediately."
    ]
  },
  {
    name: "Chicken Alfredo",
    cuisine: "Italian",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    description: "Fettuccine pasta tossed in a velvety garlic-Parmesan cream sauce topped with pan-seared chicken breast.",
    ingredients: [
      "12 oz fettuccine pasta",
      "2 boneless skinless chicken breasts",
      "1 cup heavy cream",
      "4 tbsp unsalted butter",
      "1.25 cups freshly grated Parmesan cheese",
      "2 cloves garlic, minced",
      "1 tsp Italian seasoning, salt, and black pepper",
      "Fresh chopped parsley for garnish"
    ],
    steps: [
      "Season chicken breasts with Italian seasoning, salt, and pepper. Sear in a skillet over medium-high heat for 6 minutes per side; slice thinly.",
      "Boil fettuccine in salted water until al dente; reserve 1/2 cup pasta water and drain.",
      "In the skillet, melt butter over medium heat and saute minced garlic for 1 minute.",
      "Pour in heavy cream and simmer gently for 3 minutes. Whisk in Parmesan cheese until smooth.",
      "Toss fettuccine into the sauce (adding pasta water if needed), top with sliced chicken and parsley."
    ]
  },
  {
    name: "Classic Beef Lasagna",
    cuisine: "Italian",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: "8 servings",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
    description: "Layered pasta sheets baked with rich Bolognese meat sauce, creamy ricotta, and melted mozzarella.",
    ingredients: [
      "12 lasagna noodles, boiled until tender",
      "1.5 lbs ground beef",
      "24 oz marinara tomato sauce",
      "15 oz whole-milk ricotta cheese",
      "3 cups shredded mozzarella cheese",
      "1/2 cup grated Parmesan cheese and 1 egg",
      "2 cloves garlic, minced, and 1 tbsp Italian herbs"
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Brown ground beef with garlic and Italian herbs, drain fat, and stir in marinara sauce.",
      "Mix ricotta cheese, egg, half the Parmesan, and a pinch of salt in a bowl.",
      "Spread 1 cup meat sauce in a 9x13-inch baking dish. Layer 4 noodles, half the ricotta, mozzarella, and meat sauce.",
      "Repeat layers and finish with noodles, remaining sauce, mozzarella, and Parmesan.",
      "Bake covered with foil for 25 minutes, uncover, and bake 15 minutes more until golden."
    ]
  },
  {
    name: "Penne Arrabbiata",
    cuisine: "Italian",
    prepTime: "10 mins",
    cookTime: "18 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    description: "Al dente penne rigate coated in a bold Roman tomato sauce infused with garlic, olive oil, and red chili flakes.",
    ingredients: [
      "1 lb penne rigate pasta",
      "1 can (28 oz) crushed San Marzano tomatoes",
      "4 cloves garlic, thinly sliced",
      "1 tsp crushed red chili flakes",
      "1/4 cup extra-virgin olive oil",
      "1/3 cup fresh flat-leaf parsley, chopped",
      "Grated Pecorino Romano for serving"
    ],
    steps: [
      "Bring a large pot of salted water to a boil and cook penne until al dente.",
      "Meanwhile, warm olive oil in a wide skillet over medium heat. Saute sliced garlic and red chili flakes for 90 seconds.",
      "Pour in crushed tomatoes and season with salt; simmer for 12 minutes until thick and vibrant.",
      "Toss drained penne directly into the spicy tomato sauce with chopped parsley and serve with Pecorino."
    ]
  },
  {
    name: "Eggplant Parmigiana",
    cuisine: "Italian",
    prepTime: "25 mins",
    cookTime: "35 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    description: "Golden baked eggplant slices layered with sweet basil marinara, fresh mozzarella, and Parmigiano-Reggiano.",
    ingredients: [
      "2 large globe eggplants, sliced into 1/3-inch rounds",
      "3 cups marinara sauce",
      "12 oz fresh mozzarella, sliced",
      "3/4 cup grated Parmigiano-Reggiano",
      "1 cup seasoned breadcrumbs and 2 beaten eggs",
      "Fresh basil leaves and olive oil"
    ],
    steps: [
      "Preheat oven to 400°F (200°C). Dip eggplant slices into beaten egg, then coat in seasoned breadcrumbs.",
      "Arrange on oiled baking sheets and bake for 18 minutes until golden and tender.",
      "In a baking dish, layer marinara sauce, baked eggplant slices, mozzarella, Parmigiano, and basil.",
      "Repeat layers and bake for 20 minutes until cheese is bubbling and browned."
    ]
  },
  {
    name: "Caprese Salad",
    cuisine: "Italian",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
    description: "Freshly sliced heirloom tomatoes layered with creamy fior di latte mozzarella, sweet basil, and olive oil.",
    ingredients: [
      "3 large ripe heirloom tomatoes, sliced 1/4-inch thick",
      "12 oz fresh mozzarella ball, sliced 1/4-inch thick",
      "1 bunch fresh sweet basil leaves",
      "3 tbsp extra-virgin olive oil",
      "1 tbsp aged balsamic glaze",
      "Flaky sea salt and freshly cracked black pepper"
    ],
    steps: [
      "Alternate overlapping slices of ripe tomato and fresh mozzarella on a serving platter.",
      "Tuck fresh whole basil leaves between the tomato and mozzarella slices.",
      "Drizzle generously with extra-virgin olive oil and aged balsamic glaze.",
      "Finish with flaky sea salt and freshly cracked black pepper."
    ]
  },
  {
    name: "Classic Tiramisu",
    cuisine: "Italian",
    prepTime: "25 mins",
    cookTime: "0 mins",
    servings: "8 servings",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    description: "Chilled Venetian dessert of espresso-dipped ladyfingers layered with whipped mascarpone cream and cocoa.",
    ingredients: [
      "24 crisp savoiardi (ladyfinger biscuits)",
      "16 oz mascarpone cheese, room temperature",
      "4 large egg yolks and 1/2 cup granulated sugar",
      "1 cup heavy whipping cream",
      "1.5 cups freshly brewed espresso, cooled",
      "2 tbsp unsweetened Dutch-process cocoa powder"
    ],
    steps: [
      "Whisk egg yolks and sugar over a gentle double boiler for 4 minutes until pale and thickened; cool slightly and fold in mascarpone.",
      "Whip heavy cream to stiff peaks and gently fold into the mascarpone mixture.",
      "Quickly dip each ladyfinger into cooled espresso (1 second per side) and arrange a single layer in an 8x8-inch dish.",
      "Spread half the mascarpone cream over the biscuits, repeat with a second dipped layer, and top with remaining cream.",
      "Chill for at least 4 hours and dust generously with cocoa powder before serving."
    ]
  },

  // ==================== INDIAN (9) ====================
  {
    name: "Butter Chicken",
    cuisine: "Indian",
    prepTime: "25 mins",
    cookTime: "30 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    description: "Tender marinated chicken simmered in a rich, mildly spiced tomato, butter, and fenugreek cream gravy.",
    ingredients: [
      "1.5 lbs boneless chicken thighs, cut into bite-sized pieces",
      "1/2 cup plain Greek yogurt",
      "2 tsp garam masala, 1 tsp turmeric, 1 tsp Kashmiri chili powder",
      "1 can (14 oz) tomato puree",
      "4 tbsp unsalted butter",
      "1/2 cup heavy cream",
      "1 tbsp ginger-garlic paste",
      "1 tbsp crushed kasuri methi (dried fenugreek leaves)"
    ],
    steps: [
      "Marinate chicken pieces in yogurt, half the ginger-garlic paste, turmeric, and garam masala for 20 minutes.",
      "Sear marinated chicken in a hot skillet with 1 tbsp butter for 6 minutes until lightly charred; set aside.",
      "Melt remaining butter in the pan, saute remaining ginger-garlic paste for 1 minute, then stir in tomato puree and chili powder.",
      "Simmer the tomato gravy for 12 minutes until thickened and glossy.",
      "Stir in heavy cream, kasuri methi, and the seared chicken. Simmer gently for 8 minutes and serve with warm naan."
    ]
  },
  {
    name: "Palak Paneer",
    cuisine: "Indian",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=800&q=80",
    description: "Golden cubes of Indian cottage cheese nestled in a vibrant, spiced pureed spinach gravy.",
    ingredients: [
      "8 oz paneer cheese, cut into 3/4-inch cubes",
      "10 oz fresh baby spinach leaves",
      "1 medium onion, finely chopped",
      "2 Roma tomatoes, chopped",
      "1 tbsp ginger-garlic paste",
      "1 tsp cumin seeds, 1 tsp garam masala, 1/2 tsp turmeric",
      "2 tbsp ghee or vegetable oil",
      "2 tbsp heavy cream or yogurt"
    ],
    steps: [
      "Blanch fresh spinach in boiling water for 2 minutes, transfer immediately to ice water, then blend into a smooth green puree.",
      "Lightly pan-fry paneer cubes in 1 tbsp ghee until golden on the edges; set aside.",
      "In the same pan, add remaining ghee and cumin seeds. Saute chopped onions until golden, then add ginger-garlic paste and tomatoes.",
      "Cook until tomatoes soften, stir in turmeric and garam masala, then pour in the spinach puree.",
      "Simmer for 5 minutes, fold in the paneer cubes and cream, and serve hot with basmati rice."
    ]
  },
  {
    name: "Chana Masala",
    cuisine: "Indian",
    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    description: "Hearty chickpeas cooked in a tangy onion-tomato masala with roasted cumin, coriander, and ginger.",
    ingredients: [
      "2 cans (15 oz each) chickpeas, drained and rinsed",
      "1 large yellow onion, finely diced",
      "2 ripe tomatoes, pureed",
      "1 tbsp fresh ginger, julienned, and 3 cloves garlic, minced",
      "2 tsp ground coriander, 1 tsp ground cumin, 1 tsp garam masala",
      "1/2 tsp amchur (dried mango powder) or 1 tbsp lemon juice",
      "2 tbsp vegetable oil and fresh cilantro"
    ],
    steps: [
      "Heat oil in a skillet over medium heat. Saute diced onions for 7 minutes until deeply golden.",
      "Add garlic and half the ginger, stirring for 1 minute before adding coriander, cumin, and garam masala.",
      "Pour in pureed tomatoes and cook for 8 minutes until oil begins to separate from the masala.",
      "Add chickpeas and 3/4 cup water. Simmer uncovered for 12 minutes, lightly mashing a few chickpeas to thicken the sauce.",
      "Stir in lemon juice, top with julienned ginger and fresh cilantro, and serve."
    ]
  },
  {
    name: "Vegetable Biryani",
    cuisine: "Indian",
    prepTime: "25 mins",
    cookTime: "35 mins",
    servings: "6 servings",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    description: "Fragrant layered basmati rice steamed with spiced mixed vegetables, caramelized onions, mint, and saffron.",
    ingredients: [
      "2 cups aged basmati rice, soaked 20 minutes and drained",
      "2 cups mixed vegetables (carrots, potatoes, green beans, peas)",
      "1/2 cup plain yogurt",
      "1.5 tbsp biryani masala or garam masala",
      "1 large onion, thinly sliced and fried crisp",
      "4 green cardamom pods, 1 cinnamon stick, 2 bay leaves",
      "1/4 cup fresh mint and cilantro leaves",
      "3 tbsp ghee and pinch of saffron in 2 tbsp warm milk"
    ],
    steps: [
      "Parboil soaked basmati rice with cardamom, cinnamon, and bay leaves until 75% cooked; drain.",
      "In a heavy pot, saute mixed vegetables in 2 tbsp ghee for 5 minutes. Stir in yogurt and biryani masala; cook for 6 minutes.",
      "Layer the parboiled rice over the spiced vegetables.",
      "Top with crispy fried onions, fresh mint, cilantro, remaining ghee, and saffron milk.",
      "Cover tightly and steam over very low heat for 18 minutes. Gently fluff layers before serving."
    ]
  },
  {
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    prepTime: "25 mins",
    cookTime: "25 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    description: "Char-grilled spiced chicken tikka pieces simmered in a smoky, creamy roasted tomato-coriander masala.",
    ingredients: [
      "1.5 lbs boneless chicken breast, cubed",
      "1/2 cup plain yogurt, 1 tbsp lemon juice, 1 tbsp garam masala",
      "1 large onion, finely chopped",
      "1 can (15 oz) crushed tomatoes",
      "1/2 cup heavy cream",
      "1 tbsp ginger-garlic paste, 1 tsp cumin, 1 tsp paprika",
      "2 tbsp oil and fresh cilantro"
    ],
    steps: [
      "Marinate chicken in yogurt, lemon juice, half the garam masala, and salt for 20 minutes; broil or pan-sear until charred.",
      "Saute chopped onion in oil until golden, then add ginger-garlic paste, cumin, paprika, and remaining garam masala.",
      "Pour in crushed tomatoes and simmer for 12 minutes until rich and thick.",
      "Stir in heavy cream and grilled chicken tikka pieces; simmer for 5 minutes and garnish with cilantro."
    ]
  },
  {
    name: "Dal Tadka (Spiced Yellow Lentils)",
    cuisine: "Indian",
    prepTime: "10 mins",
    cookTime: "25 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "Comforting yellow split lentils simmered with turmeric and finished with a sizzling cumin-garlic ghee tadka.",
    ingredients: [
      "1 cup yellow split lentils (toor or moong dal), rinsed",
      "3.5 cups water and 1/2 tsp turmeric powder",
      "1 medium tomato, finely diced",
      "2 tbsp ghee or oil",
      "1 tsp whole cumin seeds and 2 dried red chilies",
      "3 cloves garlic, thinly sliced, and fresh cilantro"
    ],
    steps: [
      "Simmer rinsed lentils, water, turmeric, and salt in a pot for 20 minutes until creamy and tender.",
      "Stir in diced tomato and simmer 3 minutes more.",
      "In a small pan, heat ghee until shimmering; sizzle cumin seeds, sliced garlic, and dried chilies for 30 seconds.",
      "Pour the sizzling tadka directly over the warm dal, garnish with cilantro, and serve with rice."
    ]
  },
  {
    name: "Aloo Gobi (Spiced Potato & Cauliflower)",
    cuisine: "Indian",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Dry-roasted cauliflower florets and golden potatoes tossed with cumin, turmeric, ginger, and fresh coriander.",
    ingredients: [
      "1 medium head cauliflower, cut into bite-sized florets",
      "2 medium Yukon Gold potatoes, peeled and diced",
      "1 medium onion, finely diced",
      "1 tsp cumin seeds, 1/2 tsp turmeric, 1 tsp ground coriander",
      "1/2 tsp garam masala and 1 tbsp grated ginger",
      "2.5 tbsp vegetable oil and fresh cilantro"
    ],
    steps: [
      "Heat oil in a wide skillet over medium heat and sizzle cumin seeds for 20 seconds.",
      "Add diced onion and grated ginger; saute for 4 minutes until softened.",
      "Add diced potatoes, cauliflower florets, turmeric, coriander, and salt; toss well to coat in spices.",
      "Cover and cook over medium-low heat for 15 minutes, stirring gently halfway, until tender. Sprinkle with garam masala and cilantro."
    ]
  },
  {
    name: "Crispy Vegetable Samosas",
    cuisine: "Indian",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "12 samosas",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Flaky golden pastry triangles stuffed with spiced mashed potatoes, green peas, cumin, and ginger.",
    ingredients: [
      "2 cups all-purpose flour and 1/4 cup melted ghee or oil",
      "3 medium potatoes, boiled, peeled, and coarsely mashed",
      "1/2 cup green peas",
      "1 tsp cumin seeds, 1 tsp garam masala, 1/2 tsp amchur or lemon juice",
      "1 tbsp grated ginger and 2 tbsp chopped cilantro",
      "Oil for deep frying"
    ],
    steps: [
      "Rub melted ghee into flour with 1/2 tsp salt; add ~6 tbsp cold water to knead a firm dough. Rest 20 minutes.",
      "Saute cumin seeds and ginger in 1 tbsp oil, then stir in mashed potatoes, peas, garam masala, lemon juice, and cilantro.",
      "Divide dough into 6 balls, roll into ovals, and cut in half. Shape each half into a cone, fill with potato mixture, and seal.",
      "Fry in 340°F (170°C) oil for 5 to 6 minutes until crisp and golden brown."
    ]
  },
  {
    name: "Garlic Butter Naan",
    cuisine: "Indian",
    prepTime: "20 mins",
    cookTime: "10 mins",
    servings: "6 flatbreads",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
    description: "Soft, blistered skillet flatbread brushed generously with melted garlic-cilantro butter.",
    ingredients: [
      "2 cups all-purpose flour",
      "1 tsp instant yeast and 1 tsp sugar",
      "1/4 cup plain yogurt and 1/2 cup warm water",
      "3 tbsp melted butter",
      "2 cloves garlic, finely minced",
      "2 tbsp fresh cilantro, chopped, and 1/2 tsp salt"
    ],
    steps: [
      "Combine flour, yeast, sugar, salt, yogurt, and warm water; knead for 5 minutes into a soft, elastic dough. Rest 30 minutes.",
      "Divide dough into 6 balls and roll each into a 7-inch oval.",
      "Cook each naan in a dry, hot cast-iron skillet for 90 seconds until bubbles puff up; flip and cook 1 minute until blistered.",
      "Brush immediately with melted butter mixed with minced garlic and chopped cilantro."
    ]
  },

  // ==================== JAPANESE (8) ====================
  {
    name: "Chicken Teriyaki",
    cuisine: "Japanese",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    description: "Juicy pan-seared chicken thighs glazed in a glossy sweet-savory soy, mirin, and ginger reduction.",
    ingredients: [
      "1.5 lbs boneless, skin-on chicken thighs",
      "1/4 cup soy sauce",
      "1/4 cup mirin (Japanese sweet rice wine)",
      "2 tbsp sake or water",
      "1.5 tbsp brown sugar",
      "1 tsp fresh ginger, grated",
      "1 tbsp vegetable oil",
      "Toasted sesame seeds and sliced scallions"
    ],
    steps: [
      "Whisk soy sauce, mirin, sake, brown sugar, and grated ginger in a small bowl until sugar dissolves.",
      "Heat vegetable oil in a skillet over medium-high heat. Place chicken skin-side down and sear for 6 minutes until crisp.",
      "Flip chicken and cook for 4 minutes until cooked through; drain excess oil from the pan.",
      "Pour the teriyaki sauce into the skillet and simmer for 2 to 3 minutes, spooning the glossy glaze over the chicken.",
      "Slice chicken into strips, drizzle with remaining pan glaze, and garnish with sesame seeds and scallions."
    ]
  },
  {
    name: "Classic Miso Ramen",
    cuisine: "Japanese",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "2 servings",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: "Rich savory miso-ginger broth loaded with springy ramen noodles, soft-boiled egg, sweet corn, and nori.",
    ingredients: [
      "2 portions fresh or dried ramen noodles",
      "4 cups chicken or dashi vegetable broth",
      "3 tbsp white or red miso paste",
      "1 tbsp sesame oil and 1 tbsp soy sauce",
      "2 cloves garlic and 1 tbsp ginger, grated",
      "2 soft-boiled eggs (6.5 minutes), halved",
      "1/2 cup sweet corn kernels, 2 scallions, and 2 sheets nori"
    ],
    steps: [
      "Heat sesame oil in a saucepan over medium heat. Saute grated garlic and ginger for 1 minute.",
      "Whisk in miso paste for 30 seconds, then gradually pour in the broth and soy sauce; simmer gently (do not boil rapidly).",
      "Cook ramen noodles in a separate pot of boiling water according to package directions; drain well.",
      "Divide noodles between two warm bowls and ladle the hot miso broth over them.",
      "Top with halved soft-boiled eggs, sweet corn, sliced scallions, and nori sheets."
    ]
  },
  {
    name: "Chicken Katsu Curry",
    cuisine: "Japanese",
    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: "Crispy panko-breaded chicken cutlet served alongside steamed rice and rich Japanese curry sauce.",
    ingredients: [
      "2 large chicken breasts, butterflied into 4 thin cutlets",
      "1/2 cup flour, 2 beaten eggs, 1.5 cups panko breadcrumbs",
      "1 large onion, 1 carrot, and 1 potato, diced",
      "3 cups chicken stock",
      "3.5 oz Japanese curry roux blocks",
      "Oil for shallow frying and 4 cups steamed Japanese short-grain rice"
    ],
    steps: [
      "Saute diced onion, carrot, and potato in a pot for 5 minutes. Add chicken stock and simmer for 15 minutes until tender.",
      "Turn off heat, stir in Japanese curry roux blocks until melted, then simmer on low for 5 minutes until thick.",
      "Season chicken cutlets with salt and pepper. Dredge in flour, dip in beaten egg, and press firmly into panko breadcrumbs.",
      "Shallow-fry cutlets in 350°F (175°C) oil for 3 to 4 minutes per side until golden and crisp.",
      "Slice katsu into strips and serve next to steamed rice and generous ladles of curry sauce."
    ]
  },
  {
    name: "Salmon Sushi Rolls",
    cuisine: "Japanese",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "4 rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    description: "Seasoned sushi rice rolled in crisp nori with sushi-grade salmon, creamy avocado, and cucumber.",
    ingredients: [
      "2 cups sushi rice, rinsed and cooked",
      "3 tbsp rice vinegar, 1 tbsp sugar, 1 tsp salt",
      "4 sheets roasted nori seaweed",
      "8 oz sushi-grade salmon, cut into long strips",
      "1 ripe avocado, thinly sliced",
      "1/2 English cucumber, cut into thin matchsticks",
      "Soy sauce, pickled ginger, and wasabi for serving"
    ],
    steps: [
      "Warm rice vinegar, sugar, and salt until dissolved; gently fold into warm cooked sushi rice and let cool to room temperature.",
      "Place a sheet of nori shiny-side down on a bamboo rolling mat.",
      "With damp hands, spread a thin, even layer of sushi rice over the nori, leaving a 1/2-inch border at the top.",
      "Arrange salmon strips, avocado slices, and cucumber matchsticks horizontally across the center.",
      "Roll tightly using the bamboo mat, seal the edge with a dab of water, and slice into 8 pieces with a wet sharp knife."
    ]
  },
  {
    name: "Shrimp & Vegetable Tempura",
    cuisine: "Japanese",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1581781870027-04212e231e96?auto=format&fit=crop&w=800&q=80",
    description: "Light, airy, shatteringly crisp battered shrimp and sweet potato slices served with warm tentsuyu dipping sauce.",
    ingredients: [
      "12 large shrimp, peeled with tails on and scored",
      "1 small sweet potato and 1 zucchini, thinly sliced",
      "1 cup ice-cold sparkling water",
      "1 cup all-purpose flour plus 2 tbsp cornstarch",
      "1 large egg yolk",
      "3/4 cup dashi broth, 2 tbsp soy sauce, 2 tbsp mirin (for dipping sauce)",
      "Vegetable oil for deep frying"
    ],
    steps: [
      "Simmer dashi, soy sauce, and mirin for 1 minute to make the dipping sauce; set aside.",
      "Whisk egg yolk and ice-cold sparkling water, then lightly fold in flour and cornstarch (leave batter slightly lumpy).",
      "Heat oil to 350°F (175°C). Dip shrimp and vegetables in batter and fry in small batches for 2 to 3 minutes until pale gold and crisp.",
      "Drain on a wire rack and serve immediately with tentsuyu sauce."
    ]
  },
  {
    name: "Beef Gyudon Bowl",
    cuisine: "Japanese",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    description: "Thinly shaved ribeye beef and sweet onions simmered in savory dashi-soy broth over steamed Japanese rice.",
    ingredients: [
      "1 lb thinly shaved ribeye or sirloin beef",
      "1 large yellow onion, thinly sliced",
      "1 cup dashi broth",
      "3 tbsp soy sauce, 3 tbsp mirin, 1 tbsp sugar",
      "1 tsp grated fresh ginger",
      "4 bowls steamed Japanese rice, sliced scallions, and pickled red ginger"
    ],
    steps: [
      "Simmer dashi broth, soy sauce, mirin, sugar, and ginger in a wide skillet over medium heat.",
      "Add sliced onions and cook for 5 minutes until tender and translucent.",
      "Lay the shaved beef slices over the onions and simmer for 3 to 4 minutes until just cooked through.",
      "Spoon beef, onions, and sweet-savory broth over warm bowls of rice; garnish with scallions and pickled ginger."
    ]
  },
  {
    name: "Pan-Seared Pork Gyoza",
    cuisine: "Japanese",
    prepTime: "25 mins",
    cookTime: "10 mins",
    servings: "24 gyoza",
    image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=800&q=80",
    description: "Crispy-bottomed, juicy Japanese pan-fried dumplings stuffed with pork, cabbage, garlic, and ginger.",
    ingredients: [
      "24 round gyoza wrappers",
      "10 oz ground pork",
      "1 cup finely minced Napa cabbage (salted and squeezed dry)",
      "2 scallions, finely chopped, and 1 tbsp grated ginger",
      "1 tbsp soy sauce and 1 tsp sesame oil",
      "1 tbsp vegetable oil and 1/3 cup water (for pan-steaming)"
    ],
    steps: [
      "Combine ground pork, squeezed Napa cabbage, scallions, ginger, soy sauce, and sesame oil until well blended.",
      "Fill each wrapper with 1 tbsp mixture, wet the rim, and fold with 4 to 5 pleats.",
      "Heat vegetable oil in a non-stick skillet over medium-high heat. Arrange gyoza flat-side down and fry for 2 minutes until golden.",
      "Pour 1/3 cup water into the skillet, cover immediately, and steam for 4 minutes until water evaporates and bottoms stay crisp."
    ]
  },
  {
    name: "Yaki Udon Stir-Fry",
    cuisine: "Japanese",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "4 servings",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80",
    description: "Thick, chewy udon noodles wok-tossed with shiitake mushrooms, cabbage, carrots, and savory soy-mirin glaze.",
    ingredients: [
      "16 oz pre-cooked thick udon noodles",
      "6 oz shiitake mushrooms, sliced",
      "2 cups shredded green cabbage and 1 julienned carrot",
      "3 tbsp soy sauce, 2 tbsp mirin, 1 tbsp oyster sauce",
      "1 tbsp vegetable oil, 1 tsp sesame oil, and toasted sesame seeds"
    ],
    steps: [
      "Loosen udon noodles in warm water for 1 minute, then drain thoroughly.",
      "Whisk soy sauce, mirin, and oyster sauce in a small bowl.",
      "Stir-fry shiitake mushrooms, cabbage, and carrots in a hot oiled skillet for 3 minutes.",
      "Add udon noodles and pour in the sauce; toss for 2 minutes until coated and glossy. Finish with sesame oil and seeds."
    ]
  }
];

// ==================== THEME TOGGLE (LIGHT & DARK) ====================
function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);

  const iconEl = document.getElementById("theme-icon");
  const labelEl = document.getElementById("theme-label");
  const mobileBtn = document.getElementById("theme-toggle-mobile");

  if (iconEl) iconEl.textContent = isDark ? "☀️" : "🌙";
  if (labelEl) labelEl.textContent = isDark ? "Light" : "Dark";
  if (mobileBtn) mobileBtn.textContent = isDark ? "☀️" : "🌙";

  try {
    localStorage.setItem("whitcooks_theme", theme);
  } catch (err) {}
}

function toggleTheme() {
  const isCurrentlyDark = document.body.classList.contains("dark-theme");
  const nextTheme = isCurrentlyDark ? "light" : "dark";
  applyTheme(nextTheme);
}

(function initSavedTheme() {
  try {
    const savedTheme = localStorage.getItem("whitcooks_theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      applyTheme(savedTheme);
    }
  } catch (err) {}
})();

// ==================== REVIEWS & RATINGS (5 PRE-LOADED REVIEWS) ====================
let currentCuisineFilter = "All";
let selectedStarRating = 5;

const ratingLabels = {
  1: "1 out of 5 - Needs Improvement",
  2: "2 out of 5 - Fair",
  3: "3 out of 5 - Good",
  4: "4 out of 5 - Very Good",
  5: "5 out of 5 - Outstanding"
};

const defaultReviews = [
  {
    name: "Amara O.",
    dish: "Jollof Rice",
    rating: 5,
    comment: "The ingredient checklist made prepping everything effortless. The Jollof Rice came out smoky and full of flavor on my very first attempt.",
    date: "November 14, 2026"
  },
  {
    name: "David K.",
    dish: "Classic Miso Ramen",
    rating: 5,
    comment: "Finally a recipe website with zero clutter. Clicked Japanese cuisine, opened Miso Ramen, and had dinner on the table in 20 minutes.",
    date: "November 16, 2026"
  },
  {
    name: "Priya S.",
    dish: "Butter Chicken",
    rating: 5,
    comment: "Very balanced spice measurements and super clear instructions. Loved being able to tick off each spice as I measured it.",
    date: "November 18, 2026"
  },
  {
    name: "Wanjiku M.",
    dish: "East African Beef Pilau",
    rating: 5,
    comment: "The Dark Theme is so easy on the eyes while cooking at night, and the Pilau turned out fragrant and delicious.",
    date: "November 20, 2026"
  },
  {
    name: "Marco R.",
    dish: "Spaghetti Carbonara",
    rating: 4,
    comment: "Authentic Roman proportions with Pecorino Romano and egg yolks—no heavy cream shortcuts. Turned out silky and delicious.",
    date: "November 22, 2026"
  }
];

function getReviews() {
  try {
    const saved = localStorage.getItem("whitcooks_reviews_v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {}
  return defaultReviews;
}

function saveReviews(reviewsList) {
  try {
    localStorage.setItem("whitcooks_reviews_v2", JSON.stringify(reviewsList));
  } catch (err) {}
}

function renderStarsSvg(count) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    const fill = i <= count ? "currentColor" : "none";
    html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="' + fill + '" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }
  return html;
}

function renderReviews() {
  const listContainer = document.getElementById("reviews-list-container");
  const avgEl = document.getElementById("average-rating-value");
  const countEl = document.getElementById("total-reviews-count");

  const reviews = getReviews();
  const totalScore = reviews.reduce((sum, item) => sum + item.rating, 0);
  const average = (totalScore / reviews.length).toFixed(1);

  if (avgEl) avgEl.textContent = average;
  if (countEl) {
    countEl.textContent = reviews.length + (reviews.length === 1 ? " Verified Review" : " Verified Reviews");
  }

  if (!listContainer) return;

  listContainer.innerHTML = reviews
    .map(rev => {
      const safeName = rev.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const safeComment = rev.comment.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const safeDish = rev.dish ? rev.dish.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";

      return `
        <article class="review-card fade-in">
          <div class="review-card-top">
            <div class="reviewer-identity">
              <strong>${safeName}</strong>
              ${safeDish ? `<span class="review-dish-tag">Tried: ${safeDish}</span>` : ""}
            </div>
            <div class="review-stars-display" aria-label="${rev.rating} out of 5 stars">
              ${renderStarsSvg(rev.rating)}
            </div>
          </div>
          <p class="review-comment-text">${safeComment}</p>
          <span class="review-date">Posted on ${rev.date}</span>
        </article>
      `;
    })
    .join("");
}

function updateStarPickerUI(rating) {
  selectedStarRating = rating;
  document.querySelectorAll("#star-picker .star-btn").forEach(btn => {
    const val = Number(btn.getAttribute("data-rating"));
    btn.classList.toggle("active", val <= rating);
  });
  const labelEl = document.getElementById("rating-text-label");
  if (labelEl) labelEl.textContent = ratingLabels[rating] || "";
}

// ==================== NAVIGATION & CATALOG ====================
function navigateTo(sectionName) {
  if (typeof openPage === "function") {
    openPage(sectionName);
    return;
  }
  ["home", "about", "finder", "reviews"].forEach(sec => {
    const el = document.getElementById("section-" + sec);
    if (el) el.classList.add("hidden");
  });
  const target = document.getElementById("section-" + sectionName);
  if (target) target.classList.remove("hidden");
  if (sectionName === "reviews") renderReviews();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByCuisine(cuisine) {
  currentCuisineFilter = cuisine;
  ["All", "African", "Chinese", "International", "Italian", "Indian", "Japanese"].forEach(c => {
    const btn = document.getElementById("filter-" + c);
    if (btn) btn.classList.toggle("active", c === cuisine);
  });
  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById("recipe-catalog-grid");
  const heading = document.getElementById("catalog-heading");
  const inputEl = document.getElementById("food-search-input");
  const query = (inputEl ? inputEl.value : "").trim().toLowerCase();

  const filtered = recipeDatabase.filter(recipe => {
    const matchesCuisine = currentCuisineFilter === "All" || recipe.cuisine === currentCuisineFilter;
    const matchesQuery =
      !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.cuisine.toLowerCase().includes(query) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(query));
    return matchesCuisine && matchesQuery;
  });

  if (heading) {
    const label = currentCuisineFilter === "All" ? "All Global Dishes" : currentCuisineFilter + " Dishes";
    heading.textContent = label + " (" + filtered.length + ")";
  }

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--muted-text); padding: 32px;">No matching recipes found. Try another ingredient or select "All".</p>';
    return;
  }

  grid.innerHTML = filtered
    .map(recipe => `
      <button type="button" data-recipe-name="${recipe.name.replace(/"/g, '&quot;')}" class="dish-card">
        <div class="dish-img-wrap">
          <img
            src="${recipe.image}"
            alt="${recipe.name}"
            onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'"
          />
          <span class="dish-cuisine-tag">${recipe.cuisine}</span>
        </div>
        <div class="dish-card-body">
          <div>
            <h4>${recipe.name}</h4>
            <p>${recipe.description}</p>
          </div>
          <div class="dish-card-footer">
            <span>Prep: ${recipe.prepTime}</span>
            <span>View Recipe &rarr;</span>
          </div>
        </div>
      </button>
    `)
    .join("");
}

function displayRecipe(recipe) {
  const container = document.getElementById("recipe-result-container");
  if (!container) return;

  const ingredientsHtml = recipe.ingredients
    .map(item => `
      <li class="ingredient-item">
        <label>
          <input type="checkbox" />
          <span>${item}</span>
        </label>
      </li>
    `)
    .join("");

  const stepsHtml = recipe.steps
    .map((step, index) => `
      <li class="step-row">
        <span class="step-circle">${index + 1}</span>
        <p>${step}</p>
      </li>
    `)
    .join("");

  container.innerHTML = `
    <div class="recipe-detail-card fade-in">
      <div class="recipe-banner">
        <img
          src="${recipe.image}"
          alt="${recipe.name}"
          class="recipe-banner-img"
          onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'"
        />
        <div class="recipe-banner-info">
          <div>
            <div class="recipe-top-meta">
              <span class="cuisine-badge">${recipe.cuisine} Cuisine</span>
              <button type="button" id="close-recipe-btn" class="close-detail-btn">Close &times;</button>
            </div>
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
          </div>
          <div class="recipe-stats-bar">
            <div class="stat-item"><span>Prep Time</span><strong>${recipe.prepTime}</strong></div>
            <div class="stat-item"><span>Cook Time</span><strong>${recipe.cookTime}</strong></div>
            <div class="stat-item"><span>Yield</span><strong>${recipe.servings}</strong></div>
          </div>
        </div>
      </div>
      <div class="recipe-body-grid">
        <div class="ingredients-pane">
          <h4>Ingredients</h4>
          <p class="pane-subtitle">Check off items as you prepare them</p>
          <ul class="ingredient-list">${ingredientsHtml}</ul>
        </div>
        <div class="instructions-pane">
          <h4>Cooking Instructions</h4>
          <p class="pane-subtitle">Follow each step in order</p>
          <ol class="steps-list">${stepsHtml}</ol>
        </div>
      </div>
    </div>
  `;

  container.classList.remove("hidden");
  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function performSearch() {
  const inputEl = document.getElementById("food-search-input");
  const query = (inputEl ? inputEl.value : "").trim().toLowerCase();
  renderCatalog();
  if (!query) return;

  const match =
    recipeDatabase.find(r => r.name.toLowerCase() === query) ||
    recipeDatabase.find(r => r.name.toLowerCase().includes(query)) ||
    recipeDatabase.find(r => r.ingredients.some(ing => ing.toLowerCase().includes(query)));

  if (match) displayRecipe(match);
}

function handleReviewSubmit() {
  const nameInput = document.getElementById("reviewer-name");
  const dishInput = document.getElementById("reviewer-dish");
  const commentInput = document.getElementById("reviewer-comment");
  const errorEl = document.getElementById("review-form-error");
  const successEl = document.getElementById("review-form-success");
  const formEl = document.getElementById("review-form");

  const nameVal = (nameInput ? nameInput.value : "").trim();
  const dishVal = (dishInput ? dishInput.value : "").trim();
  const commentVal = (commentInput ? commentInput.value : "").trim();

  if (!nameVal || !commentVal) {
    if (errorEl) errorEl.classList.remove("hidden");
    if (successEl) successEl.classList.add("hidden");
    return;
  }

  if (errorEl) errorEl.classList.add("hidden");

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const currentReviews = getReviews();
  currentReviews.unshift({
    name: nameVal,
    dish: dishVal,
    rating: selectedStarRating,
    comment: commentVal,
    date: today
  });

  saveReviews(currentReviews);
  renderReviews();

  if (formEl) formEl.reset();
  updateStarPickerUI(5);

  if (successEl) {
    successEl.classList.remove("hidden");
    setTimeout(() => successEl.classList.add("hidden"), 4000);
  }
}

// ==================== GLOBAL EVENT LISTENERS ====================
document.addEventListener("click", e => {
  if (e.target.closest("#theme-toggle-btn") || e.target.closest("#theme-toggle-mobile")) {
    toggleTheme();
    return;
  }

  if (e.target.closest("#logo-link")) {
    e.preventDefault();
    navigateTo("home");
    return;
  }

  const navBtn = e.target.closest("[data-nav]");
  if (navBtn) {
    navigateTo(navBtn.getAttribute("data-nav"));
    return;
  }

  const exploreBtn = e.target.closest("[data-explore-cuisine]");
  if (exploreBtn) {
    const cuisine = exploreBtn.getAttribute("data-explore-cuisine");
    navigateTo("finder");
    filterByCuisine(cuisine);
    return;
  }

  const filterBtn = e.target.closest("[data-filter]");
  if (filterBtn) {
    filterByCuisine(filterBtn.getAttribute("data-filter"));
    return;
  }

  if (e.target.closest("#search-submit-btn")) {
    performSearch();
    return;
  }

  if (e.target.closest("#close-recipe-btn")) {
    const container = document.getElementById("recipe-result-container");
    if (container) {
      container.classList.add("hidden");
      container.innerHTML = "";
    }
    return;
  }

  const dishCard = e.target.closest("[data-recipe-name]");
  if (dishCard) {
    const name = dishCard.getAttribute("data-recipe-name");
    const found = recipeDatabase.find(r => r.name === name);
    if (found) displayRecipe(found);
    return;
  }

  const starBtn = e.target.closest("#star-picker .star-btn");
  if (starBtn) {
    const rating = Number(starBtn.getAttribute("data-rating"));
    updateStarPickerUI(rating);
    return;
  }
});

document.addEventListener("submit", e => {
  if (e.target && e.target.id === "review-form") {
    e.preventDefault();
    handleReviewSubmit();
  }
});

document.addEventListener("input", e => {
  if (e.target && e.target.id === "food-search-input") {
    renderCatalog();
  }
});

document.addEventListener("keydown", e => {
  if (e.target && e.target.id === "food-search-input" && e.key === "Enter") {
    e.preventDefault();
    performSearch();
  }
});

renderCatalog();
renderReviews();