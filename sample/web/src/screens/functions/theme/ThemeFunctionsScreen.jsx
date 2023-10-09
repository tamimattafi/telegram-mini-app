import React from 'react';
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../../components/kit/Header/TelegramHeader";
import TelegramText from "../../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../../components/app/info/BotAPIHeader/BotAPIHeader";
import SetHeaderColorFunction from "../../../components/app/functions/SetHeaderColorFunction";
import SetBackgroundColorFunction from "../../../components/app/functions/SetBackgroundColorFunction";

const ThemeFunctionsScreen = () => {

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Theme Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <SetHeaderColorFunction />
            <SetBackgroundColorFunction />
        </TelegramScreen>
    );
};

export default ThemeFunctionsScreen;
