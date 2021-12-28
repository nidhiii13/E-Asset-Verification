import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import AssistantDashboard from '../Dashboard/AssistantDashboard';
import { useSelector } from 'react-redux';
const Update = () => {
    const [aid,setAid]=useState("");
    const [aloc,setAloc]=useState("");
    const [coname,setConame]=useState("");
    const [c_id,setCid]=useState("");
    const [error,setError]=useState(false);
    const info = useSelector((state) => state.User.info);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var data={
        "asset_id": aid,
        "company_id": c_id,
        "location": aloc
        }
        setAid("");
        setAloc("");
        setConame("");
        setCid("");


        axios.post("http://127.0.0.1:8000/asset/company/loc",data,{headers: {
         'Content-Type' : 'application/json' ,
         "Authorization" : `Token ${info.token}`
    }})
    .then((res) => {
        console.log("RESPONSE RECEIVED: ", (res.data));
        setError(false);
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        setError(true);
      })

    }
    return (
        <>
   <AssistantDashboard />
   <div className='assistantblock'>
            
            <h2 className='h2block_home'>Update Asset Details</h2>   
            {error && <h4 className='error'>Invalid Details! Enter again</h4>}       
            <div className='input_home'>
            <div className='textblock'><p>Asset ID</p></div>   
            <div className='inputblock'>  
                <input type="text" name="file" placeholder='RVCE04CP0001' className='input' value={aid} onChange={(e)=>setAid(e.target.value)}/* onChange={changeHandler} */ />
                </div>
                <div className='textblock'><p>Asset Location</p></div>   
            <div className='inputblock'> 
            <input type="text" name="file" placeholder='Room no' className='input' value={aloc} onChange={(e)=>setAloc(e.target.value)}/* onChange={changeHandler} */ />
            </div>
            <div className='textblock'><p>Comapny ID</p></div>   
            <div className='inputblock'> 
            <input type="text" name="file" placeholder='C-ID' className='input' value={c_id} onChange={(e)=>setCid(e.target.value)}/* onChange={changeHandler} */ />
        </div>
            <div className='submit_home'>
				<button className='button_home'  onClick={handleSubmit} >Submit</button>
                
                </div>
			</div>  
            
            </div>
            
        </>

        
    )
}

export default Update;