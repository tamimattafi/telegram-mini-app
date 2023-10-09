import React from 'react';
import './TelegramLink.css';

const TelegramLink = (props) => {
    return (
        <a {...props} className={'telegramLink ' + props.className}/>
    );
};

export default TelegramLink;
