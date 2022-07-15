@businesses.each do |business|
    json.set! business.id do
         json.partial! 'business', business: business
         json.photoUrl url_for(business.photo)
    end

   
end