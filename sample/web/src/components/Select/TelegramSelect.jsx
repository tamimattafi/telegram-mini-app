import React from 'react';
import './TelegramSelect.css';

const TelegramSelect = (props) => {
    return (
        <select multiple {...props} className={'telegramSelect ' + props.className}>
            { props.elements.map((element, index) => <option key={index}>{element}</option>) }
        </select>
    );
};

export default TelegramSelect;
