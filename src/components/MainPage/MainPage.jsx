// import React from 'react';
import './mainpage.css'
import hand_icon from '../../images/hand_icon.png'
import arrow_icon from '../../images/arrow.png'
import hero_image from '../../images/hero_image.png'

const MainPage = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img className='hero_image' src={hero_image} alt="" />
            </div>
        </div>
        // <div className='mainpage'>
        //     <div className='img-div flex-item'>
        //         <img src="/src/images/model2.png" alt="" />
        //     </div>
        //     <div className='text-div flex-item'>
        //         <h1>New Collection <br/>For Fall</h1>
        //         <h3>Discover all the new arrival of ready-to-wear collection. </h3>
        //     </div>
        // </div>
    );
};

export default MainPage;