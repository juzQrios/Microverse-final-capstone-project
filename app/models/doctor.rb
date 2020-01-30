class Doctor < ApplicationRecord
  # association

  # validations
  validates_presence_of :name
end
