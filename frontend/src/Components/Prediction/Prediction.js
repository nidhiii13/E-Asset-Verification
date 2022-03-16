import React from 'react'
import "./Prediction.css"
import AssistantDashboard from '../Dashboard/AssistantDashboard'
import { useState, useEffect } from "react";
import axios from 'axios';

const countries = {
    MONITOR:["DELL","HP", "ACER","SAMSUNG"],
    PROJECTOR:["ACER", "SONY", "SAMSUNG" ],
    HEADPHONE:["SAMSUNG", "MI", "SONY"], 
    RASPBERRY_Pi_Kit:[ "Vkit","Canakit"], 
    SPEAKER:[ "SONY", "PHILIPS"], 
    LAPTOP:["HP", "ASUS", "DELL"], 
    DESKTOP:["HP", "ACER"],
};

const Prediction = () => {
    const [product , setProduct] = useState("");
    const [company , setCompany] = useState("");
    const [years , setYears] = useState(0);
    const [predicted, setPredicted] = useState(0);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (product == "RASPBERRY_Pi_Kit")
        setProduct("RASPBERRY Pi Kit");
        var data = {
            'product':product,
            'company':company,
            'years':years
        }
        console.log(data);
        axios.post("http://127.0.0.1:8000/service/predictservice",data,{headers: {
            'Content-Type' : 'application/json' 
       }})
       .then((res) => {
           console.log("RESPONSE RECEIVED: ", (res.data));
           setPredicted(Math.round(res.data.prediction));
           
         })
         .catch((err) => {
           console.log("AXIOS ERROR: ", err);
           
         })

    }
    const [countryData, setCountryData] = useState(["MONITOR"]);
    const [selectedCountry, setSelectedCountry] = useState("");

    const checkInsertInArray = newCountry => {
        let findStatus = countryData.find(x => {
            return x === newCountry;
        });
        if (!findStatus) {
            setCountryData([...countryData, newCountry]);
        }
    };

    const countryChange = event => {
        if (event.target.value) {
            setProduct(event.target.value);
            setSelectedCountry(event.target.value);
        }
    };

    useEffect(() => {
        Object.keys(countries).forEach(country => {
            checkInsertInArray(country);
        });
    });

    return (
        <div className='pred_conatiner'>
            <AssistantDashboard />
            <div className='pred_body'>
                <h1 className='pred_h1'>Service Prediction of an Asset</h1>
                <form className='pred_form'>
                    <label className='pred_label'>Select a Product:</label>
                    <select id='pred_input1' onChange={countryChange}>
                        <option value="">select</option>
                        {countryData.map(allCountries => {
                            return <option value={allCountries}>{allCountries}</option>;
                        })}
                    </select>
                    <label className='pred_label'>Select a Company:</label>
                    {selectedCountry ? (<>
                        <select className='pred_input2' value={company} onChange={(e)=>setCompany(e.target.value)}>
                            <option value="">select</option>
                            {countries[selectedCountry].map(allCountries => {
                                return <option value={allCountries}>{allCountries}</option>;
                            })}
                        </select>
                    </>
                    ) : (
                        <>
                        <select className='pred_input2'>
                        <option value="">select</option>
                    </select>
                    </>
                    )}

                    <label className='pred_label' >Select number of years:</label>
                    <select className='pred_input' value={years} onChange={(e)=>setYears(e.target.value)}>
                        <option value="1">select</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">more than 10</option>
                    </select>
                </form>
               
<div className="predict">Predicted service count : {predicted}</div>
                <div className='pred_submit'>
                    <button className='button_home' onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </div>
  );
}

export default Prediction;