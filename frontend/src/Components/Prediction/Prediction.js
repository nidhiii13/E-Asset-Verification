import React from 'react'
import "./Prediction.css"
import AssistantDashboard from '../Dashboard/AssistantDashboard'

const Prediction = () => {
    return (
        <div className='pred_conatiner'>
            <AssistantDashboard />
            <div className='pred_body'>
                <h1 className='pred_h1'>Service Prediction of an Asset</h1>
                <form className='pred_form'>
                    <label className='pred_label' for="myHouse">Select a Product:</label>
                    <input list="magicHouses" id="myHouse" name="myHouse" placeholder="select answer" className='pred_input' />
                    <datalist id="magicHouses">
                        <option value="MONITOR" />
                        <option value="PROJECTOR" />
                        <option value="HEADPHONE" />
                        <option value="RASPBERRY Pi Kit" />
                        <option value="SPEAKER" />
                        <option value="LAPTOP" />
                        <option value="DESKTOP" />

                    </datalist>
                    <label className='pred_label' for="mycom">Select a Company:</label>
                    <input list="magiccom" id="mycom" name="mycom" placeholder="select answer" className='pred_input' />
                    <datalist id="magiccom">
                        <option value="DELL" />
                        <option value="HP" />
                        <option value="ACER" />
                        <option value="SONY" />
                        <option value="SAMSUNG" />
                        <option value="MI" />
                        <option value="VKit" />
                        <option value="Canakit" />
                        <option value="PHILIPS" />
                        <option value="ASUS" />
                    </datalist>
                    <label className='pred_label' for="years">Select number of years:</label>
                    <input list="magicyear" id="years" name="years" placeholder="select answer" className='pred_input' />
                    <datalist id="magicyear">
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" />
                        <option value="6" />
                        <option value="7" />
                        <option value="8" />
                        <option value="9" />
                        <option value="10" />
                        <option value="more than 10" />

                    </datalist>
                </form>
                <div className='pred_submit'>
                    <button className='button_home' onClick={""} >Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Prediction

