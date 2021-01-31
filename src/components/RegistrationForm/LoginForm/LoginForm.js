import React from 'react';
import './LoginForm.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
         margin: theme.spacing(1),
            width: 200,
        },
    },
    formControl: {
       // margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },



}));

function LoginForm() {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off" id='LoginForm'>

            <div>
            <AppBar>
          <Toolbar>
            <Typography variant="h6">Taxila Public School - Learning Management Software</Typography>
          </Toolbar>
        </AppBar>   
            </div>


            <div>
                <label htmlFor="email@domain.com">Email address</label>
                </div>
                <div>
                <TextField
                    id="userName"
                    label="email@domain.com"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div>
                <label htmlFor="email@domain.com">Password</label>
                </div>
                <div>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div>
                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="role"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='Student'>Student</MenuItem>
                        <MenuItem value='Faculty'>Faculty</MenuItem>
                        <MenuItem value='Admin'>Admin</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </div>
            <ButtonGroup color="primary" aria-label="outlined primary button group" variant="contained">
                <Button>Login</Button>
            </ButtonGroup>
            <div>
            <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("Handle me later during coding");
  }}
>
  Forgot Password 
</Link>
            </div>


        </form>
    );

}
export default LoginForm;
