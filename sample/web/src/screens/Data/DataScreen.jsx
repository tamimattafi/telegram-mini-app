import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import {useTelegram} from "../../hooks/useTelegram";
import './DataScreen.css';

const DataScreen = () => {
    const { webApp } = useTelegram()
    return (
        <div className={'dataScreen'}>
            <TelegramHeader>
                <TelegramText>Data Screen</TelegramText>
            </TelegramHeader>

            <TelegramText>initDataUnsafe:</TelegramText>
            <TelegramText>{JSON.stringify(webApp.initDataUnsafe)}</TelegramText>
        </div>
    );
};

export default DataScreen;
