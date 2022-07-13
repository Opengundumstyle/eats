class Business < ApplicationRecord
      validates :name, :address, presence:true, uniqueness:true
      validates :openhour,:closehour, presence:true
      
  
     


end
