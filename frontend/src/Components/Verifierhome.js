import React from 'react'
import VerifierDashboard from './Dashboard/VerifierDashboard'
import Barcode from './Barcode/Barcode'
import "./Verifierhome.css"

const Verifierhome = () => {
    return (
        <div>
            <VerifierDashboard/>
            <h1 className='h1block_home'>WELCOME</h1>
            <div className='barcode_block'><Barcode /></div>
        </div>
    )
}

export default Verifierhome
