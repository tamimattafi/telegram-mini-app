import React from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import './FunctionsScreen.css';
import {useTelegram} from "../../hooks/useTelegram";
import TelegramLink from "../../components/kit/Link/TelegramLink";


const FunctionsScreen = () => {
    const {webApp} = useTelegram()

    return (
        <div className={'functionsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>

            <TelegramText className={'telegramText'}>
                The version of the Bot API available in the user's Telegram app: {webApp.version}
            </TelegramText>

            <TelegramText className={'telegramText'}>
                Please check the docs for more information about the <TelegramLink href="https://core.telegram.org/bots/webapps#initializing-mini-apps">Functions List</TelegramLink>
            </TelegramText>
        </div>
    );
};

export default FunctionsScreen;
