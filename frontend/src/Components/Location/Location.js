import React from 'react'
import './Location.css';
import { useState } from 'react';
import axios from 'axios';
import AssistantDashboard from '../Dashboard/AssistantDashboard';
const Location = () => {
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");
    const [list,setList]=useState(null);
    const [incharge,setIncharge]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        var data={
        "name": name,
        "room_no": room,
        "list_assets": list,
        "incharge": incharge
        }
        setName("");
        setRoom("");
        setList(null);
        setIncharge("");

        axios.post("http://127.0.0.1:8000/location/addloc",data,{headers: {
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
            
            <h2 className='h2block_home'>Add Location details</h2>          
            <div className='input_home'>
             <div className='textblock'><p>Location Name</p></div>   
            <div className='inputblock'> 
            <input type="text" name="file" className='input' value={name} onChange={(e)=>setName(e.target.value)}/* onChange={changeHandler} */ />
			</div> 
            <div className='textblock'><p>Room No</p></div> 
            <div className='inputblock'> 
            <input type="text" name="file"className='input' value={room} onChange={(e)=>setRoom(e.target.value)}/* onChange={changeHandler} */ />
            </div> 
            <div className='textblock'><p>No of Assets</p></div>  
            <div className='inputblock'>
            <input type="number" name="file" className='input' value={list} onChange={(e)=>setList(e.target.value)} /* onChange={changeHandler} */ />
            </div>
            <div className='textblock'><p>Incharge SSN</p></div>  
            <div className='inputblock'>
            <input type="text" name="file" className='input' value={incharge} onChange={(e)=>setIncharge(e.target.value)}/* onChange={changeHandler} */ />
            </div>
                 <div className='submit_home'>
				<button className='button_home'  onClick={handleSubmit} >Submit</button>
                
                </div>
			</div>  
            
            </div>
            
        </>

        
    )
}

export default Location;