import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';

class OrderFood extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showDialog: false
    }
  }
  
  
  render() {
    if (this.state.showDialog){
      return(
        <div>
        {this.renderSearchDialog()}
        </div>
      )
    }else{
      return (
        <div >
        <Container  fixed style={{ backgroundColor: '#aed581', height: '100vh' }}>
        <h1>Welcome to Curry Bowl</h1>
        {this.renderGridOptions()}
        </Container>
          </div>
      );
    }
    
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
             <Button variant="contained" color="primary" onClick={this.showSearchDiaglog.bind(this)}>
        Order
      </Button>

          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} >
          <Paper style={{  textAlign: 'center',  color: '#212121', height: '40vh'  }}>
             Write your description
             <Button variant="contained" color="primary" onClick={this.showSearchDiaglog.bind(this)}>
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
             <Button variant="contained" color="primary" onClick={this.showSearchDiaglog.bind(this)}>
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



showSearchDiaglog() {
  this.setState({ showDialog: true });
}
hideSearchDialog() {
  this.setState({ showDialog: false });
}

renderSearchDialog(){
  return (
    <Dialog fullScreen
      disableBackdropClick
      disableEscapeKeyDown
      open={this.state.showDialog}
      aria-labelledby="search-employee-form"      fullWidth
      onClose={this.hideSearchDialog.bind(this)}        
    >
      <DialogTitle>Food Order</DialogTitle>
      
      <DialogContent  >
      <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdyKr7HLqYcw9uLIflgbRmy-7WHtb8fDuJuym8K5pYcW45q3g/viewform"
        
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    
      </DialogContent>

     

    </Dialog>
  )
}

}

export default OrderFood;