import React from 'react';
import './TelegramButton.css';

const TelegramButton = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default TelegramButton;
