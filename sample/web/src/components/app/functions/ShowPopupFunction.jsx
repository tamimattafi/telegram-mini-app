import React, {useCallback} from 'react';
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import {useTelegram} from "../../../hooks/useTelegram";


/**
 * Since Bot API 6.2+
 *
 * showPopup(params[, callback]) is a method that shows a native popup described by the params argument of the
 * type PopupParams.
 *
 * The Mini App will receive the event popupClosed when the popup is closed.
 *
 * If an optional callback parameter was passed, the callback function will be called and the field id of the pressed
 * button will be passed as the first argument.
 *
 * Example PopupParams:
 *   {
 *     "title":"This is pop up!",
 *     "message":"Yes!",
 *     "buttons": [{"type":"close"}]
 *   }
 *
 * @returns {Element}
 * @constructor
 */
const ShowPopupFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const showPopupCallback = useCallback(async (data) => {
        onReceivedEvent('showPopup_Callback', data)
    }, [onReceivedEvent]);

    const onShowPopup = (params) => {
        const json = JSON.parse(params)
        executeArgumentMethod(
            'showPopup',
            json,
            () => webApp.showPopup(json, showPopupCallback)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'showPopup(params[, callback])'}
            fielddescription={
                'Bot API 6.2+ A method that shows a native popup described by the params argument of the type PopupParams. The Mini App will receive the event popupClosed when the popup is closed. If an optional callback parameter was passed, the callback function will be called and the field id of the pressed button will be passed as the first argument.' +
                'Example: {\n' +
                '  "title":"This is pop up!",\n' +
                '  "message":"Yes!",\n' +
                '  "buttons": [{"type":"close"}]\n' +
                '}'
            }
            fieldhint={`Enter a valid PopupParams json`}
            buttonlabel={'Execute'}
            onSubmit={onShowPopup}
        />
    );
};

export default ShowPopupFunction;
