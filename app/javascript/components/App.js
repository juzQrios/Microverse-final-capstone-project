/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import getDoctors from '../redux/actions/doctors';
import Landing from './Landing';
import Search from './Search';
import DoctorsList from './DoctorsList';
import Appointments from './Appointments';
import Doctor from './Doctor';
import BookAppointment from './BookAppointment';
import LoginChecker from './LoginChecker';

const store = configureStore();
store.dispatch(getDoctors());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" render={() => <Landing />} />
          <LoginChecker>
            <Switch>
              <Route path="/search" render={() => <Search />} />
              <Route path="/appointments" render={() => <Appointments />} />
              <Route
                path="/doctors/:id/book_appointment"
                render={(routerObj) => (
                  <BookAppointment
                    doctor={
                      store.getState().doctors.find((doctor) => (
                        doctor.id === Number(routerObj.match.params.id)
                      ))
                    }
                  />
                )}
              />
              <Route
                path="/doctors/:id"
                render={(routerObj) => (
                  <Doctor
                    doctor={
                      store.getState().doctors.find((doctor) => (
                        doctor.id === Number(routerObj.match.params.id)
                      ))
                    }
                  />
                )}
              />
              <Route path="/doctors" render={() => <DoctorsList doctors={store.getState().doctors} />} />
            </Switch>
          </LoginChecker>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
