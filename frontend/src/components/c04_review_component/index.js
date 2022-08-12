import React, { Component } from 'react';
import RatingComponent from '../c05_rating_component/index';
import './index.scss';

const ReviewComponent = () => {
    return ( 
        <div className='c04-review-component'>
            <div className='c04-review-header'>
                <p className='c04-review-author'>Läderach Chocolatier Suisse</p>
                <p className='c04-review-datetime'>01.01.2018 15:22</p>
            </div>
            <div>
                <RatingComponent />
            </div>
            <div className='c04-review-text'>
                This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service. 
            </div>
        </div>
     );
}
 
export default ReviewComponent;