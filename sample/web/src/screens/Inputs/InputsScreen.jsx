import React, {useState} from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import './InputsScreen.css';
import {useTelegram} from "../../hooks/useTelegram";
import TelegramMiniForm from "../../components/MiniForm/TelegramMiniForm";

const InputsScreen = () => {
    const {webApp} = useTelegram()

    const onResult = (functionName, argument, result) => {
        // Show function call result using an alert
        webApp.showAlert(`${functionName}(${argument}) returned ${result}`)
    }

    // Check this section for more details https://core.telegram.org/bots/webapps#initializing-mini-apps
    const onIsVersionAtLeast = (version) => {
        const isCompatible = webApp.isVersionAtLeast(version)
        onResult('isVersionAtLeast', version, isCompatible)
    }

    return (
        <div className={'inputsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Inputs Screen</TelegramText>
            </TelegramHeader>

            <TelegramMiniForm
                fieldLabel={'isVersionAtLeast'}
                fieldDescription={'Returns true if the user\'s app supports a version of the Bot API that is equal to or higher than the version passed as the parameter'}
                buttonLabel={'Execute'}
                onSubmit={onIsVersionAtLeast}
            />
        </div>
    );
};

export default InputsScreen;
