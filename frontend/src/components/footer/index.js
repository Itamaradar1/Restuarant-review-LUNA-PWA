import React from "react";
import './index.scss'
import facebook from '../../assets/svg/facebook.svg'
import twitter from '../../assets/svg/twitter.svg'
import googleplus from '../../assets/svg/googleplus.svg'
import instagram from '../../assets/svg/instagram.svg'


function Footer() {
    return (
        <div className="lunaFooter">
            <div className="upperBar">
                <div className="linkPanel">
                    <a className="a">About Us</a>
                    <a className="a">Press</a>
                    <a className="a">Blog</a>
                    <a className="a">iOS</a>
                    <a className="a">Android</a>
                </div>
                <div className="socialMediaPanel">
                    <img className='facebook-logo' width={40} height={40} src={facebook} alt='facebook logo'></img>
                    <img className='twitter-logo' width={40} height={40} src={twitter} alt='twitter logo'></img>
                    <img className='googleplus-logo' width={40} height={40} src={googleplus} alt='googleplus logo'></img>
                    <img className='instagram-logo' width={40} height={40} src={instagram} alt='instagram logo'></img>
                </div>
            </div>
            <div className="lowerBar">
                <a>&copy; Copyright Luna 2018</a>
            </div>
        </div>
    )
};


export default Footer;
