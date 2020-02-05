import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './reducers/doctors';
import currentUserReducer from './reducers/currentUser';
import appointmentsReducer from './reducers/appointments';

const initialState = {
  doctors: [],
  currentUser: {},
  appointments: [],
};

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  currentUser: currentUserReducer,
  appointments: appointmentsReducer,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
};

export default configureStore;
