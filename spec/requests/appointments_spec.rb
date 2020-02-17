require 'rails_helper'

RSpec.describe 'Appointments API', type: :request do
  # init test data
  let!(:appointments) { create_list(:appointment, 5) }
  let(:appointment_id) { appointment.first.id }
  # Test for GET /api/appointments
  describe 'GET /api/appointments' do
    before { get '/api/appointments' }

    it 'returns all appointments' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
