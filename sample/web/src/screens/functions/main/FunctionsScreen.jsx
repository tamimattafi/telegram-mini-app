import React from 'react';
import TelegramHeader from "../../../components/kit/Header/TelegramHeader";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramDetailedButton from "../../../components/kit/DetailedButton/TelegramDetailedButton";
import {useNavigate} from "react-router-dom";
import {
    PATH_FUNCTIONS_ALERTS,
    PATH_FUNCTIONS_BASIC,
    PATH_FUNCTIONS_BOT,
    PATH_FUNCTIONS_EVENTS, PATH_FUNCTIONS_LINKS, PATH_FUNCTIONS_QR, PATH_FUNCTIONS_THEME
} from "../../../constants/Paths";
import BotAPIHeader from "../../../components/app/info/BotAPIHeader/BotAPIHeader";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";

const FunctionsScreen = () => {
    const navigate = useNavigate();

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <TelegramDetailedButton
                buttontitle={'Basic functions'}
                buttondescription={
                    'Try functions that interact with basic functionality of the Mini App, such as ready(), close() etc'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_BASIC)}
            />

            <TelegramDetailedButton
                buttontitle={'Alert functions'}
                buttondescription={
                    'Try functions that use popup functionality of the Mini App, such as showAlert(), showConfirm() etc'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_ALERTS)}
            />

            <TelegramDetailedButton
                buttontitle={'Event functions'}
                buttondescription={
                    'Try functions that interact with events of the Mini App, Bot and Telegram, such as onEvent()'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_EVENTS)}
            />

            <TelegramDetailedButton
                buttontitle={'Bot functions'}
                buttondescription={
                    'Try functions that interact with bot functionality of the Mini App, such as sendData()'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_BOT)}
            />

            <TelegramDetailedButton
                buttontitle={'Theme functions'}
                buttondescription={
                    'Try functions that interact with theme and color scheme of the Mini App, such as setHeaderColor()'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_THEME)}
            />

            <TelegramDetailedButton
                buttontitle={'Link functions'}
                buttondescription={
                    'Try functions that interact with links functionality of the Mini App, such as openLink()'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_LINKS)}
            />

            <TelegramDetailedButton
                buttontitle={'QR functions'}
                buttondescription={
                    'Try functions that interact with QR functionality of the Mini App, such as showScanQrPopup()'
                }
                buttonlabel={'Try Now'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_QR)}
            />
        </TelegramScreen>
    );
};

export default FunctionsScreen;
