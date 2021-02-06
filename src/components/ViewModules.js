import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import ModuleTable from './ModuleTable/ModuleTable';
import { Tooltip } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';



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


function ViewModules (){

  const classes = useStyles();
 
  return (
      <div className={classes.root}>
       <Grid container spacing={3} >
          <Grid item lg={12} sm={12} id="header" >
            <Paper className={classes.paper} id="headertext">Module List</Paper>
          </Grid>
          <Grid item lg={3} sm={12} >
        <IconButton aria-label="Create new module" onClick={() => { alert('Open create module component') }}>Create New Module
          <AddCircleIcon /> </IconButton>
          </Grid>
          <Grid item item lg={12} sm={12}>
            <ModuleTable />
          </Grid> 
        </Grid>

      </div>
    );
}



export default ViewModules;