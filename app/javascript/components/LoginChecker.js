/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginChecker = ({ currentUser, children }) => (
  Object.entries(currentUser).length === 0 ? <Redirect to="/" /> : children
);

LoginChecker.propTypes = {
  currentUser: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(LoginChecker);
