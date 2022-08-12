import React, { Component } from 'react';
import RestaurantPicture from '../../assets/pictures/restaurant_small.png';
import half_star from '../../assets/svg/half_star.svg';
import full_star from '../../assets/svg/full_star.svg';
import empty_star from '../../assets/svg/empty_star.svg';
import RatingComponent from '../c05_rating_component';
import "./index.scss";

const RestaurantComponent = (props) => {

    //console.log(props)

    return (
        <div className='rest-component' onClick={props.onclickevent}>
            <div className='rest-header'>
                <p className='rest-name'>{props.name}</p>
                <p className='rest-address'>{props.street}, {props.zip} {props.city}</p>
                <span className='rest-rating'>
                    <div className='rest-stars'>
                        <RatingComponent />
                    </div>
                    <p className='rest-comments'>{props.comments}</p>
                </span>
            </div>
            <img className='rest-photo' src={props.image?props.image:RestaurantPicture}/> 
        </div>
    );
}

export default RestaurantComponent;