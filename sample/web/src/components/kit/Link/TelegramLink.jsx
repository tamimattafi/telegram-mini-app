import React from 'react';

const TelegramLink = (props) => {
    return (
        <a {...props} className={'telegramLink ' + props.className}/>
    );
};

export default TelegramLink;
