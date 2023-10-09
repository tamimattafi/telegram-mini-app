import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import './FunctionsScreen.css';
import TelegramDetailedButton from "../../components/DetailedButton/TelegramDetailedButton";

const FunctionsScreen = () => {
    const {webApp} = useTelegram()

    const onResult = (functionName, result) => {
        // Show function call result using an alert
        webApp.showAlert(`${functionName}() returned result(${result})`)
    }

    const onReceivedEvent = (event, data) => {
        // Show function call result using an alert
        webApp.showAlert(`received event(${event}) with data(${data})`)
    }

    // Check this section for more details https://core.telegram.org/bots/webapps#initializing-mini-apps
    const onEnableClosingConfirmation = () => {
        const result = webApp.enableClosingConfirmation()
        onResult('enableClosingConfirmation', result)
    }

    const onDisableClosingConfirmation = () => {
        const result = webApp.disableClosingConfirmation()
        onResult('disableClosingConfirmation', result)
    }

    const onClose = () => {
        webApp.exit()
    }

    return (
        <div className={'functionsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>


            <TelegramDetailedButton
                buttontitle={'enableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that enables a confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onClick={onEnableClosingConfirmation}
            />

            <TelegramDetailedButton
                buttontitle={'disableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that disables the confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onClick={onDisableClosingConfirmation}
            />
        </div>
    );
};

export default FunctionsScreen;
