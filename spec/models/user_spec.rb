require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }
  # Association tests
  it { should have_many(:appointments) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
end
