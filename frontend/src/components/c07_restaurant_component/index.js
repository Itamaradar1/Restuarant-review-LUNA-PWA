import React, { Component } from 'react';
import RatingComponent from '../c05_rating_component/index';
import './index.scss';

const RestaurantComponent = () => {
    return ( 
        <div className='c07-review-component'>
            <div className='c07-review-header'>
                <p className='c07-review-author'>Laurentio Gelato Store</p>
                {/* <p className='c07-review-datetime'>01.01.2018 15:22</p> */}
            </div>
            <div>
                <RatingComponent rating='1.5' />
            </div>
            <div className='c07-review-text'>
                Lorem ipsum dolor sit amet, et legere populo quodsi sea. Nec quodsi albucius eu, simul soleat accusata te sea. Vix maluisset sententiae et, eam an salutatus consectetuer, ludus partiendo te ius. Vivendum convenire pro in. Cum impedit honestatis eu.
            </div>
        </div>
     );
}

export default RestaurantComponent;