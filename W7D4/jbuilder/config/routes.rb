Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :guests, only: %i(show index) do
      resources :gifts, only: :index
    end

    resources :invitations, only: %i(show index)
    resources :parties, only: %i(show index)
    resources :gifts, only: :show
  end
end
