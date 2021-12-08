import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import xlsx from 'xlsx'
import AssistantDashboard from './Dashboard/AssistantDashboard';
const Home = () => {
    useEffect(() => {
        const token=localStorage.getItem('token');
        console.log(token);
    }, [])
    const [selectedFile, setSelectedFile] = useState({});
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (e) => {
		e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json);
            setSelectedFile(json);
            json.map((e)=>{console.log(e.Asset);})
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
		//setSelected(true);
	};

	const handleSubmission = () => {
        console.log(selectedFile);
	};
    return (
        <div>
            <h1>WELCOME</h1>
            
            <input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
        </div>
    )
}

export default Home
