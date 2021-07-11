import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from "axios"
import properties from '../properties.js';


const emailIp = properties.emailServerIp;
const lmsIp = properties.lmsIp;

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(10),
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 600,
		},
		cancelButton: { margin: 30 }
	},

}));


function sendEmailNotification(payload) {
	axios.post(emailIp + '/api/students/sendEmailModule', payload, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
	}).then((response) => {
		console.log(response);
	}, (error) => {
		console.log(error);
	});
}

function getstudentsList() {
	debugger
	let students = [];
	var respdata;
	console.log("Getting student's list")
	axios.get(emailIp + '/api/students/viewAllstudents', {
	}, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
	}).then((response) => {
		console.log(JSON.stringify(response))
		// respdata = response.data
		if (response.data != undefined && response.data != null) {
			(response.data).forEach(student => {
				if (student.status == 1) {
					let email = student.email
					// let status = student.status

					students.push(email)
				}

			});
			let email = students.join();
			let status = 1;
			let payload = { email, status }
			this.sendEmailNotification(payload)
		}
	}, (error) => {
		console.log(error);
	});
}

var moduleNameError = "";
var moduleDescriptionError = "";
function callModuleCreateService() {

	console.log("entered Post Request")

	getstudentsList()

	axios.post(lmsIp + '/api/course/modules/', {
		name: '' + document.getElementById('moduleName').value,
		description: '' + document.getElementById('moduleDescription').value,
		topics: '' + document.getElementById('topics').value,
	})
		.then((response) => {
			console.log(response);
			alert("" + JSON.stringify(response.data));
			if (response.status == 200 || response.status == 201)
				window.location.href = "/lmsDashBoard"
		}, (error) => {
			console.log(error)
			document.getElementById("errorMsg").innerHTML = "Duplicate Module Name - please create a new one";
		});

}


function validateForm() {

	moduleNameError = ""
	moduleDescriptionError = ""
	document.getElementById("noNameMsg").innerHTML = "";
	document.getElementById("noDescriptionMsg").innerHTML = "";
	document.getElementById("errorMsg").innerHTML = "";

	var name = document.getElementById('moduleName').value;
	var description = document.getElementById('moduleDescription').value;
	var topics = document.getElementById('topics').value;

	console.log("entered Validation")

	if (name === "") {
		moduleNameError = "Please Enter the module name"
		document.getElementById("noNameMsg").innerHTML = moduleNameError;
	}
	if (description === "") {
		moduleDescriptionError = "Please Enter the module description"
		document.getElementById("noDescriptionMsg").innerHTML = moduleDescriptionError;
	}
	else {

		console.log('Validation completed')
		callModuleCreateService(name, description, topics)
	}
}

function CreateModule() {

	const classes = useStyles();
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [topics, setTopics] = React.useState('');

	return (
		<form className={classes.root} noValidate autoComplete="off" id="CreateModule">
			<div>
				<label htmlFor="Name">Module Name</label>
			</div>
			<div>
				<TextField required id="moduleName" label="Module Name" type="Module Name" defaultValue="" variant="outlined" fullWidth
					onChange={event => { setName(event.target.value) }} /> </div>
			<div>
				<label htmlFor="Description">Module Description</label>
			</div>
			<div>
				<TextField required id="moduleDescription" label="Module description" defaultValue="" multiline variant="outlined" fullWidth
					onChange={event => { setDescription(event.target.value) }} /> </div>
			<div>
				<label htmlFor="Topics Covered">Topics </label>
			</div>
			<div>
				<TextField id="topics" label="Topics covered" defaultValue="" multiline variant="outlined" fullWidth
					onChange={event => { setTopics(event.target.value) }} /> </div>
			<div>
				<br /> </div>

			<ButtonGroup color="primary" aria-label="outlined primary button group" variant="contained">
				<Button onClick={validateForm} id="createButton">Create</Button>
				<Button href='/lmsDashBoard' id="cancelButton">Cancel</Button>
			</ButtonGroup>

			<div>
				<p id="noNameMsg"></p>
				<p id="noDescriptionMsg"></p>
				<p id="errorMsg"></p>
			</div>
		</form>


	)
}

export default CreateModule;