import React, { Component, useState } from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import LoginForm from '../../components/form/login';
import "./index.scss";

const RegistrationLogin = () => {

    return (
        <div className="registration-login">
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    );
}

export default RegistrationLogin;