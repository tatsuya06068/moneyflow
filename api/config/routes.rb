Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :balanceofpayments
  end
        
  get 'api/public' => 'public#public'
  get 'api/private' => 'private#private'
  get 'api/private-scoped' => 'private#private_scoped'
end
