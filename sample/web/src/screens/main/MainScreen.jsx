import React, {useEffect} from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {PATH_FUNCTIONS, PATH_DATA, PATH_BUTTONS_MAIN, PATH_BUTTONS_BACK} from "../../constants/Paths";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";

const Main = () => {
    const {user} = useTelegram()
    const navigate = useNavigate();

    return (
        <TelegramScreen showbackbutton={false}>
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

            <TelegramButton onClick={() => navigate(PATH_BUTTONS_MAIN)}>Main Button Screen</TelegramButton>
            <TelegramText className={'telegramHint'}>
                Customize the main button and trigger different functions and events
            </TelegramText>

            <TelegramButton onClick={() => navigate(PATH_BUTTONS_BACK)}>Back Button Screen</TelegramButton>
            <TelegramText className={'telegramHint'}>
                Customize the back button and trigger different functions and events
            </TelegramText>
        </TelegramScreen>
    );
};

export default Main;
