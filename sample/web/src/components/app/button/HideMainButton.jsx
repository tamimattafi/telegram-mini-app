import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * MainButton.hide() is a method to hide the button.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const HideMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onHide = () => {
        executeMethod('MainButton.hide', webApp.MainButton.hide)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'MainButton.hide()'}
            buttondescription={
                'A method to hide the button.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onHide}
        />
    );
};

export default HideMainButton;
