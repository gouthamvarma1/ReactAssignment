import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import ModuleTable from '../ModuleTable/ModuleTable';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
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
        <IconButton aria-label="Create new module" href = 'http://localhost:3000/CreateModule'
        //onClick={() => { window.location.href = 'http://localhost:3000/CreateModule'; }}
        
        >Create New Module
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