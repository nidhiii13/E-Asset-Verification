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
import Verifierhome from './Components/Verifierhome';
function App() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }

  return (
    <>
    
     <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Verifierhome">
            <Verifierhome />
          </Route>
          </Switch>
    </>
  );
}

export default App;