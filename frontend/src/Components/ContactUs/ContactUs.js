import React from 'react';
import './ContactUs.css'
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [uname,setUname]=useState("");
    const [mail,setMail]=useState("");
    const [pno,setPno]=useState("");
    const [ques,setQues]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        var data={
        "name":uname ,
        "email_id": mail,
        "contact_no": pno,
        "query": ques,
        }
        setUname("");
        setMail("");
        setPno("");
        setQues("");
        console.log(data);

        axios.post("http://127.0.0.1:8000/contact",data,{headers: {
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
                <div className="help_container">
                        <h1 className='help_heading'>Contact Us</h1>                       
                    <div className="input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" className='hinput' required value={uname} onChange={(e)=>setUname(e.target.value)}/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input type="email"className='hinput' required value={mail} onChange={(e)=>setMail(e.target.value)}/>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className='right_block'>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input" >
                                <input type="text" className='hinput' required value={pno} onChange={(e)=>setPno(e.target.value)}/>
                                <label>Phone Number</label>
                            </div>
                        </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide" >
                                <textarea className='htextarea' required value={ques} onChange={(e)=>setQues(e.target.value)}></textarea>
                                <label>Query</label>
                            </div>
                        </div>
                        <div className='mesubmit'>
                        <div className="submit_help">
                            <button className='button_home' onClick={handleSubmit} >Send Message</button>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ContactUs;