import React, { Component, useState } from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import RegistrationForm from '../../components/form/registration';
import "./index.scss";

const Registration = () => {

    return (
        <div className="registration">
            <Header/>
            <RegistrationForm/>
            <Footer/>
        </div>
    );
}

export default Registration;