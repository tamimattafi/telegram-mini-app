import React from 'react';
import './TelegramButton.css';

const TelegramButton = (props) => {
    return (
        <button {...props} className={'telegramButton ' + props.className}/>
    );
};

export default TelegramButton;
