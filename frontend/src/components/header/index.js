// import React from "react";
import logo from '../../assets/svg/logo.svg'
import Double_button_orange from '../double_button_orange'
import {useNavigate} from "react-router-dom";
import './index.scss'
import React, { useState } from "react";

// home, search, profile
function Header(props) {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    return (
        <div className="lunaHeader">
            <div className="navLogo">
                {/* <img className='luna-logo' width={144} height={45} src={logo} alt='Luna logo'></img> */}
                luna
            </div>
            <div className="rightPanel" >
                {/* <div className="homeSearchProfileBar"> */}
                <a
                    className={props.active == 'home' ? "active" : "not-active"}
                    onClick={ () => {navigate("/")} }
                >Home</a>
                <a
                    className={props.active == 'search' ? "active" : "not-active"}
                    onClick={ () => {navigate("/search/restaurants")} }
                >Search</a>
                <a
                    className={props.active == 'profile' ? "active" : "not-active"}
                    onClick={ () => {navigate("/user-profile/reviews")} }
                >Profile</a>
                <div className="double_button">
                    <Double_button_orange  />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
};


export default Header;
