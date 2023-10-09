import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import OnEventFunction from "../../components/app/functions/OnEventFunction";

const EventFunctionsScreen = () => {

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Event Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <OnEventFunction />
        </TelegramScreen>
    );
};

export default EventFunctionsScreen;
