import React, {useEffect} from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {
    PATH_FUNCTIONS,
    PATH_DATA,
    PATH_BUTTONS_MAIN,
    PATH_BUTTONS_BACK,
    PATH_HAPTIC,
    PATH_FUNCTIONS_BASIC
} from "../../constants/Paths";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramDetailedButton from "../../components/kit/DetailedButton/TelegramDetailedButton";

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

            <TelegramDetailedButton
                buttontitle={'Data Screen'}
                buttondescription={
                    'Check the data transmitted by telegram or bot api to the mini app like initDataUnsafe, themeParams and more'
                }
                buttonlabel={'Navigate to Data Screen'}
                onButtomClick={() => navigate(PATH_DATA)}
            />

            <TelegramDetailedButton
                buttontitle={'Functions Screen'}
                buttondescription={
                    'Trigger different functions and api calls on the mini app like toggling system buttons, triggering events and more'
                }
                buttonlabel={'Navigate to Functions Screen'}
                onButtomClick={() => navigate(PATH_FUNCTIONS)}
            />

            <TelegramDetailedButton
                buttontitle={'Main Button Screen'}
                buttondescription={
                    'Customize the main button and trigger different functions and events'
                }
                buttonlabel={'Navigate to Main Button Screen'}
                onButtomClick={() => navigate(PATH_BUTTONS_MAIN)}
            />

            <TelegramDetailedButton
                buttontitle={'Back Button Screen'}
                buttondescription={
                    'Customize the back button and trigger different functions and events'
                }
                buttonlabel={'Navigate to Back Button Screen'}
                onButtomClick={() => navigate(PATH_BUTTONS_BACK)}
            />

            <TelegramDetailedButton
                buttontitle={'Haptic Feedback Screen'}
                buttondescription={
                    'Trigger sounds and effects that are going to be played by the Telegram app'
                }
                buttonlabel={'Navigate to Haptic Feedback Screen'}
                onButtomClick={() => navigate(PATH_HAPTIC)}
            />
        </TelegramScreen>
    );
};

export default Main;
