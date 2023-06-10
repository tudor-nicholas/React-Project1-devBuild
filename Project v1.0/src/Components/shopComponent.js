
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';


const Shop = () => {

    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/getList', {}).then((response) => {
            setShopList(response.data);
        });
    }, []);

    const deleteItem = (itemId) => {
        Axios.delete('http://localhost:3001/deleteItem', {
            params: {id: itemId}
        }).then((response) => {});
        window.location.reload();
    }

    const addToCart = (itemId) => {
        sessionStorage.setItem(itemId, itemId);
    };

    return (
        <div className='shop-front'>
            {shopList.map((val) => {
                const photoData = val.itemPhoto;
                const charArray = photoData.data.map((num) => String.fromCharCode(num));

                const base64Data = charArray.join('');

                return  <div className='shop-item-container'>
                            <h1 className='shop-item-title'>{val.itemName}</h1>
                            <img className='shop-item-img' src={`${base64Data}`} alt='img'></img>
                            <p className='shop-item-desc'>{val.itemDescription}</p>
                            <p className='shop-item-price'>Price : {val.itemPrice} $</p>
                            <div className='shop-btn-box'>
                                <button className='shop-btn' onClick={() => addToCart(val.iditems)}>Add to cart</button>
                                <button className='shop-btn'>Show item</button>
                                <button className='shop-btn' onClick={() => deleteItem(val.iditems)}>Delete item</button>
                            </div>
                        </div>
            })}
        </div>
    );
};

export default Shop;