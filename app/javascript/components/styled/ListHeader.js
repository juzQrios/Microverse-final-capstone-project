import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const StyledH1 = styled.h3`
  margin: 0;
`;

const SubTitle = styled.div`
  font-size: 0.7em;
  font-weight: bold;
`;

function ListHeader({ title, subTitle }) {
  return (
    <StyledDiv>
      <StyledH1>
        {title}
      </StyledH1>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </StyledDiv>
  );
}

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default ListHeader;
