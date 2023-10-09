import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";

/**
 * MainButton.setText(text) is a method to set the button text.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const SetTextMainButton = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onSetText = (text) => {
        executeArgumentMethod(
            'MainButton.setText',
            text,
            () => webApp.MainButton.setText(text)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'MainButton.setText(text)'}
            fielddescription={'A method to set the button text.'}
            fieldhint={`Enter button label`}
            buttonlabel={'Execute'}
            onSubmit={onSetText}
        />
    );
};

export default SetTextMainButton;
