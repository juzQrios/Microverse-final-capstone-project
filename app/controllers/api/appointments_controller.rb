class Api::AppointmentsController < ApplicationController
  include Response
  include ExceptionHandler
  before_action :set_appointment, only: [:show, :update, :destroy]
  
  # todo: remove before pushing
  protect_from_forgery with: :null_session

  # GET /appointments
  def index
    json_response(Appointment.all)
  end

  # POST /appointments
  def create
    @appointment = Appointment.create!(appointment_params)
    json_response(@appointment, :created)
  end

  # GET /appointments/:id
  def show
    json_response(@appointment)
  end

  # PUT /appointments/:id
  def update
    @appointment.update(appointment_params)
    head :no_content
  end

  # DELETE /appointments/:id
  def destroy
    @appointment.destroy
    head :no_content
  end

  private

  def appointment_params
    params.permit(:user_id, :doctor_id, :date, :time)
  end

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end
end