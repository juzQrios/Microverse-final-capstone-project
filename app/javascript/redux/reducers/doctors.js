const initialState = [];

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCTORS_SUCCESS':
      return action.json;
    case 'CREATE_DOCTOR_SUCCESS':
      return [...state, action.json];
    case 'UPDATE_DOCTOR_SUCCESS':
      return [...state.filter(doc => Number(doc.id) !== Number(action.json.id)), action.json];
    case 'DELETE_DOCTOR_SUCCESS':
      return [...state.filter(doc => Number(doc.id) !== Number(action.json.id))];
    default: return state;
  }
};

export default doctorsReducer;
