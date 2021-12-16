class UsersController < ApplicationController

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def index
    user = User.all
    render json: user, status: :ok
  end

  def show 
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :email, :password ) 
  end

end
