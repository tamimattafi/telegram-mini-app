import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";

/**
 * SinceBot API 6.2+
 *
 * disableClosingConfirmation() is a method that disables the confirmation dialog while the user is trying to close
 * the Mini App.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const DisableClosingConfirmationFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onDisableClosingConfirmation = () => {
        executeMethod('disableClosingConfirmation', webApp.disableClosingConfirmation)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'disableClosingConfirmation()'}
            buttondescription={
                'Bot API 6.2+ A method that disables the confirmation dialog while the user is trying to close the Mini App.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onDisableClosingConfirmation}
        />
    );
};

export default DisableClosingConfirmationFunction;