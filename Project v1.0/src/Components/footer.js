
import React from 'react';

import SvgEmail from '../assets/emaillogo.svg';
import SvgFacebook from '../assets/facebooklogo.svg';
import SvgTwitter from '../assets/twitterlogo.svg';
import SvgShop from '../assets/shoplogo.svg';
import SvgSuit from '../assets/suitlogo.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="flex-footer">
                <div className="footer-contact custom-border">
                    <h1>Contact</h1>
                    <div className="footer-phone flex-contact">
                        <img src={require('../assets/phoneicon.png')} className='phone-img' alt='img'/>
                        <div className='email-text'>
                            <h1>Phone Number</h1>
                            <h1>@0728 647 351</h1>
                        </div>
                    </div>
                    <div className='footer-email flex-contact'>
                        <img src={SvgEmail} className='phone-img' alt='img'/>
                        <div className='email-text'>
                            <h1>Alessandro</h1>
                            <h1>AlessandroINC@yahoo.bussiness</h1>
                        </div>
                    </div>
                    <div className='footer-facebook flex-contact'>
                        <img src={SvgFacebook} className='phone-img' alt='img'/>
                        <h1>@AlessandroInc.</h1>
                    </div>
                    <div className='footer-twitter flex-contact'>
                        <img src={SvgTwitter} className='phone-img' alt='img'/>
                        <h1>@Alessandro28</h1>
                    </div>
                </div>
                <div className='footer-service custom-border'>
                    <h1>Services</h1>
                    <div className='footer-shop flex-contact'>
                        <img src={SvgShop} className='phone-img' alt='img'/>
                        <a href='https://translate.google.ro/?hl=ro' className='link-style'>Alessandro Shop</a>
                    </div>
                    <div className='footer-about flex-contact'>
                        <img src={require('../assets/aboutlogo.png')} className='phone-img' alt='img'/>
                        <a href='https://translate.google.ro/?hl=ro' className='link-style'>About</a>
                    </div>
                    <div className='footer-custom-suits flex-contact'>
                        <img src={SvgSuit} className='phone-img' alt='img'/>
                        <a href='https://translate.google.ro/?hl=ro' className='link-style'>Custom suits</a>
                    </div>
                </div>
                <div className='footer-partners custom-border'>
                    <h1>Partners</h1>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Burberry</a>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Dolce & Gabbana</a>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Brioni</a>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Canali</a>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Armani</a>
                    <a href='https://translate.google.ro/?hl=ro' className='link-style'>Dries van Noten</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;