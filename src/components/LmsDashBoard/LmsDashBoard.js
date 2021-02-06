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

axios.get('https://5efbcbcc-a59e-43a7-acce-667ce3d7e825.mock.pstmn.io/dept/123/courses', {
})
.then((response) => {
  console.log(response);
  setResponseData(response.data)

}, (error) => {
  console.log(error);
});
  
return (responseData)
  
 }

function  LmsDashBoard (){

  const classes = useStyles();
  let courseCredit =30;
  const courseDetails=123
  {/*const courseDetails =GetCourseDetails();*/}
 
  return (
    <div id='dahboard'> 
      <div className={classes.root}>
       <Grid container spacing={5}>
          <Grid item lg={4} sm={4} id="header" >
          </Grid>
          <Grid item lg={4} sm={12}>
            {/* <CourseCard  name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="Web" credit="50"/>
          </Grid>
          <Grid item lg={4} sm={12}>
            {/* <CourseCard name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="Mobile" credit="30"/>
          </Grid> 
          <Grid item lg={4} sm={12}>
            {/* <CourseCard name={courseDetails.course_name} credit={courseCredit}/> */}
            <CourseCard  name="CI/CD" credit="20"/>
          </Grid> 
        </Grid>

      </div>

      </div>
    );
}

export default LmsDashBoard;