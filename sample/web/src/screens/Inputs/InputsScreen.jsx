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
        webApp.showAlert(`${functionName}(${argument}) returned result(${result})`)
    }

    // Check this section for more details https://core.telegram.org/bots/webapps#initializing-mini-apps
    const onIsVersionAtLeast = (version) => {
        const result = webApp.isVersionAtLeast(version)
        onResult('isVersionAtLeast', version, result)
    }

    const onSetHeaderColor = (color) => {
        const result = webApp.setHeaderColor(color)
        onResult('setHeaderColor', color, result)
    }

    const onSetBackgroundColor = (color) => {
        const result = webApp.setBackgroundColor(color)
        onResult('setBackgroundColor', color, result)
    }

    return (
        <div className={'inputsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Inputs Screen</TelegramText>
            </TelegramHeader>

            <TelegramText className={'telegramText'}>The version of the Bot API available in the user's Telegram app: {webApp.version}</TelegramText>

            <TelegramMiniForm
                fieldLabel={'isVersionAtLeast'}
                fieldDescription={'Returns true if the user\'s app supports a version of the Bot API that is equal to or higher than the version passed as the parameter'}
                buttonLabel={'Execute'}
                onSubmit={onIsVersionAtLeast}
            />

            <TelegramMiniForm
                fieldLabel={'setHeaderColor'}
                fieldDescription={
                    'Bot API 6.1+ A method that sets the app header color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.\n' +
                    '\n' +
                    'Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or bg_color, secondary_bg_color keywords.'
                }
                buttonLabel={'Execute'}
                onSubmit={onSetHeaderColor}
            />

            <TelegramMiniForm
                fieldLabel={'setBackgroundColor'}
                fieldDescription={
                    'Bot API 6.1+ A method that sets the app background color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.'
                }
                buttonLabel={'Execute'}
                onSubmit={onSetBackgroundColor}
            />
        </div>
    );
};

export default InputsScreen;
