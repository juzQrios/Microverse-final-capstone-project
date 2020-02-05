class Doctor < ApplicationRecord
  # enum
  enum speciality: [ :family_physician, :pediatrician, :gynecologist, :dentist, :psychiatrist, :cardiologist, :dermatologist, :neurologist]

  # association
  has_many :appointments, dependent: :destroy

  # validations
  validates_presence_of :name, :speciality, :exp, :likes
end
