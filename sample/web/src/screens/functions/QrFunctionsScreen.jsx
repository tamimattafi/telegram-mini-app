import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import ShowScanQrPopupFunction from "../../components/app/functions/ShowScanQrPopupFunction";
import CloseScanQrPopupFunction from "../../components/app/functions/CloseScanQrPopupFunction";

const QrFunctionsScreen = () => {

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>QR Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <ShowScanQrPopupFunction />
            <CloseScanQrPopupFunction />
        </TelegramScreen>
    );
};

export default QrFunctionsScreen;
