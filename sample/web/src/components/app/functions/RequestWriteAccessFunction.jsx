import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * Since Bot API 6.9+
 *
 * requestWriteAccess([callback]) is a method that shows a native popup requesting permission for the bot to send
 * messages to the user.
 *
 * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the
 * first argument will be a boolean indicating whether the user granted this access.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const RequestWriteAccessFunction = () => {
    const {webApp, onReceivedEvent, executeMethod} = useTelegram()

    const requestWriteAccessCallback = useCallback(async (data) => {
        onReceivedEvent('requestWriteAccess_Callback', data)
    }, [onReceivedEvent]);

    const onRequestWriteAccess = () => {
        executeMethod(
            'requestWriteAccess',
            () => webApp.requestWriteAccess(requestWriteAccessCallback)
        )
    }

    return (
        <TelegramDetailedButton
            buttontitle={'requestWriteAccess([callback])'}
            buttondescription={
                'Bot API 6.9+ A method that shows a native popup requesting permission for the bot to send messages to the user. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onRequestWriteAccess}
        />
    );
};

export default RequestWriteAccessFunction;