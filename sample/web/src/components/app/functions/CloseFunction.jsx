import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * close() is a method that closes the Mini App.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const CloseFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onClose = () => {
        executeMethod('close', webApp.close, true)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'close()'}
            buttondescription={
                'A method that closes the Mini App.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onClose}
        />
    );
};

export default CloseFunction;