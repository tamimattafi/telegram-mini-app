import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * expand() is a method that expands the Mini App to the maximum available height.
 * To find out if the Mini App is expanded to the maximum height,
 * refer to the value of the Telegram.WebApp.isExpanded parameter.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 *
 */
const ExpandFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onExpand = () => {
        if (webApp.isExpanded) {
            return
        }

        executeMethod('expand', webApp.expand)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'expand()'}
            buttondescription={
                'A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to the maximum height, refer to the value of the Telegram.WebApp.isExpanded parameter'
            }
            buttonlabel={'Execute'}
            onButtomClick={onExpand}
        />
    );
};

export default ExpandFunction;