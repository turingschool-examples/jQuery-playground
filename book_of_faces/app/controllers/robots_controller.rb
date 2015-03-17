class RobotsController < ApplicationController
  respond_to :html, :json

  def index
    @robots = Robot.all
    @departments = @robots.pluck(:department).uniq
    @states = @robots.pluck(:state).uniq
    respond_with @robots
  end

  def create
    @robot = Robot.create(robot_params)
    respond_with @robot
  end

  def show
    @robot = Robot.find(params[:id])
    respond_with @robot
  end

  private

  def robot_params
    {
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      age: Faker::Number.number(2),
      avatar: Faker::Avatar.image(Faker::Company.duns_number, "100x100"),
      department: Faker::Commerce.department(1),
      city: Faker::Address.city,
      state: Faker::Address.state_abbr,
      zip: Faker::Address.zip_code,
      extension: Faker::PhoneNumber.extension,
      date_hired: Faker::Date.between(2.years.ago, Date.today)
    }
  end
end
