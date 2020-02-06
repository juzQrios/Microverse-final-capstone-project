import styled from 'styled-components';
import RoundButton from './RoundButton';

const LinkButton = styled(RoundButton)`
  padding: 7px 21px;
  margin: 0.5em 0;
  ${'a'} {
    all: unset;
  }
  text-decoration: none;
`;

export default LinkButton;
