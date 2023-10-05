import React from 'react';
import './TelegramHeader.css';

const TelegramHeader = (props) => {
    return (
        <div {...props} className={'telegramHeader ' + props.className}/>
    );
};

export default TelegramHeader;
