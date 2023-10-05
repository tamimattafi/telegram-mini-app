import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import {useTelegram} from "../../hooks/useTelegram";
import './DataScreen.css';
import TelegramJson from "../../components/Json/TelegramJson";

const DataScreen = () => {
    const { webApp } = useTelegram()
    return (
        <div className={'dataScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Data Screen</TelegramText>
            </TelegramHeader>

            <TelegramText className={'telegramSubtitle'}>initDataUnsafe:</TelegramText>
            <TelegramJson src={webApp.initDataUnsafe} dark={true}/>
        </div>
    );
};

export default DataScreen;
