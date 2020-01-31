/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

// const App = () => (
//   <Container maxWidth="sm" style={{ textAlign: 'center' }}>
//     <h1>Work in Progress</h1>
//   </Container>
// );

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ('Home')} />
          <Route path="/login" render={() => ('Login')} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
