import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CourseCard from './CourseCard/CourseCard';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize : 50
  },
}));

function Dashboard (){

 


  const classes = useStyles();
  return (
      <div className={classes.root}>
       <Grid container spacing={3}>
          <Grid item lg={12} sm={12} id="header" >
            <Paper className={classes.paper} id="headertext">Dashboard</Paper>
          </Grid>
          <Grid item lg={3} sm={12}>
            <CourseCard />
          </Grid>
          <Grid item lg={3} sm={12}>
            <CourseCard />
          </Grid> 
          <Grid item lg={3} sm={12}>
            <CourseCard />
          </Grid> 
        </Grid>

      </div>
    );
}



export default Dashboard;