import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginAndRegistartion from './components/RegistrationForm/LoginandRegistration';
import AddAssignmentFormComponent from "./components/AddAssignmentComponent/index";

function App() {
return (
    <Router>
    <div className="App">
    
      <LoginAndRegistartion />   
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/AddAssign" exact={true}>
            <AddAssignmentFormComponent />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App;