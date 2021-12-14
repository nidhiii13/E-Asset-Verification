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
          </Switch>
    </>
  );
}

export default App;