import React from 'react';
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import {useTelegram} from "../../hooks/Telegram";
import {useNavigate} from "react-router-dom";
import {PATH_BUTTONS, PATH_DATA, PATH_EVENTS, PATH_INPUTS} from "../Global/Paths";
import './MainScreen.css';

const Main = () => {
    const {user} = useTelegram()
    const navigate = useNavigate();

    return (
        <div className={'mainScreen'}>
            <Header>
                <Text>Main Screen</Text>
            </Header>

            <Text>Welcome {user?.username}!</Text>

            <Text>Navigate to a screen:</Text>
            <Button onClick={() => navigate(PATH_DATA)}>Data</Button>
            <Button onClick={() => navigate(PATH_BUTTONS)}>Buttons</Button>
            <Button onClick={() => navigate(PATH_EVENTS)}>Events</Button>
            <Button onClick={() => navigate(PATH_INPUTS)}>Inputs</Button>
        </div>
    );
};

export default Main;
