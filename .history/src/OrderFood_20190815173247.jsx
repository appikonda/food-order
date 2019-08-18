import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Iframe from 'react-iframe'
import Grid from '@material-ui/core/Grid';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


import Paper from '@material-ui/core/Paper';



class OrderFood extends Component {
  
  
  render() {
    return (
      <div >
      
      <Container  fixed style={{ backgroundColor: '#aed581', height: '100vh' }}>
      <h1>Welcome to Curry Bowl</h1>
      {this.renderGridOptions()}
      

    
      </Container>
      {this.renderGridOptions()}
  


      </div>
    );
  }
//One for biryani orders // 6.99
//One for one curry options// 5.99/
//One for 2 curry options //6.99
//One for full plate options //8.99

renderGridOptions(){

  return (
    <div >
     <Grid container spacing={10}>
        
        <Grid item xs={6} sm={5}  >
          <Paper style={{  textAlign: 'center',  color: '#212121', height: '40vh'  }}>
             Write your description
             <br/>
             <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
        Order
      </Button>

          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} >
          <Paper style={{  textAlign: 'center',  color: '#212121', height: '40vh'  }}>
             Write your description
             <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
        Order
      </Button>

          </Paper>
        </Grid>
        
    
  </Grid>
  <Grid container spacing={10}>
        
        <Grid item xs={6} sm={5}  >
          <Paper style={{  textAlign: 'center',  color: '#212121', height: '40vh'  }}>
             Write your description
             <br/>
             <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
        Order
      </Button>

          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} >
          <Paper style={{  textAlign: 'center',  color: '#212121', height: '40vh'  }}>
             Write your description

          </Paper>
        </Grid>
        
    
  </Grid>
   </div>
  );

}




handleClick(){

  return(

    <Dialog
          
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          test
        </DialogContent>
        
      </Dialog>
  );

}


}

export default OrderFood;