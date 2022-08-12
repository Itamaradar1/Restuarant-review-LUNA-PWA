import React, { Component, useState } from 'react';
import ButtonOrangeLarge from '../../components/button_orange_large';
import "./index.scss";

const RegistrationForms = (props) => {
    return (
        <div className="registrationform">
            <h2>{props.heading}</h2>
            <hr/>
            <div className="fieldsbox">
                {props.fields.map((field) => {
                    return <input placeholder={field.placeholder} type={field.type}/>
                })}
            </div>
            <ButtonOrangeLarge label={props.buttonlabel} />
        </div>
    );
}

export default RegistrationForms;