import React, { Component, useState } from 'react';
import ButtonOrangeLarge from '../../components/button_orange_large';
import "./index.scss";
import arrow_down from './arrow-down.svg';
import arrow_up from './arrow-up.svg';

const NewRestaurantForm = (props) => {


    const [isDown, setIsDown] = useState(true);
    const [category, setCategory] = useState('');

    const [isDownCountry, setIsDownCountry] = useState(true);
    const [country, setCountry] = useState('');

    const [isDownPriceLevel, setIsDownPriceLevel] = useState(true);
    const [pricelevel, setPriceLevel] = useState('');


    const handleUpload = (event) =>{
        
    }

    return (
        <div className="newrestaurantform">
            {/*<h2>Create new restaurant</h2>*/}

            <div className="fieldsbox">
                <div> 
                    <h4>Basic</h4>
                    <h5>Name*</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h4>Addres</h4>
                    <h5>Street*</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h4>Contact</h4>
                    <h5>Website</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h4>Details</h4>
                    <h5>Opening hours*</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h5>Category*</h5>
                    <div>
                        <input placeholder="Select a value..." type="text"/>
                        <img className='c1-arrow-newrestaurant' src={isDown ? arrow_down : arrow_up} onClick={() => setIsDown(!isDown)} />
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
                <div> 
                    <h5>City*</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h5>Phone*</h5>
                    <input placeholder="" type="text"/>
                </div>
                 <div>
                    <h5>Price level</h5>
                    <div>
                        <input placeholder="Select a value..." type="text"/>
                        <img className='c1-arrow-newrestaurant' src={isDownPriceLevel ? arrow_down : arrow_up} onClick={() => setIsDownPriceLevel(!isDownPriceLevel)} />
                    </div>
                    <div className={isDownPriceLevel ? 'c1-extended-part-hidden' : 'c1-extended-part'}>
                        <ul className='c1-items'>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setPriceLevel('PriceLevel 1');
                                    setIsDownPriceLevel(!isDownPriceLevel);
                                }}
                            >PriceLevel 1</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setPriceLevel('PriceLevel 2');
                                    setIsDownPriceLevel(!isDownPriceLevel);
                                }}
                            >PriceLevel 2</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setPriceLevel('PriceLevel 3');
                                    setIsDownPriceLevel(!isDownPriceLevel);
                                }}
                            >PriceLevel 3</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setPriceLevel('PriceLevel 4');
                                    setIsDownPriceLevel(!isDownPriceLevel);
                                }}
                            >PriceLevel 4</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5>Country*</h5>
                    <div>
                        <input placeholder="Select a value..." type="text"/>
                        <img className='c1-arrow-country-newrestaurant' src={isDownCountry ? arrow_down : arrow_up} onClick={() => setIsDownCountry(!isDownCountry)} />
                    </div>
                    <div className={isDownCountry ? 'c1-extended-country-part-hidden' : 'c1-extended-country--part'}>
                        <ul className='c1-items'>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setCountry('Country 1');
                                    setIsDownCountry(!isDownCountry);
                                }}
                            >Country 1</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setCountry('Country 2');
                                    setIsDownCountry(!isDownCountry);
                                }}
                            >Country 2</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setCountry('Country 3');
                                    setIsDownCountry(!isDownCountry);
                                }}
                            >Country 3</li>
                            <li
                                className='c1-item'
                                onClick={() => {
                                    setCountry('Country 4');
                                    setIsDownCountry(!isDownCountry);
                                }}
                            >Country 4</li>
                        </ul>
                    </div>
                </div>
                <div> 
                    <h5>ZIP</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h5>Email</h5>
                    <input placeholder="" type="text"/>
                </div>
                <div> 
                    <h5>Image</h5>
                    <label for='file' >CHOOSE A FILE...</label>
                    <input type="file" onClick={handleUpload} id="file" />
                </div>
            </div>
        </div>

    );
}

export default NewRestaurantForm;