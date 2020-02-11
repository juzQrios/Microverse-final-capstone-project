Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    # DOCTORS API
    get 'doctors', to: 'doctors#index'
    post 'doctors', to: 'doctors#create'
    put 'doctors/:id', to: 'doctors#update'
    delete 'doctors/:id', to: 'doctors#destroy'

    # USERS API
    post 'users', to: 'users#create'
    get 'users/:id/appointments', to: 'users#show_appointments'
    get 'users/n/:name', to: 'users#show_by_name'

    # APPOINTMENTS API
    get 'appointments', to: 'appointments#index'
    post 'appointments', to: 'appointments#create'
  end

  # Static Controller
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
