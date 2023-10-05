import React from 'react';
import './TelegramText.css';

const TelegramText = (props) => {
    return (
        <p {...props} className={'text ' + props.className}/>
    );
};

export default TelegramText;
