class PlantSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :price, :sold, :details, :image
  has_one :user

  def image
    "http://localhost:3000"+rails_blob_path(object.image, only_path:true)
  end

end
