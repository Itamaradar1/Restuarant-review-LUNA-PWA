import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ButtonOrangeLarge from '../../components/button_orange_large'
import NewRestaurantForm from "../../components/new_restaurant_form/";
import './index.scss'


const NewRestaurant = () => {

    return (  
        <div className="new_restaurant">
            <Header />
            <main>
                <h2>Create new restaurant</h2>
                <hr/>
                <form className="newRestaurantForm">
                    <div className="leftPanel" >
                        <NewRestaurantForm />
                    </div>
                    <ButtonOrangeLarge label='Search'/>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default NewRestaurant;