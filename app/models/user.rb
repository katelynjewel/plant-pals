class User < ApplicationRecord
  has_secure_password
  has_many :plants

  has_many :purchased_trades, foreign_key: :buyer_id, class_name: "Trade"
  has_many :sellers, through: :purchased_trades
  # instance of when you are the buyer

  has_many :sold_trades, foreign_key: :seller_id, class_name: "Trade"
  has_many :buyers, through: :sold_trades
  #  instance of when you sold items

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 4..24 }, on: :create
end
