import React, { Component, useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import UserInfo from '../../../components/c02_user_info/index';
import {useNavigate} from "react-router-dom";
import './index.scss';
import user_photo from '../../../assets/pictures/user_photo.png';

const Restaurants = () => {
    //use Navigate from react
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [activeMenu, setActiveMenu] = useState('users');
   
    const token = localStorage.getItem("token");

    //fetch user data when loading
    useEffect(()=>{
      const url = "https://luna-team-3.propulsion-learn.ch/backend/api/users/1/";
      const method = "GET";
      const headers = new Headers({'Authorization':`Bearer ${token}`});
      const config = {method,headers};
      fetch(url,config)
      .then(response => response.json())
      .then(data => {
        if(data){
            dispatch({type: "GET_ALLUSERS", payload: data})
        };
    })
    },[])

    const fetchInfosSelector = reduxState => reduxState.FetchInfosReducer;
    const reduxStateFetchedInfos = useSelector(fetchInfosSelector);
    const usersData = reduxStateFetchedInfos.allUsers;
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='p3-users'>
            <div className='p3-header'>
                <Header active='search' />
            </div>
            <div className='p3-search-bar'>
                <input className='p3-search-input' placeholder={'Search...'} type='text' />
            </div>
            <div className='p3-menu-bar'>
                <div className='p3-menu'>
                    <ul className='p3-menu-items'>
                        <li
                            className={activeMenu === 'restaurants' ? 'p3-menu-item-active' : 'p3-menu-item'}
                            onClick={() => {setActiveMenu('restaurants'); navigate("/search/restaurants")}}
                        >restaurants</li>
                        <li
                            className={activeMenu === 'reviews' ? 'p3-menu-item-active' : 'p3-menu-item'}
                            onClick={() => {setActiveMenu('reviews'); navigate("/search/reviews")}}
                        >reviews</li>
                        <li
                            className={activeMenu === 'users' ? 'p3-menu-item-active' : 'p3-menu-item'}
                            onClick={() => {setActiveMenu('users'); navigate("/search/users")}}
                        >users</li>
                    </ul>
                </div>
            </div>
            <div className='p3-middle'>
                <div className='p3-middle-board'>
                    <UserInfo 
                        key={909485930} 
                        first_name={"Laurent"} 
                        last_name={"H."} 
                        profile_picture={user_photo}
                        profile_description={"Lorem ipsum sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.."} 
                        reviews={getRandomInt(10)}
                    />
                    {usersData.map((user) => {
                        return <UserInfo 
                                    key={user.id} 
                                    first_name={user.first_name} 
                                    last_name={user.last_name} 
                                    profile_picture={user.profile_picture}
                                    profile_description={user.profile_description}
                                    reviews={getRandomInt(10)} 
                                />
                    })}
                </div>
            </div>
            <div className='p3-footer'>
                <Footer />
            </div>

        </div>
    );
}

export default Restaurants;