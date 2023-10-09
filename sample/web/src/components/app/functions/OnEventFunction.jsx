import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import TelegramText from "../../kit/Text/TelegramText";
import TelegramButton from "../../kit/Button/TelegramButton";


/**
 * onEvent(eventType, eventHandler) is a method that sets the app event handler.
 * Check the list of available events at https://core.telegram.org/bots/webapps#events-available-for-mini-apps
 *
 * offEvent(eventType, eventHandler) is a method that deletes a previously set event handler.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const OnEventFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    let registeredEvent = ''
    // This callback handles clicks on the main button
    const onEvent = useCallback(async (data) => {
        onReceivedEvent(registeredEvent, JSON.stringify(data))
    }, [registeredEvent, onReceivedEvent]);

    const onOnEvent = (event) => {
        webApp.offEvent(registeredEvent, onEvent)
        registeredEvent = event

        executeArgumentMethod(
            'onEvent',
            event,
            () => webApp.onEvent(event, onEvent)
        )
    }

    const onOffEvent = () => {
        executeArgumentMethod(
            'offEvent',
            registeredEvent,
            () => webApp.offEvent(registeredEvent, onEvent)
        )
    }

    return (
        <>
            <TelegramMiniForm
                fieldlabel={'onEvent(eventType, eventHandler)'}
                fielddescription={
                    'A method that sets the app event handler. Check the list of available events at https://core.telegram.org/bots/webapps#events-available-for-mini-apps'
                }
                fieldhint={`Event key, e.g mainButtonClicked`}
                buttonlabel={'Execute'}
                onSubmit={onOnEvent}
            />

            <TelegramText className={'telegramSubtitle'}>offEvent(eventType, eventHandler)</TelegramText>
            <TelegramText className={'telegramHint'}>Turn off current registered event listener</TelegramText>
            <TelegramButton onClick={onOffEvent}>Execute</TelegramButton>
        </>
    );
};

export default OnEventFunction;
