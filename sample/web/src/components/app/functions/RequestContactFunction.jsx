import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";


const RequestContactFunction = () => {
    const {webApp, onReceivedEvent, executeMethod} = useTelegram()

    const requestContactCallback = useCallback(async (data) => {
        onReceivedEvent('requestContact_Callback', data)
    }, [onReceivedEvent]);

    const onRequestContact = () => {
        executeMethod(
            'requestContact',
            () => webApp.requestContact(requestContactCallback)
        )
    }

    return (
        <TelegramDetailedButton
            buttontitle={'requestContact([callback])'}
            buttondescription={
                'Bot API 6.9+ A method that shows a native popup prompting the user for their phone number. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onRequestContact}
        />
    );
};

export default RequestContactFunction;