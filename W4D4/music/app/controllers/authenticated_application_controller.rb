class AuthenticatedApplicationController < ApplicationController
  before_action :require_sign_in

  def require_sign_in
    unless logged_in?
      flash[:errors] = ["You must be signed in to do that"]
      redirect_to new_session_url
    end
  end
end
