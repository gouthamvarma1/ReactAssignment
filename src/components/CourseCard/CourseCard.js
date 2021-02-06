import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AssignmentIcon from '@material-ui/icons/Assignment';
import img1 from './../CourseCard/Course.jpeg'
import PropTypes from 'prop-types'
import { Tooltip } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "0",
    paddingTop: '56.25%', 
  },
  }));

    CourseCard.propTypes = {
    name:PropTypes.string.isRequired,
    credit:PropTypes.number.isRequired
    }
  
    CourseCard.defaultProps = {
      
    name: "Course Name",
    credit: 100

    }
function CourseCard(props) {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
      <CardHeader title={props.name} subheader= {"Total Credits : " + props.credit} />
      <CardMedia className={classes.media} image={img1} title="Course" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">  </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Modules">
        <IconButton aria-label="View Modules" href = 'http://localhost:3000/ViewModules'>
          <ViewModuleIcon /> </IconButton>
        </Tooltip>
        {/* <IconButton aria-label="Cumulative Marks">  
          <GradeIcon /> </IconButton> */}
          <Tooltip title="Assignments">
        <IconButton aria-label="Assignments" href = 'http://localhost:3000/ViewAssignments'>
          <AssignmentIcon /> </IconButton>
          </Tooltip>
      </CardActions>
    </Card>
    );
}

export default CourseCard;