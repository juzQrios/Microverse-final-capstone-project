FactoryBot.define do
  factory :doctor do
    name { Faker::Name.name }
  end
end