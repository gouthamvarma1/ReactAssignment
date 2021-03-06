import React, { useState, useEffect } from "react";
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
import CourseCard from '../CourseCard/CourseCard';
import Paper from '@material-ui/core/Paper';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize : 50
  },
  message: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontSize : 20
  },
  
}));


function  LmsDashBoard (){

  const classes = useStyles();
  console.log("Inside LmsDashBoard")

  let [responseData,setResponseData] = useState([])
  let [noData,setNoData] = useState('')

console.log("API call")
useEffect(() => {
axios.get('http://127.0.0.1:8000/api/course/courses/', {})
.then((response) => {
  if (!response.data.length){
    setNoData('Y')
  }
  setResponseData(response.data)
}, (error) => {
  console.log(error);
});
},[]);
  
 
 
    if (noData =='Y') 
      return (
        <div id='dashboard'> 
        <br />
        <br />
        <br />
        <h1> No courses assigned yet </h1>
        </div>

      )

      return (
    <div id='dashboard'> 
      <div className={classes.root}>
       <Grid container spacing={5}>
          <Grid item lg={4} sm={4} id="header" >
          </Grid>
          
          {responseData.map(course => (
    
          <Grid item lg={4} sm={12}>
            <CourseCard id={course.id} name={course.name} credit={course.credit} />
          </Grid> 
          ))}
        </Grid>

      </div>

      </div>
    );

  
}


export default LmsDashBoard;