import React, { Component } from 'react';
import half_star from '../../assets/svg/half_star.svg';
import full_star from '../../assets/svg/full_star.svg';
import empty_star from '../../assets/svg/empty_star.svg';
import './index.scss';

// props: rating -> can have following values [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]
// 
const RatingComponent = (props) => {
    let floatRating;
    let intRating;

    if (props.rating === undefined) {
        let number = Math.floor(Math.random() * 10);

        let arrRatings = ['0.5', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'];

        floatRating = parseFloat(arrRatings[number]);
        intRating = parseInt(arrRatings[number]);
    }
    else {
        floatRating = parseFloat(props.rating);
        intRating = parseInt(props.rating);
    }


    if (floatRating > 5) floatRating = 5;
    if (floatRating < 0) floatRating = 0;
    
    let arrStars = [empty_star, empty_star, empty_star, empty_star, empty_star];

    function setRating() {
        for (let i=0; i<parseInt(floatRating); i++) {
            arrStars[i] = full_star;
        }
    
        if ( floatRating > intRating )
            arrStars[Math.floor(floatRating)] = half_star;
    }

    setRating();

    return ( 
        <div className='c05-rating-component'>
            { arrStars.map( star => {
                return <img key={Math.random(5000)} className='c05-start' src={star} />
            } ) }
        </div>
     );
}
 
export default RatingComponent;