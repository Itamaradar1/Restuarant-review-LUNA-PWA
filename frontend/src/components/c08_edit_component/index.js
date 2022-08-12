import React, { Component, useState } from 'react';
import RatingComponent from '../c05_rating_component/index';
import ButtonOrangeXL from '../button_orange_xl/index';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const EditComponent = () => {
    // const [state, setState] = useState(initialState);
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Location, setLocation] = useState('')
    const [Phone, setPhone] = useState('')
    const [ThingILove, setThingsILove] = useState('')
    const [Description, setDescription] = useState('')

    let navigate = useNavigate();

    return ( 
        <div className='c08-edit-component'>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Username</p>
                {/* e => setEmail(e.target.value) */}
                <input className='c08-input-text-50' type='text' value={username} onChange={e => setUsername(e.target.value)} />
                <p className='c08-validation-error'>{ username.length === 0 ? 'This field is required' : ''}</p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>First name</p>
                <input className='c08-input-text-50' type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Last name</p>
                <input className='c08-input-text-50' type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>E-Mail</p>
                <input className='c08-input-text-50' type='text' value={Email} onChange={e => setEmail(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Location</p>
                <input className='c08-input-text-50' type='text' value={Location} onChange={e => setLocation(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Phone</p>
                <input className='c08-input-text-50' type='text' value={Phone} onChange={e => setPhone(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Things I love</p>
                <input className='c08-input-text-100' type='text' value={ThingILove} onChange={e => setThingsILove(e.target.value)} />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-input-field-small'>
                <p className='c08-edit-input-label'>Description</p>
                <textarea 
                    className='c08-input-textarea-100' 
                    type='textfield' 
                    value={Description} 
                    onChange={e => setDescription(e.target.value)} 
                    rows="5" cols="33"
                />
                <p className='c08-validation-error'></p>
            </div>
            <div className='c08-footer'>
                <ButtonOrangeXL label='Save' />
                {/* <Link value='Delete account' className='c08-link-delete' /> */}
                <div 
                    className='c08-link-delete'
                    onClick={() => navigate('/')}
                >Delete account</div>
            </div>
        </div>
     );
}

export default EditComponent;