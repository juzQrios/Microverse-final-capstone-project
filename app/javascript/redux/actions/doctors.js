const GET_DOCTORS_REQUEST = 'GET_DOCTORS_REQUEST';
const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';

const CREATE_DOCTOR_REQUEST = 'CREATE_DOCTOR_REQUEST';
const CREATE_DOCTOR_SUCCESS = 'CREATE_DOCTOR_SUCCESS';

const UPDATE_DOCTOR_REQUEST = 'UPDATE_DOCTOR_REQUEST';
const UPDATE_DOCTOR_SUCCESS = 'UPDATE_DOCTOR_SUCCESS';

const DELETE_DOCTOR_REQUEST = 'DELETE_DOCTOR_REQUEST';
const DELETE_DOCTOR_SUCCESS = 'DELETE_DOCTOR_SUCCESS';

// GET Doctors
const getDoctorsSuccess = (json) => (
  {
    type: GET_DOCTORS_SUCCESS,
    json,
  }
);

const getDoctors = () => (
  (dispatch) => {
    dispatch({ type: GET_DOCTORS_REQUEST });
    return fetch('/api/doctors.json')
      .then((response) => response.json())
      .then((json) => dispatch(getDoctorsSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

// CREATE Doctors
const createDoctorSuccess = (json) => (
  {
    type: CREATE_DOCTOR_SUCCESS,
    json,
  }
);

const createDoctor = (name, speciality, exp, likes) => (
  (dispatch) => {
    dispatch({ type: CREATE_DOCTOR_REQUEST });
    return fetch('/api/doctors', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name, speciality, exp, likes,
      }),
    })
      .then((response) => response.json())
      .then((json) => dispatch(createDoctorSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

// UPDATE Doctors
const updateDoctorSuccess = (json) => (
  {
    type: UPDATE_DOCTOR_SUCCESS,
    json,
  }
);

const updateDoctor = (updatedDoctor) => (
  (dispatch) => {
    const {
      id, name, speciality, exp, likes,
    } = updatedDoctor;
    dispatch({ type: UPDATE_DOCTOR_REQUEST });
    return fetch(`/api/doctors/${id}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name, speciality, exp, likes,
      }),
    })
      .then((response) => response.json())
      .then((json) => dispatch(updateDoctorSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);


// DELETE Doctors
const deleteDoctorSuccess = (json) => (
  {
    type: DELETE_DOCTOR_SUCCESS,
    json,
  }
);

const deleteDoctor = (id) => (
  (dispatch) => {
    dispatch({ type: DELETE_DOCTOR_REQUEST });
    return fetch(`/api/doctors/${id}`, {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(deleteDoctorSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

export {
  getDoctors, createDoctor, updateDoctor, deleteDoctor,
};
