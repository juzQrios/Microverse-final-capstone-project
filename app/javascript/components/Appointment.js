/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

const Appointment = ({ appointment, doctor }) => (
  <div className="appointment">
    <div>{`Appointment ID : ${appointment.id}`}</div>
    <div>{`Doctor: ${doctor.name}`}</div>
    <div>{`Date: ${format(parseISO(appointment.date), 'dd/MM/yyyy')}`}</div>
    <div>{`Time: ${format(parseISO(appointment.time), 'hh:mm:ss aa')}`}</div>
    <hr />
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
};

export default Appointment;
