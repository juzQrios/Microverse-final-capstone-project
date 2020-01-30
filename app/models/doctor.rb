class Doctor < ApplicationRecord
  # association
  has_many :appointments, dependent: :destroy

  # validations
  validates_presence_of :name
end
