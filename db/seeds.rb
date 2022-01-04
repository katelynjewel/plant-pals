puts "Deleteing previous data..."
User.destroy_all
Plant.destroy_all
Trade.destroy_all

puts "🌱 Seeding..."

puts "👤 Creating users..."
10.times do
  User.create(
    email: Faker::Internet.free_email,
    username: Faker::Internet.username,
    password: Faker::Internet.password
  )
end

puts "🪴 Creating plants..."
  Plant.create(
    name: "ZZ Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/zz-plant.jpeg'),
  filename: 'zz-plant.jpeg'
  )
  Plant.create(
    name: "Swiss Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/swiss-plant.webp'),
  filename: 'swiss-plant.webp'
  )
  Plant.create(
    name: "Spider Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/spider-plant.jpeg'),
  filename: 'spider-plant.webp'
  )
  Plant.create(
    name: "Snake Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/snake-plant.jpeg'),
  filename: 'snake-plant.jpeg'
  )
  Plant.create(
    name: "Prayer Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/prayer-plant.jpg'),
  filename: 'prayer-plant.jpg'
  )
  Plant.create(
    name: "Peace Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/peace-plant.jpeg'),
  filename: 'peace-plant.jpeg'
  )
  Plant.create(
    name: "Monstera", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/monstera.webp'),
  filename: 'monstera.webp'
  )
  Plant.create(
    name: "Money Tree", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/money-tree.jpeg'),
  filename: 'moneytree.jpeg'
  )
  Plant.create(
    name: "Leggy Geranium", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/leggy-geranium.jpeg'),
  filename: 'leggy-geranium.jpeg'
  )
  Plant.create(
    name: "Jade", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/jade.webp'),
  filename: 'jade.webp'
  )
  Plant.create(
    name: "Golden Pothos", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/golden-pothos.jpeg'),
  filename: 'golden-pothos.jpeg'
  )
  Plant.create(
    name: "Corn Plant", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/Corn-Plant.jpeg'),
  filename: 'corn-plant.jpeg'
  )
  Plant.create(
    name: "Calathea", 
    price: rand(15-55), 
    sold: Faker::Boolean.boolean,
    details: Faker::Lorem.sentence,
    user_id: User.all.sample.id,
  ).image.attach(
  io: File.open('db/seed_images/calathea.jpeg'),
  filename: 'calathea.jpeg'
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
  Trade.create(
    buyer_id: User.second.id,  
    seller_id: User.last.id
  )
  Trade.create(
    buyer_id: User.third.id,  
    seller_id: User.first.id
  )
  Trade.create(
    buyer_id: User.first.id,  
    seller_id: User.last.id
  )
  Trade.create(
    buyer_id: User.second.id,  
    seller_id: User.third.id
  )


puts "✅ Done seeding!"