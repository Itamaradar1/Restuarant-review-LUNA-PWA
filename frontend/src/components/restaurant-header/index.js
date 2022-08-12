import React, { Component, useState } from 'react';
import "./index.scss";
import half_star from '../../assets/svg/half_star.svg';
import full_star from '../../assets/svg/full_star.svg';
import empty_star from '../../assets/svg/empty_star.svg';

const RestaurantHeader = (props) => {
    return (
        <div className="restaurant-header">
            <h2>{props.name}</h2>
            <h3>{props.category}</h3>
            <div className='reviews'>
                <div className='stars'>
                    {/*math.floor and multiply image by this amount*/}
                    {<img src={full_star}/> /*needs to be automated */}
                    {<img src={full_star}/>}
                    {<img src={full_star}/>}
                    {/*half star if rest is between 0.5 and 0.99 else empty star*/ /*needs to be automated */}
                    {<img src={half_star} />}
                    {/*multiply by 5-math.ceil*/ /*needs to be automated */}
                    {<img src={empty_star} />}
                </div>
                <p>{props.reviewcount} reviews</p>
            </div>
            
        </div>
    );
}

export default RestaurantHeader;