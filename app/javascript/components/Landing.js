/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserLogin from './UserLogin';

class Landing extends React.PureComponent {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="Landing">
        {
      Object.entries(currentUser).length === 0 ? <UserLogin /> : <Redirect to="/search" />
        }
      </div>
    );
  }
}

Landing.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Landing);
