import React from 'react'
import "./Dashboard.css"
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
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-home"></i><em>Home</em>
                                </a>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-user"></i><em>Genrate Barcode</em>
                                </a>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Company Stats</em>
                                </a>
                            </li>
                            <li>
                                <a className="s-sidebar__nav-link" href="#0">
                                    <i className="fa fa-camera"></i><em>Location Details</em>
                                </a>
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