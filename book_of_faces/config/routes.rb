Rails.application.routes.draw do

  resources :robots
  root to: 'robots#index'

end
