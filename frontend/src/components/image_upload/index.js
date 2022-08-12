import React from 'react';
import './index.scss'


const ImageUpload =()=>{
    return(
        <div className='imageupload' >
            <form>
                <h5>Image</h5>
                <input type='file' accept='image/*'></input>
                <label for='file' >CHOOSE A FILE...</label>
            </form>
        </div>
    )

    



}


export default ImageUpload;