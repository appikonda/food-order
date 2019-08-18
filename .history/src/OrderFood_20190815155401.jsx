import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


class OrderFood extends Component {
  
  
  render() {
    return (
      <div>
      <
      <Container  fixed style={{ backgroundColor: '#ffa726', height: '100vh' }}>
      <h1>Welcome to Curry Bowl</h1>
      {this.renderOptions()}
      </Container>

      </div>
    );
  }
//One for biryani orders // 6.99
//One for one curry options// 5.99/
//One for 2 curry options //6.99
//One for full plate options //8.99

renderOptions(){

 
  
  return(
    <div>
      <ExpansionPanel  >
        <ExpansionPanelSummary        
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         Order Biryanis
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Linkk to add biryani
          </Typography>
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