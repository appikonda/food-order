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
    <ExpansionPanel  >
        <ExpansionPanelSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

  );

  

}

}

export default OrderFood;