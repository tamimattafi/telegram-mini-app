import React, {useEffect} from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import { PATH_SERVER} from "../../constants/Paths";
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
                buttontitle={'Server Screen'}
                buttondescription={
                    'Interact with the bot server through REST API'
                }
                buttonlabel={'Navigate to Server Screen'}
                onButtomClick={() => navigate(PATH_SERVER)}
            />
        </TelegramScreen>
    );
};

export default Main;
