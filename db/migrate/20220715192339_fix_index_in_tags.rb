class FixIndexInTags < ActiveRecord::Migration[5.2]
  def change
     add_index :tags, :category_id 
     add_index :tags, :business_id
  end
end
