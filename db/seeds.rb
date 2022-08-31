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


User.create(username:'demouser', email:'demouser', password:'demouser')
user1 = User.create(username:'sayuri',email:'sayuri31@sjsu.edu',password:'123456')
user2 = User.create(username:'AlecChoy',email:'mflic07@gmail.edu',password:'123456')
user3 = User.create(username:'CindyVuong',email:'cindasaurous@gmail.edu',password:'123456')


b1=Business.create(name:'Jollibee',address:'6955 Mission St Suite 101, Daly City, CA 94014',openhour:'7AM',closehour:'10PM',price:'$',website:'https://www.jollibeefoods.com/',phone:'(650) 755-4848')
file1 = open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/image.jpeg')
b1.photo.attach(io: file1, filename: 'jollibee.jpg')

b2=Business.create(name:'Taiwan Professional Tea ',address:'2383 Telegraph Ave, Berkeley, CA 94704',openhour:'12PM',closehour:'9PM',price:'$',website:'https://tp-tea.com/',phone:'(510) 228-4421')
file2=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/963c979fa742c9934475b872d4643826.jpeg')
b2.photo.attach(io: file2, filename: 'tpt.jpg')

b3=Business.create(name:"Niki's Oriental Massage",address:'1172 Sutter St, San Francisco, CA 94109',openhour:'9AM',closehour:'10PM',price:'$$',phone:'(415) 771-0522')
file3=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/348s.jpeg')
b3.photo.attach(io: file3, filename: 'niki.jpg')

b4=Business.create(name:'Mensho Tokyo SF',address:'672 Geary St, San Francisco, CA 94102',openhour:'5PM',closehour:'10PM',price:'$$',website:'https://menshogroup.com/')
file4=open('https://active-storage-brain-eats.s3.us-west-1.amazonaws.com/mensho-tokyo-20dec2018.jpeg')
b4.photo.attach(io: file4, filename: 'ramen.jpg')

Review.create(user_id:user1.id,business_id:b2.id,rating:5,body:"Hands down my absolute favorite boba place. The quality of their ingredients is amazing and they offer a variety of seasonal and matcha drinks.
    If you know me, you know that I'm a self-proclaimed matcha aficionado. I ordered the Taro Matcha Latte for myself and I think it's safe to say that it's my favorite drink ever?! I can confirm that their Kyoto Uji Matcha is in fact authentic and so rich & creamy. They also used real taro which had a great texture and the perfect sweetness to compliment the matcha which I got half-sweetened. Absolutely in love with this drink
    I also tried the Tie Guan Yin Milk Tea which we ordered with boba and QQ noodles. It was my first time trying QQ noodles and I liked the chewy texture a lot. Also, when we were here we were able to get this topping for just 1 cent! What a steal.
    I'm so sad that there's not a location where I live but I'm manifesting that a shop will open up in LA very soon.
    Disclaimer: This review is for 2 months ago. I'm finally recapping my food adventures from my SF trip!")


Review.create(user_id:user2.id,business_id:b2.id,rating:5,body:'Best boba in all of Norcal!!')

Review.create(user_id:user3.id,business_id:b2.id,rating:4,body:'So happy they opened up a store in Berkeley! I love their classic milk tea and this location is much closer (for me) than the Cupertino one. Although this place is almost always packed, you can order through Snackpass (either through in-store or mobile app and itll be ready for pick up in less than 10 min!')

friedfoodCategory = Category.create(category:"Fried Food")
chickenshopCategory= Category.create(category:"Chicken Shop")
coffeeCategory = Category.create(category:"Coffee & Tea")
bubbleteaCategory= Category.create(category:"Bubble Tea")
massageCategory=Category.create(category:"Massage")
ramenCategory=Category.create(category:"Ramen")
noodlesCategory=Category.create(category:"Noodles")

Tag.create({:category_id => friedfoodCategory.id,:business_id => b1.id})
Tag.create({:category_id =>chickenshopCategory.id,:business_id =>b1.id})
Tag.create({:category_id=>coffeeCategory.id,:business_id=> b2.id})
Tag.create({:category_id=>bubbleteaCategory.id,:business_id=> b2.id})
Tag.create({:category_id=>massageCategory.id,:business_id=> b3.id})
Tag.create({:category_id =>ramenCategory.id,:business_id=> b4.id})
Tag.create({:category_id =>noodlesCategory.id,:business_id=>b4.id})










