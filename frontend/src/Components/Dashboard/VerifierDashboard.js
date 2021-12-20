import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../Redux/User'
const VerifierDashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        const info={
            isloggedIn: false
        }
        localStorage.clear();
        dispatch(logoutUser(info));

        console.log('logout');
        history.push('/');
    }
    return (
        <>
            <div className="s-layout">

                <div className="s-layout__sidebar">
                    <a className="s-sidebar__trigger" href="#0">
                        <i className="fa fa-bars"></i>
                    </a>

                    <nav className="s-sidebar__nav">
                        <ul>
                            <li>
                            <Link to="/verifierhome"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Scan Barcode</em>
                                    </Link>
                            </li>
                            <li>
                                <Link to="/verifierhome"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Asset Verification</em>
                                    </Link>
                                
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Help</em>
                                </a>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                <i className="fa fa-camera"></i><em> <button className='logout' onClick={handleSubmit} >Logout </button></em>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            
                
            </div>
        </>
    )
}

export default VerifierDashboard;