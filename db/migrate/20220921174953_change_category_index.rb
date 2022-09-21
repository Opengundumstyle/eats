class ChangeCategoryIndex < ActiveRecord::Migration[5.2]
  def change
     remove_column :categories, :category, :string
  end
end
