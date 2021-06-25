import React from 'react';
import './Header.css';
import img from './AlmaBanner.jpg'

function Header(props) {
    return (
        <div className='header-container'>
            <img src={img} alt='logo empresa' />
        </div>
    )
}

export default Header;
