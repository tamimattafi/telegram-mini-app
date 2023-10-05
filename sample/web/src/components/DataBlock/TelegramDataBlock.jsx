import React from 'react';
import './TelegramDataBlock.css';

const TelegramDataBlock = (props) => {
    return (
        <div {...props} className={'dataBlock ' + props.className}/>
    );
};

export default TelegramDataBlock;
