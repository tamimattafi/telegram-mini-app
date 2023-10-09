import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * Since Bot API 6.2+
 *
 * showAlert(message[, callback]) is a method that shows message in a simple alert with a 'Close' button.
 * If an optional callback parameter was passed, the callback function will be called when the popup is closed.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const ShowAlertFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const showAlertCallback = useCallback(async (data) => {
        onReceivedEvent('showAlert_Callback', data)
    }, [onReceivedEvent]);

    const onShowAlert = (message) => {
        executeArgumentMethod(
            'showAlert',
            message,
            () => webApp.showAlert(message, showAlertCallback)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'showAlert(message[, callback])'}
            fielddescription={
                'Bot API 6.2+ A method that shows message in a simple alert with a \'Close\' button. If an optional callback parameter was passed, the callback function will be called when the popup is closed.'
            }
            fieldhint={`Enter a message`}
            buttonlabel={'Execute'}
            onSubmit={onShowAlert}
        />
    );
};

export default ShowAlertFunction;
