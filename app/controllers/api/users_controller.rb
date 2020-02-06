class Api::UsersController < ApplicationController
  include Response
  include ExceptionHandler
  before_action :set_user, only: %i[show update destory show_appointments]
  before_action :set_user_by_name, only: [:show_by_name]

  # GET /users
  def index
    json_response(User.all)
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # GET /users/:id
  def show
    json_response(@user)
  end

  # GET /users/n/:name
  def show_by_name
    if @user.nil?
      json_response({}, :not_found)
    else
      json_response(@user)
    end
  end

  # GET /users/:id/appointments
  def show_appointments
    json_response(@user.appointments)
  end

  # PUT /users/:id
  def update
    @user.update(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def set_user_by_name
    @user = User.find_by_name(params[:name]) || nil
  end
end
