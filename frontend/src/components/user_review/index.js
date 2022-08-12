import React, { Component, useState } from 'react';
import user_photo from '../../assets/pictures/user_photo.png';
import half_star from '../../assets/svg/half_star.svg';
import full_star from '../../assets/svg/full_star.svg';
import empty_star from '../../assets/svg/empty_star.svg';
import Double_button_grey from '../double_button_grey/index';
import InputFieldPost from '../input_field_post/index';
import "./index.scss";

const User_review = () => {
    const [hiddenComments, setCommentsVisibility] = useState(true);

    return (
        <div className='user_review'>
            <div className='upper-section'>
                <div className='left-side'>
                    <img className='user-photo' src={user_photo} />
                    <div className='owner'>
                        <p className='name'>Laurent H.</p>
                        <p className='reviews'>6 Reviews in total</p>
                    </div>
                    <div className='stars'>
                        <img src={full_star} />
                        <img src={full_star} />
                        <img src={full_star} />
                        <img src={half_star} />
                        <img src={empty_star} />
                    </div>
                </div>
                <div className='date-time'>
                    01.01.2018 15:22
                </div>
            </div>
            <div className='comment'>
                This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.
            </div>
            <div className='lower-section' >
                <div className='left-side'>
                    <div className={hiddenComments ? 'grey-button' : 'grey-button-hidden'}>
                        <Double_button_grey />
                    </div>
                    <div className={hiddenComments ? 'post-field-hidden' : 'post-field'}>
                        <InputFieldPost />
                    </div>
                </div>
                <div className='right-side' >
                    <p onClick={() => setCommentsVisibility(!hiddenComments)}>
                        {hiddenComments ? 'View all comments' : 'Hide'}
                    </p>
                </div>
            </div>
            <div className={hiddenComments ? 'comments-hidden' : 'comments'}>
                <div className='comment'>
                    <div className='left-side'>
                        <p className='name'>Colin Wirz</p>
                        <p className='text'>
                            Actually you have no taste!
                        </p>
                    </div>
                    <div className='right-side'>
                        01.01.2018 15:22
                    </div>
                </div>
                <div className='comment'>
                    <div className='left-side'>
                        <p className='name'>Laurent Mayer</p>
                        <p className='text'>
                            Sorry bro!
                        </p>
                    </div>
                    <div className='right-side'>
                        01.01.2018 15:22
                    </div>
                </div>
                <div className='comment'>
                    <div className='left-side'>
                        <p className='name'>Laurent Mayer</p>
                        <p className='text'>
                            I can't imagine!
                        </p>
                    </div>
                    <div className='right-side'>
                        01.01.2018 15:22
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User_review;