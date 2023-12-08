// import React from 'react';
import './mainpage.css'

const MainPage = () => {
    return (
        <div className='mainpage'>
            <div className='img-div flex-item'>
                <img src="/src/images/model2.png" alt="" />
            </div>
            <div className='text-div flex-item'>
                <h1>New Collection <br/>For Fall</h1>
                <h3>Discover all the new arrival of ready-to-wear collection. </h3>
            </div>
        </div>
    );
};

export default MainPage;