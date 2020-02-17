const initialState = {};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
    case 'CREATE_USER_SUCCESS':
      return action.json;
    default: return state;
  }
};

export default currentUserReducer;
