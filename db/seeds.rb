# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.destroy_all
User.destroy_all

User.create(username:'demouser', email:'demouser', password:'demouser')

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