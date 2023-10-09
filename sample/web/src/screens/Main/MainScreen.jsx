import React from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {PATH_FUNCTIONS, PATH_DATA, PATH_EVENTS} from "../../constants/Paths";
import './MainScreen.css';

const Main = () => {
    const {user} = useTelegram()
    const navigate = useNavigate();

    return (
        <div className={'mainScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Main Screen</TelegramText>
            </TelegramHeader>

            <TelegramText>Welcome {user?.username}!</TelegramText>

            <TelegramText className={'telegramSubtitle'}>Navigate to a screen:</TelegramText>

            <TelegramButton onClick={() => navigate(PATH_DATA)}>Data Screen</TelegramButton>
            <TelegramText className={'telegramHint'}>
                Check the data transmitted by telegram or bot api to the mini app like initDataUnsafe, themeParams and more
            </TelegramText>

            <TelegramButton onClick={() => navigate(PATH_FUNCTIONS)}>Functions Screen</TelegramButton>
            <TelegramText className={'telegramHint'}>
                Trigger different functions and api calls on the mini app like toggling system buttons, triggering events and more
            </TelegramText>

            <TelegramButton onClick={() => navigate(PATH_EVENTS)}>Events Screen</TelegramButton>
            <TelegramText className={'telegramHint'}>
                Listen to some events sent by telegram or bot to the mini app
            </TelegramText>
        </div>
    );
};

export default Main;
