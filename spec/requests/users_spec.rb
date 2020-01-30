require 'rails_helper'

RSpec.describe 'User API', type: :request do
  # init test data
  let!(:users) { create_list(:user, 5) }
  let(:user_id) { user.first.id }

  # Test for GET /api/users
  describe 'GET /api/users' do
    before { get '/api/users' }

    it 'returns all users' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end