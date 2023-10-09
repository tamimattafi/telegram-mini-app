import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * Since Bot API 6.4+
 *
 * readTextFromClipboard([callback]) is a method that requests text from the clipboard.
 * The Mini App will receive the event clipboardTextReceived.
 *
 * If an optional callback parameter was passed, the callback function will be called and the text from the clipboard
 * will be passed as the first argument.
 *
 * Note: this method can be called only for Mini Apps launched from the attachment menu and only in response to a user
 * interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button).
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const ReadTextFromClipboardFunction = () => {
    const {webApp, onReceivedEvent, executeMethod} = useTelegram()

    const readTextFromClipboardCallback = useCallback(async (data) => {
        onReceivedEvent('readTextFromClipboard_Callback', data)
    }, [onReceivedEvent]);

    const onReadTextFromClipboard = () => {
        executeMethod(
            'readTextFromClipboard',
            () => webApp.readTextFromClipboard(readTextFromClipboardCallback)
        )
    }

    return (
        <TelegramDetailedButton
            buttontitle={'readTextFromClipboard([callback])'}
            buttondescription={
                'Bot API 6.4+ A method that requests text from the clipboard. The Mini App will receive the event clipboardTextReceived. If an optional callback parameter was passed, the callback function will be called and the text from the clipboard will be passed as the first argument.' +
                '' +
                'Note: this method can be called only for Mini Apps launched from the attachment menu and only in response to a user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button).'
            }
            buttonlabel={'Execute'}
            onButtomClick={onReadTextFromClipboard}
        />
    );
};

export default ReadTextFromClipboardFunction;