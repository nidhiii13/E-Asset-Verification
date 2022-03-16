import React from 'react'
import './Dashboard2.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/User';
const VerifierDashboard = () => {
    const user = useSelector(state => state.User.info);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        const info={
            isloggedIn: false
        }
        console.log(user.type);
        localStorage.clear();
        dispatch(logoutUser(info));

        console.log('logout');
        history.push('/');
    }
    return (
        <>
            <nav className='nav_container'>
                <ul>
                    <li><Link to='/verifierhome' title="Nach Hause" className='list_value1'>Scan Barcode</Link></li>
                    <li className="sub">
                        <input type="checkbox" />
                        <a href="#" className='list_value'>Asset Verification</a>
                        <ul className="submenu">
                            <li className="sub">
                               {/*  <input type="checkbox" /> */}
                               <> <Link to='/verifystats/found' className='list_value'>Found Report</Link></>
                            </li>
                            <li className="sub">
                               {/*  <input type="checkbox" /> */}
                             <><Link to='/verifystats/notfound' className='list_value' >Not found report</Link></>
                            </li>
                        </ul>
                    </li>
                    <li className="sub">
                                <input type="checkbox" />
                                <a href="#" className='list_value'>Graph Analytics</a>
                                <ul className="submenu">
                                    <li className="sub">
                                        {/*  <input type="checkbox" /> */}
                                        <> <Link to='/CompanyGraph' className='list_value'>Company Contributions</Link></>
                                    </li>
                                    <li className="sub">
                                        {/*  <input type="checkbox" /> */}
                                        <><Link to='/LocationGraph' className='list_value' >Assets Vs Location</Link></>
                                    </li>
                                </ul>
                            </li>
                    <li><button className='logout' onClick={handleSubmit} >Logout </button> </li>
                </ul>
            </nav>
        </>
    )
}

export default VerifierDashboard;