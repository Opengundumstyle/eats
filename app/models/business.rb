class Business < ApplicationRecord
      validates :name, :address, presence:true, uniqueness:true
      validates :openhour,:closehour, presence:true
      
      has_many :categories,
      through: :tags,
      source: :category


      


end
