class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_creds(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    else
      render json: {}, status: 404
    end
  end
end
