import React, { Component, useState } from 'react';
import {useDispatch} from "react-redux";
import ButtonOrangeLarge from '../../components/button_orange_large';
import "./index.scss";
import {fetchAndDispatchToken} from "../../store/actions/registration_validation";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  
  
    const clickHandler = () => {
        dispatch((dispatch,getState) =>fetchAndDispatchToken(dispatch,getState,email,password,navigate));
    }


    return (
        <div className="registrationform">
            <h2>Login</h2>
            <hr/>
            <div className="fieldsbox">
                <input name='email' type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input name='password' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <ButtonOrangeLarge label="Login" clickevent={clickHandler}/>
        </div>
    );
}

export default LoginForm;