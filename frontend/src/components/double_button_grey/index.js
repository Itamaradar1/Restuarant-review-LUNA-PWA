import React, { Component } from 'react';
import "./index.scss";
import like_svg from '../../assets/svg/like.svg';

const Double_button_grey = () => {
    return (
        <div className="double_button_grey">
            <div className='left'>
                <div className='left-block'>
                    <img className='logo' src={like_svg}></img>
                    <p>Like</p>
                    <p>63</p>
                </div>
            </div>
            <div className='right'>
                <div className='right-block'>
                    <p>Comment</p>
                    <p>23</p>
                </div>
            </div>
        </div>
    );
}

export default Double_button_grey;