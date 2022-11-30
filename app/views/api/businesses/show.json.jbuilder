json.business do 
   json.partial!'/api/businesses/business', business:@business
end

if @business.reviews.length
json.reviews do
          @business.reviews.each do |review|
               json.set! review.id do 
                    json.extract! review, :id,:body,:user_id,:rating,:reviewer
               end
          end
     end
end

