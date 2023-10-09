import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * MainButton.hideProgress() is a method to hide the loading indicator.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const HideProgressMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onHideProgress = () => {
        executeMethod('MainButton.hideProgress', webApp.MainButton.hideProgress)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'MainButton.hideProgress()'}
            buttondescription={
                'A method to hide the loading indicator.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onHideProgress}
        />
    );
};

export default HideProgressMainButton;
