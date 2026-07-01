export type ChocolateMilk = {
  id: string
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
    id: "86df2778-574c-40c0-9038-1ab9df92cdd8",
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
    id: "1c9c7a1d-23f1-4bf8-bfbd-f80ce1242215",
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
    id: "f4fa576d-fe28-419a-9b4a-0e92d76d7654",
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
    id: "fd5ccce8-7e66-4a0c-98d3-1588b4bdc75b",
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
    id: "0e9ad91b-2d4b-473d-8408-8cb159d42f2d",
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
    id: "88b88111-14c1-4ceb-9c68-b5ab4b696050",
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
    id: "e6f66a58-1d96-42e7-857b-346e87ea7a57",
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
    id: "f4fd7fc6-ebb2-43d8-9c08-411a4b1193ae",
    name: "Fairlife Yup Rich Chocolate",
    country_of_origin: "USA",
    rating: 2,
    description:
      "After drinking this one, I started to lose hope for American chocolate milk. It was just too sweet, too artificial.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577038/iw5e6nyp9kfmsn2s9ztz.jpg",
  },
  {
    id: "589f5724-2079-4164-9fd5-40123629a7b6",
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
    id: "09a7a1e5-b2c5-4030-a011-076027775860",
    name: "Trickling Springs Whole Chocolate Milk",
    country_of_origin: "USA",
    rating: 3,
    description:
      "Not bad! It was a little expensive, but I don't regret having tried it. I was waiting for this moment: finally, an American chocolate drink that I can recommend.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577015/ogvt8xyrgokdlsjxdicj.jpg",
  },
  {
    id: "a3993d37-a07f-468a-8791-2cfd4124e72a",
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
    id: "700f4b31-4d9e-4d1c-850f-564bc22e66ba",
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
    id: "abef5190-df77-4663-961a-33ff7098e6c7",
    name: "Harrisburg Dairies",
    country_of_origin: "USA",
    rating: 2,
    description:
      "I had high hopes for this Pennsylvania-made chocolate milk, but again, it was just too sweet and too artificial, like the vast majority of the chocolate milk drinks I've tasted in the US.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576991/vmcg5mwficp2ui83ledx.jpg",
  },
  {
    id: "e9781bed-0af9-4568-9592-58695f9789c8",
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
    id: "a99f5d55-c8fb-408d-905f-4b9e860fe8e9",
    name: "Special K Protein Shake",
    country_of_origin: "USA",
    rating: 2,
    description:
      "You're at the airport and you need a drink. Then you spot this on a shelf. Promising? Maybe. Let's see... OK, just wasted my money. Again! What a terrible drink.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576993/nhmib1sdu3vtpx4vu6gl.jpg",
  },
  {
    id: "cd254818-3ea1-4ebe-b547-abb460962ed8",
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
    id: "aff95121-1918-4595-8e11-e028fb790afd",
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
    id: "00fdb05a-87e2-4dfe-acfb-8760fa1cb832",
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
    id: "a1ee497e-55b5-434a-a201-7df5b7b718a7",
    name: "Emmi Energy Milk",
    country_of_origin: "Switzerland",
    rating: 4,
    description:
      "That was quite good, actually. When it comes to Swiss brands, the expectations are always high, and this one did not disappoint me.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576975/y0akzamhrig3ctmihtkc.jpg",
  },
  {
    id: "0f3324e4-db51-4c79-826b-0864ddb007f0",
    name: "Comella Choco Drink",
    country_of_origin: "Switzerland",
    rating: 2,
    description:
      "A major disappointment, considering Swiss quality standards. I don't understand how this can be sold in a country known for excellence in everything related to chocolate.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576987/q5xy0objglrspvjevsp9.jpg",
  },
  {
    id: "47ae1a1c-5674-4b98-a04e-2114d7d60088",
    name: "Três Corações Capuccino Chocolate",
    country_of_origin: "Brazil",
    rating: 5,
    description:
      "Bom pacas! That's a Portuguese slang term that means 'damn good'. It's a shame that I cannot find this drink outside Brazil. I must say it's a bit too sweet, though. Not perfect. But it's one of my favourites nevertheless!",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576907/irealhyt3nhjgs5tzjkf.png",
  },
  {
    id: "f569b36b-4b2e-4903-a5c9-b428c3ce42cd",
    name: "Ehrmann High Protein Chocolate Drink ",
    country_of_origin: "Germany",
    rating: 1,
    description:
      "Tastes like horse urine. One of the worst chocolate drinks I've tasted recently. Bought this in Latvia, so I was swearing at the Latvian dairy industry for five minutes, only to realise that this shit actually comes from Germany.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577064/iext2hyynyuuk85ikoq4.jpg",
  },
  {
    id: "3a5c8a8b-6c51-4638-9421-15a8c76e05c7",
    name: "QNT Protein Delicious Shake",
    country_of_origin: "Belgium",
    rating: 1,
    description:
      "I get it. Sometimes we have to sacrifice flavour in order to get better nutritional qualities. But sometimes folks go a bit too far. This is just another instance of the industry failing at correctly labelling what they sell. Calling this a 'delicious shake', as the label suggests, is almost a crime.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1782734326/oofe0bflkbptjdfq6ut3.png",
  },
  {
    id: "a57462ce-7304-4a96-8406-439df9d6569c",
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
    id: "89209c1c-11f7-45ac-9c8f-7cd9fd2cd3ac",
    name: "Tine Milkshake Sjokoladesmak",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "Good stuff! Don't be deceived by the ugly packaging. I really like this one. True, it's a bit sweeter than it should be, but it remains as one of the best chocolate drinks I can find here in Norway. Not nearly as good as Cocio, though.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577009/bupfpskk87nbfbpqz00o.jpg",
  },
  {
    id: "e1d01572-b548-4119-acee-bd735a69d05a",
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
  {
    id: "154875fe-d91c-4588-a684-88e6eb7ad3d6",
    name: "Espresso House Iscapuccino Mocca",
    country_of_origin: "Sweden",
    rating: 4,
    description:
      "Not bad at all. Most drinks at Espresso House are decent, I think. Not top-notch stuff, but good enough to get me going.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577051/fkr1dfakkmukcjuucpgi.jpg",
  },
  {
    id: "40fd7fa7-b05a-4b93-a625-24775cdb5205",
    name: "Barbells Milkshake Chocolate",
    country_of_origin: "Sweden",
    rating: 3,
    description:
      "Again, one of those 'functional' drinks. Some extra protein, sure, but at what cost? It tastes like industrial residue. Still, not the worst I've seen. I expected more from the Swedish chocolate milk brands.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577057/u6pzn0771zuaotnw24ks.jpg",
  },
  {
    id: "7dcc73b5-09c9-43d5-afcf-02701a9ae087",
    name: "Starbucks White Mocha Frapuccino",
    country_of_origin: "USA",
    rating: 5,
    description:
      "I first discovered this one when I lived in Rio de Janeiro, in 2013. It has become my favourite Starbucks drink. But here's a crucial detail: it ought to be ordered with less ice and a double shot of espresso. Otherwise, it can be rather boring.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576968/x3ovj3cquzvvizclpfyf.jpg",
  },
  {
    id: "d2511f6b-4a7e-4b5b-b01b-76fb3179337c",
    name: "Steam Kaffebar Iskremkaffe",
    country_of_origin: "Norway",
    rating: 5,
    description:
      "A heavenly experience! This is one of my top favourites of all time. No games here, no fluff, no gimmicks. Just great-quality coffee mixed with great-quality ice cream. This brutal simplicity is what makes this drink so special. I'd recommend either vanilla, chocolate or mint ice cream. Pricey, but totally worth it. Not sure how consistent it is across different shops, though. I used to order it at Steam Kaffebar CC Vest, in Oslo.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576979/w2pjos1brnmkpm5wsuqz.jpg",
  },
  {
    id: "afb01ae8-8cbd-4548-b85a-9fd9092778fa",
    name: "Alpro Plant Protein",
    country_of_origin: "Belgium",
    rating: 1,
    description: "No taste. This drink does not even deserve a review.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576905/tpjfk5nacezaqfkb3w87.jpg",
  },
  {
    id: "cf446b25-345a-47a9-b1d3-bd109b907c26",
    name: "Skånemejerier Chokladmjölk",
    country_of_origin: "Sweden",
    rating: 4,
    description:
      "It reminds me of Litago, from Norway, but a little tastier – not that Litago is great, but it's worth the comparison. It does well as a general-purpose chocolate milk. Nothing fancy. It won't make a lasting memory, but it won't disappoint too much either.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577067/bfj1tpicpvlmamprovvt.jpg",
  },
  {
    id: "a5b9c6db-801f-41f3-97bb-121e5e62ea91",
    name: "Skånemejerier Fika Chokladmjölk ",
    country_of_origin: "Sweden",
    rating: 4,
    description:
      "I don't get it. It is basically the same thing as that other Swedish chocolate milk, Skånemejerier Chokladmjölk, produced by the same brand. Why two products that taste exactly the same? Or almost exactly, I'm not sure. Maybe my taste buds were no longer able to tell the difference in the midst of a harsh winter in Stockholm?",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576926/nc3bpivtvkriqufgrufx.jpg",
  },
  {
    id: "5d926b50-3f9f-485a-a94d-da6a541538fd",
    name: "Pucko",
    country_of_origin: "Sweden",
    rating: 5,
    description:
      'This got me really confused. A Cocio bottle, with a label that says \"Pucko\"? It tastes exactly like Cocio. Someone told me that this Swedish brand, Pucko, is now produced by the same factory where the Danish champion Cocio is produced. Huh? I\'ll have to do some more research to crack this mystery. What\'s important, though, is that this "Pucko" drink does taste delicious – again, exactly like Cocio. Hence the high score, regardless of branding strategies and regardless of the ever-confusing who-owns-what-where sort of discussion.',
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577035/g2gunnmew2aj1osebma4.jpg",
  },
  {
    id: "423bb4f6-f625-45a0-843d-dd2503d86317",
    name: "Pucko Ljus Chokladmjölk",
    country_of_origin: "Sweden",
    rating: 3,
    description:
      "Although the original Pucko tastes really good, this one, sold in the carton box, disappointed me quite a lot. Why? The proportion of cocoa, milk and sugar in this drink is not what chocolate milk lovers expect.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577003/sfvxqpae2zptnt3ye6zu.jpg",
  },
  {
    id: "3ee6ada6-ee75-4a00-b5b8-7ad3efce8179",
    name: "Milbona Cappuccino Coffee Drink",
    country_of_origin: "Germany",
    rating: 5,
    description:
      "Impressive. You won't find this very often here in Norway, but if you do, go for it. A gentle balance between a pleasant coffee after taste in a silky, creamy, refreshing chocolate milk experience.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576970/ihlmvm6ewv07bnpsblph.jpg",
  },
  {
    id: "78ea75be-df24-4a3f-bf91-99a2613f497e",
    name: "Yalla Milkshake",
    country_of_origin: "Sweden",
    rating: 4,
    description:
      "Not too bad. Nice, airy texture – as long as you shake it well before enjoying it. I was told that Yalla is a brand from Sweden, but I was also told that this specific product is made in Denmark. Who knows? It doesn't really matter, I guess, as long as it's a good-quality chocolate milk. Well, this one is not exactly \"top-quality\", but it certainly is good enough.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577013/clllllbgys6mah1ylek1.jpg",
  },
  {
    id: "4e23fdee-7651-40eb-8853-956095d864ee",
    name: "Milbona Espresso Macchiato Coffee Drink",
    country_of_origin: "Germany",
    rating: 5,
    description:
      "As with the Milbona Cappuccino Coffee Drink, this one is also a top-notch drink. Just the right balance between coffee and chocolate, in a milky, refreshing texture that will surely make you understand why other brands can't catch up. This brand, Milbona, is owned by Lidl, from Germany. Who knows why it is sold all across northern Europe, but not in Norway? Sad news for chocolate milk enthusiasts here.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576898/l0qiwjpd4hjy830nqw1j.jpg",
  },
  {
    id: "d684c352-f05b-4aad-a8ac-5ac29dfe44e0",
    name: "ProPud Coffee Shake Frappé Latte",
    country_of_origin: "Sweden",
    rating: 5,
    description:
      "Good stuff! Creamy, delicious texture. I'm often disappointed by these Swedish brands, but this drink in particular elevates the reputation of the Swedish chocolate milk industry.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576974/tgzxgcz3xnz5hkhvydgr.jpg",
  },
  {
    id: "b590de4c-25f7-44cb-b5a0-2e6d38ada22f",
    name: "Naturdiet Creamy Caffe Latte",
    country_of_origin: "Sweden",
    rating: 0,
    description:
      "By far, the worst drink I've tasted in Sweden – it's on the same range as the worst ones from the US, which is an impressive achievement in itself. You almost have to make a conscious effort to produce something that bad. The production of this crap should be phased out immediately.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577011/zhfxr8v5na1z0hkccgbg.jpg",
  },
  {
    id: "fc5ad0ee-5f66-427c-a850-2ce4c3e1c249",
    name: "Valio Profeel Protein Milkshake Chocolate Flavour",
    country_of_origin: "Finland",
    rating: 4,
    description:
      "Haven't tried many chocolate milk brands from Finland, as far as I remember. But this one gave me a positive impression. Thick texture, real chocolate taste, no bullshit. I can safely recommend this one.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576924/yknolasmyu2u1levyezp.jpg",
  },
  {
    id: "3bf90ba1-5c1c-4820-ba0d-75ba07e935ca",
    name: "Barbells Fast Food Chocolate Flavor",
    country_of_origin: "Sweden",
    rating: 2,
    description:
      "Tastes like medicine. Texture? A bit too thick. Horrible name, horrible taste, horrible packaging. Horrible everything.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576903/e3z4xe3mqg8vxzgfgbqe.jpg",
  },
  {
    id: "377adce4-d504-4b45-b7d7-e681e5dd09b4",
    name: "Bröd & Salt Iced Shaken Espresso",
    country_of_origin: "Sweden",
    rating: 5,
    description:
      "What a pleasant surprise! I'd never been to this bakery before, but they seem to know what they're doing. The coffee taste is strong, but not overwhelming. The chocolate taste is subtle, but present. Overall, a great drink that I would definitely recommend.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577071/v8se8ayd74eiyivjee8v.jpg",
  },
  {
    id: "56d0ba24-9775-4f6a-b619-ec82d5050216",
    name: "Huel Chocolate",
    country_of_origin: "UK",
    rating: 3,
    description:
      "I wanted to give it 4 stars instead of 3, given its nutritional properties. However, the medicine taste of this drink is a major turn-off. But still, it's a decent contender in its category.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576956/bknud8om2z4a8f56zhps.jpg",
  },
  {
    id: "968779fa-3b74-41e7-81da-9683b78cec6c",
    name: "Tine Lettmelk Sjokolade",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "I usually have a problem with chocolate drinks produced by Tine. However, I was positively surprised by this one. Although it's got a rather mild taste, it does do the job well as a casual chocolate milk drink.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576900/vqu8gsyccvh5nzdefray.jpg",
  },
  {
    id: "8ece98cf-a770-479d-b1f1-d38dc00b607e",
    name: "Litago Dobbel Sjokolade",
    country_of_origin: "Norway",
    rating: 4,
    description:
      'The classic Litago chocolate milk is tasteless. This new edition, however, has been a welcome addition to their catalogue. They say "double", but to me that only means "regular". And regular is good. Still far away from Cocio or other top-notch chocolate milk drinks, but quite decent if you\'re in a hurry and need a quick recharge.',
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577000/nryzac4wv0eo0scwuuvr.jpg",
  },
  {
    id: "9d4981ce-badb-4ff5-a7a7-7dd400b0925f",
    name: "Ikea Oat Drink Chocolate Flavour",
    country_of_origin: "Sweden",
    rating: 4,
    description:
      "Quite nice! If you're ever wondering what to drink while shopping at Ikea, here's an excellent option. Oat-based drinks are tricky. They tend to be too thin, too awkward. The makers of this one, however, found a good formula that balances a pleasant texture with a good chocolaty taste.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576972/adbedaxl0qhgav7iiosr.jpg",
  },
  {
    id: "bf00128e-7019-46e9-862f-3a160c941040",
    name: "Kaffebrenneriet Iskrem Mocca",
    country_of_origin: "Norway",
    rating: 5,
    description:
      "Perfection! This very drink is one of the reasons why I miss Oslo. Kaffebrenneriet, a local shop, is known for good quality stuff. But this drink went beyond my expectations. I think it's just the brutal simplicity of it that strikes me the most: great coffee with excellent-quality ice cream. What can go wrong? Saint-Exupéry once said that perfection is achieved not when there is nothing more to add, but when there is nothing more to take away. This drink epitomises that philosophy.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577044/ojx6ijdahqypncff9yxl.jpg",
  },
  {
    id: "63b67898-a687-4ad2-bc52-b70bf341936a",
    name: "Bakoma Satino Coffee Espresso",
    country_of_origin: "Poland",
    rating: 4,
    description:
      "An uncomplicated drink. Simple, straight to the point. No distractions. I liked it very much, particularly for its distinctive coffee taste. Hard to find in regular shops, though. I found this one at Eko, in Grünerløkka, a small market that specialises in Polish products.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577038/s6n8ljzwaacsbnvrlw94.jpg",
  },
  {
    id: "4d9c61cf-1d7e-4c8f-bffa-c3a11514ae74",
    name: "Milka Shake",
    country_of_origin: "Switzerland",
    rating: 4,
    description:
      "Delicious, as expected. Milka products hardly disappoint us. I'm not sure how consistent they are across countries, though, considering that they have several production plants in a few different territories. This one was bought in Tenerife. I can safely recommend it.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576997/tupfvn0kyl37klsuzfw8.jpg",
  },
  {
    id: "4e819e47-1d9b-4ef7-83ad-94406629fc68",
    name: "Cappuccino Kaiku Caffè Latte",
    country_of_origin: "Spain",
    rating: 3,
    description:
      'Spanish brand, made in Switzerland. It\'s not bad, but I expected more from this drink. I\'d still drink it again, but there are better options on the market. The naming philosophy bothered me quite a bit. Look at the label: a "cappuccino" that is also a "caffè latte"? What?',
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577004/vl1n4ihooznwotkagd38.jpg",
  },
  {
    id: "31a1cdf1-88cb-4e16-a8c9-8e3d5e9dc04f",
    name: "Okey Choco Ride",
    country_of_origin: "Lithuania",
    rating: 1,
    description:
      "Regrets are a natural occurrence of life, just as much as joy and sorrow. I was at this gas station in Tenerife, choosing from a variety of possible drinks that could help me get through that hot, sunny day. Why did I pick the worst option? I'm not sure how the others would have tasted like, of course, but it's hard to beat this \"Okey\" thing – a terrible name, to begin with. I can assure that this is one of the worst chocolate drinks I've tasted so far. It's just sugar.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577040/ycxsz0iw4r3rkqyhjntv.jpg",
  },
  {
    id: "f588a7ba-4dd0-4330-8524-3fa9f94b088a",
    name: "Kalise Café & Leche Cappuccino",
    country_of_origin: "Spain",
    rating: 2,
    description:
      "Where's the taste? I can't feel anything. What a waste of time and money this drink was. Not that the local competitors were much better, but I'm sure the manufacturers can come up with something better than this.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576985/slh5zt1af8zyei2tc9ks.jpg",
  },
  {
    id: "01fd5e98-8f94-4ff4-be2f-9edfed8156d8",
    name: "Alpro Almond Plant-based Baristas Caffé",
    country_of_origin: "Belgium",
    rating: 3,
    description:
      "I do enjoy almond milk. This drink is not something that will cause a lasting impression on your taste buds. But it's not bad at all. I've tried other drinks from this brand, and they're usually awful. Not this one, though. Which doesn't mean, of course, that it's getting any higher than 3 points in my 1-5 scale.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577047/mpoiu16sh3ooazq0hgaq.jpg",
  },
  {
    id: "1e5bfb5e-92d4-45c2-8ac6-62ce2948c291",
    name: "Rørosmeieriet Økologist Ferst Sjokomjølk",
    country_of_origin: "Norway",
    rating: 3,
    description:
      "I hesitated to give it 3 points. Maybe 4? Nah. It's not a bad drink, but it's not great either. This is generally considered a very good brand for Scandinavian standards, so I think they could do a better job at producing a chocolate milk drink that lives up to their reputation",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577025/yygckkv5mp5ui7kpuase.jpg",
  },
  {
    id: "df94f46a-9f3f-468f-80dd-5820dd7daf42",
    name: "Choco Milk Classic",
    country_of_origin: "Denmark",
    rating: 3,
    description:
      "Actually pretty good, but way too sweet. They seem to be trying to copy Cocio. Good try. But it will take more than excess of sugar to beat the Danish champion.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576917/tidge74q8acioic60ohk.jpg",
  },
  {
    id: "4d5f4d3e-a1de-48ed-afd5-742d89fad1bb",
    name: "Korean brand of ice coffee",
    country_of_origin: "South Korea",
    rating: 4,
    description:
      "Quite nice! I wish it was a little less sweet, but it is a solid choice if you are in the mood for a cold drink.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577073/tyrp60kghoin6qgtbkdf.jpg",
  },
  {
    id: "746d7f24-1dde-4b18-8deb-e661630073e4",
    name: "Alpro Iced Coffee Nutty Almond",
    country_of_origin: "Belgium",
    rating: 3,
    description:
      "Boring. I've reviewed several Alpro drinks and none of them have impressed me. Mid-range quality. Not terrible, not great. I wouldn't buy it again unless I really had to.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1782895318/copy_of_veifvnjrkpn2265zzqjs.jpg",
  },
  {
    id: "093fafc0-1847-42da-9c03-f6b0c0c1e4cb",
    name: "Arla Protein Chocolate Flavoured Milk Drink",
    country_of_origin: "Denmark",
    rating: 2,
    description:
      "No taste. I think I had tried something else produced by this brand before, and regretted it of course. This time it was no different. I think this is the last Arla chocolate drink I will ever waste money on.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576960/b8z0pkqo1vogjhka8oqq.jpg",
  },
  {
    id: "2633fefa-d5d3-483a-88ef-c96ecd14c215",
    name: 'The Bakery "Improvised" Frapuccino',
    country_of_origin: "Norway",
    rating: 4,
    description:
      "I was hanging out in this boring office building, in Fornebu, and found a coffee place there. The menu sadly didn't have any cold options. But a nice lady who worked there said that she could improvise something. And this was the result. A frapuccino-like drink, with loads of good chocolate and a bit of cream on top. It tasted good! The attitude of the attendant helped this drink get a 4/5 rating.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576915/fuz87qpv4gcfoziepzk6.jpg",
  },
  {
    id: "d688149d-daf5-4ff2-80f0-f90613308127",
    name: "Alpro Iced Coffee Caramel Flavour Soya",
    country_of_origin: "Belgium",
    rating: 2,
    description:
      "I hate caramel. I hate soy milk. So why did I even try this one? No idea. But I'm being very generous here by giving it a 2/5 rating. Trying to be unbiased. But seriously, this was so boring and uninspiring.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576929/zocekrenmgzojnlgxxjb.jpg",
  },
  {
    id: "2ea5948a-c101-4bb8-bb84-ae0805bbede2",
    name: "Protein Lab Protein Shake Chocolate Flavour",
    country_of_origin: "Denmark",
    rating: 4,
    description:
      "Not too sweet. Good stuff. It doesn't taste like medicine either, like most of the drinks in this category. I found it gentle and balanced. Would drink it again.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576964/chrlvsvkovrfieyrcdvd.jpg",
  },
  {
    id: "e3de4389-7a92-46ad-9bcf-c1bacb71c54e",
    name: "Tine Milkshake Sjokoladesmak",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "Although it's a bit too sweet, it's still a very good chocolate milk drink. I would recommend it, if you're not too worried about your sugar intake.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576962/mjxvnqvjigz8uzv5stjx.jpg",
  },
  {
    id: "e6fe4373-c839-4d15-ae36-e4e9046ffd6f",
    name: "Kolonihagen Mocca Latte",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "This drink has accompanied me in many a journey. It belongs to that category of drinks that you can always rely on. Easy to spot the coffee notes. Smooth texture. Pleasant packaging that doesn't get in the way. I'm happy with this one.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576918/o7or03ohlglaosoijets.jpg",
  },
  {
    id: "67da39b0-e841-4c99-bede-56f73f23bd21",
    name: "Erikstad Gaard Sjokomjølk",
    country_of_origin: "Norway",
    rating: 4,
    description:
      "I'll admit that this is a very good drink, even though I found its texture way too thin. Why not make it a little thicker? That's what chocolate milk drinkers expect. A chocolate drink that feels like water is not exactly the way to go, in my humble opinion.",
    contains_coffee: false,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576995/qwx9uierspresdcddxnh.jpg",
  },
  {
    id: "11fbfeff-2ef0-404a-bf69-32dad7a7f8bb",
    name: "Monday & Espresso Iskaffe",
    country_of_origin: "Norway",
    rating: 3,
    description:
      "It does the job. Nothing spectacular, but it will get you going in the morning. It's a very cheap drink, compared to its competitors. Nice to have a budget option that is actually quite drinkable.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577053/wyz4enimshycjsjtea6p.jpg",
  },
  {
    id: "44da1d6a-42bf-453c-9ff3-36c141d353df",
    name: "Nescafé Pro Energy Capuccino Clássico",
    country_of_origin: "Brazil",
    rating: 4,
    description:
      "I'd give it a 5/5, if it was a little less sweet. But it's still a fantastic drink, like all the others from this same product line.",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771576999/jzwaytrtqzsgpncgbxbz.jpg",
  },
  {
    id: "fbe5b53b-2a18-4397-9a7c-5b29f8a591f5",
    name: "Oslo Cold Brew Iskaffe Havre",
    country_of_origin: "Norway",
    rating: 0,
    description:
      "Stay away from it. This is one of the worst things I've ever drunk. I'd have to make a conscious effort to find the right adjectives to describe how bad this tastes. I'd need to resort to metaphors or analogies: horse urine, sheep piss, leaking garbage, raw sewage... But I won't do that. The worst part: it's an expensive drink! ",
    contains_coffee: true,
    is_hot_chocolate: false,
    image:
      "https://res.cloudinary.com/dtft3fqjw/image/upload/v1771577007/ppwiqkcxtv06r0adzcxl.jpg",
  },
]
