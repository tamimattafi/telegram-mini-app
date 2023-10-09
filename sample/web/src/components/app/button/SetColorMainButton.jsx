import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";

/**
 * MainButton.color is the current button color. Set to themeParams.button_color by default.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const SetColorMainButton = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onSetColor = (color) => {
        executeArgumentMethod(
            'MainButton.setColor',
            color,
            () => { webApp.MainButton.color = color }
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'MainButton.color'}
            fielddescription={'Current button color. Set to themeParams.button_color by default.'}
            fieldhint={`#RRGGBB color, e.g ${webApp.MainButton.color}`}
            buttonlabel={'Execute'}
            onSubmit={onSetColor}
        />
    );
};

export default SetColorMainButton;
