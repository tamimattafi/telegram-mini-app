import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * MainButton.enable() is a method to enable the button.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const EnableMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onEnable = () => {
        executeMethod('MainButton.enable', webApp.MainButton.enable)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'MainButton.enable()'}
            buttondescription={
                'A method to enable the button.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onEnable}
        />
    );
};

export default EnableMainButton;
