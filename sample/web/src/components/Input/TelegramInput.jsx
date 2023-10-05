import React from 'react';
import './TelegramInput.css';

const TelegramInput = (props) => {
    return (
        <input {...props} className={'input ' + props.className}/>
    );
};

export default TelegramInput;
