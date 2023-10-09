import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";

/**
 * MainButton.setParams(params) is a method to set the button parameters.
 *
 * The params parameter is an object containing one or several fields that need to be changed:
 * text - button text;
 * color - button color;
 * text_color - button text color;
 * is_active - enable the button;
 * is_visible - show the button.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const SetParamsMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onSetParams = (text) => {
        const json = JSON.parse(text)
        executeMethod(
            'MainButton.setParams',
            () => webApp.MainButton.setParams(json)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'MainButton.setParams(params)'}
            fielddescription={'A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:\n' +
                'text - button text;\n' +
                'color - button color;\n' +
                'text_color - button text color;\n' +
                'is_active - enable the button;\n' +
                'is_visible - show the button.'}
            fieldhint={`Enter valid json of main button params`}
            buttonlabel={'Execute'}
            onSubmit={onSetParams}
        />
    );
};

export default SetParamsMainButton;
