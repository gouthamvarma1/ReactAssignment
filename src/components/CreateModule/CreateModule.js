import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from "axios"


const useStyles = makeStyles((theme) => ({
	root: {padding: theme.spacing(10),
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 600,
		},
	cancelButton: {margin: 30}
	},

}));
var moduleNameError = ""
var moduleDescriptionError = ""
function callModuleCreateService() {
  
	console.log("entered Post Request")
	
	axios.post('https://1e276d32-c6af-4b5b-bc9b-d988abd03ce4.mock.pstmn.io//dept/123/course/123/module', {
		name: ''+document.getElementById('moduleName'),
		description: ''+document.getElementById('moduleDescription'),
		topics: ''+document.getElementById('topics'),
		
	
	  })
	  .then((response) => {
		console.log(response);
		alert(""+JSON.stringify(response.data));
	  }, (error) => {
		console.log(error);
	  });
	
	}


function validateForm() {
    
    moduleNameError= ""
	moduleDescriptionError =""
	document.getElementById("noNameMsg").innerHTML = "";
	document.getElementById("noDescriptionMsg").innerHTML = "";
	
    var name = document.getElementById('moduleName').value;
	var description = document.getElementById('moduleDescription').value;
	var topics = document.getElementById('topics').value;

    console.log("entered Validation")

    if ( name === "") {
		moduleNameError = "Please Enter the module name"
		document.getElementById("noNameMsg").innerHTML = moduleNameError;
    }
    if (description === "") {
		moduleDescriptionError = "Please Enter the module description"
		document.getElementById("noDescriptionMsg").innerHTML = moduleDescriptionError;
    }
    else {
    
    console.log('Validation completed')
	   // callModuleCreateService(name,description,topics)
	   alert("The module is created");
	   
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
				<TextField required id="moduleName" label="Module Name" type="Module Name" defaultValue="" variant="outlined"  fullWidth
				onChange={event => {setName(event.target.value)}}/> </div>
			<div>
				<label htmlFor="Description">Module Description</label>
			</div>
			<div>
				<TextField required id="moduleDescription" label="Module description" defaultValue="" multiline variant="outlined"  fullWidth
				onChange={event => {setDescription(event.target.value)}}/> </div>
			<div>
				<label htmlFor="Topics Covered">Topics </label>
			</div>
			<div>
				<TextField id="topics" label="Topics covered" defaultValue="" multiline variant="outlined" fullWidth
				onChange={event => {setTopics(event.target.value)}}/> </div>
			<div>
				<br /> </div>
			
			<ButtonGroup color="primary" aria-label="outlined primary button group" variant="contained">
				<Button onClick={validateForm} id="createButton">Create</Button>
				<Button href = '/lmsDashBoard' id="cancelButton">Cancel</Button>
			</ButtonGroup>
		
			<div>
                <p id="noNameMsg"></p>
                <p id="noDescriptionMsg"></p>
            </div>
		</form>


	)
}

export default CreateModule;