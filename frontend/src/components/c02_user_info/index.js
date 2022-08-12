import React, { Component } from 'react';
import RestaurantPicture from '../../assets/pictures/restaurant_small.png';
import Double_button_grey from '../double_button_grey';
import user_photo from '../../assets/pictures/user_photo.png';
import user_photo_default from '../../assets/pictures/clipart60203.png';
import "./index.scss";

const UserInfo = (props) => {

    

    return (
        <div className='c02-user-info'>
            <div className='c02-header'>
                <img className='c02-user-photo' src={props.profile_picture?props.profile_picture:user_photo_default } />
                <div className='c02-owner'>
                    <p className='c02-name'>{props.first_name || props.last_name?`${props.first_name} ${props.last_name}`:"Anonymous"}</p>
                    <p className='c02-reviews'>{props.reviews} Reviews in total</p>
                </div>
            </div>
            <div className='c02-footer'>
                <div className='c02-upper-part'>
                    {/*<p className='c02-restaurant-name'>Colinz Bar</p>*/}
                    <p className='c02-restaurant-description'>
                        {props.profile_description?
                        props.profile_description
                        :
                        "Lorem ipsum sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.."
                        }
                        <span className='c02-read-more'>  read more</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;