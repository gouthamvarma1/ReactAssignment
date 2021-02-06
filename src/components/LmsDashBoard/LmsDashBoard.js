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


function GetCourseDetails(e) {

//create state variables
let [responseData,setResponseData] = React.useState('')

console.log("Getting course details from API")

axios.get('https://1e276d32-c6af-4b5b-bc9b-d988abd03ce4.mock.pstmn.io//dept/123/courses', {
})
.then((response) => {
  console.log(response);
  setResponseData(response.data)

}, (error) => {
  console.log(error);
});
  
return (responseData)
  
 }

function LmsDashBoard (){

  const classes = useStyles();
  let courseCredit =30;
  const courseDetails =GetCourseDetails();
 
  if (courseDetails==null) 
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
       <Grid item lg={12} sm={12} id="header" >
         <Paper className={classes.paper} id="headertext">Dashboard</Paper>
         </Grid>

         <Grid item lg={12} sm={12}>
         <Paper className={classes.message} id="message">No Courses Assigned</Paper>
          </Grid> 
          </Grid>

</div>    
  )
else 
 
  return (
      <div className={classes.root}>
       <Grid container spacing={3}>
          <Grid item lg={12} sm={12} id="header" >
            <Paper className={classes.paper} id="headertext">Dashboard</Paper>
          </Grid>
          <Grid item lg={10} sm={10}>
            {/* <CourseCard  name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="WEB-Development" credit="50"/>
          </Grid>
          <Grid item lg={10} sm={10}>
            {/* <CourseCard name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="Mobile-Development" credit="100"/>
          </Grid> 
          <Grid item lg={10} sm={10}>
            {/* <CourseCard name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="CI/CD" credit="100"/>
          </Grid> 
        </Grid>

      </div>
    );
}



export default LmsDashBoard;