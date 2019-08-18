import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Iframe from 'react-iframe'


class OrderFood extends Component {
  
  
  render() {
    return (
      <div style={{ backgroundColor: '#000000'}}>
      
      <Container  fixed style={{ backgroundColor: '#ffa726', height: '100vh' }}>
      <h1>Welcome to Curry Bowl</h1>
      {this.renderOptions()}

    
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
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="center" spacing={spacing}>
        {[0, 1, 2].map(value => (
          <Grid key={value} item>
            <Paper className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.control}>
        <Grid container>
          <Grid item>
            <FormLabel>spacing</FormLabel>
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={handleChange}
              row
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
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