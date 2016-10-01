class CreateSpells < ActiveRecord::Migration[5.0]
  def change
    create_table :spells do |t|
      t.string :name, null: false
      t.integer :level, null: false
      t.string :url, null: false

      t.timestamps
    end
    create_table :books do |t|
      t.string :name, null: false
      t.integer :remaining_pages, default: 100

      t.timestamps
    end
    create_table :inscriptions do |t|
      t.integer :spell_id, null: false
      t.integer :book_id, null: false

      t.timestamps
    end
    add_index :inscriptions, [:spell_id, :book_id], unique: true
  end
end
