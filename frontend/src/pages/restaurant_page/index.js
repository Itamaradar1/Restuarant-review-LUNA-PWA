import React, { Component, useState } from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import RestaurantHeader from '../../components/restaurant-header';
import "./index.scss";
import {useNavigate} from "react-router-dom";
import InputFieldFilter from '../../components/input_field_filter';
import User_review from '../../components/user_review';
import ButtonOrangeLarge from '../../components/button_orange_large';
import clock from '../../assets/svg/clock.svg';
import money from '../../assets/svg/money.svg';

const RestaurantPage = () => {
    //use Navigate from react
    const navigate = useNavigate();

    return (
        <div className="restaurant-page">
            <Header active='search'/>
            <main>
                <div className="img-group"> 
                        <RestaurantHeader name="Some Restaurant" category="Fine Dining" reviewcount={68} averagerating={3.5}/>
                        <div className='secondary-image'/>
                </div>
                <section>
                    <div className='left-section'>
                        <InputFieldFilter/>
                        <User_review/>
                        <User_review/> {/*just for demo, needs to be rendered automatically depending on amount of reviews*/}
                    </div>
                    <div className='gap-trick'/>
                    <div className='right-section'>
                        <div className='restaurant-page-details'>
                            <img src={clock}/>
                            <p>Monday-Friday 9:00 am - 8:00 pm</p>
                        </div>
                        <hr/>
                        <div className='restaurant-page-details'>
                            <img src={money}/>
                            <p>Pricelevel: $$$</p>
                        </div>
                        <span>
                            <ButtonOrangeLarge label='WRITE A REVIEW' clickevent={()=>navigate("/search/restaurants/:id/new-review")}/>
                            <ButtonOrangeLarge label='EDIT DATA'clickevent={()=>navigate("/newrestaurant")}/>
                        </span>
                    </div>
                </section>    
            </main>
            <Footer/>
        </div>
    );
}

export default RestaurantPage;