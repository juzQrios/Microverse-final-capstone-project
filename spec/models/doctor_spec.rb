require 'rails_helper'

RSpec.describe Doctor, type: :model do
  # Association tests

  # Validation tests
  it { should validate_presence_of(:name) }
end
