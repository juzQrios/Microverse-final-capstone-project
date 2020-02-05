Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    # DOCTORS API
    get 'doctors', to: 'doctors#index'
    post 'doctors', to: 'doctors#create'
    get 'doctors/:id', to: 'doctors#show'
    put 'doctors/:id', to: 'doctors#update'
    delete 'doctors/:id', to: 'doctors#destroy'

    # USERS API
    get 'users', to: 'users#index'
    post 'users', to: 'users#create'
    get 'users/:id/appointments', to: 'users#show_appointments'
    get 'users/:id', to: 'users#show'
    get 'users/n/:name', to: 'users#show_by_name'
    put 'users/:id', to: 'users#update'
    delete 'users/:id', to: 'users#destroy'

    # APPOINTMENTS API
    get 'appointments', to: 'appointments#index'
    post 'appointments', to: 'appointments#create'
    get 'appointments/:id', to: 'appointments#show'
    put 'appointments/:id', to: 'appointments#update'
    delete 'appointments/:id', to: 'appointments#destroy'
  end

  # Static Controller
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
