
json.review do
    json.partial! '/api/reviews/review', review: @review
end

json.business_rating @review.business.business_rating