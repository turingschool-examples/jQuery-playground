class CreateRobots < ActiveRecord::Migration
  def change
    create_table :robots do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :avatar
      t.string :department
      t.string :city
      t.string :state
      t.string :zip
      t.string :extension
      t.date :date_hired

      t.timestamps null: false
    end
  end
end
