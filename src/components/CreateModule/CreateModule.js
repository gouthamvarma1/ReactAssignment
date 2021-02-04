import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200,
		},
	},

}));

function CreateModule() {

	const classes = useStyles();
	return (
		<form className={classes.root} noValidate autoComplete="off" id="CreateModule">
			<div>

			</div>
			<div>
				<header>
					<h1>
						Create Module
            </h1>
				</header>
				<br />
			</div>
			<div>
				<label htmlFor="Name">Module Name</label>
			</div>
			<div>
				<TextField required id="module name" label="Module Name" type="Module Name" defaultValue="" variant="outlined" /> </div>
			<div>
				<label htmlFor="Description">Module Description</label>
			</div>
			<div>
				<TextField required id="module description" label="Module description" defaultValue="" multiline variant="outlined" /> </div>
			<div>
				<label htmlFor="Topics Covered">Topics </label>
			</div>
			<div>
				<TextField required id="topics" label="Topics covered" defaultValue="" multiline variant="outlined" /> </div>
			<div>
				<br /> </div>
			<ButtonGroup color="primary" aria-label="outlined primary button group" variant="contained">
				<Button>Create</Button>
			</ButtonGroup>
		</form>


	)
}

export default CreateModule;