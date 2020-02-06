import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const RoundButton = styled(Button)`
  border-radius: 25px;
  padding: 12px 24px;
  margin-top: 1.5em;
  color: #fff;
  background-color: #2CBBA9;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
  width: 100%;
  &:hover{
    background-color: #2CBBA9;
  }
`;

export default RoundButton;
