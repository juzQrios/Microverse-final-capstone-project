/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkButton from './styled/LinkButton';
import ListHeader from './styled/ListHeader';

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  `;

const ListItem = styled.div`
  margin: 0.5em;
  padding: 0.6em;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
  border-radius: 2px;
`;

const ListDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`;

const ListAction = styled(LinkButton)`
  flex: 1;
  margin: 0 0.2em;
  font-size: 0.9em;
`;

const DoctorsList = ({ doctors }) => {
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
  const renderedList = (
    <List className="doctors">
      {
        doctors.map(doctor => (
          <ListItem key={doctor.id}>
            <ListHeader
              title={doctor.name}
              subTitle={specialities[doctor.speciality]}
            />
            <ListDetails>
              <div>{`${doctor.exp} yrs of exp.`}</div>
              <div>{`${doctor.likes} Likes`}</div>
            </ListDetails>
            <ListDetails>
              <ListAction as="a" href={`/doctors/${doctor.id}`}>
                View Profile
              </ListAction>
              <ListAction as="a" href={`/doctors/${doctor.id}/book_appointment`}>
                Book
              </ListAction>
            </ListDetails>
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
