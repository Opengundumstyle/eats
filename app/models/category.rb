class Category < ApplicationRecord

    has_many :tags

    has_many :businesses,
    through: :tags,
    source: :business
end
