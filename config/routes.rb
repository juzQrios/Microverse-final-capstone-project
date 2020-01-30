Rails.application.routes.draw do
  root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
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
    get 'users/:id', to: 'users#show'
    put 'users/:id', to: 'users#update'
    delete 'users/:id', to: 'users#destroy'
  end
end
