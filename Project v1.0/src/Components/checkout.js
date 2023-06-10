
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51NG3qBJidReebcdVufMkeXtX0tFbu9JifBlI0nKTeQv43FLXjZXyWzyB1mv9DtJmB8D5qDIxQjkLtZJ7Wmb8VBYQ00JDSJoyoX');

const CheckoutPage = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getItemsFromSessionS();
  }, []);

  const getItemsFromSessionS = () => {
    const items = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const item = sessionStorage.getItem(key);
        items.push({ key, item });
    }
    setPrice(items);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
        const response = await axios.post('http://localhost:3001/createCheckoutSession', { price });

        const { sessionId } = response.data;

        await stripe.redirectToCheckout({
        sessionId,
        });
      }catch (error) {
        console.error('Error creating checkout session:', error);
      }
  };

  return (
    <div className='checkout-page-grid'>
      <div className='checkout-page-box'>
        <h1 className='checkout-page-h1'>Checkout</h1>
        <div className='checkout-flex'>
          <p className='checkout-page-p'>With </p>
          <p className='stripe-p'>Stripe </p>
        </div>
        <button className='checkout-page-button' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutPage;

  