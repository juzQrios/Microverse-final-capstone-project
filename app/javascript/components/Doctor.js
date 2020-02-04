/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => {
  return (
    <div className="Doctor">
      <h2>{ doctor.name }</h2>
    </div>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
