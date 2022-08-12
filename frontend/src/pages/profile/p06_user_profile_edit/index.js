import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer';
import UserData from '../../../components/c03_user_data/index';
import ReviewComponent from '../../../components/c04_review_component/index';
import CommentComponent from '../../../components/c06_comment_component/index';
import RestaurantComponent from '../../../components/c07_restaurant_component/index';
import ButtonOrangeXL from '../../../components/button_orange_xl/index';
import EditComponent from '../../../components/c08_edit_component/index';
import './index.scss';

const UserProfileEdit = () => {
    return (
        <div className='p06-user-profile'>
            <Header active='profile'/>
            <div className='p06-upper-photo'>
            </div>
            <div className='p06-main'>
                <div className='p06-left-part'>
                    <UserData activeRow='edit_profile' />
                </div>
                <div className='p06-middle-part'>
                    <div className='p06-user-profile-top'>
                        <div className='p06-name'>Laurent H.</div>
                        <div className='p06-row'>Zürich, CH</div>
                        <div className='p06-row'>6 reviews</div>
                        <div className='p06-row'>210 comments</div>
                    </div>
                    <p className='p06-header'> edit userprofile</p>
                    <div className='p06-user-profile-bottom'>
                        <ul className='p06-items'>
                            <li className='p06-item'>< EditComponent /></li>
                        </ul>
                        
                    </div>
                    <div className='p06-button-container'>
                        {/* <ButtonOrangeXL label='Create Restaurant' /> */}
                    </div>
                </div>
                <div className='p06-right-part'>
                    <p className='p06-rp-name'>about laurent</p>
                    <div className='p06-rp-attribute'>
                        <p className='p06-rp-label'>location</p>
                        <p className='p06-rp-value'>Zürich, CH</p>
                    </div>
                    <div className='p06-rp-attribute'>
                        <p className='p06-rp-label'>Luna member since</p>
                        <p className='p06-rp-value'>April, 2018</p>
                    </div>
                    <div className='p06-rp-attribute'>
                        <p className='p06-rp-label'>Things I love</p>
                        <p className='p06-rp-value'>Everything</p>
                    </div>
                    <div className='p06-rp-attribute'>
                        <p className='p06-rp-label'>Description</p>
                        <p className='p06-rp-value'>Im professional photographer with an eye for details 
                        in every thing I do in my live. Every time a pass by a nice restaurant i have to 
                        stop and take notes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfileEdit;