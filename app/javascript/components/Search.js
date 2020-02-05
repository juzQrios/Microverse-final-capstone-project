/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DoctorsList from './DoctorsList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchField = React.createRef();
    this.specialities = {
      family_physician: 'Family Physician',
      pediatrician: 'Pediatrician',
      gynecologist: 'Gynecologist',
      dentist: 'Dentist',
      psychiatrist: 'Psychiatrist',
      cardiologist: 'Cardiologist',
      dermatologist: 'Dermatologist',
      neurologist: 'Neurologist',
    };
    this.state = {
      doctors: props.doctors,
      filteredDoctors: props.doctors,
    };
  }

  handleSearch(event) {
    event.preventDefault();
    const searchText = this.searchField.current.value;
    const { filteredDoctors } = this.state;
    let initialDoctors = filteredDoctors;
    initialDoctors = initialDoctors.filter((doctor) => {
      const condition = doctor.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
      return condition;
    });
    if (searchText === '') {
      const { doctors } = this.props;
      this.setState({ doctors });
    } else {
      this.setState({ doctors: initialDoctors });
    }
  }

  handleSelection(event, selectedSpeciality) {
    event.preventDefault();
    const { doctors } = this.props;
    let initialDoctors = doctors;
    initialDoctors = initialDoctors.filter((doctor) => {
      const condition = doctor.speciality === selectedSpeciality;
      return condition;
    });
    this.setState({
      doctors: initialDoctors,
      filteredDoctors: initialDoctors,
    });
  }

  render() {
    const { doctors } = this.state;
    return (
      <Container maxWidth="sm">
        <TextField
          id="search"
          type="search"
          onChange={(e) => { this.handleSearch(e); }}
          inputRef={this.searchField}
          label="Search for doctors"
          variant="outlined"
          fullWidth
        />
        <div className="speciality-selection">
          {
            Object.keys(this.specialities).map((speciality) => (
              <Button key={speciality} id={speciality} onClick={(e) => { this.handleSelection(e, speciality); }} variant="outlined" color="primary">
                {this.specialities[speciality]}
              </Button>
            ))
          }
        </div>
        <DoctorsList doctors={doctors} />
        <Link to="/appointments">Appointments</Link>
        <Link to="/doctors">All Doctors</Link>
      </Container>
    );
  }
}

Search.propTypes = {
  doctors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps)(Search);
