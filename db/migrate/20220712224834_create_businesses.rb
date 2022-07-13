class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null:false
      t.string :address, null:false
      t.string :openhour, null:false
      t.string :closehour,null:false
      t.string :price 
      t.string :website
      t.string :phone
    end
       add_index :businesses,:name, unique:true
       add_index :businesses,:address, unique:true
       add_index :businesses,:website
       add_index :businesses,:phone
  end
end
