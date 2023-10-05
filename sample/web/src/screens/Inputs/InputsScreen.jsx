import React, {useState} from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import './InputsScreen.css';
import {useTelegram} from "../../hooks/useTelegram";
import TelegramMiniForm from "../../components/MiniForm/TelegramMiniForm";
import TelegramOptionsForm from "../../components/OptionsForm/TelegramOptionsForm";

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

    const onSwitchInlineQuery = (query, options) => {
        const result = webApp.switchInlineQuery(query, options)
        onResult('switchInlineQuery', `${query}, ${options}`, result)
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
                fieldHint={`Bot version, e.g ${webApp.version}`}
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
                fieldHint={`#RRGGBB color, e.g ${webApp.headerColor}`}
                buttonLabel={'Execute'}
                onSubmit={onSetHeaderColor}
            />

            <TelegramMiniForm
                fieldLabel={'setBackgroundColor'}
                fieldDescription={
                    'Bot API 6.1+ A method that sets the app background color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.'
                }
                fieldHint={`#RRGGBB color, e.g ${webApp.backgroundColor}`}
                buttonLabel={'Execute'}
                onSubmit={onSetBackgroundColor}
            />

            <TelegramOptionsForm
                fieldLabel={'switchInlineQuery'}
                fieldDescription={
                    'Bot API 6.7+ A method that inserts the bot\'s username and the specified inline query in the current chat\'s input field. Query may be empty, in which case only the bot\'s username will be inserted. If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot\'s username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: users, bots, groups, channels.'
                }
                fieldHint={`Enter query or command, e.g /start`}
                optionsLabel={'choose_chat_types'}
                options={['users', 'bots', 'groups', 'channels']}
                buttonLabel={'Execute'}
                onSubmit={onSwitchInlineQuery}
            />
        </div>
    );
};

export default InputsScreen;
