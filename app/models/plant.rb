class Plant < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_one_attached :image, dependent: :destroy 

  validates :name, presence: true
  validates :price, presence: true
  validates :details, length: { maximum: 25 }
end
