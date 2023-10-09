import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * MainButton.disable() is a method to disable the button.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const DisableMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onDisable = () => {
        executeMethod('MainButton.disable', webApp.MainButton.disable)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'MainButton.disable()'}
            buttondescription={
                'A method to disable the button.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onDisable}
        />
    );
};

export default DisableMainButton;
