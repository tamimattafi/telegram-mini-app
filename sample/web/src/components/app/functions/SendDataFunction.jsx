import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * sendData(data) is method used to send data to the bot.
 *
 * When this method is called, a service message is sent to the bot containing the data data of the length up to
 * 4096 bytes, and the Mini App is closed.
 *
 * See the field web_app_data in the class Message at https://core.telegram.org/bots/api#message
 *
 * This method is only available for Mini Apps launched via a Keyboard button.
 *
 * See keyboard buttons at https://core.telegram.org/bots/webapps#keyboard-button-mini-apps
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const SendDataFunction = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onSendData = (data) => {
        executeArgumentMethod(
            'sendData',
            data,
            () => webApp.sendData(data)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'sendData(data)'}
            fielddescription={
                'A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data data of the length up to 4096 bytes, and the Mini App is closed. See the field web_app_data in the class Message.' +
                'This method is only available for Mini Apps launched via a Keyboard button.'
            }
            fieldhint={`Enter some data, e.g /start`}
            buttonlabel={'Execute'}
            onSubmit={onSendData}
        />
    );
};

export default SendDataFunction;
