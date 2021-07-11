import React from "react";
import "./AddQuizComponent.css";
import DynamicForm from "../DynamicForm";
import { Button } from "@material-ui/core";
import axios from "axios"
import properties from '../properties.js';


const emailIp = properties.emailServerIp;
const lmsIp = properties.lmsIp;
var responseData;
class AddQuizComponent extends React.Component {

    state = {
        // any server data to maintain state 
        data: [],
        current: {}
    };

    onSubmit = model => {
        let data = [];
        if (model.id) {
            data = this.state.data.filter(d => {
                return d.id != model.id;
            });
        } else {
            model.id = +new Date();
            data = this.state.data.slice();
        }

        this.setState({
            data: [model, ...data],
            current: {} // todo
        });
        // alert("Quiz Submited");
        this.saveQuizCall(model)
    };

    sendEmailNotification(payload) {
        axios.post(emailIp + '/api/students/sendEmail', payload, {
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
    onEdit = id => {
        let record = this.state.data.find(d => {
            return d.id == id;
        });
        //alert(JSON.stringify(record));
        this.setState({
            current: record
        });
    };

    getstudentsList() {
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

    saveQuizCall(model) {

        this.getstudentsList();
        console.log("entered Post Request")

        axios.post(lmsIp + '/api/addquiz/quiz/', model, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then((response) => {
            console.log(response);
            alert("" + JSON.stringify(response.status));
            if (response.status == 200 || response.status == 201) {
                window.location.href = "/lmsDashBoard"
            }
        }, (error) => {
            console.log(error);
        });

    }

    onNewClick = e => {
        this.setState({
            current: {}
        });
    };
    render() {

        return (
            <div className="App" >

                <DynamicForm
                    key={this.state.current.id}
                    className="form"
                    title="Add Quiz Details"
                    defaultValues={this.state.current}
                    model={[
                        { key: "QuizTitle", label: "Quiz Title", props: { required: true, variant: "outlined" } },
                        { key: "QuizDiscription", label: "Quiz Discription", props: { required: true, variant: "outlined" } },
                        { key: "marks", label: "Marks", type: "number", props: { variant: "outlined" } },
                        {
                            key: "attempts",
                            label: "Attempts",
                            type: "number",
                            props: { min: 0, max: 5, variant: "outlined" }
                        },
                        {
                            key: "SubmitionType",
                            label: "SubmitionType",
                            type: "radio",
                            options: [
                                {
                                    key: "folder",
                                    label: "Folder",
                                    name: "SubmitionType",
                                    value: "folder"
                                },
                                {
                                    key: "Link",
                                    label: "Link",
                                    name: "SubmitionType",
                                    value: "Link"
                                },
                                {
                                    key: "file",
                                    label: "File",
                                    name: "SubmitionType",
                                    value: "file"
                                },

                            ]
                        },
                        {
                            key: "DateOfSubmission",
                            label: "Date Of Submission",
                            type: "datetime-local",
                            name: "Date Of Submission",
                            props: { variant: "outlined" }
                        },
                        {
                            key: "TotalhrsforAtempting",
                            label: "Total hours for Atempting",
                            type: "number",
                            name: "TotalhrsforAtempting",
                            props: { variant: "outlined" }
                        },
                        {
                            key: "uplodDocument",
                            label: "Upload Document",
                            type: "file",
                            name: "uplodDocument",
                            props: { variant: "outlined" }

                        },
                    ]}
                    onSubmit={model => {
                        this.onSubmit(model);
                    }}
                />
            </div>
        );
    }
}
export default AddQuizComponent;
