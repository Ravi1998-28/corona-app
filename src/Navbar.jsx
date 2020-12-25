import React from "react";
import {NavLink} from "react-bootstrap";
import logo from "../src/image/im.jpeg"

const Navbar = () =>{
    return(
        <>
            <div className='container-fluid nav_bg mx-3'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <img src={logo}  width="30" height="30" alt=""
                                 loading="lazy" />
                            <NavLink exact className="navbar-brand"  href="/">RAVI CHAUHAN</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item active">
                                        <NavLink  activeClassName='menu_active' className="nav-link active" aria-current="page" href="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  activeClassName='menu_active' className="nav-link" href="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  activeClassName='menu_active' className="nav-link"  href="/covid-19"> Covid-19 Updates </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;