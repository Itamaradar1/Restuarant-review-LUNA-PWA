import React, { Component, useState } from 'react';
import arrow_down from './arrow-down.svg';
import arrow_up from './arrow-up.svg';
import './index.scss';

const DropDownMenu = () => {

    const [isDown, setIsDown] = useState(true);
    const [category, setCategory] = useState('');

    return (
        <div className='c1-drop-down-extended'>
            <div className='c1-fixed-part'>
                <input
                    className='c1-input-field'
                    placeholder='Select a category...'
                    type={'text'}
                    value={category}
                />
                <img
                    className='c1-arrow'
                    src={isDown ? arrow_down : arrow_up}
                    onClick={() => setIsDown(!isDown)}
                />
            </div>
            <div className={isDown ? 'c1-extended-part-hidden' : 'c1-extended-part'}>
                <ul className='c1-items'>
                    <li
                        className='c1-item'
                        onClick={() => {
                            setCategory('Category 1');
                            setIsDown(!isDown);
                        }}
                    >Category 1</li>
                    <li
                        className='c1-item'
                        onClick={() => {
                            setCategory('Category 2');
                            setIsDown(!isDown);
                        }}
                    >Category 2</li>
                    <li
                        className='c1-item'
                        onClick={() => {
                            setCategory('Category 3');
                            setIsDown(!isDown);
                        }}
                    >Category 3</li>
                    <li
                        className='c1-item'
                        onClick={() => {
                            setCategory('Category 4');
                            setIsDown(!isDown);
                        }}
                    >Category 4</li>
                </ul>
            </div>
        </div>
    );
}

export default DropDownMenu;