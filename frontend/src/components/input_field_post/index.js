import React, { Component } from 'react';
import ButtonOrangeSmall from '../button_orange_small/index';
import "./index.scss";

const InputFieldPost = (props) => {
    return (
        <div className='input-field-post'>
            <input className='input-field' type='text' />
            <ButtonOrangeSmall label='POST' />
        </div>
    );
}

export default InputFieldPost;