class Api::DoctorsController < ApplicationController
  include Response
  include ExceptionHandler
  before_action :set_doctor, only: [:show, :update, :destroy]
  
  # todo: remove before pushing
  protect_from_forgery with: :null_session

  # GET /doctors
  def index
    json_response(Doctor.all)
  end

  # POST /doctors
  def create
    @doctor = Doctor.create!(doctor_params)
    json_response(@doctor, :created)
  end

  # GET /doctors/:id
  def show
    json_response(@doctor)
  end

  # PUT /doctors/:id
  def update
    @doctor.update(doctor_params)
    head :no_content
  end

  # DELETE /doctors/:id
  def destroy
    @doctor.destroy
    head :no_content
  end

  private

  def doctor_params
    params.permit(:name)
  end

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end
end