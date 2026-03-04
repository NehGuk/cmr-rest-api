export type ChocolateMilk = {
  id: number
  name: string
  country_of_origin: string
  rating: number
  description?: string
  contains_coffee: boolean
  is_hot_chocolate: boolean
  image: string
}

export let chocolateMilkList = [
  {
    id: 1,
    name: "Mint Chocolate Milk",
    country_of_origin: "South Korea",
    rating: 5,
    description:
      "I thought this was going to be terrible, but it was actually really good! What a pleasant surprise, in a country where green tea is the norm.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576911/a3z9r3athjgtuoyi5rpr.jpg",
  },
  {
    id: 2,
    name: "Cocio Dark",
    country_of_origin: "Denmark",
    rating: 5,
    description:
      "You can't go wrong with Cocio. I wasn't disappointed at their dark chocolate version.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577017/vzpqrhqfeuofmnoqwqfs.jpg",
  },
  {
    id: 3,
    name: "Taciata",
    country_of_origin: "Poland",
    rating: 3,
    description:
      "Nothing special, really. It was just okay. I expected more from a chocolate milk that is so popular in Poland.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577314/r7tmk2eeghgxpl9xnmaa.png",
  },
  {
    id: 4,
    name: "Müllermilch",
    country_of_origin: "Germany",
    rating: 2,
    description: "Absolutely nothing special about this one.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577062/djphc5wkl1gogwrhxxzn.jpg",
  },
  {
    id: 5,
    name: "Bakoma Satino Gold Drink",
    country_of_origin: "Poland",
    rating: 1,
    description:
      "This tastes like anything but chocolate milk. If you ever feel like drinking milk chocolate in Poland, stay away from this one. There are much better options in the country.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576989/zmxgxrnxpst0bewgogsb.jpg",
  },
  {
    id: 6,
    name: "Clover Farm Chocolate Milk",
    country_of_origin: "USA",
    rating: 3,
    description:
      "It's decent for American standards, but I wouldn't go out of my way to get it. It's just okay.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576958/xiapt7bvgd7kbszbrano.jpg",
  },
  {
    id: 7,
    name: "TruMoo Chocolate Milk",
    country_of_origin: "USA",
    rating: 0,
    description:
      "Just awful. It tastes like someone just dumped a bunch of chocolate syrup into regular milk. I don't understand how this can even be called 'chocolate milk'.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576910/nyrbgrwz38bafhyo7qvd.jpg",
  },
  {
    id: 8,
    name: "Fairlife Yup Rich Chocolate",
    country_of_origin: "USA",
    rating: 2,
    description:
      "After drinking this one, I started to lose hope for American chocolate milk. It was just too sweet and artificial tasting.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577038/iw5e6nyp9kfmsn2s9ztz.jpg",
  },
  {
    id: 9,
    name: "McCafé Frappé Mocha",
    country_of_origin: "USA",
    rating: 3,
    description:
      "Considering my expectations for this one were really low, I must say that it wasn't that bad. Well, I wouldn't buy it again, but it was definitely drinkable.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576953/cxyyd7ijcy0zkxipaawh.jpg",
  },
  {
    id: 10,
    name: "Trickling Springs Whole Chocolate Milk",
    country_of_origin: "USA",
    rating: 3,
    description:
      "Not bad! It was a little expensive, but I don't regret trying it. Finally, an American chocolate drink that I can recommend.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577015/ogvt8xyrgokdlsjxdicj.jpg",
  },
  {
    id: 11,
    name: "United Dairy Chocolate ",
    country_of_origin: "USA",
    rating: 0,
    description:
      "Didn't even finish it. Straight into the trash, sorry. I don't know what the heck they put into this thing. You gotta make an effort to produce something this bad. Tastes like plastic.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576977/tjm6ddqlrrprlck2hmqp.jpg",
  },
  {
    id: 12,
    name: "Cloverland Farms Dairy Chocolate Milk",
    country_of_origin: "USA",
    rating: 1,
    description:
      "Get it out of my sight! I was deceived by the label, which made it look like good stuff. What a mistake...",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577060/skl3w03grvtvyjly69ld.jpg",
  },
  {
    id: 13,
    name: "Harrisburg Dairies",
    country_of_origin: "USA",
    rating: 2,
    description:
      "I had high hopes for this Pennsylvania-made chocolate milk, but again, it was just too sweet and artificial tasting",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576991/vmcg5mwficp2ui83ledx.jpg",
  },
  {
    id: 14,
    name: "Peet's Coffee Frapuccino Mocha",
    country_of_origin: "USA",
    rating: 2,
    description:
      "What a major disappointment. Nice coffee shop, good atmosphere, pleasant vibe... Just to be ruined by this overly sweet frapuccino.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576897/zmmxmyuq8liai6pmzcut.jpg",
  },
  {
    id: 15,
    name: "Special K Protein Shake",
    country_of_origin: "USA",
    rating: 2,
    description:
      "You're at the airport and you need a drink. Then you see this on a shelf. Promising? Maybe. Let's see: hum... Just wasted my money, again. Horrible!",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576993/nhmib1sdu3vtpx4vu6gl.jpg",
  },
  {
    id: 16,
    name: "Chocomel",
    country_of_origin: "The Netherlands",
    rating: 3,
    description:
      "I don't understand how this is so popular. You'll find it everywhere in the Netherlands and neighbouring countries. Honestly, though, I don't get the hype. It's just okay. Absolutely nothing special about it.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576981/q7o8h9rumun074wrk1dj.jpg",
  },
  {
    id: 17,
    name: "Heidi Chocolat",
    country_of_origin: "Switzerland",
    rating: 3,
    description:
      "Not bad, but not great either. Again, very high expectations which are sadly not met. Just average.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577042/y9pir749gevdj0creivl.jpg",
  },
  {
    id: 18,
    name: "Nutramino Nutra Go",
    country_of_origin: "Denmark",
    rating: 3,
    description:
      "It tastes OK. It's not like I fell in love with it, but I wouldn't mind having it again sometime. It's just a decent chocolate milk, nothing more, nothing less.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577022/a9sn1dyizqjejnrj8hbn.jpg",
  },
  {
    id: 19,
    name: "Emmi Energy Milk",
    country_of_origin: "Switzerland",
    rating: 4,
    description:
      "That was quite good, actually. When to comes to Swiss brands, the expectations are always high, and this one did not disappoint me.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576975/y0akzamhrig3ctmihtkc.jpg",
  },
  {
    id: 20,
    name: "Comella Choco Drink",
    country_of_origin: "Switzerland",
    rating: 2,
    description:
      "A major disappointment, considering Swiss quality standards. I don't understand how this can be sold in a country known for excellent-quality chocolate.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576987/q5xy0objglrspvjevsp9.jpg",
  },
  {
    id: 21,
    name: "Três Corações Capuccino Chocolate",
    country_of_origin: "Brazil",
    rating: 5,
    description:
      "Bom pacas! That's a Portuguese slang that means 'damn good'. It's a shame that I cannot find this drink outside Brazil. I must say it's a bit too sweet, though. Not perfect. But it's one of my favourites nevertheless!",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576907/irealhyt3nhjgs5tzjkf.png",
  },
  {
    id: 22,
    name: "Ehrmann High Protein Chocolate Drink ",
    country_of_origin: "Germany",
    rating: 1,
    description:
      "Tastes like horse urine. One of the worst chocolate drinks I've tasted recently. Bought this in Lavtia, so I was swearing at the Latvian dairy industry for five minutes, only to realise that this shit actually comes from Germany.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577064/iext2hyynyuuk85ikoq4.jpg",
  },
  {
    id: 23,
    name: "QNT Protein Delicious Shake",
    country_of_origin: "Belgium",
    rating: 1,
    description:
      "I get it. Sometimes we have to sacrifice flavour in order to get better nutritional qualities. But sometimes folks go a bit too far. This is just another instance of the industry failing at correctly labelling what they sell. Calling this a 'delicious shake', as the label suggests, is almost a crime.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1772620053/znitwe3m90klhd9e5chx.png",
  },
  {
    id: 24,
    name: "Müllermilch Kakao",
    country_of_origin: "Germany",
    rating: 2,
    description:
      "I've tried Müllermilch before, in Oslo. Didn't like it. But let's give it another go. Maybe here in Gdańsk they taste better? Also, this one says 'kakao' on the label. Could it be a new edition? An improved recipe? More chocolaty? Nope. Wasted my money again.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576920/igm8k77pszzhlsyhbkrd.jpg",
  },
  {
    id: 25,
    name: "Tine Milkshake Sjokoladesmak",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "Good stuff! Don't be deceived by the ugly packaging. I really like this one. True, it's a bit sweeter than it should be but it remains as one of the best chocolate drinks I can find here in Norway. Not nearly as good as Cocio, though.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577009/bupfpskk87nbfbpqz00o.jpg",
  },
  {
    id: 26,
    name: "ProPud Milkshake Capuccino",
    country_of_origin: "Austria",
    rating: 4,
    description:
      "Excellent! A creamy and filling drink, with a smooth coffee-ish aftertaste that didn't disappoint me. These protein drinks are usually terrible. But this one positively surprised me.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576984/pzmrdalwhw5ntqiovrh0.jpg",
  },
]
