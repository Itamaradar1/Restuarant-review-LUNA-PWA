import React, { Component } from 'react';
import RestaurantPicture from '../../assets/pictures/restaurant_small.png';
import Double_button_grey from '../double_button_grey';
import user_photo from '../../assets/pictures/user_photo.png';
import "./index.scss";

const UserComment = () => {
    return (
        <div className='user-component'>
            <div className='header'>
                <img className='user-photo' src={user_photo} />
                <div className='owner'>
                    <p className='name'>Laurent H.</p>
                    <p className='reviews'>6 Reviews in total</p>
                </div>
            </div>
            <div className='footer'>
                <div className='upper-part'>
                    <p className='restaurant-name'>Colinz Bar</p>
                    <p className='restaurant-description'>
                        Lorem ipsum sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque..
                        <span className='read-more'>  read more</span>
                    </p>
                </div>
                <Double_button_grey />
                <div className='lower-part'>
                    <div className='comments'>Latest comments</div>
                    <div className='author'>Colin Wirz</div>
                    <div className='text'>Actually you have no taste!</div>
                    <div className='author'>Laurent Mayer</div>
                    <div className='text'>Sorry bro!</div>
                </div>

            </div>
        </div>
    );
}

export default UserComment;