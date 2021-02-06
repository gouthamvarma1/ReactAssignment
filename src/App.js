import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginAndRegistartion from './components/RegistrationForm/LoginandRegistration';
import AddAssignmentFormComponent from "./components/AddAssignmentComponent/index";
import SideBar from './components/SideBar/SideBar';
import LmsDashBoard from './components/LmsDashBoard/LmsDashBoard';
function App() {
return (
    <Router>
    <div className="App">
   
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/login" exact={true}>
              <LoginAndRegistartion />
            </Route>
            <Route path="/register" exact={true}>
            <LoginAndRegistartion />
            </Route>
            <Route path="/students" exact={true}>
            <SideBar />
            </Route>
            <Route path="/lmsDashBoard" exact={true}>
            <SideBar />
            </Route>
            <Route path="/modules" exact={true}>
            <SideBar />
            </Route>
            <Route path="/createModule1" exact={true}>
            <SideBar />
            </Route>
            <Route path="/addQuiz" exact={true}>
            <SideBar />
            </Route>
            <Route path="/addAssignment" exact={true}>
            <SideBar />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App;