import React from 'react'
import "./Prediction.css"
import AssistantDashboard from '../Dashboard/AssistantDashboard'
import { useState, useEffect } from "react";

const countries = {
    MONITOR:["HP", "ACER", "SONY", "SAMSUNG", "MI", "VKit"],
    PROJECTOR:["ACER", "SONY", "SAMSUNG", "MI", "VKit", "Canakit", "PHILIPS", "ASUS" ],
    HEADPHONE:["SAMSUNG", "MI", "VKit"], 
    RASPBERRY_Pi_Kit:[ "PHILIPS", "ASUS"], 
    SPEAKER:["HP", "ACER", "SONY", "SAMSUNG"], 
    LAPTOP:["HP", "ASUS", "ACER", "MI"], 
    DESKTOP:["SAMSUNG", "HP", "ASUS"],
};

const Prediction = () => {
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
                        <select className='pred_input2'>
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
                    <select className='pred_input'>
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
                <div className='pred_submit'>
                    <button className='button_home' onClick={""} >Submit</button>

                </div>
            </div>
        </div>
  );
}

export default Prediction

