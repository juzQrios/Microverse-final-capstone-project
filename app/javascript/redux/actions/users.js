const GET_USER_REQUEST = 'GET_USER_REQUEST';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

const createUserSuccess = json => (
  {
    type: CREATE_USER_SUCCESS,
    json,
  }
);

const createUser = name => (
  (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    return fetch('/api/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(json => dispatch(createUserSuccess(json)))
      .catch((error) => { throw new Error(error); });
  }
);

const getUserSuccess = json => (
  {
    type: GET_USER_SUCCESS,
    json,
  }
);

const getUser = name => (
  (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    return fetch(`/api/users/n/${name}`)
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then(json => dispatch(getUserSuccess(json)));
          return;
        }
        dispatch(createUser(name));
      })
      .catch((error) => { throw new Error(error); });
  }
);

export default getUser;
