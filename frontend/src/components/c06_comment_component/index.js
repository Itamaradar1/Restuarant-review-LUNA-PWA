import React, { Component } from 'react';
import RatingComponent from '../c05_rating_component/index';
import './index.scss';

const CommentComponent = () => {
    return ( 
        <div className='c06-comment-component'>
            <div className='c06-comment-header'>
                <p className='c06-comment-author'>Review 1</p>
                <p className='c06-comment-datetime'>01.01.2018 15:22</p>
            </div>
            <div className='c06-comment-text'>
                This is horrible!
            </div>
        </div>
     );
}
 
export default CommentComponent;