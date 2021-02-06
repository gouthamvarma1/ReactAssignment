import React  from "react";
import "./AddAssignmentFormComponent.css";
import DynamicForm from "../DynamicForm";
import { Button } from "@material-ui/core";

class AddAssignmentFormComponent extends React.Component {
    state = {
        // any server data to maintain state 
        data: [
            {
                id: 1,
                name: "a",
                age: 29,
                qualification: "B.Com",
                rating: 3,
                gender: "male",
                city: "Kerala",
                skills: ["reactjs", "angular", "vuejs"]
            },
            {
                id: 2,
                name: "b",
                age: 35,
                qualification: "B.Sc",
                rating: 5,
                gender: "female",
                city: "Mumbai",
                skills: ["reactjs", "angular"]
            },
            {
                id: 3,
                name: "c",
                age: 42,
                qualification: "B.E",
                rating: 3,
                gender: "female",
                city: "Bangalore",
                skills: ["reactjs"]
            }
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
            current: {} // todo
        });
    };

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

        let data = this.state.data.map(d => {
            return (
                <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.age}</td>
                    <td>{d.qualification}</td>
                    <td>{d.gender}</td>
                    <td>{d.rating}</td>
                    <td>{d.city}</td>
                    <td>{d.skills && d.skills.join(",")}</td>
                    <td>
                        <button
                            onClick={() => {
                                this.onEdit(d.id);
                            }}
                        >
                            edit
            </button>
                    </td>
                </tr>
            );
        });
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
                        { key: "assignmentTitle", label: "AssignmentTitle", props: { required: true } },
                        { key: "assignmentDiscription", label: "AssignmentDiscription" , props: { required: true } },
                        { key: "marks", label: "Marks", type: "number" },
                        {
                            key: "attempts",
                            label: "Attempts",
                            type: "number",
                            props: { min: 0, max: 5 }
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
                            name: "Date Of Submission"
                        },
                        {
                            key: "uplodDocument",
                            label: "Upload Document",
                            type: "file",
                            name:"uplodDocument"
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
export default  AddAssignmentFormComponent;
