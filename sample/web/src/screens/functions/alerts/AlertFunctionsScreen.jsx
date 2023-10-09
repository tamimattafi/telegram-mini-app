import React from 'react';
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../../components/kit/Header/TelegramHeader";
import TelegramText from "../../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../../components/app/info/BotAPIHeader/BotAPIHeader";
import EnableClosingConfirmationFunction from "../../../components/app/functions/EnableClosingConfirmationFunction";
import DisableClosingConfirmationFunction from "../../../components/app/functions/DisableClosingConfirmationFunction";
import ShowPopupFunction from "../../../components/app/functions/ShowPopupFunction";
import ShowAlertFunction from "../../../components/app/functions/ShowAlertFunction";
import ShowConfirmFunction from "../../../components/app/functions/ShowConfirmFunction";

const AlertFunctionsScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Alert Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <EnableClosingConfirmationFunction />
            <DisableClosingConfirmationFunction />

            <ShowPopupFunction />
            <ShowAlertFunction />
            <ShowConfirmFunction />
        </TelegramScreen>
    );
};

export default AlertFunctionsScreen;
