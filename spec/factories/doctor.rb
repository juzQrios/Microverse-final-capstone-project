FactoryBot.define do
  factory :doctor do
    name { Faker::Name.name }
    speciality { rand(0..7) }
    exp { 0 }
    likes { 0 }
  end
end
