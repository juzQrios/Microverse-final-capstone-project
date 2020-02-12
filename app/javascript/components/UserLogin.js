import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import getUser from '../redux/actions/users';
import BackgroundContainer from './styled/BackgroundContainer';
import StyledInput from './styled/StyledInput';
import ValidateError from './styled/ValidateError';
import RoundButton from './styled/RoundButton';
import Header from './styled/Header';

const WelcomeContainer = styled(BackgroundContainer)`
  padding-top: 25vh;
`;

const UserLogin = ({ getUser }) => {
  const nameField = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameField.current.value.trim();
    if (name !== '') {
      getUser(name);
    } else {
      nameField.current.value = '';
      document.querySelector('.name-error').innerHTML = 'Empty strings not allowed';
    }
  };

  return (
    <WelcomeContainer maxWidth="md">
      <Header
        title="Welcome"
        subTitle="Enter/Add your username"
      />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <StyledInput type="text" id="name" placeholder="Username" ref={nameField} required />
        <ValidateError className="name-error" aria-live="polite" />
        <RoundButton type="submit">
          Enter / Add
        </RoundButton>
      </form>
    </WelcomeContainer>
  );
};

UserLogin.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getUser };

export default connect(null, mapDispatchToProps)(UserLogin);
