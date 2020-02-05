/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import addMinutes from 'date-fns/addMinutes';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createAppointment } from '../redux/actions/appointments';

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
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      {redirect ? <Redirect to="/appointments" /> : ''}
      <h2>
        {`Book Appointment with ${doctor.name}`}
      </h2>
      <TextField id="name" value={currentUser.name} disabled label="Your username" variant="outlined" required fullWidth />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Pick a date"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
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
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
      <Button type="submit" size="large" variant="outlined" color="primary" style={{ marginTop: '1em' }}>Book Appointment</Button>
    </form>
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
