class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :price
      t.boolean :sold
      t.string :details
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
