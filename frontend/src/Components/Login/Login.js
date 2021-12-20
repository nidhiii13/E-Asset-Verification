import React from 'react'
import "./login.css";
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const Login = () => {
    let history = useHistory();
   const [flag,setFlag]=useState(false);
   const [type,setType]=useState("");
   const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");
   const handleSubmit=(event)=>{

       event.preventDefault();
       var data={
        'username':username,
        'password':password,
        'type':type
    }
    setPassword("");
    setUsername("");
    setType("");

       axios.post("http://127.0.0.1:8000/login",data,{headers: {
         'Content-Type' : 'application/json' 
    }})
    .then((res) => {
        console.log("RESPONSE RECEIVED: ", (res.data));
         localStorage.setItem('token', res.data.token);
         if (res.data.type=='assistant')
        history.push('/assistant');
        else
        history.push('/verifier');
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

   }
    return (
        <>
        <Navbar />
<div class="login">
    
  <div class="form">
    <form class="login-form" method="POST" onSubmit={handleSubmit}>
      <span class="material-icons"><p>Sign-in</p></span>
      <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)} value={username} required/>
      <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} value={password} required />
      <div className="radio_button">
                    <input type="radio" className="form-check-input" id="radio1" name="optradio" onClick={()=>setType("verifier")} value="Asset_verifier" checked/>    
                    <label class="form-check-label1" for="radio1">Asset-Verifier</label>
                    <input type="radio" class="form-check-input" id="radio2" name="optradio" onClick={()=>setType("assistant")} value="Assistant"/>  
                    <label class="form-check-label2" for="radio2">  Assistant</label>
                </div>
      <button>Login</button>
    </form>  
  </div>
</div>
        </>
    )
    }

export default Login;

