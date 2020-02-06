/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/StyledContainer';
import Header from './styled/Header';
import LinkButton from './styled/LinkButton';

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
    <StyledContainer maxWidth="md" className="Doctor">
      <Header
        title={name}
        subTitle={specialities[speciality]}
      />
      <div>{`Years of experience: ${exp}`}</div>
      <div>{`Likes: ${likes}`}</div>
      <LinkButton>
        <a href={`/doctors/${id}/book_appointment`}>Book Appointment</a>
      </LinkButton>
    </StyledContainer>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
