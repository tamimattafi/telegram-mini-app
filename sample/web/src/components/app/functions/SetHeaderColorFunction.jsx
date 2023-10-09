import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * Since Bot API 6.1+
 *
 * setHeaderColor(color) is method that sets the app header color in the #RRGGBB format.
 * You can also use keywords bg_color and secondary_bg_color.
 *
 * Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color or
 * Telegram.WebApp.themeParams.secondary_bg_color as a color or bg_color, secondary_bg_color keywords.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const SetHeaderColorFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const onSetHeaderColor = (color) => {
        executeArgumentMethod(
            'setHeaderColor',
            color,
            () => webApp.setHeaderColor(color)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'setHeaderColor(color)'}
            fielddescription={
                'Bot API 6.1+ A method that sets the app header color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.' +
                'Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or bg_color, secondary_bg_color keywords.'
            }
            fieldhint={`#RRGGBB color, e.g ${webApp.headerColor}`}
            buttonlabel={'Execute'}
            onSubmit={onSetHeaderColor}
        />
    );
};

export default SetHeaderColorFunction;
