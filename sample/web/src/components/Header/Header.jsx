import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div {...props} className={'header ' + props.className}/>
    );
};

export default Header;
