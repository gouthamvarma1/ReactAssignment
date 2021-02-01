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



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "300px",
    paddingTop: '56.25%', 
  },
  }));

function CourseCard() {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
    <CardHeader
      title="Course Title"
      subheader="Course subheader "
    />
    <CardMedia
      className={classes.media}
      src={require('./Course.jpeg')}
      title="Course"
    />

    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This course offers ...
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <IconButton aria-label="View Modules">
        <ViewModuleIcon />
      </IconButton>
      <IconButton aria-label="Cumulative Marks">
        <GradeIcon />
      </IconButton>
      <IconButton aria-label="Assignments">
        <AssignmentIcon />
      </IconButton>

    </CardActions>
    </Card>

    );
}

export default CourseCard;