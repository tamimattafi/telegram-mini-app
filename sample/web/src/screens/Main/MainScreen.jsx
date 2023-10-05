import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {PATH_BUTTONS, PATH_DATA, PATH_EVENTS, PATH_INPUTS} from "../../constants/Paths";
import './MainScreen.css';

const Main = () => {
    const {user} = useTelegram()
    const navigate = useNavigate();

    return (
        <div className={'mainScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Main Screen</TelegramText>
            </TelegramHeader>

            <TelegramText>Welcome {user?.displayName}!</TelegramText>

            <TelegramText className={'telegramSubtitle'}>Navigate to a screen:</TelegramText>
            <TelegramButton onClick={() => navigate(PATH_DATA)}>Data</TelegramButton>
            <TelegramButton onClick={() => navigate(PATH_BUTTONS)}>Buttons</TelegramButton>
            <TelegramButton onClick={() => navigate(PATH_EVENTS)}>Events</TelegramButton>
            <TelegramButton onClick={() => navigate(PATH_INPUTS)}>Inputs</TelegramButton>
        </div>
    );
};

export default Main;
