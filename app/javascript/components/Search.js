/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DoctorsList from './DoctorsList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchField = React.createRef();
  }

  handleSearch(event) {
    event.preventDefault();
    const searchText = this.searchField.current.value;
    const { doctors } = this.props;
    let initialDoctors = doctors;
    initialDoctors = initialDoctors.filter((doctor) => {
      const condition = doctor.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
      return condition;
    });
    this.setState({ doctors: initialDoctors });
  }

  render() {
    const { doctors } = this.state || this.props;
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
