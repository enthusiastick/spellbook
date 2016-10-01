Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :spells, only: :index
    end
  end
end
