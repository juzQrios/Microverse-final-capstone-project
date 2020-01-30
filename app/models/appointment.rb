class Appointment < ApplicationRecord
  # association
  belongs_to :user
  belongs_to :doctor

  # validations
  validates_presence_of :date
  validates_presence_of :time
end
