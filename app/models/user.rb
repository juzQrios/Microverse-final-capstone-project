class User < ApplicationRecord
  # association

  # validations
  validates :name, presence: true, uniqueness: true
end
