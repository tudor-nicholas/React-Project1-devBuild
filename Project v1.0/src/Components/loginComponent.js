
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function verifyData(data) {

        let apiCart = data.map((val) => {
            return val.userCart
        });

        let apiId = data.map((val) => {
            return val.idUsers
        });

        if(typeof parseInt(apiId.toString()) === 'number' && !isNaN(parseInt(apiId.toString()))) {
            console.log('succes')
            localStorage.setItem('UserId', parseInt(apiId.toString()));
            localStorage.setItem('UserCart', parseInt(apiCart.toString()));
            navigate('/');
            window.location.reload();
        } else { console.log('error') }

    }

    function getUserData(event) {
        event.preventDefault()
        Axios.get('http://localhost:3001/getUser', {
            params: {email: email, password:password}
        }).then((response) => {
            verifyData(response.data);
        });
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in-box">
                <h1>Login</h1>
                <form className='sign-in-form' onSubmit={getUserData}>
                    <label className='sign-in-label'>Email</label>
                        <input
                        className='sign-in-input'
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    <label className='sign-in-label'>Password</label>
                       <input
                        className='sign-in-input'
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    <input className='submit-btn' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default LogIn;