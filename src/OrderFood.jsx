import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Iframe from 'react-iframe';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { CardActions } from '@material-ui/core';
import moment from 'moment';

const endTime = moment().hours(18).minutes(0).seconds(0);
const startTime = moment().hours(11).minutes(0).seconds(0);

const style = {
  card: {
    maxWidth: 500,
   
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
};


class OrderFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }
  
  render() {
    if (this.state.showDialog) {
      return (
        <div>
          {this.renderSearchDialog()}
        </div>
      )
    } else {
      return (
        <div >
          <br/>
          <Container fixed >
          {this.renderCards()}
          </Container>
        </div>
      );
    }
  }


  renderCards() {
    return (
      <div >
        < Grid container  spacing={5}>
          <Grid item xs={10} sm={6}  >
            <Card style= {style.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe"  style={{backgroundColor: '#ef5350'} } >
                    B
                   </Avatar>
                }
                title="Biryani"
                subheader="$7.99"
              />
              <CardMedia style={style.media}
                image={require('../static/images/IMG_7737.JPG')}
                title="Biryani "
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive biryani serves one person for lunch blah blah blah
                </Typography>
              </CardContent>
              <CardActions>
              {this.showButton()}
              </CardActions>
            </Card>
          </ Grid>
          <Grid item xs={10} sm={6}  >
          <Card style= {style.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe"  style={{backgroundColor: '#26c6da'} }>
                    1
                   </Avatar>
                }
                title="Curry with Rice/2 Pulkas"
                subheader="$6.99"
              />
              <CardMedia style={style.media}
                image={require('../static/images/IMG_7734.JPG')}
                title="1 Curry "
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive biryani serves one person for lunch blah blah blah
                </Typography>
              </CardContent>
              <CardActions>
               {this.showButton()}
              </CardActions>
            </Card>
          </ Grid>
        </ Grid>
        < Grid container spacing={5}>
          <Grid item xs={10} sm={6}  >
          <Card style= {style.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe"  style={{backgroundColor: '#ffeb3b'} } >
                    2
                   </Avatar>
                }
                title="2 Curries with Rice/2 Pulkas"
                subheader="$6.99"
              />
              <CardMedia style={style.media}
                image={require('../static/images/IMG_7736.JPG')}
                title="2 Curries "
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive biryani serves one person for lunch blah blah blah
                </Typography>
              </CardContent>
              <CardActions>
              {this.showButton()}
              </CardActions>
            </Card>
          </ Grid>
          <Grid item xs={10} sm={6}  >
          <Card style= {style.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe"  style={{backgroundColor: '#8bc34a'}}>
                    T
                   </Avatar>
                }
                title="Thali"
                subheader="$8.99"
              />
              <CardMedia style={style.media}
                image={require('../static/images/IMG_7735.JPG')}
                title="thali "
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive biryani serves one person for lunch blah blah blah
                </Typography>
              </CardContent>
              <CardActions>
              Coming Soon
              </CardActions>
            </Card>
          </ Grid>
        </ Grid>
      </div>
    );
  }

  showButton(){
   return(<Button 
    variant="contained" 
    color="primary" 
    onClick={this.showSearchDiaglog.bind(this)}
    disabled= {!(moment().isAfter(startTime) && moment().isBefore(endTime))} >
      Order Now
     </Button>);
  }

  showSearchDiaglog() {
    this.setState({ showDialog: true });
  }
  hideSearchDialog() {
    this.setState({ showDialog: false });
  }

  renderSearchDialog() {
    return (
      <Dialog fullScreen
        disableBackdropClick
        disableEscapeKeyDown
        open={this.state.showDialog}
        aria-labelledby="search-employee-form" fullWidth
        onClose={this.hideSearchDialog.bind(this)}
      >
        <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={this.hideSearchDialog.bind(this)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              Order
            </Typography>
          </Toolbar>
        </AppBar>
        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdyKr7HLqYcw9uLIflgbRmy-7WHtb8fDuJuym8K5pYcW45q3g/viewform"
          width="100%"
          height="100%"
          allowFullScreen
          id="myId"
          className="myClassname"
          display="initial"
          position="relative" />
      </Dialog>
    )
  }
}

export default OrderFood;