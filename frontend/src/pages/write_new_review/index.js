import React, { Component, useState } from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import RestaurantHeader from '../../components/restaurant-header';
import "./index.scss";
import half_star from '../../assets/svg/half_star.svg';
import full_star from '../../assets/svg/full_star.svg';
import empty_star from '../../assets/svg/empty_star.svg';
import ButtonOrangeLarge from '../../components/button_orange_large';

const WriteNewReview = () => {

    const placeholdertext = "Your review helps others learn about great local businesses. \n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."


    return (
        <div className="write-new-review">
            <Header/>
            <main>
                <RestaurantHeader name="Some Restaurant" category="Fine Dining" reviewcount={68} averagerating={3.5}/>
                <div className='new-review-form'>
                    <div className='rating'>
                        <div className='stars'>{/*needs to be dynamic on hover/change on click*/}
                            <img src={empty_star} />
                            <img src={empty_star} />
                            <img src={empty_star} />
                            <img src={empty_star} />
                            <img src={empty_star} />
                        </div>
                        <p>Select your rating</p>
                    </div>
                    <textarea id="review" name="review" placeholder={placeholdertext}/>
                    <div className='footline'>
                        <p>This field is required</p>
                        <ButtonOrangeLarge label="SUBMIT" />
                    </div>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}

export default WriteNewReview;