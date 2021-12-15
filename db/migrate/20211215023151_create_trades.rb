class CreateTrades < ActiveRecord::Migration[6.1]
  def change
    create_table :trades do |t|
      t.references :buyer, references: :users, null: false, foreign_key: { to_table: :users }
      t.references :seller, references: :users, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
