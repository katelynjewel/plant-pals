class CreateTrades < ActiveRecord::Migration[6.1]
  def change
    create_table :trades do |t|
      t.references :buyers, references: :users, null: false, foreign_key: { to_table: :users }
      t.references :sellers, references: :users, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
