import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Iframe from 'react-iframe'
import Grid from '@material-ui/core/Grid';
import { makeStyles  } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper';



class OrderFood extends Component {
  
  
  render() {
    return (
      <div >
      
      <Container  fixed style={{ backgroundColor: '#ffa726', height: '5vh' }}>
      <h1>Welcome to Curry Bowl</h1>
      

    
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
    <Grid container spacing={3}>
     <Grid item xs={6} sm={3} style={{ backgroundColor: '#aed581', height: '20vh' }} >
          <Paper style={{    textAlign: 'center'  color:'#212121' }}></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={{
      textAlign: 'center',
      color: '#212121'
  }}>No 
  For each item there will be heading 
  And discription 
  And button to order</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={{  textAlign: 'center',  color: '#212121'  }}>
        No 
  For each item there will be heading 
  And discription 
  And button to order</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper style={{
  
  textAlign: 'center',
  color: '#212121'
  }}>No 
  For each item there will be heading 
  And discription 
  And button to order</Paper>
        </Grid>
    
  </Grid>
  </div>
  );

}


renderOptions(){

 
  
  return(
    <div>
      <ExpansionPanel  >
        <ExpansionPanelSummary        
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        ><b>Order Biryani</b>
         
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          
          <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdyKr7HLqYcw9uLIflgbRmy-7WHtb8fDuJuym8K5pYcW45q3g/viewform"
         width="900px"
         height="600px"
            />
         
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
        
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          Order One Curry Plate
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Linkk to add One Curry Plate
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel  >
        <ExpansionPanelSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          Order two Curry Plate
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Linkk to add two curries plaues
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
         
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Full Plate </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
  

}


}

export default OrderFood;