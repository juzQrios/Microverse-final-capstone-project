const initialState = [];

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCTORS_SUCCESS':
      return action.json;
    default: return state;
  }
};

export default doctorsReducer;
