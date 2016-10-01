class Inscription < ApplicationRecord
  belongs_to :spell
  belongs_to :book

  validates_presence_of :spell_id, :book_id
end
