import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 2em;
`;

const StyledH1 = styled.h1`
  margin-bottom: 0;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  font-size: 0.9em;
`;

function Header({ title, subTitle }) {
  return (
    <StyledHeader>
      <StyledH1>
        {title}
      </StyledH1>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
