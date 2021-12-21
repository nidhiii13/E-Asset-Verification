import React from 'react'
import "./Dashboard2.css";
import $ from 'jquery';
import { Link } from 'react-router-dom'
const VerifierDashboard = () => {

    return (
        <>
        <div className='verifierdashboard_container'>
            <div className="sidebar">
                <dropdown>
                    <ul className='sidebar_nav'>
                        <li className='list'>Scan Barcode</li>
                        <input id="drop4" type="checkbox" />
                        <label for="drop4" className="animate">Asset Verfication</label>
                        <ul>
                            <li className='list'>Found Report</li>
                            <li className='list'>Not Found Report</li>
                        </ul>
                        <li className="drop">Help</li>
                    </ul>
                </dropdown>
            </div>
            </div>
        </>
    )
}

export default VerifierDashboard;