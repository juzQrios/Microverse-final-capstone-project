/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => {
  const {
    name, speciality, exp, likes,
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
    <div className="Doctor">
      <h2>{ name }</h2>
      <div>{`Speciality: ${specialities[speciality]}`}</div>
      <div>{`Years of exp: ${exp}`}</div>
      <div>{`Likes: ${likes}`}</div>
    </div>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
