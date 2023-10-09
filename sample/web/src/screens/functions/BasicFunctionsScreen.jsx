import React, {useEffect} from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import ReadyFunction from "../../components/app/functions/ReadyFunction";
import ExpandFunction from "../../components/app/functions/ExpandFunction";
import CloseFunction from "../../components/app/functions/CloseFunction";
import {useTelegram} from "../../hooks/useTelegram";

const BasicFunctionsScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Basic Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <ReadyFunction />
            <ExpandFunction />
            <CloseFunction />
        </TelegramScreen>
    );
};

export default BasicFunctionsScreen;
