
import React from 'react';
import ReactLogo from '../assets/ALogo.svg';
import Axios from 'axios';
import { useState } from 'react';

const Header = () => {
    
    let isLoggedIn = false;
    const localSUserId = localStorage.getItem("UserId");

    const [userName, setUserName] = useState("");

    function checkLogIn() {
        const check = localStorage.getItem("UserId");
        if(check !== null) {
            isLoggedIn = true
        } else {console.log('error')}
    }
    checkLogIn();

    function logOut() {
        localStorage.removeItem("UserId");
        window.location.reload();
    }

    function setName(data) {
        let uname = data.map((val) => {
            return val.name
        });
        setUserName(uname.toString());
    }

    function getName(event) {
        event.preventDefault()
        Axios.get('http://localhost:3001/getUserById', {
            params: {id : localSUserId}
        }).then((response) => {
            setName(response.data);
        });
    };

    return (
        <div className="custom-component header">
            <div className="logo-component">
                <a href='/'>
                    <img src={ReactLogo} alt='Logo' id='logo'/>
                </a>
            </div>
            <ul className="header-com-2">
                {isLoggedIn && <li><a href="/create" className='custom-header-link'>Create (Admin)</a></li>}
                <li><a href="/" className='custom-header-link'>Home</a></li>
                {isLoggedIn && <li><a href="/shop" className='custom-header-link'>Shop</a></li>}
                <li><a href="/" className='custom-header-link'>About</a></li>
                {!isLoggedIn && <li><a href="/sign-in" className='custom-header-link'>Sign-in</a></li>}
                {!isLoggedIn && <li><a href="/login" className='custom-header-link'>Login</a></li>}
                {isLoggedIn && <li><a href="/profile" className='custom-header-link' onMouseEnter={getName}>Profile, {userName}</a></li>}
                {isLoggedIn && <li><a href='/' onClick={logOut} className='custom-header-link'>LogOut</a></li>}
                {isLoggedIn && <li><a href="/cart"><img src={require('../assets/cart2.png')} alt='Logo' id='cart-logo'/></a></li>}
            </ul>
        </div>
    );
};

export default Header;