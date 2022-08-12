import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer';
import UserData from '../../../components/c03_user_data/index';
import ReviewComponent from '../../../components/c04_review_component/index';
import CommentComponent from '../../../components/c06_comment_component/index';
import './index.scss';

const UserProfileComments = () => {
    return (
        <div className='p05-user-profile'>
            <Header active='profile'/>
            <div className='p05-upper-photo'>
            </div>
            <div className='p05-main'>
                <div className='p05-left-part'>
                    <UserData activeRow='comments' />
                </div>
                <div className='p05-middle-part'>
                    <div className='p05-user-profile-top'>
                        <div className='p05-name'>Laurent H.</div>
                        <div className='p05-row'>Zürich, CH</div>
                        <div className='p05-row'>6 reviews</div>
                        <div className='p05-row'>210 comments</div>
                    </div>
                    <p className='p05-header'> comments</p>
                    <div className='p05-user-profile-bottom'>
                        <ul className='p05-items'>
                            <li className='p05-item'>< CommentComponent /></li>
                            <li className='p05-item'>< CommentComponent /></li>
                            <li className='p05-item'>< CommentComponent /></li>
                            {/* <li className='p05-item'>< CommentComponent /></li> */}
                        </ul>
                        
                    </div>
                </div>
                <div className='p05-right-part'>
                    <p className='p05-rp-name'>about laurent</p>
                    <div className='p05-rp-attribute'>
                        <p className='p05-rp-label'>location</p>
                        <p className='p05-rp-value'>Zürich, CH</p>
                    </div>
                    <div className='p05-rp-attribute'>
                        <p className='p05-rp-label'>Luna member since</p>
                        <p className='p05-rp-value'>April, 2018</p>
                    </div>
                    <div className='p05-rp-attribute'>
                        <p className='p05-rp-label'>Things I love</p>
                        <p className='p05-rp-value'>Everything</p>
                    </div>
                    <div className='p05-rp-attribute'>
                        <p className='p05-rp-label'>Description</p>
                        <p className='p05-rp-value'>Im professional photographer with an eye for details 
                        in every thing I do in my live. Every time a pass by a nice restaurant i have to 
                        stop and take notes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfileComments;