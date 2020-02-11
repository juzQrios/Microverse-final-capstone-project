class Api::AppointmentsController < ApplicationController
  include Response
  include ExceptionHandler
  before_action :set_appointment, only: %i[show update destroy]

  # GET /appointments
  def index
    json_response(Appointment.all)
  end

  # POST /appointments
  def create
    @appointment = Appointment.create!(appointment_params)
    json_response(@appointment, :created)
  end

  private

  def appointment_params
    params.permit(:user_id, :doctor_id, :date, :time)
  end

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end
end
