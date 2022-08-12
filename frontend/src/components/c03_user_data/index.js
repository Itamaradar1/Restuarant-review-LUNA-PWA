import React, { Component } from 'react';
import user_photo from './user_photo.jpg';
import star from './star.svg';
import comment from './comment.svg';
import restaurant from './restaurant.svg';
import edit from './edit.svg';
import './index.scss';
import { useNavigate } from 'react-router-dom';

// possible values for props: reviews, comments, restaurants, edit_profile
const UserData = (props) => {
    let navigate = useNavigate();

    return (
        <div className='c03-user-data'>
            <img className='c03-user-photo' src={user_photo} />
            <h1 className='c03-h1'>Laurent's profile</h1>
            <ul className='c03-items'>
                <li 
                    className={props.activeRow == 'reviews' ? 'c03-item-active' : 'c03-item'}
                    onClick={() => navigate('/user-profile/reviews')}
                >
                    <div className='c03-left'>
                        <img className='c03-image' src={star} />
                    </div>
                    Reviews
                </li>
                <li 
                    className={props.activeRow == 'comments' ? 'c03-item-active' : 'c03-item'}
                    onClick={() => navigate('/user-profile/comments')}
                >
                    <div className='c03-left'>
                        <img className='c03-image' src={comment} />
                    </div>
                    Comments
                </li>
                <li 
                    className={props.activeRow == 'restaurants' ? 'c03-item-active' : 'c03-item'}
                    onClick={() => navigate('/user-profile/restaurants')}
                >
                    <div className='c03-left'>
                        <img className='c03-image' src={restaurant} />
                    </div>
                    Restaurants
                </li>
                <li 
                    className={props.activeRow == 'edit_profile' ? 'c03-item-active' : 'c03-item'}
                    onClick={() => navigate('/user-profile/edit')}
                >
                    <div className='c03-left'>
                        <img className='c03-image' src={edit} />
                    </div>
                    Edit profile
                </li>
            </ul>
        </div>
    );
}

export default UserData;