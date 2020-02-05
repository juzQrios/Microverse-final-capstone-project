class Api::DoctorsController < ApplicationController
  include Response
  include ExceptionHandler
  before_action :set_doctor, only: [:show, :update, :destroy]

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
    json_response(@doctor)
  end

  # DELETE /doctors/:id
  def destroy
    @doctor.destroy
    json_response(@doctor)
  end

  private

  def doctor_params
    params.permit(:name, :speciality, :exp, :likes, :id)
  end

  def set_doctor
    @doctor = Doctor.find(params[:id])
  end
end