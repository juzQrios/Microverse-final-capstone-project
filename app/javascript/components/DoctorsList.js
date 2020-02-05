/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DoctorsList = ({ doctors }) => {
  const renderedList = (
    <List className="doctors">
      {
        doctors.map(doctor => (
          <ListItem key={doctor.id}>
            <ListItemText><Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link></ListItemText>
            <Link to={`/doctors/${doctor.id}/book_appointment`}>Book Appointment</Link>
          </ListItem>
        ))
      }
    </List>
  );

  return (
    renderedList
  );
};

DoctorsList.propTypes = {
  doctors: PropTypes.array.isRequired,
};

export default DoctorsList;
