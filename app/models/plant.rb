class Plant < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_one_attached :image, dependent: :destroy 
end
