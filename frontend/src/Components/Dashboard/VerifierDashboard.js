import React from 'react'
import './Dashboard2.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'
const VerifierDashboard = () => {

    return (
        <>
            <nav className='nav_container'>
                <ul>
                    <li><a href="#" title="Nach Hause" className='list_value1'>Scan Barcode</a></li>
                    <li className="sub">
                        <input type="checkbox" />
                        <a href="#" className='list_value'>Asset Verication</a>
                        <ul className="submenu">
                            <li className="sub">
                                <input type="checkbox" />
                                <a href="#" className='list_value'>Found Report</a>
                            </li>
                            <li className="sub">
                                <input type="checkbox" />
                                <a href="#" className='list_value' >Not found report</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" className='list_value3'>Logout</a></li>
                </ul>
            </nav>
        </>
    )
}

export default VerifierDashboard;