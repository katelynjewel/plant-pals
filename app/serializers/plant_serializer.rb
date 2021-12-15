class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :sold, :details
  has_one :user
end
