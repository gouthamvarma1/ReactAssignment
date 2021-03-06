import React from "react";
import "./AddAssignmentFormComponent.css";
import DynamicForm from "../DynamicForm";
import { Button } from "@material-ui/core";
import axios from "axios"
import properties from '../properties.js';


const emailIp = properties.emailServerIp;
const lmsIp = properties.lmsIp;

class AddAssignmentFormComponent extends React.Component {
    state = {
        // any server data to maintain state 
        data: [

        ],
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
            current: { model } // todo
        });
        // alert("Assignment is created")

        // add 
        this.saveAssignmentCall(model);

    };

    sendEmailNotification(payload) {
        axios.post(emailIp + '/api/students/sendEmailAssignment', payload, {
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


    saveAssignmentCall(model) {

        console.log("entered Post Request")
        this.getstudentsList();

        axios.post(lmsIp + '/api/eval/assignment/', model, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response);
                alert("" + JSON.stringify(response.status));
                if (response.status == 200 || response.status == 201)
                    window.location.href = "/lmsDashBoard"
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

    onNewClick = e => {
        this.setState({
            current: {}
        });
    };
    render() {

        // let data = this.state.data.map(d => {
        //     return (
        //         <tr key={d.id}>
        //             <td>{d.name}</td>
        //             <td>{d.age}</td>
        //             <td>{d.qualification}</td>
        //             <td>{d.gender}</td>
        //             <td>{d.rating}</td>
        //             <td>{d.city}</td>
        //             <td>{d.skills && d.skills.join(",")}</td>
        //             <td>
        //                 <button
        //                     onClick={() => {
        //                         this.onEdit(d.id);
        //                     }}
        //                 >
        //                     edit
        //                 </button>
        //             </td>
        //         </tr>
        //     );
        // });

        return (
            <div className="App" >
                {/* <div className="form-actions">
                    <Button onClick = {this.onNewClick} type = "submit">NEW</Button>
                </div> */}
                <DynamicForm
                    key={this.state.current.id}
                    className="form"
                    title="Add Assignmant"
                    defaultValues={this.state.current}
                    model={[
                        { key: "assignmentTitle", label: "Assignment Title", props: { required: true, variant: "outlined" } },
                        { key: "assignmentDiscription", label: "Assignment Discription", props: { required: true, variant: "outlined" } },
                        { key: "marks", label: "Marks", type: "number", props: { variant: "outlined" } },
                        {
                            key: "attempts",
                            label: "Attempts",
                            type: "number",
                            props: { min: 0, max: 5, variant: "outlined" }
                        },
                        {
                            key: "SubmitionType",
                            label: "Submition Type",
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
                            key: "dateOfSubmission",
                            label: "Date Of Submission",
                            type: "datetime-local",
                            name: "Date Of Submission",
                            props: { variant: "outlined" }
                        },
                        {
                            key: "uplodDocument",
                            label: "Upload Document",
                            type: "file",
                            name: "uplodDocument",
                            props: { variant: "outlined" }
                        },
                        // { key: "qualification", label: "Qualification" },
                        // {
                        //     key: "city",
                        //     label: "City",
                        //     type: "select",
                        //     value: "Kerala",
                        //     options: [
                        //         { key: "mumbai", label: "Mumbai", value: "Mumbai" },
                        //         { key: "bangalore", label: "Bangalore", value: "Bangalore" },
                        //         { key: "kerala", label: "Kerala", value: "Kerala" }
                        //     ]
                        // },
                        // {
                        //     key: "skills",
                        //     label: "Skills",
                        //     type: "checkbox",
                        //     options: [
                        //         { key: "reactjs", label: "ReactJS", value: "reactjs" },
                        //         { key: "angular", label: "Angular", value: "angular" },
                        //         { key: "vuejs", label: "VueJS", value: "vuejs" }
                        //     ]
                        // }
                    ]}
                    onSubmit={model => {
                        this.onSubmit(model);
                    }}

                />

                {/* <table border="1">
                    <tbody>{data}</tbody>
                </table> */}
            </div>
        );
    }
}
export default AddAssignmentFormComponent;
