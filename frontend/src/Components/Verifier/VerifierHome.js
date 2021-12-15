import React from 'react'
import Barcode from '../Barcode/Barcode'
import VerifierDashboard from '../Dashboard/VerifierDashboard'
import "./Verifierhome.css"

const Verifierhome = () => {
    return (
        <div>
            <VerifierDashboard />
            <div className='barcode_block'><Barcode /></div>
        </div>
    )
}

export default Verifierhome;