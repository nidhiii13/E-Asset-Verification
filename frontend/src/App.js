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
import Verifierhome from './Components/Verifier/VerifierHome';
import Company from './Components/Company/Company';
import Location from './Components/Location/Location';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import Companystats from './Components/CompanyStats/Companystats';
import Locationstats from './Components/LocationStats/Locationstats';
function App() {
     const info = useSelector((state) => state.User.info);
  return (
    <>
    
     <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {info.isLoggedIn && info.userType =='assistant'?
              (<><Route exact path="/assistant">
                <AssistantDashboard/>
              </Route>
              <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/addcompany">
            <Company />
          </Route>
          <Route exact path="/companystats">
            <Companystats />
          </Route>
          <Route exact path="/locationstats">
            <Locationstats />
          </Route>
          <Route exact path="/addlocation">
            <Location />
          </Route></>) : info.isLoggedIn && info.userType == 'verifier'?
              (<><Route exact path="/verifier">
              <VerifierDashboard/>
            </Route><Route exact path="/verifier">
            <VerifierDashboard />
          </Route>
          <Route exact path="/verifierhome">
            <Verifierhome />
          </Route></>):
              (
                <Redirect to="/"/>
              )}
          </Switch>
    </>
  );
}

export default App;