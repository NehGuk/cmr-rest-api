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
    name: "Mint Chocolate Milk",
    countryOfOrigin: "South Korea",
    rating: 5,
    description:
      "I thought this was going to be terrible, but it was actually really good! What a pleasant surprise, in a country where green tea is the norm.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576911/a3z9r3athjgtuoyi5rpr.jpg",
  },
  {
    id: 2,
    name: "Cocio Dark",
    countryOfOrigin: "Denmark",
    rating: 5,
    description:
      "You can't go wrong with Cocio. I wasn't disappointed at their dark chocolate version.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577017/vzpqrhqfeuofmnoqwqfs.jpg",
  },
  {
    id: 3,
    name: "Taciata",
    countryOfOrigin: "Poland",
    rating: 3,
    description:
      "Nothing special, really. It was just okay. I expected more from a chocolate milk that is so popular in Poland.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577314/r7tmk2eeghgxpl9xnmaa.png",
  },
  {
    id: 4,
    name: "Müllermilch",
    countryOfOrigin: "Germany",
    rating: 2,
    description: "Absolutely nothing special about this one.",
    containsCoffee: false,
    isHotChocolate: false,
    image: "URLLLLLL",
  },
  {
    id: 5,
    name: "Bakoma Satino Gold Drink",
    countryOfOrigin: "Poland",
    rating: 1,
    description:
      "This tastes like anything but chocolate milk. If you ever feel like drinking milk chocolate in Poland, stay away from this one. There are much better options in the country.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576989/zmxgxrnxpst0bewgogsb.jpg",
  },
  {
    id: 6,
    name: "Clover Farm Chocolate Milk",
    countryOfOrigin: "USA",
    rating: 3,
    description:
      "It's decent for American standards, but I wouldn't go out of my way to get it. It's just okay.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576958/xiapt7bvgd7kbszbrano.jpg",
  },
  {
    id: 7,
    name: "TruMoo Chocolate Milk",
    countryOfOrigin: "USA",
    rating: 0,
    description:
      "Just awful. It tastes like someone just dumped a bunch of chocolate syrup into regular milk. I don't understand how this can even be called 'chocolate milk'.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576910/nyrbgrwz38bafhyo7qvd.jpg",
  },
  {
    id: 8,
    name: "Fairlife Yup Rich Chocolate",
    countryOfOrigin: "USA",
    rating: 2,
    description:
      "After drinking this one, I started to lose hope for American chocolate milk. It was just too sweet and artificial tasting.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577038/iw5e6nyp9kfmsn2s9ztz.jpg",
  },
  {
    id: 9,
    name: "McCafé Frappé Mocha",
    countryOfOrigin: "USA",
    rating: 3,
    description:
      "Considering my expectations for this one were really low, I must say that it wasn't that bad. Well, I wouldn't buy it again, but it was definitely drinkable.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576953/cxyyd7ijcy0zkxipaawh.jpg",
  },
  {
    id: 10,
    name: "Trickling Springs Whole Chocolate Milk",
    countryOfOrigin: "COUNTRYYYYY",
    rating: 11111,
    description:
      "Not bad! It was a little expensive, but I don't regret trying it. Finally, an American chocolate drink that I can recommend.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577015/ogvt8xyrgokdlsjxdicj.jpg",
  },
  {
    id: 11,
    name: "United Dairy Chocolate ",
    countryOfOrigin: "USA",
    rating: 0,
    description:
      "Didn't even finish it. Straight into the trash, sorry. I don't know what the heck they put into this thing. You gotta make an effort to produce something this bad. Tastes like plastic.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576977/tjm6ddqlrrprlck2hmqp.jpg",
  },
  {
    id: 12,
    name: "Cloverland Farms Dairy Chocolate Milk",
    countryOfOrigin: "USA",
    rating: 1,
    description:
      "Get it out of my sight! I was deceived by the label, which made it look like good stuff. What a mistake...",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577060/skl3w03grvtvyjly69ld.jpg",
  },
  {
    id: 13,
    name: "Harrisburg Dairies",
    countryOfOrigin: "USA",
    rating: 2,
    description:
      "I had high hopes for this Pennsylvania-made chocolate milk, but again, it was just too sweet and artificial tasting",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576991/vmcg5mwficp2ui83ledx.jpg",
  },
  {
    id: 14,
    name: "Peet's Coffee Frapuccino Mocha",
    countryOfOrigin: "USA",
    rating: 2,
    description:
      "What a major disappointment. Nice coffee shop, good atmosphere, pleasant vibe... Just to be ruined by this overly sweet frapuccino.",
    containsCoffee: true,
    isHotChocolate: false,
    image: "URLLLLLL",
  },
  {
    id: 15,
    name: "Special K Protein Shake",
    countryOfOrigin: "USA",
    rating: 2,
    description:
      "You're at the airport and you need a drink. Then you see this on a shelf. Promising? Maybe. Let's see: hum... Just wasted my money, again. Horrible!",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576993/nhmib1sdu3vtpx4vu6gl.jpg",
  },
  {
    id: 16,
    name: "Chocomel",
    countryOfOrigin: "The Netherlands",
    rating: 3,
    description:
      "I don't understand how this is so popular. You'll find it everywhere in the Netherlands and neighbouring countries. Honestly, though, I don't get the hype. It's just okay. Absolutely nothing special about it.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576981/q7o8h9rumun074wrk1dj.jpg",
  },
  {
    id: 17,
    name: "Heidi Chocolat",
    countryOfOrigin: "Switzerland",
    rating: 3,
    description:
      "Not bad, but not great either. Again, very high expectations which are sadly not met. Just average.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577042/y9pir749gevdj0creivl.jpg",
  },
  {
    id: 18,
    name: "Nutramino Nutra Go",
    countryOfOrigin: "Denmark",
    rating: 3,
    description:
      "It tastes OK. It's not like I fell in love with it, but I wouldn't mind having it again sometime. It's just a decent chocolate milk, nothing more, nothing less.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577022/a9sn1dyizqjejnrj8hbn.jpg",
  },
  {
    id: 19,
    name: "Emmi Energy Milk",
    countryOfOrigin: "Switzerland",
    rating: 4,
    description:
      "That was quite good, actually. When to comes to Swiss brands, the expectations are always high, and this one did not disappoint me.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576975/y0akzamhrig3ctmihtkc.jpg",
  },
  {
    id: 20,
    name: "Comella Choco Drink",
    countryOfOrigin: "Switzerland",
    rating: 2,
    description:
      "A major disappointment, considering the Swiss quality standards. I don't understand how this can be sold in a country known for excellent-quality chocolate.",
    containsCoffee: false,
    isHotChocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576987/q5xy0objglrspvjevsp9.jpg",
  },
]
