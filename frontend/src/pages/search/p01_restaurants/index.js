import React, { Component, useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {useNavigate} from "react-router-dom";
import RestaurantComponent from '../../../components/restaurant_component';
import DropDownMenu from '../../../components/c01_drop_down_menu/index';
import {useSelector} from "react-redux"
import RestaurantPicture from '../../../assets/pictures/restaurant_small.png';
import './index.scss';

const Restaurants = () => {
    //use Navigate from react
    const navigate = useNavigate();

    const [activeMenu, setActiveMenu] = useState('restaurants');

    const fetchInfosSelector = reduxState => reduxState.FetchInfosReducer;
    const reduxStateFetchedInfos = useSelector(fetchInfosSelector);
    const restaurantData = reduxStateFetchedInfos.allRestaurants;
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const clickHandler = (id) => {
        console.log(id)
        if(id===34859845060){
            navigate('/search/restaurants/:id')
        }
        else{
            navigate(`/search/restaurants/${id}`)
        }
    }

    return (
        <div className='p1-restaurants'>
            {/* <RestaurantComponent /> */}
            <div className='p1-header'>
                <Header active='search'/>
            </div>
            <div className='p1-search-bar'>
                <input className='p1-search-input' placeholder={'Search...'} type='text' />
                <DropDownMenu />
            </div>
            <div className='p1-menu-bar'>
                <div className='p1-menu'>
                    <ul className='p1-menu-items'>
                        <li
                            className={activeMenu === 'restaurants' ? 'p1-menu-item-active' : 'p1-menu-item'}
                            onClick={() => {setActiveMenu('restaurants'); navigate("/search/restaurants")}}
                        >restaurants</li>
                        <li
                            className={activeMenu === 'reviews' ? 'p1-menu-item-active' : 'p1-menu-item'}
                            onClick={() => {setActiveMenu('reviews'); navigate("/search/reviews")}}
                        >reviews</li>
                        <li
                            className={activeMenu === 'users' ? 'p1-menu-item-active' : 'p1-menu-item'}
                            onClick={() => {setActiveMenu('users'); navigate("/search/users")}}
                        >users</li>
                    </ul>
                </div>
            </div>
            <div className='p1-middle'>
                <div className='p1-middle-board'>
                    <RestaurantComponent 
                                    key={34859845060} 
                                    name={"Default Restaurant"} 
                                    street={"Street 1"} 
                                    zip={1234}
                                    city={"Ghost City"} 
                                    image={RestaurantPicture}
                                    comments={getRandomInt(20)}
                                    onclickevent={()=>clickHandler(34859845060)}
                                    category ={"Fine Dining"} 
                    />
                    {restaurantData.map((restaurant) => {
                        return <div key={restaurant.id} className={`cell_${restaurant.id}`}>
                                <RestaurantComponent 
                                    key={restaurant.id} 
                                    name={restaurant.name} 
                                    street={restaurant.street} 
                                    zip={restaurant.zip}
                                    city={restaurant.city} 
                                    image={restaurant.image} 
                                    comments={getRandomInt(50)}
                                    onclickevent={()=>clickHandler(restaurant.id)} 
                                    category ={restaurant.category}
                                />
                         </div>
                    })}
                </div>
            </div>
            <div className='p1-footer'>
                <Footer />
            </div>

        </div>
    );
}

export default Restaurants;