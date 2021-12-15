import React from 'react'
import './Company.css';
import { useState } from 'react';
import axios from 'axios';
import AssistantDashboard from '../Dashboard/AssistantDashboard';
const Company = () => {
    const [cid,setCid]=useState("");
    const [cname,setCname]=useState("");
    const [cmail,setCmail]=useState("");
    const [cloc,setCloc]=useState("");
    const [cph,setCph]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        var data={
        "company_id": cid,
        "company_name": cname,
        "location": cloc,
        "email_id": cmail,
        "enquiry_no": cph
        }
        setCid("");
        setCname("");
        setCmail("");
        setCloc("");
        setCph("");

        axios.post("http://127.0.0.1:8000/company/add/",data,{headers: {
         'Content-Type' : 'application/json' 
    }})
    .then((res) => {
        console.log("RESPONSE RECEIVED: ", (res.data));
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })

    }
    return (
        <>
   <AssistantDashboard />
   <div className='assistantblock'>
            
            <h2 className='h2block_home'>Add company details</h2>          
            <div className='input_home'>
                
                <input type="text" name="file" placeholder='company id' className='input' value={cid} onChange={(e)=>setCid(e.target.value)}/* onChange={changeHandler} */ />
			
            <input type="text" name="file" placeholder='company name' className='input' value={cname} onChange={(e)=>setCname(e.target.value)}/* onChange={changeHandler} */ />
			
            <input type="text" name="file" placeholder='company email' className='input' value={cmail} onChange={(e)=>setCmail(e.target.value)} /* onChange={changeHandler} */ />
            <input type="text" name="file" placeholder='company location' className='input' value={cloc} onChange={(e)=>setCloc(e.target.value)}/* onChange={changeHandler} */ />
            <input type="text" name="file" placeholder='company no' className='input' value={cph} onChange={(e)=>setCph(e.target.value)}/* onChange={changeHandler} */ />
            <div className='submit_home'>
				<button className='button_home'  onClick={handleSubmit} >Submit</button>
                
                </div>
			</div>  
            
            </div>
            
        </>

        
    )
}

export default Company;
