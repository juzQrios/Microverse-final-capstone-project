import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import getUser from '../redux/actions/users';

const UserLogin = ({ getUser }) => {
  const nameField = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(nameField.current.value);
    nameField.current.value = '';
  };

  return (
    <div className="UserLogin">
      <h2>Login</h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="name" inputRef={nameField} label="Enter your username" variant="outlined" required fullWidth />
        <Button type="submit" size="large" variant="outlined" color="primary" style={{ marginTop: '1em' }}>Login / Signup</Button>
      </form>
    </div>
  );
};

UserLogin.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getUser };

export default connect(null, mapDispatchToProps)(UserLogin);
