/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import ListHeader from './styled/ListHeader';

const Card = styled.div`
  margin: 0.5em;
  padding: 0.6em;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
  border-radius: 2px;
`;

const CardDetails = styled.div`
  margin: 0.5em 0;
  ${'span'} {
    font-weight: bold;
  }
`;

const Appointment = ({ appointment, doctor }) => (
  <Card className="appointment">
    <ListHeader
      title={doctor.name}
      subTitle={`Appointment ID: ${appointment.id}`}
    />
    <CardDetails>
      <span>Date : </span>
      {format(parseISO(appointment.date), 'dd/MM/yyyy')}
    </CardDetails>
    <CardDetails>
      <span>Time : </span>
      {format(parseISO(appointment.time), 'hh:mm:ss aa')}
    </CardDetails>
  </Card>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
};

export default Appointment;
