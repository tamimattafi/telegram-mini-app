import React from 'react';
import './TelegramHeader.css';

const TelegramHeader = (props) => {
    return (
        <div {...props} className={'header ' + props.className}/>
    );
};

export default TelegramHeader;
