/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createDoctor, updateDoctor } from '../../redux/actions/doctors';

class DoctorForm extends React.Component {
  constructor(props) {
    super(props);
    this.isNew = props.match.url === '/admin/new';
    this.nameField = React.createRef();
    this.state = {
      formSubmitted: false,
    };
    this.defaultDoctor = {
      id: 0,
      name: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isNew) {
      const { createDoctor } = this.props;
      createDoctor(this.nameField.current.value);
      this.setState({
        formSubmitted: true,
      });
    } else {
      const { updateDoctor, match } = this.props;
      const updatedDoctor = {
        id: match.params.id,
        name: this.nameField.current.value,
      };
      updateDoctor(updatedDoctor);
      this.setState({
        formSubmitted: true,
      });
    }
  }

  renderForm(doctor) {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate autoComplete="off">
        {this.isNew ? '' : <input type="number" value={doctor.id} readOnly hidden /> }
        <TextField id="name" inputRef={this.nameField} defaultValue={doctor.name} label="Doctor's Name" variant="outlined" required fullWidth />
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
        { formSubmitted ? <Redirect to="/admin" /> : '' }
        <h2>
          {`${this.isNew ? 'Add new' : 'Update'} Doctor`}
        </h2>
        { this.isNew || doctors.length !== 0 ? this.renderForm(doctor) : <div>Loading</div> }
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
