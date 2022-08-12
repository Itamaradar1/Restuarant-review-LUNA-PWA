import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import mealPhoto from './food-in-nice-france-min.jpeg';
import ButtonOrangeXL from '../../components/button_orange_xl/index';
import RestaurantComponent from '../../components/restaurant_component';
import {useSelector, useDispatch} from "react-redux"
import RestaurantPicture from '../../assets/pictures/restaurant_small.png';
import './index.scss';
import {fetchAndDispatchSearchData} from "../../store/actions/dataSearch";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const [search,setSearch] = useState("");

    //fetch user data when loading
    useEffect(()=>{
      const url = "https://luna-team-3.propulsion-learn.ch/backend/api/restaurants/";
      const method = "GET";
      const headers = new Headers({'Authorization':`Bearer ${token}`});
      const config = {method,headers};
      fetch(url,config)
      .then(response => response.json())
      .then(data => {
        if(data){
            dispatch({type: "GET_ALLRESTAURANTS", payload: data})
        };
    })
    },[])

    const fetchInfosSelector = reduxState => reduxState.FetchInfosReducer;
    const reduxStateFetchedInfos = useSelector(fetchInfosSelector);
    const restaurantData = reduxStateFetchedInfos.allRestaurants;

    // search
    const [restaurantResults,setRestaurantResults] = useState(restaurantData);
    const [searchPressed,setsearchPressed] = useState(false);

    const clickSearchHandler = () => {
        setsearchPressed(true);
        const filterdata = restaurantData.filter(item => {
            const obj = Object.values(item)
            return obj.join("").indexOf(search) !== -1
            })
        setRestaurantResults(filterdata);    
        setSearch("");
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
        <div className='homepage'>
            <div className='header'>
                <Header active='home' />
            </div>
            <div className='main-top'>
                {/* <img className='background-picture' src={mealPhoto} ></img> */}
                <input className='search-input' name='Search' placeholder={'Search...'} type='text' value={search} onChange={e => setSearch(e.target.value)}/>
                <ButtonOrangeXL label='Search' onclickevent={clickSearchHandler}/>
            </div>
            <div className='main-bottom'>
                <div className='titel_24'>
                    BEST RATED RESTAURANTS
                </div>
                {searchPressed? 
                <div className='row'>
                <RestaurantComponent 
                                key={34859845060} 
                                name={"Some Restaurant"} 
                                street={"Street 1"} 
                                zip={1234}
                                city={"Ghost City"} 
                                image={RestaurantPicture} 
                                comments={12}
                                onclickevent={()=>clickHandler(34859845060)}
                                category ={"Fine Dining"} 
                />
                
                {restaurantResults.map((restaurant) => {
                        return <div key={restaurant.id} className={`cell_${restaurant.id}`}>
                            <RestaurantComponent 
                                key={restaurant.id} 
                                name={restaurant.name} 
                                street={restaurant.street} 
                                zip={restaurant.zip}
                                city={restaurant.city} 
                                image={restaurant.image} 
                                comments={33}
                                onclickevent={()=>clickHandler(restaurant.id)} 
                                category ={restaurant.category}  
                            />
                     </div>
                    
                })}
            </div>
                : 
                <div className='row'>
                    <RestaurantComponent 
                                    key={34859845060} 
                                    name={"Some Restaurant"} 
                                    street={"Street 1"} 
                                    zip={1234}
                                    city={"Ghost City"} 
                                    image={RestaurantPicture} 
                                    comments={12}
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
                                    comments={33}
                                    onclickevent={()=>clickHandler(restaurant.id)}
                                    category ={restaurant.category}  
                                />
                         </div>
                        
                    })}
                </div>
                }
                
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;