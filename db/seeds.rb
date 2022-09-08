# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Review.destroy_all
Business.destroy_all
User.destroy_all

# Users seed
User.create(username:'demouser', email:'demouser', password:'demouser')
user1 = User.create(username:'sayuri',email:'sayuri31@sjsu.edu',password:'123456')
user2 = User.create(username:'AlecChoy',email:'mflic07@gmail.edu',password:'123456')
user3 = User.create(username:'CindyVuong',email:'cindasaurous@gmail.edu',password:'123456')
user4= User.create(username:'LucyLuo',email:'lulu@gmail.edu',password:'123456')
user5= User.create(username:'JustinJustice',email:'justice@gmail.edu',password:'123456')
user6= User.create(username:'AdamLin',email:'linAdam@gmail.edu',password:'123456')
user7= User.create(username:'Quang',email:'surfgod@gmail.edu',password:'123456')
user8= User.create(username:'Wendy Shi',email:'wendyshi@gmail.edu',password:'123456')
user9= User.create(username:'Danny',email:'danny@gmail.edu',password:'123456')
user10= User.create(username:'Alex',email:'ableton@gmail.com',password:'123456')
user11= User.create(username:'Peter Parker',email:'peterpeter@gmail.edu',password:'123456')
user12= User.create(username:'disney',email:'disney@gmail.edu',password:'123456')
user13= User.create(username:'Brian Lin',email:'goodking4me@gmail.edu',password:'123456')
user14= User.create(username:'EvieZhang',email:'eviezhang@gmail.edu',password:'123456')
user15= User.create(username:'Mike',email:'mike@gmail.edu',password:'123456')
user16= User.create(username:'Chris',email:'chris@gmail.edu',password:'123456')
user17= User.create(username:'Paulo',email:'paulo@gmail.edu',password:'123456')
user18= User.create(username:'Ashly',email:'ashly@gmail.edu',password:'123456')
user19= User.create(username:'AlexMak',email:'alexmak@gmail.edu',password:'123456')
user20= User.create(username:'Anthonie',email:'anthonnie@gmail.edu',password:'123456')

# Restaurants seeds
# fried food
b1=Business.create(name:'Jollibee',address:'6955 Mission St Suite 101, Daly City, CA 94014',openhour:'7AM',closehour:'10PM',price:'$',website:'https://www.jollibeefoods.com/',phone:'(650) 755-4848')
file1 = open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/Jollibee.jpeg')
b1.photo.attach(io: file1, filename: 'jollibee.jpg')

# boba
b2=Business.create(name:'Taiwan Professional Tea ',address:'2383 Telegraph Ave, Berkeley, CA 94704',openhour:'12PM',closehour:'9PM',price:'$',website:'https://tp-tea.com/',phone:'(510) 228-4421')
file2=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/963c979fa742c9934475b872d4643826.jpeg')
b2.photo.attach(io: file2, filename: 'tpt.jpg')

b5=Business.create(name:'Urban Ritual ',address:'488 Fell St San Francisco, CA 94102',openhour:'12PM',closehour:'9PM',price:'$',website:'http://www.urbanritualcafe.com',phone:'(415) 590-2873')
file5=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/urban.jpeg')
b5.photo.attach(io: file5, filename: 'urbanritual.jpeg')

b29=Business.create(name:'Little Sweet',address:'3836 Geary Blvd San Francisco, CA 94118',openhour:'11AM',closehour:'11PM',price:'$$',website:'http://www.Little-Sweet.com',phone:'(415) 702-6763')
file29=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/littlesweet.jpeg')
b29.photo.attach(io: file29, filename: 'little sweet.jpeg')

b30=Business.create(name:'Yifang Taiwan Fruit Tea',address:'645 Irving St San Francisco, CA 94122',openhour:'12PM',closehour:'8PM',price:'$$',website:'https://yifangteausa.com',phone:'(415) 742-4308')
file30=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/YiFang-Taiwan.webp')
b30.photo.attach(io: file30, filename: 'YiFang-Taiwan.webp')

b31=Business.create(name:'Tea Hut',address:'2815 California St San Francisco, CA 94115',openhour:'11AM',closehour:'9PM',price:'$',website:'http://www.teahut.us',phone:'(415) 962-7437')
file31=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/teahut.jpeg')
b31.photo.attach(io: file31, filename: 'teahut.jpeg')

b32=Business.create(name:'Boba Guys',address:'1522 Fillmore St San Francisco, CA 94115',openhour:'11AM',closehour:'9PM',price:'$',website:'http://www.bobaguys.com',phone:'(415) 967-2622')
file32=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/Boba-Guys.jpeg')
b32.photo.attach(io: file32, filename: 'Boba-Guys.jpeg')

b33=Business.create(name:'Tea Spoon',address:'2125 Polk St San Francisco, CA 94109',openhour:'11AM',closehour:'10PM',price:'$$',website:'http://www.teaspoonlife.com',phone:'(415) 872-9245')
file33=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/teaspoon.jpeg')
b33.photo.attach(io: file33, filename: 'Teaspoon.jpeg')

b34=Business.create(name:'Purple Kow',address:'3620 Balboa St San Francisco, CA 94121',openhour:'11AM',closehour:'10PM',price:'$$',website:'http://purplekow.com',phone:'(415) 387-9009')
file34=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/purple+Kow.jpeg')
b34.photo.attach(io: file34, filename: 'purple Kow.jpeg')

b35=Business.create(name:'Tpumps',address:'1916 Irving St San Francisco, CA 94122',openhour:'11AM',closehour:'10:30PM',price:'$',website:'https://tpumps.com',phone:'(510) 398-8499')
file35=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/tpumps.jpeg')
b35.photo.attach(io: file35, filename: 'tpumps.jpeg')

b36=Business.create(name:'Plentea',address:'341 Kearny St San Francisco, CA 94108',openhour:'11AM',closehour:'11PM',price:'$',website:'http://plentea.net',phone:'(415) 757-0223')
file36=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/plentea.jpeg')
b36.photo.attach(io: file36, filename: 'plentea.jpeg')



#Chinese
b3=Business.create(name:"San Tung",address:'1031 Irving St San Francisco, CA 94122',openhour:'11:00AM',closehour:'8:30PM',price:'$$',phone:'(415) 242-0828',website:'https://www.santungsf.com')
file3=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/san+tung.jpeg')
b3.photo.attach(io: file3, filename: 'san tung.jpeg')

b11=Business.create(name:'Chong Qing Xiao Mian',address:'915 Kearny St San Francisco, CA 94133',openhour:'11:30am',closehour:'9:00PM',phone:'(415)983-0888',price:'$$',website:'https://www.chongqingxiaomian-sf.com/')
file11=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/chong+qing+xiao+mian.jpeg')
b11.photo.attach(io: file11, filename: 'chong qing xiao mian.jpeg')

b21=Business.create(name:'Dragon Beaux',address:'5700 Geary Blvd San Francisco, CA 94121',openhour:'11AM',closehour:'9PM',price:'$$',phone:'(415) 333-8899',website:'http://www.dragonbeaux.com')
file21=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/dragon+Beaux.jpeg')
b21.photo.attach(io: file21, filename: 'dragon Beaux.jpeg')

b22=Business.create(name:'Dumpling Home',address:'298 Gough St San Francisco, CA 94102',openhour:'11:30AM',closehour:'8:15PM',price:'$$',phone:'(415) 503-1666',website:'http://dumplinghome.com')
file22=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/dumpling+home.jpeg')
b22.photo.attach(io: file22, filename: 'dumpling home.jpeg')

b23=Business.create(name:'Smile House Cafe',address:'1030 Taraval St San Francisco, CA 94116',openhour:'11:00AM',closehour:'8:30PM',price:'$$',phone:'(415) 682-4006',website:'https://www.smilehousecafe-sf.com/')
file23=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/Smile-House-Cafe.jpeg')
b23.photo.attach(io: file23, filename: 'Smile-House-Cafe.jpeg')

b24=Business.create(name:'Grand Hot Pot Lounge',address:'3565 Geary Blvd San Francisco, CA 94118',openhour:'12PM',closehour:'10PM',price:'$$',phone:'(415) 387-8989',website:'http://www.hotpotsf.com/')
file24=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/grand+hot+pot+.jpeg')
b24.photo.attach(io: file24, filename: 'grand hot pot.jpeg')

b25=Business.create(name:'Z & Y Restaurant',address:'655 Jackson St San Francisco, CA 94133',openhour:'11:30PM',closehour:'9PM',price:'$$',phone:'(415) 981-8988',website:'http://www.zandyrestaurant.com')
file25=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/z+%26+y+restaurant.jpeg')
b25.photo.attach(io: file25, filename: 'z & y restaurant.jpeg')

b26=Business.create(name:'Yank Sing',address:'101 Spear St San Francisco, CA 94105',openhour:'11PM',closehour:'3PM',price:'$$$',phone:'(415) 781-1111',website:'http://www.zandyrestaurant.com')
file26=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/yang+sing.jpeg')
b26.photo.attach(io: file26, filename: 'yang sing.jpeg')

b27=Business.create(name:'Good Luck Dim Sum',address:'736 Clement St San Francisco, CA 94118',openhour:'8AM',closehour:'4PM',price:'$',phone:'(415) 386-3388')
file27=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/goodluck.jpeg')
b27.photo.attach(io: file27, filename: 'goodluck.jpeg')

b28=Business.create(name:'YH-Beijing',address:'500 Haight St San Francisco, CA 94117',openhour:'11AM',closehour:'9:30PM',price:'$$',phone:'(415) 355-9125',website:'http://YH-Beijing.com')
file28=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/YH-Beijing.jpeg')
b28.photo.attach(io: file28, filename: 'YH-Beijing.jpeg')

# ramen
b4=Business.create(name:'Mensho Tokyo SF',address:'672 Geary St, San Francisco, CA 94102',openhour:'5PM',closehour:'10PM',price:'$$',phone:'(415) 800-8345',website:'https://menshogroup.com/')
file4=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/mensho-tokyo-20dec2018.jpeg')
b4.photo.attach(io: file4, filename: 'ramen.jpg')

b6=Business.create(name:'Marufuku Ramen',address:'1581 Webster St Ste 235 San Francisco, CA 94115',openhour:'11PM',closehour:'10PM',phone:'(415) 872-9786',price:'$$')
file6=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/marufuku.jpeg')
b6.photo.attach(io: file6, filename: 'marufuku ramen.jpeg')

b7=Business.create(name:'Nojo Ramen Tavern',address:'231 Franklin St San Francisco, CA 94102',openhour:'5PM',closehour:'9PM',price:'$$',phone:'(415) 896-4587',website:'https://nojosframen.com')
file7=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/NojoRamen.jpeg')
b7.photo.attach(io: file7, filename: 'NojoRamen.jpeg')

b8=Business.create(name:'Izakaya sozai',address:'1500 Irving St San Francisco, CA 94122',openhour:'5PM',closehour:'9PM',price:'$$',phone:'(415) 371-9721',website:'http://www.izakayasozai.com/')
file8=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/izakaya+sozai.jpeg')
b8.photo.attach(io: file8, filename: 'izakaya sozai.jpeg')

b9=Business.create(name:'Hinodeya Ramen Bar',address:'1737 Buchanan St San Francisco, CA 94115',openhour:'10am',closehour:'10PM',price:'$$',phone:'(415) 216-5011',website:'http://hinodeyaramen.com')
file9=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/hinodeya_yuge_1450x1088.jpeg')
b9.photo.attach(io: file9, filename: 'hinodeya_yuge_1450x1088.jpeg')

b10=Business.create(name:'Ushi Taro Ramen',address:'1382 9th Ave San Francisco, CA 94122',openhour:'11:30am',closehour:'9:00PM',price:'$$',phone:'(415) 702-6014',website:'https://ushi-taro-ramen.square.site/')
file10=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/ushitaro.jpeg')
b10.photo.attach(io: file10, filename: 'ushitaro.jpeg')

b12=Business.create(name:'Ramen Sho Ryu',address:'2123 Polk St San Francisco, CA 94109',openhour:'11:30am',closehour:'9:00PM',price:'$$')
file12=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/shoryu+ramen.jpeg')
b12.photo.attach(io: file12, filename: 'shoryu ramen.jpeg')

b13=Business.create(name:'Kaiju Eats Ramen and Izakaya',address:'3409 Geary Blvd San Francisco, CA 94118',openhour:'11:30am',closehour:'9:30PM',price:'$$',phone:'(415) 742-4309',website:'https://kaijueatssf.com')
file13=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/kaiju+eats.jpeg')
b13.photo.attach(io: file13, filename: 'kaiju eats.jpeg')

b14=Business.create(name:'Rintaro',address:'82 14th St San Francisco, CA 94103',openhour:'5pm',closehour:'10PM',price:'$$$',phone:'(415) 589-7022',website:'https://www.izakayarintaro.com')
file14=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/Rintaro.jpeg')
b14.photo.attach(io: file14, filename: 'Rintaro.jpeg')

b15=Business.create(name:'Hinodeya Downtown',address:'680 Clay St San Francisco, CA 94111',openhour:'10AM',closehour:'10PM',price:'$$',phone:'(415) 200-6466',website:'http://hinodeyaramen.com')
file15=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/hinodeya+downtown.jpeg')
b15.photo.attach(io: file15, filename: 'hinodeya downtown.jpeg')

#japanese
b16=Business.create(name:'Sushi Goemon',address:'1524 Irving St San Francisco, CA 94122',openhour:'4:30PM',closehour:'9PM',price:'$$',phone:'(415) 742-5137',website:'http://sushigoemonsf.com')
file16=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/sushi+goemon.jpeg')
b16.photo.attach(io: file16, filename: 'sushi goemon.jpeg')

b17=Business.create(name:'Nara Restaurant & Sake Bar',address:'518 Haight St San Francisco, CA 94117',openhour:'5PM',closehour:'11PM',price:'$$',phone:'(415) 638-6124')
file17=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/nara+sake.jpeg')
b17.photo.attach(io: file17, filename: 'nara sake.jpeg')

b18=Business.create(name:'Udon Mugizo',address:'1581 Webster St Ste 217 San Francisco, CA 94115',openhour:'11AM',closehour:'9PM',price:'$$',phone:'(415) 931-3118',website:'http://mugizo-us.com')
file18=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/udon+mugizo.jpeg')
b18.photo.attach(io: file18, filename: 'udon mugizo.jpeg')

b19=Business.create(name:'Kibatsu',address:'400 Haight St San Francisco, CA 94117',openhour:'5:30AM',closehour:'9:30PM',price:'$$$',phone:'(415) 872-9636',website:'https://www.kibatsusushi.com')
file19=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/kibatzu.webp')
b19.photo.attach(io: file19, filename: 'kibatzu.webp')

b20=Business.create(name:'Ozumo',address:'161 Steuart St San Francisco, CA 94105',openhour:'12PM',closehour:'9PM',price:'$$$',phone:'(415) 882-1333',website:'http://www.ozumo.com')
file20=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/ozumo.jpeg')
b20.photo.attach(io: file20, filename: 'ozumo.jpeg')



#Reviews Seed
#user1
Review.create(user_id:user1.id,business_id:b2.id,rating:5,body:"Hands down my absolute favorite boba place. The quality of their ingredients is amazing and they offer a variety of seasonal and matcha drinks.
    If you know me, you know that I'm a self-proclaimed matcha aficionado. I ordered the Taro Matcha Latte for myself and I think it's safe to say that it's my favorite drink ever?! I can confirm that their Kyoto Uji Matcha is in fact authentic and so rich & creamy. They also used real taro which had a great texture and the perfect sweetness to compliment the matcha which I got half-sweetened. Absolutely in love with this drink
    I also tried the Tie Guan Yin Milk Tea which we ordered with boba and QQ noodles. It was my first time trying QQ noodles and I liked the chewy texture a lot. Also, when we were here we were able to get this topping for just 1 cent! What a steal.
    I'm so sad that there's not a location where I live but I'm manifesting that a shop will open up in LA very soon.
    Disclaimer: This review is for 2 months ago. I'm finally recapping my food adventures from my SF trip!")
#user2
Review.create(user_id:user2.id,business_id:b2.id,rating:5,body:'Best boba in all of Norcal!!')
#user3
Review.create(user_id:user3.id,business_id:b2.id,rating:4,body:'So happy they opened up a store in Berkeley! I love their classic milk tea and this location is much closer (for me) than the Cupertino one. Although this place is almost always packed, you can order through Snackpass (either through in-store or mobile app and itll be ready for pick up in less than 10 min!')
#user4
Review.create(user_id:user4.id,business_id:b1.id,rating:5,body:"It appears to me  that Jollibee has the best 'Chicken Deluxe Sandwiches hands' down.  Their chicken is so plump and juicy, well seasoned and never over cooked!  Also a plus, their Pineapple and Mango pies are to die for!  And to top off my favorite meal, their spaghetti and Pineapple Quencher drink!  Delicious...")
    
Review.create(user_id:user4.id,business_id:b25.id,rating:1,body:"Totally disappointed! 太失望了！
    Ordered this PeKing Roast Duck for birthday today. I was looking forward to its taste. However it is not made from fresh raw duck! The meat is pinkish color and has a very strong smoky smell. It looks and taste nothing like Peking roast duck. This is my first Yelp review and it is the most disappointed order from Z&Y ever!!!
    生日这天特想吃烤鸭，就在Uber Eats上点了御食园的，本来还很期待，因为之前常来感觉菜都不错。没想到它家烤鸭是熏鸭？？一股熏肉味，根本不是烤鸭的味道！而且肉是粉红色，特别像真空包装拿出来的那种质感！等了将近一小时才做好，真的难吃不说，还特别失望，尤其是发生在生日这天！疫情期间生意难做可以理解，但不是北京烤鸭你提前说下不行么，我点别的菜就好了，真的太太太失望了！")

#user5
Review.create(user_id:user5.id,business_id:b1.id,rating:4,body:"We couldn't get into Fuji Sushi Buffet so we came over to Seafood City and found Jollibee Chicken. The line was out the door but we moved up quickly. Delicious chicken cooked to perfection.")
#user6
Review.create(user_id:user6.id,business_id:b1.id,rating:4,body:'Ordered a two piece chicken with mash potatoes no drink, they gave me two drumsticks, it was one drumstick and one thigh every single time, ordered from drive through more than 30 times.  Never had this happened.')
#user7
Review.create(user_id:user7.id,business_id:b3.id,rating:5,body:"Best damn chicken wings and black bean noodles I've had! Their string beans are a must get too. 5 stars!")
#user8
Review.create(user_id:user8.id,business_id:b3.id,rating:4,body:"We ordered their very well known dry fried chicken wings, shrimp & leek dumplings, sautéed green beans, and chicken chow mein!It was our first time at San Tung, where we've heard all about the raving reviews on their Chinese chicken wings, so we had to try it out!")
#user9
Review.create(user_id:user9.id,business_id:b3.id,rating:2,body:"Ok, DO NOT order twice cooked pork. The pork was tender, but it didn't have any the flavor you would want in the dish under the name. It is different than Sichuan style. For the northern style of Chinese cuisines, there are so many in the city, this one is not bad by any means, but it wasn't too impressive either. May come back if I crave the noddles.")
#user10
Review.create(user_id:user10.id,business_id:b3.id,rating:4,body:"The dry chicken wings...a MUST order. I had to restrain myself to 4 pieces because I had to share.....um next time I'm ordering a whole order for myself and am not sharing!")
#user11
Review.create(user_id:user11.id,business_id:b4.id,rating:5,body:"Unsurprisingly, the ramen itself is amazing. Creamy, flavorful, and deep. Especially good if you're looking for a richer ramen. Their blaze ramen had a surprising punch of garlic which I loved. I tried their duck chasu and it was pretty good but their pork chasu is definitely better and fall apart tender! The vegan tantanmen had a nice nutty and toasted flavor.")
#user12
Review.create(user_id:user12.id,business_id:b4.id,rating:5,body:'Best ramen in SF, but be prepared for a 1-2 hour wait outside! ')
#user13
Review.create(user_id:user13.id,business_id:b4.id,rating:3,body:"Ramen was okay, I expected it to be more hearty/soothing, but the garlic taste/tare was too strong, it was more pungent than I'd like. Noodle was good, but it wasn't exceptional... I will not be back.")
#user14
Review.create(user_id:user14.id,business_id:b4.id,rating:5,body:'As a pescatarian, I was never really impressed or satisfied by the ramen I had previously tried, which often lacked flavor and fullness. After just one meal, Mensho Tokyo converted me into a ramen lover! The VGKO ramen has bold and rich flavor, quality ingredients, and sizable portions - giving you plenty of bang for your buck. ')
#user15
Review.create(user_id:user15.id,business_id:b4.id,rating:4,body:'Mensho Tokyo was worth the wait. My team waited in the line on the sidewalk for about an hour. The door was propped open and the glass wall illuminated diners crammed nearly shoulder to shoulder slurping delicious ramen.')
#user16
Review.create(user_id:user16.id,business_id:b5.id,rating:5,body:"As a fruit tea boba lover, I have to give it to urban ritual with their unique flavors! The tea isn't overly sweet either, which I always appreciate from a boba place. The boba itself is soft and (once again) not too sweet 

Only sad thing is that they have seasonal drinks which come and go, and I'm quite sad that they got rid of the lychee IPA drink.")
#user17
Review.create(user_id:user17.id,business_id:b5.id,rating:5,body:"Came to this place after someone recommend it. The drinks did not disappoint. The Perfect Pear (at 50%) was the perfect balance of pear and tea. At 50% there was still plenty of flavor. The guava tea was probably my favorite. I didn't try it with the mascarpone cheese but I'm sure it would have been a great pairing. If you love guava, this drink takes the cake. My friend ordered matcha toffee and claimed it's the best she's had. The honey boba is perfectly cooked! Overall, 10/10. I will definitely be coming back.

Service is quick and friendly and ordering at the kiosk is easy.")
#user18
Review.create(user_id:user18.id,business_id:b5.id,rating:4,body:"Urban Ritual is a solid boba tea spot with a regular menu and a seasonal menu that changes monthly. I've been here quite a few times, and most of their regular flavors are very consistent with their quality and taste.")
#user19
Review.create(user_id:user19.id,business_id:b5.id,rating:3,body:"I've been hoping to try this place for the past couple of months but was disappointed by the drinks. I got the White Grape Yuzu and Lotus Bomb, both at Regular Sweet, and both drinks tasted bland and watery. I usually prefer drinks with low sweetness, but these drinks were disappointing and lacking flavor. However, they do have creative and unconventional flavors, which was fun to try, but not for me.")
#user20
Review.create(user_id:user20.id,business_id:b5.id,rating:5,body:"The boba here is excellent! The tea is good but nothing special but honestly the boba steals the show. It's chewy and slightly sweetened.")

# Category Seeds

friedfoodCategory = Category.create(category:"Fried Food")
chickenshopCategory= Category.create(category:"Chicken Shop")
coffeeCategory = Category.create(category:"Coffee & Tea")
bubbleteaCategory= Category.create(category:"Bubble Tea")
ramenCategory=Category.create(category:"Ramen")
noodlesCategory=Category.create(category:"Noodles")
chineseCategory=Category.create(category:"Chinese")
japaneseCategory=Category.create(category:"Japanese")
izakayaCategory = Category.create(category:"Izakaya")
szechuanCategory=Category.create(category:"Szechuan")
sushiBarsCategory=Category.create(category:"Sushi Bars")
japaneseCurryCategory=Category.create(category:"Japanese Curry")
beerBarCategory=Category.create(category:"Beer Bar")
steackHouseCategory=Category.create(category:"Steakhouses")
dimsumCategory=Category.create(category:"Dim Sum")
hotpotCategory=Category.create(category:"Hot Pot")
asianfusionCategory=Category.create(category:"Asian Fusion")
hongkongstylecafeCategory=Category.create(category:"Hong Kong Style Cafe")
seafoodCategory=Category.create(category:"Sea Food")
cantoneseCategory=Category.create(category:"Cantonese")
juicebarSmoothieCategory=Category.create(category:"Juice Bars & Smoothies")
tearoomsCategory=Category.create(category:"Tea Rooms")
dessertsCategory=Category.create(category:"Desserts")



#Tag Seeds

#jolibe
Tag.create({:category_id => friedfoodCategory.id,:business_id => b1.id})
Tag.create({:category_id =>chickenshopCategory.id,:business_id =>b1.id})

#tpt
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b2.id})
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=> b2.id})

#urban ritual
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b5.id})
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b5.id})

#san tung
Tag.create({:category_id=>chineseCategory.id,:business_id=> b3.id})
Tag.create({:category_id=>noodlesCategory.id,:business_id=> b3.id})
Tag.create({:category_id=>chickenshopCategory.id,:business_id=> b3.id})

#tokyo shoyu
Tag.create({:category_id =>ramenCategory.id,:business_id=> b4.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=>b4.id})
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b4.id})

#marufuku 
Tag.create({:category_id =>ramenCategory.id,:business_id=> b6.id})
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b6.id})

#nojo ramen
Tag.create({:category_id =>izakayaCategory.id,:business_id=> b7.id})
Tag.create({:category_id =>ramenCategory.id,:business_id=> b7.id})

#izakaya sozai
Tag.create({:category_id =>izakayaCategory.id,:business_id=> b8.id})
Tag.create({:category_id =>ramenCategory.id,:business_id=> b8.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=>b8.id})
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b8.id})

#hinodaya ramen
Tag.create({:category_id =>ramenCategory.id,:business_id=> b9.id})

#ushitaro ramen
Tag.create({:category_id =>ramenCategory.id,:business_id=> b10.id})

#Chong qing xaio mian
Tag.create({:category_id =>szechuanCategory.id,:business_id=> b11.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=> b11.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b11.id})

#shoyru ramnem
Tag.create({:category_id =>ramenCategory.id,:business_id=> b12.id})

#Kaiju Eats Ramen and Izakaya
Tag.create({:category_id =>ramenCategory.id,:business_id=> b13.id})
Tag.create({:category_id =>sushiBarsCategory.id,:business_id=> b13.id})
Tag.create({:category_id =>izakayaCategory.id,:business_id=> b13.id})
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b13.id})

#rintora
Tag.create({:category_id =>izakayaCategory.id,:business_id=> b14.id})
Tag.create({:category_id =>ramenCategory.id,:business_id=> b14.id})

#hinodaya downtown
Tag.create({:category_id =>ramenCategory.id,:business_id=> b15.id})
Tag.create({:category_id =>japaneseCurryCategory.id,:business_id=> b15.id})
Tag.create({:category_id =>beerBarCategory.id,:business_id=> b15.id})

#goemon sushi
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b16.id})
Tag.create({:category_id =>sushiBarsCategory.id,:business_id=> b16.id})

# nara sake bar
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b17.id})
Tag.create({:category_id =>sushiBarsCategory.id,:business_id=> b17.id})

#undon mugizo
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b18.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=> b18.id})

#kibatzu
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b19.id})
Tag.create({:category_id =>sushiBarsCategory.id,:business_id=> b19.id})

#ozumo
Tag.create({:category_id =>japaneseCategory.id,:business_id=> b20.id})
Tag.create({:category_id =>sushiBarsCategory.id,:business_id=> b20.id})
Tag.create({:category_id =>steackHouseCategory.id,:business_id=> b20.id})

#Dragon Beaux
Tag.create({:category_id =>chineseCategory.id,:business_id=> b21.id})
Tag.create({:category_id =>hotpotCategory.id,:business_id=> b21.id})
Tag.create({:category_id =>dimsumCategory.id,:business_id=> b21.id})

#dumpling house
Tag.create({:category_id =>chineseCategory.id,:business_id=> b22.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=> b22.id})
Tag.create({:category_id =>dimsumCategory.id,:business_id=> b22.id})
Tag.create({:category_id =>asianfusionCategory.id,:business_id=> b22.id})

#smile house cafe
Tag.create({:category_id =>chineseCategory.id,:business_id=> b23.id})
Tag.create({:category_id =>asianfusionCategory.id,:business_id=> b23.id})
Tag.create({:category_id =>hongkongstylecafeCategory.id,:business_id=> b23.id})

#grand hot pot lounge
Tag.create({:category_id =>hotpotCategory.id,:business_id=> b24.id})
Tag.create({:category_id =>szechuanCategory.id,:business_id=> b24.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b24.id})

#Z&Y restaurant
Tag.create({:category_id =>dimsumCategory.id,:business_id=> b25.id})
Tag.create({:category_id =>seafoodCategory.id,:business_id=> b25.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b25.id})

#yang sing
Tag.create({:category_id =>dimsumCategory.id,:business_id=> b26.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b26.id})
Tag.create({:category_id =>cantoneseCategory.id,:business_id=> b26.id})

#good luck dimsum
Tag.create({:category_id =>dimsumCategory.id,:business_id=> b27.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b27.id})
Tag.create({:category_id =>cantoneseCategory.id,:business_id=> b27.id})

#yh beijing
Tag.create({:category_id =>chineseCategory.id,:business_id=> b28.id})

#little sweet
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b29.id})
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b29.id})
Tag.create({:category_id=>juicebarSmoothieCategory.id,:business_id=>b29.id})

#yifang
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b30.id})
Tag.create({:category_id=>juicebarSmoothieCategory.id,:business_id=>b30.id})
Tag.create({:category_id =>chineseCategory.id,:business_id=> b30.id})

#teahut
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b31.id})
Tag.create({:category_id=>juicebarSmoothieCategory.id,:business_id=>b31.id})
Tag.create({:category_id=>tearoomsCategory.id,:business_id=>b31.id})

#boba guys
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b32.id})
Tag.create({:category_id=>juicebarSmoothieCategory.id,:business_id=>b32.id})
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b32.id})

#TeaSpoon
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b33.id})
Tag.create({:category_id=>dessertsCategory.id,:business_id=>b33.id})
Tag.create({:category_id=>tearoomsCategory.id,:business_id=>b33.id})

#purple kow
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b34.id})
Tag.create({:category_id=>dessertsCategory.id,:business_id=>b34.id})
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b34.id})

#tpumps
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b35.id})
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b35.id})
Tag.create({:category_id=>juicebarSmoothieCategory.id,:business_id=>b35.id})

#plentea
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=>b36.id})
Tag.create({:category_id=>tearoomsCategory.id,:business_id=>b36.id})
