import ReactDOM from 'react-dom';
import React from 'react';
import "./LoginandRegistration.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import schoolGif from './happy-elearning.gif'
import Register from './RegisterForm/Register';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      justifyContent: 'center',
    },
  }));


function LoginAndRegistartion() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12} id="header" >
              <Paper className={classes.paper} >Welcome To Taxila Public School Learning Management System</Paper>
            </Grid>
            <Grid item lg={12} sm={12} id ='body'>
              <Paper className={classes.paper}>{((window.location.href).includes('login')) ? "Login" : "Registration"}
              <div>  
              {((window.location.href).includes('login')) ? <LoginForm /> : <RegisterForm></RegisterForm>}
              </div>
              </Paper>
            </Grid>
        
            <Grid item lg={12} sm={12} id="footer">
              <Paper className={classes.paper} id='footerPaper'> © Copyright 2021 Group1-  Bits Pilani.       
              </Paper>
            </Grid>     
          </Grid>
        </div>
      );
}
export default LoginAndRegistartion;


