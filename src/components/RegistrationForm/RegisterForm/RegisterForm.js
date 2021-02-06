import React from 'react';
import './RegisterForm.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },



}));

function RegisterForm() {

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2018-10-10")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        
        <form className={classes.root} noValidate autoComplete="off" id='RegisterForm'>
<div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Taxila Public School - Learning Management Software</Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div>
                <label htmlFor="Full Name">Full Name</label>
                <TextField
                    id="FullName"
                    label="FirstName LastName"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div>
                <label htmlFor="email@domain.com">Email address</label>
                <TextField
                    id="userNameR"
                    label="email@domain.com"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div>
                <label htmlFor="email@domain.com">Password</label>
                <TextField
                    id="passwordR"
                    label="password"
                    type="password"
                    defaultValue=""
                    variant="outlined"
                />

                <label htmlFor="email@domain.com">Re-enter Password</label>
                <TextField
                    id="passwordRen"
                    label="password"
                    type="password"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
         
                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-labelR">Role</InputLabel>
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
                <Button>Register</Button>
                <Button>Contact us</Button>

            </ButtonGroup>

        </form>
    );

}
export default RegisterForm;
