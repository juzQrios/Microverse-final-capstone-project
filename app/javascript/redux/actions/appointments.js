/* eslint-disable camelcase */
const GET_APPOINTMENT_REQUEST = 'GET_APPOINTMENT_REQUEST';
const GET_APPOINTMENT_SUCCESS = 'GET_APPOINTMENT_SUCCESS';
const CREATE_APPOINTMENT_REQUEST = 'CREATE_APPOINTMENT_REQUEST';
const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';

const getAppointmentsSuccess = json => (
  {
    type: GET_APPOINTMENT_SUCCESS,
    json,
  }
);

const getAppointments = id => (
  (dispatch) => {
    dispatch({ type: GET_APPOINTMENT_REQUEST });
    return fetch(`api/users/${id}/appointments`)
      .then(response => response.json())
      .then(json => dispatch(getAppointmentsSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

const createAppointmentSuccess = json => (
  {
    type: CREATE_APPOINTMENT_SUCCESS,
    json,
  }
);

const createAppointment = (doctor_id, user_id, date, time) => (
  (dispatch) => {
    dispatch({ type: CREATE_APPOINTMENT_REQUEST });
    return fetch('/api/appointments', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        doctor_id, user_id, date, time,
      }),
    })
      .then(response => response.json())
      .then(json => dispatch(createAppointmentSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

export { getAppointments, createAppointment };
