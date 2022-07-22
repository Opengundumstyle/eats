class Business < ApplicationRecord
      validates :name, :address, presence:true, uniqueness:true
      validates :openhour,:closehour, presence:true
      
      has_many :categories,
      through: :tags,
      source: :category

      has_many :reviews,
      primary_key: :id,
      foreign_key: :business_id,
      class_name: :Review

      has_one_attached :photo
       
      def business_rating
            average_review = reviews.average(:rating)
      #       res = average_review - average_review.floor()  
      #             if res > 0.5   
      #                average_review = average_review.floor() + 0.5
      #             else
      #                   average_review = average_review.floor()
      #             end
      #      average_review

      
      end
     
     
   
end
