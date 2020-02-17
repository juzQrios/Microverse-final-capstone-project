require 'rails_helper'

RSpec.describe 'Doctors API', type: :request do
  # init test data
  let!(:doctors) { create_list(:doctor, 5) }
  let(:doctor_id) { doctor.first.id }
  # Test for GET /api/doctors
  describe 'GET /api/doctors' do
    before { get '/api/doctors' }

    it 'returns all doctors' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
