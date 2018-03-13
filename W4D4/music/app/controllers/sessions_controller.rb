class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      log_in!(@user)
      redirect_to bands_url
    else
      flash[:errors] = ["Invalid username or password"]
      redirect_to new_session_url
    end
  end

  def destroy
    if current_user
      log_out!(current_user)
    else
      flash.now[:errors] = ["You are already logged out"]
    end
    redirect_to root_url
  end
end
