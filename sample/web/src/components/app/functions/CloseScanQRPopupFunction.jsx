import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


/**
 * Since Bot API 6.4+
 *
 * closeScanQrPopup() is a method that closes the native popup for scanning a QR code opened with the showScanQrPopup
 * method.
 *
 * Run it if you received valid data in the event qrTextReceived.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const CloseScanQRPopupFunction = () => {
    const {webApp, executeMethod} = useTelegram()

    const onCloseScanQrPopup = () => {
        executeMethod('closeScanQrPopup', webApp.closeScanQrPopup)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'closeScanQrPopup()'}
            buttondescription={
                'Bot API 6.4+ A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method. Run it if you received valid data in the event qrTextReceived.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onCloseScanQrPopup}
        />
    );
};

export default CloseScanQRPopupFunction;