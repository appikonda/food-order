import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class OrderFood extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <h1>Welcome to Curry Bowl</h1>
        <Typography component="div" style={{ backgroundColor: '#ffb74d', height: '100vh' }} />
      
      </Container>

 
    </React.Fragment>
     
    );
  }
}

export default OrderFood;