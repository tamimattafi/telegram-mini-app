import React, {useCallback} from 'react';
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import {useTelegram} from "../../../hooks/useTelegram";


/**
 * Since Bot API 6.2+
 *
 * showConfirm(message[, callback]) is a method that shows message in a simple confirmation window with 'OK' and
 * 'Cancel' buttons.
 *
 * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the
 * first argument will be a boolean indicating whether the user pressed the 'OK' button.
 *
 * @returns {Element}
 * @constructor
 */
const ShowConfirmFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const showConfirmCallback = useCallback(async (data) => {
        onReceivedEvent('showConfirm_Callback', data)
    }, [onReceivedEvent]);

    const onShowConfirm = (message) => {
        executeArgumentMethod(
            'showConfirm',
            message,
            () => webApp.showConfirm(message, showConfirmCallback)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'showConfirm(message[, callback])'}
            fielddescription={
                'Bot API 6.2+ A method that shows message in a simple confirmation window with \'OK\' and \'Cancel\' buttons. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the \'OK\' button.'
            }
            fieldhint={`Enter a message`}
            buttonlabel={'Execute'}
            onSubmit={onShowConfirm}
        />
    );
};

export default ShowConfirmFunction;
