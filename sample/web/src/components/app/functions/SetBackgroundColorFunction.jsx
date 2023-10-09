import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * Since Bot API 6.1+
 *
 * setBackgroundColor(color) is a method that sets the app background color in the #RRGGBB format.
 * You can also use keywords bg_color and secondary_bg_color.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const SetBackgroundColorFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const onSetBackgroundColor = (color) => {
        executeArgumentMethod(
            'setBackgroundColor',
            color,
            () => webApp.setBackgroundColor(color)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'setBackgroundColor(color)'}
            fielddescription={
                'Bot API 6.1+ A method that sets the app background color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.'
            }
            fieldhint={`#RRGGBB color, e.g ${webApp.backgroundColor}`}
            buttonlabel={'Execute'}
            onSubmit={onSetBackgroundColor}
        />
    );
};

export default SetBackgroundColorFunction;
