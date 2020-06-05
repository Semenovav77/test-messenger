import React from 'react';

import preloader from './../../assets/loading.gif';
import './Preloader.scss'

const Preloader = () => {
    return (
        <div className='loader'>
            <img src={preloader} alt='Preloader'/>
        </div>
    );
};

export default Preloader;