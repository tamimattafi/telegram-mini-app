import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import SendMessageToServerCall from "../../components/app/server/SendMessageToServerCall";

const ServerScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Server Screen</TelegramText>
            </TelegramHeader>

            <TelegramText className={'telegramHint'}>
                Here you can find the available REST endpoints that you can interact with
            </TelegramText>

            <SendMessageToServerCall />
        </TelegramScreen>
    );
};

export default ServerScreen;
