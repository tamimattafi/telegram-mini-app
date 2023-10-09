import React, {useCallback} from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import './FunctionsScreen.css';
import TelegramDetailedButton from "../../components/DetailedButton/TelegramDetailedButton";

const FunctionsScreen = () => {
    const {webApp, onReceivedEvent, executeMethod} = useTelegram()

    // Check this section for more details https://core.telegram.org/bots/webapps#initializing-mini-apps
    const onReady = () => {
        executeMethod('ready', webApp.ready)
    }

    const onExpand = () => {
        executeMethod('expand', webApp.expand)
    }

    const onClose = () => {
        executeMethod('close', webApp.close)
    }

    const onEnableClosingConfirmation = () => {
        executeMethod('enableClosingConfirmation', webApp.enableClosingConfirmation)
    }

    const onDisableClosingConfirmation = () => {
        executeMethod('disableClosingConfirmation', webApp.disableClosingConfirmation)
    }

    const onCloseScanQrPopup = () => {
        executeMethod('closeScanQrPopup', webApp.closeScanQrPopup)
    }

    const readTextFromClipboardCallback = useCallback(async (data) => {
        onReceivedEvent('readTextFromClipboard_Callback', data)
    }, [onReceivedEvent]);

    const onReadTextFromClipboard = () => {
        executeMethod('readTextFromClipboard', () => {
            webApp.readTextFromClipboard(readTextFromClipboardCallback)
        })
    }

    const requestWriteAccessCallback = useCallback(async (data) => {
        onReceivedEvent('requestWriteAccess_Callback', data)
    }, [onReceivedEvent]);

    const onRequestWriteAccess = () => {
        executeMethod('requestWriteAccess', () => {
            webApp.requestWriteAccess(requestWriteAccessCallback)
        })
    }

    const requestContactCallback = useCallback(async (data) => {
        onReceivedEvent('requestContact_Callback', data)
    }, [onReceivedEvent]);

    const onRequestContact = () => {
        executeMethod('requestContact', () => {
            webApp.requestContact(requestContactCallback)
        })
    }

    return (
        <div className={'functionsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>

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

            <TelegramDetailedButton
                buttontitle={'expand()'}
                buttondescription={
                    'A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to the maximum height, refer to the value of the Telegram.WebApp.isExpanded parameter'
                }
                buttonlabel={'Execute'}
                onButtomClick={onExpand}
            />

            <TelegramDetailedButton
                buttontitle={'close()'}
                buttondescription={
                    'A method that closes the Mini App.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onClose}
            />

            <TelegramDetailedButton
                buttontitle={'enableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that enables a confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onEnableClosingConfirmation}
            />

            <TelegramDetailedButton
                buttontitle={'disableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that disables the confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onDisableClosingConfirmation}
            />

            <TelegramDetailedButton
                buttontitle={'closeScanQrPopup()'}
                buttondescription={
                    'Bot API 6.4+ A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method. Run it if you received valid data in the event qrTextReceived.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onCloseScanQrPopup}
            />

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

            <TelegramDetailedButton
                buttontitle={'requestWriteAccess([callback])'}
                buttondescription={
                    'Bot API 6.9+ A method that shows a native popup requesting permission for the bot to send messages to the user. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onRequestWriteAccess}
            />

            <TelegramDetailedButton
                buttontitle={'requestContact([callback])'}
                buttondescription={
                    'Bot API 6.9+ A method that shows a native popup prompting the user for their phone number. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.'
                }
                buttonlabel={'Execute'}
                onButtomClick={onRequestContact}
            />
        </div>
    );
};

export default FunctionsScreen;
