class Spell < ApplicationRecord
  has_many :inscriptions
  has_many :books, through: :inscriptions

  validates_presence_of :name, :level, :url
  validates_numericality_of :level, { only_integer: true, greater_than_or_equal_to: 0 }
end
