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
import axios from "axios"
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
var charLengthErrorMessage = ""
var lowercaseErrorMessage = ""
var uppercaseErrorMessage = ""
var specialErrorMessage = ""
var userNameError = ""
var roleErrorMessage = ""


function makeLoginCall() {

    console.log("entered Post Request")

    axios.post('http://127.0.0.1:8000/api/auth/login', {

        username: ('' + document.getElementById('userName').value),
        password: '' + document.getElementById('password').value,
        role: '' + document.getElementById('role').value,

    },{
    headers: {
        'Content-Type': 'application/json',
    },}
    )   
        .then((response) => {
            console.log(response);
            alert("" + JSON.stringify(response.status));
            if(response.status==200)
                window.location.href = "/lmsDashBoard"
            
        }, (error) => {
            console.log(error)
            document.getElementById("msg1").innerHTML = "Unauthorized, Please check your username and password again";
        });



}

function validateEmail(email) {
    console.log("validationg email")
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function navigateToRegister() {
    window.location.href = '/register'
}
function validatePassword() {

    var password = document.getElementById("password")
    var pattern = {
        charLength: function () {
            if (password.value.length >= 8) {
                return true;
            }
        },
        lowercase: function () {
            var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

            if (regex.test(password.value)) {

                return true;
            }
        },
        uppercase: function () {
            var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern
            if (regex.test(password.value)) {
                return true;
            }
        },
        special: function () {
            var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

            if (regex.test(password.value)) {
                return true;
            }
        }


    };

    if (pattern.charLength() !== true) {
        charLengthErrorMessage = "Password should contain minimum of 8 characters"
    }
    if (pattern.lowercase() !== true) {
        lowercaseErrorMessage = "Password should contain atleast one lower character"
    }
    if (pattern.uppercase() !== true) {
        uppercaseErrorMessage = "Password should contain atleast one upper character"
    }
    if (pattern.special() !== true) {
        specialErrorMessage = "Password should consists atleast a number or a special character"
    }


    document.getElementById("msg1").innerHTML = charLengthErrorMessage;
    document.getElementById("msg2").innerHTML = lowercaseErrorMessage;
    document.getElementById("msg3").innerHTML = uppercaseErrorMessage;
    document.getElementById("msg4").innerHTML = specialErrorMessage;


}

function clearErrorMessages() {
    roleErrorMessage = ""
    charLengthErrorMessage = ""
    lowercaseErrorMessage = ""
    uppercaseErrorMessage = ""
    specialErrorMessage = ""
    userNameError = ""
    document.getElementById("msg1").innerHTML = "";
    document.getElementById("msg2").innerHTML = "";
    document.getElementById("msg3").innerHTML = "";
    document.getElementById("msg4").innerHTML = "";
    document.getElementById("emailmsg").innerHTML = "";
    document.getElementById("roleError").innerHTML = "";

}

function validateRole() {
    var role = document.getElementById("role").innerHTML
    if (role.includes("<span>")) {
        roleErrorMessage = "Please select the appropriate role"
    }
    document.getElementById("roleError").innerHTML = roleErrorMessage;

}
function validateForm() {

    clearErrorMessages()
    var email = document.getElementById('userName').value;
    var password = document.getElementById('password').value;

    console.log("entered Validation")

    if (email === "") {
        userNameError = "Please Enter the email"
    }
    else {
        var status = validateEmail(email);
        if (!status === true)
            userNameError = "Please enter the email properly"

    }
    document.getElementById("emailmsg").innerHTML = userNameError;
    validatePassword(password)
    validateRole()
    console.log('role validation completed')
    console.log(charLengthErrorMessage + lowercaseErrorMessage + uppercaseErrorMessage + specialErrorMessage + userNameError + roleErrorMessage)
    if (areEqual(charLengthErrorMessage, lowercaseErrorMessage, uppercaseErrorMessage, specialErrorMessage, userNameError, roleErrorMessage)) {
        console.log('entered login')
        makeLoginCall()
    }

}
function areEqual() {
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        if (arguments[i] === null || arguments[i] !== arguments[i - 1])
            return false;
    }
    return true;
}
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
                <Button onClick={validateForm} id="loginButton">Login</Button>
            </ButtonGroup>
            <div id="links">
                <Link
                    component="button"
                    variant="body2"
                    onClick={null}>
                    Forgot Password
</Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={null}>

                    <a href="/register">Register</a></Link>
            </div>
            <div>
                <p id="emailmsg"></p>
                <p id="msg1"></p>
                <p id="msg2"></p>
                <p id="msg3"></p>
                <p id="msg4"></p>
                <p id="roleError"></p>
            </div>


        </form>
    );

}
export default LoginForm;

