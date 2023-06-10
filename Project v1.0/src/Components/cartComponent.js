
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

    const [cartName, setCartName] = useState('');
    const [cartEmail, setCartEmail] = useState('');
    const [cartAddress, setCartAddress] = useState('');
    const [dbUserData, setDbUserData] = useState([]);
    const [sessionSItems, setSessionSItems] = useState([]);
    const [itemsFromDB, setItemsFromDB] = useState([]);
  
    const localSUserId = localStorage.getItem('UserId');
    let dbName = dbUserData.map((val) => val.name).toString();
    let dbEmail = dbUserData.map((val) => val.email).toString();
  
    useEffect(() => {
        Axios.get('http://localhost:3001/getUserCart', { params: { id: localSUserId } }).then((response) => {
            setDbUserData(response.data);
        });
    }, [localSUserId]);
  
    useEffect(() => {
        getItemsFromSessionS();
    }, []);
  
    useEffect(() => {
        sessionSItems.forEach((val) => {
            Axios.get('http://localhost:3001/getCartItem', { params: { id: val.item } }).then((response) => {
            setItemsFromDB((prevItems) => [...prevItems, ...response.data]);
            });
        });
    }, [sessionSItems]);
  
    function sendToCheckout() {
        if(dbName != null){
            Axios.post('http://localhost:3001/postOrder', {
                name: dbName,
                email: dbEmail,
                address: cartAddress
            }).then(() => {});
        } else {
            Axios.post('http://localhost:3001/postOrder', {
                name: cartName,
                email: cartEmail,
                address: cartAddress
            }).then(() => {});
        }
        navigate('/checkout');
    }
  
    const getItemsFromSessionS = () => {
        const items = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const item = sessionStorage.getItem(key);
            items.push({ key, item });
        }
        setSessionSItems(items);
    };

    const deleteItemFromStorage = (id) => {
        sessionStorage.removeItem(id);
        window.location.reload();   
    }
  
    return (
        <div className='cart-front'>
           <div className='show-product-box'>
                {itemsFromDB.map((val) => {
                    const photoData = val.itemPhoto;
                    const charArray = photoData.data.map((num) => String.fromCharCode(num));
    
                    const base64Data = charArray.join('');

                    return <div className='product-box'>
                            <img className='product-img' src={`${base64Data}`} alt='img'></img>
                            <h1 className='product-name'>{val.itemName}</h1>
                            <h1 className='product-price'>{val.itemPrice} $</h1>
                            <button className='shop-btn' onClick={() => deleteItemFromStorage(val.iditems)}>Delete from cart</button>
                           </div>
                })}
           </div>
           <div className='purchase-box'>
                <h1 className='purchase-h1'>Select Information</h1>
                <form className='purchase-form'>
                    <label className='purchase-label'>Name</label>
                    <input
                        className='purchase-input'
                        type="text" 
                        value={dbName}
                        onChange={(e) => setCartName(e.target.value)}
                        required/>
                    <label className='purchase-label'>Email</label>
                    <input
                        className='purchase-input'
                        type="text" 
                        value={dbEmail}
                        onChange={(e) => setCartEmail(e.target.value)}
                        required/>
                    <label className='purchase-label'>Address</label>
                    <textarea
                        rows="4" 
                        cols="35"
                        className='purchase-input purchase-textarea'
                        type="textarea" 
                        value={cartAddress}
                        onChange={(e) => setCartAddress(e.target.value)}
                        required
                        />
                    <input className='purchase-btn' type="submit" onClick={sendToCheckout} value={'Go to checkout'}/>
                </form>
           </div>
        </div>
    );
};

export default Cart;