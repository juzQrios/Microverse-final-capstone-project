require 'rails_helper'

RSpec.describe Appointment, type: :model do
  # Association tests
  it { should belong_to(:doctor) }
  it { should belong_to(:user) }


  # Validation tests
  it { should validate_presence_of(:date) }
  it { should validate_presence_of(:time) }
end
