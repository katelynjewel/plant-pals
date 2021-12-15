class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password

  has_many :sold_trades
  has_many :sellers, through: :purchased_trades
end

# has_many :following_user
# has_many :followed, through: :followed_users