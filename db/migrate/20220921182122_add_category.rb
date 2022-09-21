class AddCategory < ActiveRecord::Migration[5.2]
  def change
     add_column :categories, :category, :string
     add_index :categories, :category
  end
end
