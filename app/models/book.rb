class Book < ApplicationRecord
  has_many :inscriptions
  has_many :spells, through: :inscriptions

  validates_presence_of :name
  validates_numericality_of :remaining_pages, { only_integer: true, greater_than_or_equal_to: 0 }
end
