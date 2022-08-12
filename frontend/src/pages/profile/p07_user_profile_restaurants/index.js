import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer';
import UserData from '../../../components/c03_user_data/index';
import ReviewComponent from '../../../components/c04_review_component/index';
import CommentComponent from '../../../components/c06_comment_component/index';
import RestaurantComponent from '../../../components/c07_restaurant_component/index';
import ButtonOrangeXL from '../../../components/button_orange_xl/index';
import './index.scss';

const UserProfileRestaurants = () => {
    return (
        <div className='p07-user-profile'>
            <Header active='profile'/>
            <div className='p07-upper-photo'>
            </div>
            <div className='p07-main'>
                <div className='p07-left-part'>
                    <UserData activeRow='restaurants' />
                </div>
                <div className='p07-middle-part'>
                    <div className='p07-user-profile-top'>
                        <div className='p07-name'>Laurent H.</div>
                        <div className='p07-row'>Zürich, CH</div>
                        <div className='p07-row'>6 reviews</div>
                        <div className='p07-row'>210 comments</div>
                    </div>
                    <p className='p07-header'> restaurants</p>
                    <div className='p07-user-profile-bottom'>
                        <ul className='p07-items'>
                            <li className='p07-item'>< RestaurantComponent /></li>
                            {/* <li className='p07-item'>< RestaurantComponent /></li> */}
                            {/* <li className='p07-item'>< RestaurantComponent /></li> */}
                            {/* <li className='p07-item'>< CommentComponent /></li> */}
                        </ul>
                        
                    </div>
                    <div className='p07-button-container'>
                        <ButtonOrangeXL label='Create Restaurant' />
                    </div>
                </div>
                <div className='p07-right-part'>
                    <p className='p07-rp-name'>about laurent</p>
                    <div className='p07-rp-attribute'>
                        <p className='p07-rp-label'>location</p>
                        <p className='p07-rp-value'>Zürich, CH</p>
                    </div>
                    <div className='p07-rp-attribute'>
                        <p className='p07-rp-label'>Luna member since</p>
                        <p className='p07-rp-value'>April, 2018</p>
                    </div>
                    <div className='p07-rp-attribute'>
                        <p className='p07-rp-label'>Things I love</p>
                        <p className='p07-rp-value'>Everything</p>
                    </div>
                    <div className='p07-rp-attribute'>
                        <p className='p07-rp-label'>Description</p>
                        <p className='p07-rp-value'>Im professional photographer with an eye for details 
                        in every thing I do in my live. Every time a pass by a nice restaurant i have to 
                        stop and take notes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfileRestaurants;