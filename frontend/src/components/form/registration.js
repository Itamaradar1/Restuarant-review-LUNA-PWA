import React, { Component, useState } from 'react';
import {useDispatch} from "react-redux";
import ButtonOrangeLarge from '../../components/button_orange_large';
import "./index.scss";
import {registration} from "../../store/actions/registration_validation";
import { useNavigate } from "react-router-dom";

const RegistrationForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [registered,setRegistered] = useState(false);

    const clickHandler = () => {
        setRegistered(true);
        dispatch((dispatch,getState) =>registration(dispatch,getState,email,navigate));
        setTimeout(() => {
            navigate("/registration/validation")
        }, 8000);
    }


    return (
        <div className="registrationform">
            <h2>Registration</h2>
            <hr/>
            {registered? 
            <p>Thanks for your registration. {<br/>}
            Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.
            </p>
            :
            <>
                <div className="fieldsbox">
                    <input name='email' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <ButtonOrangeLarge label="Register" clickevent={()=>clickHandler()}/>
            </>          
            }
        </div>
    );
}

export default RegistrationForm;