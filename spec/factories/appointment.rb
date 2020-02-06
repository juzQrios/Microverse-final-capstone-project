FactoryBot.define do
  factory :appointment do
    association :user
    association :doctor
    date { Faker::Date.in_date_period }
    time { Time.new }
  end
end
