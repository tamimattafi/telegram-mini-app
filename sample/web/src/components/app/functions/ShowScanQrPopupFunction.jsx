import React, {useCallback} from 'react';
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import {useTelegram} from "../../../hooks/useTelegram";


/**
 * Since Bot API 6.4+
 *
 * showScanQrPopup(params[, callback]) is a method that shows a native popup for scanning a QR code described by the
 * params argument of the type ScanQrPopupParams.
 *
 * The Mini App will receive the event qrTextReceived every time the scanner catches a code with text data.
 *
 * If an optional callback parameter was passed, the callback function will be called and the text from the QR code will
 * be passed as the first argument.
 *
 * Returning true inside this callback function causes the popup to be closed.
 *
 * Example ScanQrPopupParams:
 *   {
 *      "text": "Scanning a QR!"
 *   }
 *
 * @returns {Element}
 * @constructor
 */
const ShowScanQrPopupFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const showScanQrPopupCallback = useCallback(async (data) => {
        onReceivedEvent('showScanQrPopup_Callback', data)
    }, [onReceivedEvent]);

    const onShowScanQrPopup = (params) => {
        const json = JSON.parse(params)
        executeArgumentMethod(
            'showScanQrPopup',
            json,
            () => webApp.showScanQrPopup(json, showScanQrPopupCallback)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'showScanQrPopup(params[, callback])'}
            fielddescription={
                'Bot API 6.4+ A method that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams. The Mini App will receive the event qrTextReceived every time the scanner catches a code with text data. If an optional callback parameter was passed, the callback function will be called and the text from the QR code will be passed as the first argument. Returning true inside this callback function causes the popup to be closed.' +
                'Example: {\n' +
                '  "text": "Scanning a QR!"\n' +
                '}'
            }
            fieldhint={`Enter a valid ScanQrPopupParams json`}
            buttonlabel={'Execute'}
            onSubmit={onShowScanQrPopup}
        />
    );
};

export default ShowScanQrPopupFunction;
