
import React from 'react';

import SvgImg from '../assets/starsvg.svg';

const HomeReview = () => {
    return (
        <div className="review">
            <h1 id='review-h1-text'>We also have the best customers!</h1>
            <section className="review-container">
                <div className="photo-container">
                    <div className='flex-img'>
                        <img src={require('../assets/profile1.jpg')} className="review-img" alt='img'/>
                        <div className='flex-name'>
                            <h1 className='review-name'>Benjamin Johnson</h1>
                            <h1 className='review-nickname'>@Benjamin.Johnson1</h1>
                        </div>
                    </div>
                    <div className='flex-star'>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                    </div>
                </div>
                <div className="review-text">
                    <p>Wow! I'm blown away by the outstanding experience your site provided. The ease of navigation and extensive product range exceeded my 
                        expectations. I effortlessly found exactly what I needed, and the smooth checkout process was a joy. The attention to detail and 
                        dedication to customer satisfaction are evident in every aspect. Your site deserves nothing less than five stars for delivering an 
                        excellent online shopping experience. It's now my go-to destination for all my shopping needs in this world!
                        </p>
                </div>
            </section>
            <section className="review-container">
                <div className="photo-container">
                    <div className='flex-img'>
                        <img src={require('../assets/profile2.jpeg')} className="review-img" alt='img'/>
                        <div className='flex-name'>
                            <h1 className='review-name'>Olivia Stone</h1>
                            <h1 className='review-nickname'>@Olivia.S</h1>
                        </div>
                    </div>
                    <div className='flex-star'>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                    </div>
                </div>
                <div className="review-text">
                    <p>I am absolutely thrilled with the exceptional service I received from your site! The vast selection of high-quality products surpassed my 
                        expectations. From browsing to checkout, the user-friendly interface made my shopping experience a breeze. The competitive prices and 
                        lightning-fast delivery are a testament to your commitment to customer satisfaction. I highly recommend your site to anyone seeking convenience, 
                        reliability, and top-notch products. Without a doubt, I'll be returning for all my future needs!
                        </p>
                </div>
            </section>
            <section className="review-container">
                <div className="photo-container">
                    <div className='flex-img'>
                        <img src={require('../assets/profile3.jpg')} className="review-img" alt='img'/>
                        <div className='flex-name'>
                            <h1 className='review-name'>Alexander Lane</h1>
                            <h1 className='review-nickname'>@Alexander35</h1>
                        </div>
                    </div>
                    <div className='flex-star'>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                    </div>
                </div>
                <div className="review-text">
                    <p>I can't sing enough praises for your exceptional site! The exemplary customer support team went above and beyond to 
                        address all my inquiries promptly and efficiently. I was thoroughly impressed by the quick shipping and the superb 
                        product quality. The prices offered are unbeatable, and the overall shopping experience was smooth and hassle-free. Your 
                        site has earned my trust and loyalty. I won't hesitate to recommend it to friends and family. Thank you for setting the 
                        benchmark for excellence!
                        </p>
                </div>
            </section>
            <section className="review-container">
                <div className="photo-container">
                    <div className='flex-img'>
                        <img src={require('../assets/profile4.jpg')} className="review-img" alt='img'/>
                        <div className='flex-name'>
                            <h1 className='review-name'>William Sparks</h1>
                            <h1 className='review-nickname'>@Sparky</h1>
                        </div>
                    </div>
                    <div className='flex-star'>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                        <img src={SvgImg} className="review-star" alt='img'/>
                    </div>
                </div>
                <div className="review-text">
                    <p>Discovering your website was a revelation! The thoughtfully designed interface, combined with an extensive range of products, 
                        made my shopping journey a delight. Placing my order was a seamless process, and the package arrived promptly and in 
                        pristine condition. The meticulous attention to detail and unwavering commitment to customer satisfaction are evident at 
                        every step. I wholeheartedly endorse your site and encourage others to experience the joy of shopping with you. You have 
                        earned a lifelong customer!
                        </p>
                </div>
            </section>
        </div>
    );
};

export default HomeReview;