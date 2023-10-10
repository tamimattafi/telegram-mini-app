import React from 'react';
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import {useTelegram} from "../../../hooks/useTelegram";
import {sendMessageToServer} from "../../../logic/server/HttpClient";


/**
 * /messages endpoint is used to send messages to the bot server using a REST API.
 * The bot will receive the message and echo it in the chat.
 *
 * @see sendMessageToServer
 */
const SendMessageToServerCall = () => {
    const {webApp} = useTelegram()

    // This id will be used by our backend to send messages to the chat with the user
    const queryId = webApp.initDataUnsafe?.query_id


    const onSendMessage = async (message) => {
        const response = await sendMessageToServer(message, queryId)
        const responseJson = JSON.stringify(response)
        webApp.showAlert(`response: ${responseJson}`)
    }

    return (
        <TelegramMiniForm
            fieldlabel={'/messages'}
            fielddescription={
                'This endpoint is used to send messages to the bot server using a REST API. ' +
                'The bot will receive the message and echo it in the chat'
            }
            fieldhint={`Enter a message`}
            buttonlabel={'Execute'}
            onSubmit={onSendMessage}
        />
    );
};

export default SendMessageToServerCall;

