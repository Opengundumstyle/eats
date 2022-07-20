json.extract! business, :id, :name, :address, :openhour,:closehour, :price, :website,:phone 

json.photoUrl url_for(business.photo)
