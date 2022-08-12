import React, { Component } from 'react';
import "./index.scss";

const ButtonOrangeSmall = (props) => {
    return (
        <div className='button-orange-small'>
            {props.label ? props.label : 'DEFAULT'}
        </div>
    );
}

export default ButtonOrangeSmall;