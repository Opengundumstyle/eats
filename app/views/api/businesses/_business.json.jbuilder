json.extract! business, :id, :name, :address, :openhour,:closehour, :price, :website,:phone,:business_rating

json.photoUrl url_for(business.photo)
