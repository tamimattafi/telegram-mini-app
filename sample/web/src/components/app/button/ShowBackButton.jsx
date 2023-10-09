import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * Since Bot API 6.1+
 * BackButton.show() is a method to make the button active and visible.
 *
 * @see https://core.telegram.org/bots/webapps#backbutton
 */
const ShowBackButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onShow = () => {
        executeMethod('BackButton.show', webApp.BackButton.show, true)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'BackButton.show()'}
            buttondescription={
                'Bot API 6.1+ A method to make the button active and visible.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onShow}
        />
    );
};

export default ShowBackButton;
