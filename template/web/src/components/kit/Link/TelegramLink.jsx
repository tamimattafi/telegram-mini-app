import React from 'react';
import './TelegramLink.css';
import {useTelegram} from "../../../hooks/useTelegram";

const TelegramLink = (props) => {
    const {webApp} = useTelegram()

    const options = {
        try_instant_view: true
    }

    const onClick = () => {
        webApp.openLink(props.href, options)
    }

    return (
        <u {...props} onClick={onClick} className={'telegramLink ' + props.className}/>
    );
};

export default TelegramLink;
