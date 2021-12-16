import React from 'react'
import "./Dashboard.css";
import { Link } from 'react-router-dom'
const AssistantDashboard = () => {
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
                            <Link to="/home"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Home</em>
                                    </Link>
                            </li>
                            <li>
                            <Link to="/home"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Generate Barcode</em>
                                    </Link>
                            </li>
                            <li>
                            <Link to="/addcompany"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Company stats</em>
                                    </Link>
                            </li>
                            <li>
                            <Link to="/addlocation"className="s-sidebar__nav-link" > 
                                    <i className="fa fa-camera"></i><em>Location details</em>
                                    </Link>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Service Stats</em>
                                </a>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Help</em>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            
            </div>
        </>
    )
}

export default AssistantDashboard;