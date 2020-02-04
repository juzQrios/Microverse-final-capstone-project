/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const DashBoard = ({ doctors }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    console.log(event.target.querySelector('input'));
  };
  return (
    <div className="Dashboard">
      <List className="doctors">
        {
          doctors.map((doctor) => (
            <ListItem key={doctor.id}>
              <ListItemText>
                <Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link>
              </ListItemText>
              <ListItemText>
                <Link to={`/admin/update/${doctor.id}`}>Update</Link>
              </ListItemText>
              <form onSubmit={handleDelete}>
                <input type="number" value={doctor.id} hidden readOnly />
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </form>
            </ListItem>
          ))
        }
        {/* Doctors Speciality selection */}
      </List>
      <Link to="/admin/new">Add a Doctor</Link>
    </div>
  );
};

DashBoard.propTypes = {
  doctors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps)(DashBoard);
