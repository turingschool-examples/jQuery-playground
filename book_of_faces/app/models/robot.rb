class Robot < ActiveRecord::Base

  def name
    "#{first_name} #{last_name}"
  end

  def zip_code
    zip.first(5)
  end

end
