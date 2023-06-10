
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    function isValidEmail(testEmail) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(testEmail);
    }

    function isValidPassword(testPassword) {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(testPassword);
    }

    function generateRandomNumber() {
        const min = 100000000;
        const max = 999999999;

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
        return randomNumber;
    }
    let cartNumber = generateRandomNumber();

    const verifyInputs = (event) => {
        event.preventDefault()

        const verifyedEmail = isValidEmail(email);
        const verifyedPassword = isValidPassword(password); 
        
        if(verifyedEmail === true && verifyedPassword === true) {
            sendUserSignIn();
        } else {
            setIsErrorVisible(true);
            console.log(isErrorVisible);
            console.log('error')
        }
    }

    const sendUserSignIn = () => {
        Axios.post('http://localhost:3001/postUser', {
            name: name,
            email: email,
            password: password,
            cartNumber: cartNumber
        }).then(() => {

        });
        navigate('/login');
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in-box">
                <h1>Sign-In</h1>
                {isErrorVisible && <p className='custom-p-error'>some of the boxes where filled incorrectly</p>}
                <form className='sign-in-form'>
                    <label className='sign-in-label'>Name</label>
                    <input
                        className='sign-in-input'
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                    <label className='sign-in-label'>Email</label>
                    <input
                        className='sign-in-input'
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <label className='sign-in-label'>Password</label>
                    <input
                        className='sign-in-input'
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <input className='submit-btn' type="submit" onClick={verifyInputs}/>
                </form>
            </div>
        </div>
    );
};

export default SignIn;