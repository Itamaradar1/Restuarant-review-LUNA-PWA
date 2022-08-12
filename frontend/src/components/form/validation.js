import React, { Component, useState } from 'react';
import {useDispatch} from "react-redux";
import ButtonOrangeLarge from '../../components/button_orange_large';
import "./index.scss";
import {patchRegistrationValidation} from "../../store/actions/registration_validation";
import { useNavigate } from "react-router-dom";

const ValidationForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [code,setCode] = useState("");
    const [username,setUsername] = useState("");
    const [location,setLocation] = useState("");
    const [password,setPassword] = useState("");
    const [password_repeat,setPassword_repeat] = useState("");

    const clickHandler = () => {
        dispatch((dispatch,getState) =>patchRegistrationValidation(dispatch,getState,code,email,username,location,password,password_repeat,navigate));
    }

    return (
        <div className="registrationform">
            <h2>Verification</h2>
            <hr/>
            <div className="fieldsbox">
                <input name='email' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input name='validation' type="text" placeholder="Validation code" value={code} onChange={e => setCode(e.target.value)}/>
                <input name='username' type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input name='location' type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>
                <input name='password' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input name='password' type="password" placeholder="Password repeat" value={password_repeat} onChange={e => setPassword_repeat(e.target.value)}/>
            </div>
            <ButtonOrangeLarge label="Finish registration" clickevent={clickHandler}/>
        </div>
    );
}

export default ValidationForm;