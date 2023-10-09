import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import IsVersionAtLeastFunction from "../../components/app/functions/IsVersionAtLeastFunction";
import SendDataFunction from "../../components/app/functions/SendDataFunction";
import SwitchInlineQueryFunction from "../../components/app/functions/SwitchInlineQueryFunction";
import RequestWriteAccessFunction from "../../components/app/functions/RequestWriteAccessFunction";
import RequestContactFunction from "../../components/app/functions/RequestContactFunction";
import ReadTextFromClipboardFunction from "../../components/app/functions/ReadTextFromClipboardFunction";

const BotFunctionsScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Bot Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <IsVersionAtLeastFunction />
            <SendDataFunction />
            <SwitchInlineQueryFunction />
            <ReadTextFromClipboardFunction />
            <RequestWriteAccessFunction />
            <RequestContactFunction />
        </TelegramScreen>
    );
};

export default BotFunctionsScreen;
