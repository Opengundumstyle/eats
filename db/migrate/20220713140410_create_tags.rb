class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :category_id 
      t.integer :business_id 
      t.timestamps
    end
  
  end
end
