@businesses.each do |business|
    json.set! business.id do
         json.partial! 'business', business: business
         json.photoUrl url_for(business.photo)
         if business.reviews.first
           json.review business.reviews.first.body
         else
            json.review ''
         end
    end

   
end