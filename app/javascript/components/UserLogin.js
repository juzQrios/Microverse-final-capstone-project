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
    const name = nameField.current.value.trim();
    if (name !== '') {
      getUser(name);
    } else {
      nameField.current.value = '';
      document.querySelector('.name-error').innerHTML = 'Empty Whitespaced strings not allowed';
    }
  };

  return (
    <div className="UserLogin">
      <h2>Login</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="name" inputRef={nameField} label="Enter your username" variant="outlined" required fullWidth />
        <div className="name-error" aria-live="polite" />
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
