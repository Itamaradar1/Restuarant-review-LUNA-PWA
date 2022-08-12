import React, { Component } from 'react';
import "./index.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"

const Double_button_orange = () => {
    //use Navigate from react
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        navigate("/");
        const action = {
            type: "setToken",
            payload: undefined
        }
        dispatch(action);
        localStorage.clear();
    }

    return (
        <div className="double_button_orange">
            <div className='left'>
                <div className='left-block' >
                    <p onClick={() => {navigate("/registration")} }>SIGN UP</p>
                </div>
            </div>
            <div className='right'>
                <div className='right-block'>
                {token?
                    <p  onClick={() => handleLogout() }>LOGOUT</p>
                    :
                    <p  onClick={() => {navigate("/registration/login")} }>LOGIN</p>
                }
                </div>
            </div>
        </div>
    );
}

export default Double_button_orange;