import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            {/* Header logo */}
            <img src={logo}/>
        </div>
    );
};

export default Header;