import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * Since Bot API 6.2+
 *
 * enableClosingConfirmation() is a method that enables a confirmation dialog while the user is trying to close
 * the Mini App.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const EnableClosingConfirmationFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onEnableClosingConfirmation = () => {
        executeMethod('enableClosingConfirmation', webApp.enableClosingConfirmation)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'enableClosingConfirmation()'}
            buttondescription={
                'Bot API 6.2+ A method that enables a confirmation dialog while the user is trying to close the Mini App.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onEnableClosingConfirmation}
        />
    );
};

export default EnableClosingConfirmationFunction;

