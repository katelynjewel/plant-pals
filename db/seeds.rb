puts "Deleteing previous data..."
User.destroy_all
Plant.destroy_all
Trade.destroy_all

puts "🌱 Seeding..."

puts "👤 Creating users..."
5.times do
  User.create(
    email: Faker::Internet.free_email,
    username: Faker::Internet.username,
    password: Faker::Internet.password
  )
end

puts "🪴 Creating plants..."
5.times do
  Plant.create(
    name: Faker::Tea.variety, 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  )
end
Plant.first.image.attach(
  io: File.open('db/Snake Plant .jpg'),
  filename: 'snake.jpg'
)

puts "👥 Creating trades..."
  Trade.create(
    buyer_id: User.first.id,  
    seller_id: User.second.id
  )
  Trade.create(
    buyer_id: User.last.id,  
    seller_id: User.third.id
  )

puts "✅ Done seeding!"