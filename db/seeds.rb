# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username:'demouser', email:'demouser', password:'demouser')

Business.create(name:'Jollibee',address:'6955 Mission St Suite 101, Daly City, CA 94014',openhour:'7AM',closehour:'10PM',price:'$',website:'https://www.jollibeefoods.com/',phone:'(650) 755-4848')
Business.create(name:'Taiwan Professional Tea ',address:'2383 Telegraph Ave, Berkeley, CA 94704',openhour:'12PM',closehour:'9PM',price:'$',website:'https://tp-tea.com/',phone:'(510) 228-4421')
Business.create(name:"Nikki's Oriental Massage",address:'1172 Sutter St, San Francisco, CA 94109',openhour:'9AM',closehour:'10PM',price:'$$',phone:'(415) 771-0522')
Business.create(name:'Mensho Tokyo SF',address:'672 Geary St, San Francisco, CA 94102',openhour:'5PM',closehour:'10PM',price:'$$',website:'https://menshogroup.com/')