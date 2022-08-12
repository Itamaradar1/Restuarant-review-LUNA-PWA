import React, { Component } from 'react';
import "./index.scss";

const ButtonOrangeLarge = (props) => {
    return (
        <div className='button-orange-large' onClick={props.clickevent}>
            {props.label ? props.label : 'DEFAULT'}
        </div>
    );
}

export default ButtonOrangeLarge;