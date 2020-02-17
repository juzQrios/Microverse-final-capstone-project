const initialState = [];

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_APPOINTMENT_SUCCESS':
      return action.json;
    case 'CREATE_APPOINTMENT_SUCCESS':
      return [...state, action.json];
    default: return state;
  }
};

export default appointmentsReducer;
