import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import OpenLinkFunction from "../../components/app/functions/OpenLinkFunction";
import OpenTelegramLinkFunction from "../../components/app/functions/OpenTelegramLinkFunction";
import OpenInvoiceFunction from "../../components/app/functions/OpenInvoiceFunction";

const LinkFunctionsScreen = () => {

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Link Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <OpenLinkFunction />
            <OpenTelegramLinkFunction />
            <OpenInvoiceFunction />
        </TelegramScreen>
    );
};

export default LinkFunctionsScreen;
