/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import addMinutes from 'date-fns/addMinutes';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createAppointment } from '../redux/actions/appointments';
import StyledContainer from './styled/StyledContainer';
import Header from './styled/Header';
import StyledInput from './styled/StyledInput';
import RoundButton from './styled/RoundButton';

const BookAppointment = ({ doctor, currentUser, createAppointment }) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2020-02-20T02:20:02'));
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const dateUTC = addMinutes(selectedDate, -1 * selectedDate.getTimezoneOffset());
    createAppointment(doctor.id, currentUser.id, dateUTC, selectedDate);
    setRedirect(true);
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <StyledContainer>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {redirect ? <Redirect to="/appointments" /> : ''}
        <Header
          title="Book Appointment"
          subTitle={`with ${doctor.name}`}
        />
        <StyledInput id="name" value={currentUser.name} disabled />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Pick a date"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Pick a time"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
        <RoundButton type="submit" fullWidth>Book Appointment</RoundButton>
      </form>
    </StyledContainer>
  );
};
BookAppointment.propTypes = {
  doctor: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  createAppointment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = { createAppointment };

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
