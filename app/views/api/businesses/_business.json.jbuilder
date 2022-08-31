json.extract! business, :id, :name, :address, :openhour,:closehour, :price, :website,:phone,:business_rating,:categoriesItem

json.photoUrl url_for(business.photo)
