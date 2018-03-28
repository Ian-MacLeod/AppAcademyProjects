Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :todos,
              only: %i(show index create update destroy),
              defaults: { format: :json }
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
