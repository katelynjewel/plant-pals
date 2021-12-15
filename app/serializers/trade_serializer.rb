class TradeSerializer < ActiveModel::Serializer
  attributes :id

  has_one :buyer
  has_one :seller
end
