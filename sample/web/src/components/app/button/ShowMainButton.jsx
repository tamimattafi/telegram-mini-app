import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * MainButton.show() is a method to make the button visible.
 *
 * Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the
 * Mini App interface.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const ShowMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onShow = () => {
        executeMethod('MainButton.show', webApp.MainButton.show)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'MainButton.show()'}
            buttondescription={
                'A method to make the button visible.' +
                'Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the Mini App interface.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onShow}
        />
    );
};

export default ShowMainButton;
