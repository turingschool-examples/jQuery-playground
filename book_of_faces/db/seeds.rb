class Seed

  def initialize
    create_robots
  end

  def create_robots
    100.times do
      robot = Robot.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        age: Faker::Number.number(2),
        avatar: Faker::Avatar.image(Faker::Company.duns_number, "100x100"),
        department: Faker::Commerce.department(1),
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        zip: Faker::Address.zip_code,
        extension: Faker::PhoneNumber.extension,
        date_hired: Faker::Date.between(2.years.ago, Date.today),
      )
      puts "#{robot.name} created."
    end
  end

end

Seed.new