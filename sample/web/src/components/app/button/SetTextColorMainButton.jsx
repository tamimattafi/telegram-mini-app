import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";

/**
 * MainButton.textColor is the current button text color. Set to themeParams.button_text_color by default.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const SetTextColorMainButton = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onSetTextColor = (color) => {
        executeArgumentMethod(
            'MainButton.setTextColor',
            color,
            () => { webApp.MainButton.textColor = color }
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'MainButton.textColor'}
            fielddescription={'Current button text color. Set to themeParams.button_text_color by default.'}
            fieldhint={`#RRGGBB color, e.g ${webApp.MainButton.textColor}`}
            buttonlabel={'Execute'}
            onSubmit={onSetTextColor}
        />
    );
};

export default SetTextColorMainButton;
