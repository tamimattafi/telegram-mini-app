import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * Since Bot API 6.1+
 * BackButton.hide() is a method to hide the button.
 *
 * @see https://core.telegram.org/bots/webapps#backbutton
 */
const HideBackButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onShow = () => {
        executeMethod('BackButton.hide', webApp.BackButton.hide, true)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'BackButton.hide()'}
            buttondescription={
                'Bot API 6.1+ A method to hide the button.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onShow}
        />
    );
};

export default HideBackButton;
