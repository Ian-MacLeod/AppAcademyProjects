class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :logged_in?
  helper_method :current_user

  def current_user
    return nil unless session.key?(:session_token)
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def log_out!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end
end
