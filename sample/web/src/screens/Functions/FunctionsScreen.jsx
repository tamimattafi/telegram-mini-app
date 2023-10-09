import React from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import './FunctionsScreen.css';
import ReadyFunction from "../../components/app/functions/ReadyFunction";
import ExpandFunction from "../../components/app/functions/ExpandFunction";
import EnableClosingConfirmationFunction from "../../components/app/functions/EnableClosingConfirmationFunction";
import DisableClosingConfirmationFunction from "../../components/app/functions/DisableClosingConfirmationFunction";
import CloseScanQRPopupFunction from "../../components/app/functions/CloseScanQRPopupFunction";
import ReadTextFromClipboardFunction from "../../components/app/functions/ReadTextFromClipboardFunction";
import RequestWriteAccessFunction from "../../components/app/functions/RequestWriteAccessFunction";
import RequestContactFunction from "../../components/app/functions/RequestContactFunction";
import CloseFunction from "../../components/app/functions/CloseFunction";


const FunctionsScreen = () => {
    return (
        <div className={'functionsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>

            <ReadyFunction />
            <ExpandFunction />
            <CloseFunction />

            <EnableClosingConfirmationFunction />
            <DisableClosingConfirmationFunction />

            <CloseScanQRPopupFunction />
            <ReadTextFromClipboardFunction />

            <RequestWriteAccessFunction />
            <RequestContactFunction/>
        </div>
    );
};

export default FunctionsScreen;
