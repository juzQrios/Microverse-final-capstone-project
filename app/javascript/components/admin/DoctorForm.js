/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createDoctor, updateDoctor } from '../../redux/actions/doctors';

class DoctorForm extends React.Component {
  constructor(props) {
    super(props);
    this.isNew = props.match.url === '/admin/new';
    this.nameField = React.createRef();
    this.expField = React.createRef();
    this.likesField = React.createRef();
    this.state = {
      formSubmitted: false,
      speciality: 0,
    };
    this.defaultDoctor = {
      id: 0,
      name: '',
      speciality: 'family_physician',
      exp: 0,
      likes: 0,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { speciality } = this.state;
    const name = this.nameField.current.value;
    const exp = this.expField.current.value;
    const likes = this.likesField.current.value;
    if (this.isNew) {
      const { createDoctor } = this.props;
      createDoctor(name, speciality, exp, likes);
      this.setState({
        formSubmitted: true,
      });
    } else {
      const { updateDoctor, match } = this.props;
      const updatedDoctor = {
        id: match.params.id,
        name,
        speciality,
        exp,
        likes,
      };
      updateDoctor(updatedDoctor);
      this.setState({
        formSubmitted: true,
      });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      speciality: event.target.value,
    });
  }

  renderForm(doctor) {
    const specialitiesObject = {
      family_physician: 'Family Physician',
      pediatrician: 'Pediatrician',
      gynecologist: 'Gynecologist',
      dentist: 'Dentist',
      psychiatrist: 'Psychiatrist',
      cardiologist: 'Cardiologist',
      dermatologist: 'Dermatologist',
      neurologist: 'Neurologist',
    };
    const specialities = ['Family Physician', 'Pediatrician', 'Gynecologist', 'Dentist', 'Psychiatrist', 'Cardiologist', 'Dermatologist', 'Neurologist'];
    const specialityValue = specialities.findIndex((speciality) => specialitiesObject[doctor.speciality] === speciality);
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate autoComplete="off">
        {this.isNew ? '' : <input type="number" value={doctor.id} readOnly hidden />}
        <TextField id="name" type="text" inputRef={this.nameField} defaultValue={doctor.name} label="Doctor's Name" variant="outlined" required fullWidth margin="normal" />
        <TextField id="exp" type="number" inputRef={this.expField} defaultValue={doctor.exp} label="Years of exp" variant="outlined" required fullWidth margin="normal" />
        <TextField id="likes" type="number" inputRef={this.likesField} defaultValue={doctor.likes} label="Likes" variant="outlined" required fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-outlined-label">
            Speciality
          </InputLabel>
          <Select
            labelId="select-outlined-label"
            id="select-speciality"
            defaultValue={specialityValue}
            onChange={this.handleChange.bind(this)}
            required
          >
            {
              specialities.map((speciality, index) => (
                <MenuItem value={index} key={speciality}>{speciality}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <Button type="submit" size="large" variant="outlined" color="primary" style={{ marginTop: '1em' }}>
          {`${this.isNew ? 'Add' : 'Update'}`}
        </Button>
      </form>
    );
  }

  render() {
    const { doctors } = this.props;
    const { match } = this.props;
    const { formSubmitted } = this.state;
    const doctor = this.isNew ? this.defaultDoctor : doctors.find((doc) => doc.id === Number(match.params.id));
    return (
      <div className="DoctorForm">
        {formSubmitted ? <Redirect to="/admin" /> : ''}
        <h2>
          {`${this.isNew ? 'Add new' : 'Update'} Doctor`}
        </h2>
        {this.isNew || doctors.length !== 0 ? this.renderForm(doctor) : <div>Loading</div>}
      </div>
    );
  }
}

DoctorForm.propTypes = {
  match: PropTypes.object.isRequired,
  doctors: PropTypes.array.isRequired,
  createDoctor: PropTypes.func.isRequired,
  updateDoctor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

const mapDispatchToProps = { createDoctor, updateDoctor };

export default connect(mapStateToProps, mapDispatchToProps)(DoctorForm);
