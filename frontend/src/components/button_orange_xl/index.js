import React, { Component } from 'react';
import "./index.scss";

const ButtonOrangeXL = (props) => {
    return (
        <div className='button-orange-xl' onClick={props.onclickevent}>
            {props.label ? props.label : 'DEFAULT'}
        </div>
    );
}

export default ButtonOrangeXL;