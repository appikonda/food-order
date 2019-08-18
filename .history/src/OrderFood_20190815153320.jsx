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
      <Container  fixed style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
      <h1>TEst</h1>
      {this.renderOptions()}
      </Container>
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
        >
        General settings
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
        
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          Users
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel  >
        <ExpansionPanelSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
         
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary
         
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>Personal data</Typography>
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