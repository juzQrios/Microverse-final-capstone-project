class User < ApplicationRecord
  # association
  has_many :appointments, dependent: :destroy

  # validations
  validates :name, presence: true, uniqueness: true
end
