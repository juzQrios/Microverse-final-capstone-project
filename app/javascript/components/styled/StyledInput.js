import styled from 'styled-components';

export default styled.input`
all: unset;
box-sizing: border-box;
outline: none;
width: 100%;
background-color: #fff;
font-size: 1em;
padding: 12px 24px;
margin-top: 0.5em;
border-radius: 25px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);

&:disabled {
  color: gray;
}
`;
