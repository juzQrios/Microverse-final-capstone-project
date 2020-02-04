/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class DoctorForm extends React.Component {
  constructor(props) {
    super(props);
    this.isNew = props.match.url === '/admin/new';
    this.nameField = React.createRef();
    this.defaultDoctor = {
      id: 0,
      name: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isNew) {
      // Handle Create new
    } else {
      // Handle Update
    }
  }

  renderForm(doctor) {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        {this.isNew ? '' : <input type="number" value={doctor.id} readOnly hidden /> }
        <TextField id="name" inputRef={this.nameField} value={doctor.name} label="Doctor's Name" variant="outlined" required fullWidth />
        <Button type="submit" size="large" variant="outlined" color="primary" style={{ marginTop: '1em' }}>
          {`${this.isNew ? 'Add' : 'Update'}`}
        </Button>
      </form>
    );
  }

  render() {
    const { doctors } = this.props;
    const { match } = this.props;
    const doctor = this.isNew ? this.defaultDoctor : doctors.find((doc) => doc.id === Number(match.params.id));
    return (
      <div className="DoctorForm">
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
};

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps)(DoctorForm);
