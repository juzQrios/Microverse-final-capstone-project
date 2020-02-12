/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundContainer from './styled/BackgroundContainer';
import { getAppointments } from '../redux/actions/appointments';
import Appointment from './Appointment';
import Header from './styled/Header';

class Appointments extends React.PureComponent {
  constructor(props) {
    super(props);
    const { currentUser, getAppointments } = props;
    if (Object.entries(currentUser).length !== 0) {
      getAppointments(currentUser.id);
    }
  }

  render() {
    const { appointments, doctors } = this.props;
    return (
      <BackgroundContainer maxWidth="md">
        <Header
          title="Appointments"
          subTitle=""
        />
        <section className="appointment-list">
          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              doctor={doctors.find(doctor => doctor.id === appointment.doctor_id)}
            />
          ))}
        </section>
      </BackgroundContainer>
    );
  }
}

Appointments.propTypes = {
  currentUser: PropTypes.object.isRequired,
  getAppointments: PropTypes.func.isRequired,
  appointments: PropTypes.array.isRequired,
  doctors: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  appointments: state.appointments,
  doctors: state.doctors,
});

const mapDispatchToProps = { getAppointments };

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
