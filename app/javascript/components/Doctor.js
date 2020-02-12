/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledContainer from './styled/StyledContainer';
import LinkButton from './styled/LinkButton';

const Container = styled(StyledContainer)`
  padding: 0;
`;

const StyledHeader = styled.header`
  ${'h1'} {
    text-align: center;
  }
`;

const DetailsDiv = styled.div`
  font-size: 1.2em;
  margin: 1em;
  ${'span.bold'} {
    font-weight: bold;
    color: #2CBBA9;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

const Doctor = ({ doctor }) => {
  const {
    name, speciality, exp, likes, id,
  } = doctor;
  const specialities = {
    family_physician: 'Family Physician',
    pediatrician: 'Pediatrician',
    gynecologist: 'Gynecologist',
    dentist: 'Dentist',
    psychiatrist: 'Psychiatrist',
    cardiologist: 'Cardiologist',
    dermatologist: 'Dermatologist',
    neurologist: 'Neurologist',
  };
  return (
    <Container maxWidth="md" className="Doctor">
      <StyledHeader>
        <h1>
          {name}
        </h1>
      </StyledHeader>
      <section>
        <DetailsDiv>
          <span className="bold">Doctor ID: </span>
          <span>{id}</span>
        </DetailsDiv>
        <DetailsDiv>
          <span className="bold">Speciality: </span>
          <span>{specialities[speciality]}</span>
        </DetailsDiv>
        <DetailsDiv>
          <span className="bold">Years of Experience: </span>
          <span>{exp}</span>
        </DetailsDiv>
        <DetailsDiv>
          <span className="bold">Likes: </span>
          <span>{likes}</span>
        </DetailsDiv>
      </section>
      <Footer>
        <LinkButton as="a" href={`/doctors/${id}/book_appointment`}>
          Book Appointment
        </LinkButton>
      </Footer>
    </Container>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
