import React, { Component } from 'react';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer';
import UserData from '../../../components/c03_user_data/index';
import ReviewComponent from '../../../components/c04_review_component/index';
import './index.scss';
import { useEffect } from 'react';




const UserProfile = () => {

    useEffect(() => {
        console.log('hello world!');
    });  


    return (
        <div className='p04-user-profile'>
            <Header active='profile'/>
            <div className='p04-upper-photo'>
            </div>
            <div className='p04-main'>
                <div className='p04-left-part'>
                    <UserData activeRow='reviews' />
                </div>
                <div className='p04-middle-part'>
                    <div className='p04-user-profile-top'>
                        <div className='p04-name'>Laurent H.</div>
                        <div className='p04-row'>Zürich, CH</div>
                        <div className='p04-row'>6 reviews</div>
                        <div className='p04-row'>210 comments</div>
                    </div>
                    <p className='p04-header'> reviews</p>
                    <div className='p04-user-profile-bottom'>
                        <ul className='p04-items'>
                            <li className='p04-item'>< ReviewComponent /></li>
                            <li className='p04-item'>< ReviewComponent /></li>
                            <li className='p04-item'>< ReviewComponent /></li>
                            <li className='p04-item'>< ReviewComponent /></li>
                        </ul>
                        
                    </div>
                </div>
                <div className='p04-right-part'>
                    <p className='p04-rp-name'>about laurent</p>
                    <div className='p04-rp-attribute'>
                        <p className='p04-rp-label'>location</p>
                        <p className='p04-rp-value'>Zürich, CH</p>
                    </div>
                    <div className='p04-rp-attribute'>
                        <p className='p04-rp-label'>Luna member since</p>
                        <p className='p04-rp-value'>April, 2018</p>
                    </div>
                    <div className='p04-rp-attribute'>
                        <p className='p04-rp-label'>Things I love</p>
                        <p className='p04-rp-value'>Everything</p>
                    </div>
                    <div className='p04-rp-attribute'>
                        <p className='p04-rp-label'>Description</p>
                        <p className='p04-rp-value'>Im professional photographer with an eye for details 
                        in every thing I do in my live. Every time a pass by a nice restaurant i have to 
                        stop and take notes</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserProfile;