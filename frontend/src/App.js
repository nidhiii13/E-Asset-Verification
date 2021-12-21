import React, { useState } from 'react'
import './App.css';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import AssistantDashboard from './Components/Dashboard/AssistantDashboard';
import VerifierDashboard from './Components/Dashboard/VerifierDashboard';
import Verifierhome from './Components/Verifier/Verifierhome'
import Company from './Components/Company/Company';
import Location from './Components/Location/Location';
import Update from './Components/Update/Update';
import Help from './Components/Help/Help';
import Companystats from './Components/Companystats/Companystats';
import Locationstats from './Components/Locationstats/Locationstats';
import Servicestats from './Components/Servicestats/Servicestats';
function App() {
 

  return (
    <>
    
     <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/assistant">
            <AssistantDashboard />
          </Route>
          <Route exact path="/verifier">
            <VerifierDashboard />
          </Route>
          <Route exact path="/verifierhome">
            <Verifierhome />
          </Route>
          <Route exact path="/addcompany">
            <Company />
          </Route>
          <Route exact path="/addlocation">
            <Location />
          </Route>
          <Route exact path="/update">
            <Update />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/Companystats">
            <Companystats />
          </Route>
          <Route exact path="/Locationstats">
            <Locationstats />
          </Route>
          <Route exact path="/Servicestats">
            <Servicestats />
          </Route>
          </Switch>
    </>
  );
}

export default App;