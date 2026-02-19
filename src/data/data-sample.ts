export type ChocolateMilk = {
  id: number
  name: string
  countryOfOrigin: string
  rating: number
  description?: string
  containsCoffee: boolean
  isHotChocolate: boolean
  image: string
}

export let chocolateMilkList = [
  {
    id: 1,
    name: "Cocio",
    countryOfOrigin: "Denmark",
    rating: 5,
    description:
      "Cocio is a Danish brand of chocolate milk that has been around since 1951. It is made with high-quality ingredients and has a rich, creamy taste. Cocio is known for its smooth texture and balanced sweetness, making it a favorite among chocolate milk enthusiasts. The brand offers various flavors, including classic chocolate, vanilla, and strawberry, catering to different preferences. Cocio's commitment to quality and taste has earned it a loyal following both in Denmark and internationally.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cocio_chocolate_milk.jpg/220px-Cocio_chocolate_milk.jpg",
  },
  {
    id: 2,
    name: "Nesquik",
    countryOfOrigin: "United States",
    rating: 1,
    description:
      "Nesquik is a popular brand of chocolate milk mix that originated in the United States. It is known for its sweet and sugary taste, which appeals to children and those with a sweet tooth. Nesquik is often criticized for its high sugar content and artificial ingredients, which can contribute to health issues such as obesity and diabetes when consumed in excess. Despite its popularity, many health-conscious consumers prefer to avoid Nesquik due to its nutritional drawbacks.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Nesquik_chocolate_milk.jpg/220px-Nesquik_chocolate_milk.jpg",
  },
  {
    id: 3,
    name: "Ovaltine",
    countryOfOrigin: "Switzerland",
    rating: 4,
    description:
      "Ovaltine is a Swiss brand of chocolate milk that has been enjoyed for over a century. It is made with malt extract, which gives it a unique flavor and nutritional profile. Ovaltine is often praised for its rich taste and smooth texture, making it a popular choice among chocolate milk lovers. The brand offers various flavors, including classic chocolate, malt, and vanilla, catering to different preferences. Ovaltine's long history and commitment to quality have made it a beloved brand in many countries around the world.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Ovaltine_chocolate_milk.jpg/220px-Ovaltine_chocolate_milk.jpg",
  },
  {
    id: 4,
    name: "Chocapic",
    countryOfOrigin: "France",
    rating: 4,
    description:
      "Chocapic is a French brand of chocolate milk that is known for its rich and indulgent flavor. It is made with high-quality cocoa and has a smooth, creamy texture that appeals to chocolate lovers. Chocapic is often praised for its balanced sweetness and deep chocolate taste, making it a popular choice among those who enjoy a more intense chocolate experience. The brand offers various flavors, including classic chocolate and hazelnut, catering to different preferences. Chocapic's commitment to quality and flavor has earned it a loyal following in France and beyond.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Chocapic_chocolate_milk.jpg/220px-Chocapic_chocolate_milk.jpg",
  },
  {
    id: 5,
    name: "Chocobon",
    countryOfOrigin: "Italy",
    rating: 3,
    desctiption:
      "Chocobon is an Italian brand of chocolate milk that offers a unique blend of rich cocoa and creamy milk. It is known for its smooth texture and balanced sweetness, making it a popular choice among chocolate milk enthusiasts. Chocobon is often praised for its high-quality ingredients and indulgent flavor, which appeals to those who enjoy a more decadent chocolate experience. The brand offers various flavors, including classic chocolate and hazelnut, catering to different preferences. Chocobon's commitment to quality and taste has earned it a loyal following in Italy and internationally.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://upload.wikimedia/en/thumb/8/8d/Chocobon_chocolate_milk.jpg/220px-Chocobon_chocolate_milk.jpg",
  },
  {
    id: 6,
    name: "Tine Sjokolademelk",
    countryOfOrigin: "Norway",
    rating: 5,
    description:
      "Tine Sjokolademelk is a Norwegian chocolate milk known for its fresh dairy base and balanced cocoa flavor. It is widely consumed in schools and sports settings and is appreciated for its clean, creamy taste without excessive sweetness.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/tine.jpg",
  },
  {
    id: 7,
    name: "Arla Kakao",
    countryOfOrigin: "Sweden",
    rating: 4,
    description:
      "Arla Kakao is a Scandinavian chocolate milk with a smooth consistency and mild cocoa profile. It is commonly served chilled and is known for its reliable quality and natural dairy flavor.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/arla.jpg",
  },
  {
    id: 8,
    name: "Chocomel",
    countryOfOrigin: "Netherlands",
    rating: 5,
    description:
      "Chocomel is a Dutch chocolate milk famous for its creamy texture and rich cocoa intensity. It is available both cold and warm and has a strong following across Europe.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/chocomel.jpg",
  },
  {
    id: 9,
    name: "Valio Cocoa",
    countryOfOrigin: "Finland",
    rating: 4,
    description:
      "Valio Cocoa is a Finnish chocolate milk with a clean dairy taste and smooth chocolate finish. It is appreciated for its moderate sweetness and high milk quality.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/valio.jpg",
  },
  {
    id: 10,
    name: "Müller Chocolate Milk",
    countryOfOrigin: "Germany",
    rating: 4,
    description:
      "Müller Chocolate Milk combines creamy German dairy with a rounded cocoa flavor. It is often sold in convenient bottles and is known for its consistent texture.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/muller.jpg",
  },
  {
    id: 11,
    name: "Fairlife Chocolate Milk",
    countryOfOrigin: "United States",
    rating: 4,
    description:
      "Fairlife Chocolate Milk is filtered to increase protein content and reduce lactose. It has a thick texture and a pronounced chocolate taste.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/fairlife.jpg",
  },
  {
    id: 12,
    name: "Cadbury Dairy Milk Drink",
    countryOfOrigin: "United Kingdom",
    rating: 3,
    description:
      "Cadbury Dairy Milk Drink offers a sweet and dessert-like chocolate flavor inspired by the classic confectionery brand.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/cadbury.jpg",
  },
  {
    id: 13,
    name: "Meiji Cocoa Milk",
    countryOfOrigin: "Japan",
    rating: 4,
    description:
      "Meiji Cocoa Milk is a Japanese chocolate milk known for its smooth texture and refined cocoa balance. It is typically less sweet than many Western alternatives.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/meiji.jpg",
  },
  {
    id: 14,
    name: "Alpro Chocolate Oat",
    countryOfOrigin: "Belgium",
    rating: 4,
    description:
      "Alpro Chocolate Oat is a plant-based chocolate drink made from oats and cocoa. It offers a creamy texture without dairy and appeals to vegan consumers.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/alpro.jpg",
  },
  {
    id: 15,
    name: "Starbucks Chocolate Latte",
    countryOfOrigin: "United States",
    rating: 4,
    description:
      "Starbucks Chocolate Latte blends chocolate milk with espresso for a mild coffee kick and creamy finish.",
    containsCoffee: true,
    isHotChocolate: false,
    image: "https://example.com/starbucks.jpg",
  },
  {
    id: 16,
    name: "Lindt Chocolate Drink",
    countryOfOrigin: "Switzerland",
    rating: 5,
    description:
      "Lindt Chocolate Drink is inspired by premium Swiss chocolate, delivering an intense cocoa flavor and velvety mouthfeel.",
    containsCoffee: false,
    isHotChocolate: true,
    image: "https://example.com/lindt.jpg",
  },
  {
    id: 17,
    name: "Parmalat Chocolate Milk",
    countryOfOrigin: "Italy",
    rating: 3,
    description:
      "Parmalat Chocolate Milk is a shelf-stable chocolate beverage with a balanced sweetness and smooth dairy base.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/parmalat.jpg",
  },
  {
    id: 18,
    name: "Devondale Choc Milk",
    countryOfOrigin: "Australia",
    rating: 4,
    description:
      "Devondale Choc Milk is an Australian chocolate milk known for its creamy consistency and strong cocoa character.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/devondale.jpg",
  },
  {
    id: 19,
    name: "Amul Chocolate Milk",
    countryOfOrigin: "India",
    rating: 4,
    description:
      "Amul Chocolate Milk is a widely available Indian chocolate milk with a sweet and approachable flavor profile.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/amul.jpg",
  },
  {
    id: 20,
    name: "Yili Chocolate Milk",
    countryOfOrigin: "China",
    rating: 3,
    description:
      "Yili Chocolate Milk offers a light cocoa taste and smooth texture, commonly sold in single-serve cartons.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "https://example.com/yili.jpg",
  },
]
