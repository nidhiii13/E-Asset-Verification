import React from 'react'
import './Company.css'
import { useState } from 'react';
import axios from 'axios';
import AssistantDashboard from '../Dashboard/AssistantDashboard';
import { Link } from 'react-router-dom';
const Company = () => {
    const [cid,setCid]=useState("");
    const [cname,setCname]=useState("");
    const [cmail,setCmail]=useState("");
    const [cloc,setCloc]=useState("");
    const [cph,setCph]=useState("");
    const [error,setError] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        var data={
        "company_id": cid,
        "company_name": cname,
        "location": cloc,
        "email_id": cmail,
        "enquiry_no": cph,
        "list":0
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
        setError(false)
        
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
       
                <h2 className='h2block_home'>Add company details</h2>
                {error && <h4 className='error'>Invalid Details! Enter again</h4>}
                <button className='button-stats'><Link to= "/companystats"> Company stats report </Link></button>
                <div className='input_home'>
                    <div className='textblock'><p>Company ID</p></div>
                    <div className='inputblock'>
                        <input type="text" name="file" className='input' value={cid} onChange={(e) => setCid(e.target.value)}/* onChange={changeHandler} */ />
                    </div>
                    <div className='textblock'><p>Company Name</p></div>
                    <div className='inputblock'>
                        <input type="text" name="file" className='input' value={cname} onChange={(e) => setCname(e.target.value)}/* onChange={changeHandler} */ />
                    </div>
                    <div className='textblock'><p>Company Email</p></div>
                    <div className='inputblock'>
                        <input type="email" required="required" name="file" className='input' value={cmail} onChange={(e) => setCmail(e.target.value)} /* onChange={changeHandler} */ />
                    </div>
                    <div className='textblock'><p>Company Location</p></div>
                    <div className='inputblock'>
                        <input type="text" name="file" className='input' value={cloc} onChange={(e) => setCloc(e.target.value)}/* onChange={changeHandler} */ />
                    </div>
                    <div className='textblock'><p>Contact No</p></div>
                    <div className='inputblock'>
                        <input type="text" name="file" className='input' value={cph} onChange={(e) => setCph(e.target.value)}/* onChange={changeHandler} */ />
                    </div>
                    <div className='submit_home'>
                        <button className='button_home' onClick={handleSubmit} >Submit</button>
                    </div>
                </div>
            </div>
            
        </>

        
    )
}

export default Company;