json.reviews do 
    @reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id,:body,:user_id,:rating,:reviewer
       end
    end
end