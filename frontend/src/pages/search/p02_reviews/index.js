import React, { Component, useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {useNavigate} from "react-router-dom";
import RestaurantComponent from '../../../components/restaurant_component';
import DropDownMenu from '../../../components/c01_drop_down_menu/index';
import UserComment from '../../../components/user_comment/index';
import './index.scss';

const Restaurants = () => {
    //use Navigate from react
    const navigate = useNavigate();

    const [activeMenu, setActiveMenu] = useState('reviews');

    return (
        <div className='p2-reviews'>
            <div className='p2-header'>
                <Header active='search'/>
            </div>
            <div className='p2-search-bar'>
                <input className='p2-search-input' placeholder={'Search...'} type='text' />
                <DropDownMenu />
            </div>
            <div className='p2-menu-bar'>
                <div className='p2-menu'>
                    <ul className='p2-menu-items'>
                        <li
                            className={activeMenu === 'restaurants' ? 'p2-menu-item-active' : 'p2-menu-item'}
                            onClick={() => {setActiveMenu('restaurants'); navigate("/search/restaurants")}}
                        >restaurants</li>
                        <li
                            className={activeMenu === 'reviews' ? 'p2-menu-item-active' : 'p2-menu-item'}
                            onClick={() => {setActiveMenu('reviews'); navigate("/search/reviews")}}
                        >reviews</li>
                        <li
                            className={activeMenu === 'users' ? 'p2-menu-item-active' : 'p2-menu-item'}
                            onClick={() => {setActiveMenu('users'); navigate("/search/users")}}
                        >users</li>
                    </ul>
                </div>
            </div>
            <div className='p2-middle'>
                <div className='p2-middle-board'>
                    <UserComment />
                    <UserComment />
                    <UserComment />
                    <UserComment />
                    <UserComment />
                    <UserComment />
                    <UserComment />
                    <UserComment />
                </div>
            </div>
            <div className='p2-footer'>
                <Footer />
            </div>

        </div>
    );
}

export default Restaurants;