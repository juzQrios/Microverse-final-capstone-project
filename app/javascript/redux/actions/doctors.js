const GET_DOCTORS_REQUEST = 'GET_DOCTORS_REQUEST';
const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';

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

export default getDoctors;
