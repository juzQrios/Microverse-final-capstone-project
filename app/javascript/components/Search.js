/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DoctorsList from './DoctorsList';
import StyledContainer from './styled/StyledContainer';
import StyledInput from './styled/StyledInput';
import Header from './styled/Header';
import LinkButton from './styled/LinkButton';

const SpecialityButton = styled(Button)`
  color: #2CBBA9;
  background-color: #E1FFF7;
  margin: 2%;
  flex: 46%;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);

  &:hover {
    background-color: #E1FFF7;
  }
`;

const SpecialitySelection = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:flex-start;
  align-items:stretch;
`;

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
      <StyledContainer maxWidth="md">
        <StyledInput
          id="search"
          type="search"
          onChange={(e) => { this.handleSearch(e); }}
          ref={this.searchField}
          placeholder="Search for doctors"
        />
        <Header
          title="Search Doctors"
          subTitle="Search by directly typing the doctors name and/or selecting their speciality"
        />
        <SpecialitySelection className="speciality-selection">
          {
            Object.keys(this.specialities).map(speciality => (
              <SpecialityButton
                key={speciality}
                id={speciality}
                onClick={(e) => { this.handleSelection(e, speciality); }}
              >
                {this.specialities[speciality]}
              </SpecialityButton>
            ))
          }
        </SpecialitySelection>
        <DoctorsList doctors={doctors} />
        <LinkButton type="button">
          <a href="/doctors">Doctors List</a>
        </LinkButton>
        <LinkButton type="button">
          <a href="/appointments">Appointments List</a>
        </LinkButton>
      </StyledContainer>
    );
  }
}

Search.propTypes = {
  doctors: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps)(Search);
