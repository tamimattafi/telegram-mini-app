import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * ready() is a method that informs the Telegram app that the Mini App is ready to be displayed.
 * It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded.
 * Once this method is called, the loading placeholder is hidden and the Mini App is shown.
 * If the method is not called, the placeholder will be hidden only when the page is fully loaded.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 *
 */
const ReadyFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onReady = () => {
        executeMethod('ready', webApp.ready)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'ready()'}
            buttondescription={
                'A method that informs the Telegram app that the Mini App is ready to be displayed.\n' +
                'It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Mini App is shown.\n' +
                'If the method is not called, the placeholder will be hidden only when the page is fully loaded.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onReady}
        />
    );
};

export default ReadyFunction;
