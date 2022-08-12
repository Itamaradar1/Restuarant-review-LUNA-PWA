import React, { Component } from 'react';
import ButtonOrangeSmall from '../button_orange_small/index';
import ButtonOrangeLarge from '../button_orange_large';
import "./index.scss";

const InputFieldFilter = (props) => {
    return (
        <div className='input-field-filter'>
            <input className='input-field' type='text' placeholder='Filter list...' />
            <ButtonOrangeLarge label='FILTER' />
        </div>
    );
}

export default InputFieldFilter;