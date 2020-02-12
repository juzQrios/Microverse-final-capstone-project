/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import { deleteDoctor } from '../../redux/actions/doctors';
import LinkButton from '../styled/LinkButton';
import ListHeader from '../styled/ListHeader';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 0.5em;
  padding: 0.6em;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
  border-radius: 5px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 0.5em;
`;

const DashBoard = ({ doctors, deleteDoctor }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    const doctorId = event.target.querySelector('input').value;
    deleteDoctor(doctorId);
  };
  return (
    <Container maxWidth="md" className="Dashboard">
      <div className="doctors">
        <h2>Admin Dashboard</h2>
        {
          doctors.map(doctor => (
            <Card key={doctor.id}>
              <ListHeader
                title={doctor.name}
                subTitle=""
              />
              <Item>
                <LinkButton as="a" href={`/admin/update/${doctor.id}`}>
                  Update
                </LinkButton>
                <form onSubmit={handleDelete}>
                  <input type="number" value={doctor.id} hidden readOnly />
                  <IconButton aria-label="delete" type="submit">
                    <DeleteIcon />
                  </IconButton>
                </form>
              </Item>
            </Card>
          ))
        }
      </div>
      <Section>
        <LinkButton as="a" href="/admin/new" fullWidth>
          Add a Doctor
        </LinkButton>
      </Section>
    </Container>
  );
};

DashBoard.propTypes = {
  doctors: PropTypes.array.isRequired,
  deleteDoctor: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  doctors: state.doctors,
});

const mapDispatchToProps = { deleteDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
