class Business < ApplicationRecord
      validates :name, :address, presence:true, uniqueness:true
      validates :openhour,:closehour, presence:true

      has_many :tags
      
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
      end

     def categoriesItem
            categoriesHash =  {}
            if categories 
                  categories.each do |category|
                        key = category.category
                        categoriesHash[key] = category
                  end
            end

         categoriesHash
     end

     
end
