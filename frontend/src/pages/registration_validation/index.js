import React, { Component, useState } from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import ValidationForm from '../../components/form/validation';
import "./index.scss";

const RegistrationValidation = () => {
    return (
        <div className="registration-validation">
            <Header/>
            <ValidationForm/>
            <Footer/>
        </div>
    );
}

export default RegistrationValidation;