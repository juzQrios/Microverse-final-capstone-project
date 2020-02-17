/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import LinkButton from './styled/LinkButton';

const Header = styled.header`
  ${'h3'} {
    font-size: 1.2em;
    margin: 0;
    margin-top: 0.5em;
  }
`;

const Card = styled.article`
  margin: 0.8em 0;
  padding: 0.5em 1em;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
  border-radius: 5px;
  background: #fff;
`;

const CardDetails = styled.div`
  margin: 0.5em 0;
  ${'span.bold'} {
    font-weight: bold;
    color: #2CBBA9;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Appointment = ({ appointment, doctor }) => (
  <Card className="appointment">
    <Header>
      <h3>
        {doctor.name}
      </h3>
    </Header>
    <CardDetails>
      <span className="bold">Appointment ID: </span>
      <span>
        {appointment.id}
      </span>
    </CardDetails>
    <CardDetails>
      <span className="bold">Date: </span>
      <span>
        {format(parseISO(appointment.date), 'dd/MM/yyyy')}
      </span>
    </CardDetails>
    <CardDetails>
      <span className="bold">Time: </span>
      <span>
        {format(parseISO(appointment.time), 'hh:mm:ss aa')}
      </span>
    </CardDetails>
    <Footer>
      <LinkButton as="a" href={`/doctors/${doctor.id}`}>
        View Doctor`s Profile
      </LinkButton>
    </Footer>
  </Card>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  doctor: PropTypes.object.isRequired,
};

export default Appointment;
