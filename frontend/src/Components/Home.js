import React from 'react'
import './Home.css'
import { useEffect } from 'react';
import { useState } from 'react';
import xlsx from 'xlsx';
import axios from 'axios';
import AssistantDashboard from './Dashboard/AssistantDashboard';
import { useSelector } from 'react-redux';
const Home = () => {
    useEffect(() => {
        const token=localStorage.getItem('token');
        console.log(token);
    }, [])
    const [selectedFile, setSelectedFile] = useState({});
	const [isFilePicked, setIsFilePicked] = useState(false);
    const info = useSelector((state) => state.User.info);
	const changeHandler = (e) => {
		e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet,{raw: false});
            console.log(json);
            setSelectedFile(json);
            
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
		//setSelected(true);
	};

	const handleSubmission = () => {
        axios.post("http://127.0.0.1:8000/asset/barcode",selectedFile,{headers: {
         'Content-Type' : 'application/json' ,
         "Authorization" : `Token ${info.token}`
    }})
    .then((res) => {
        console.log("RESPONSE RECEIVED: ", (res.data));
        setSelectedFile("");
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        setSelectedFile("");

      })
	};
    return (
        <div>
            
            <AssistantDashboard />
            
            <div className='assistantblock1'>
            
            <h2 className='h2block_home1'>Upload the excel file</h2>          
            <div className='input_home1'><input type="file" name="file" onChange={changeHandler} /></div>
			<div className='submit_home1'>
				<button className='button_home1' onClick={handleSubmission}>Submit</button>
			</div>  
            
            </div>
            
        </div>
    )
}

export default Home