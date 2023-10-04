import React from 'react';
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import {useTelegram} from "../../hooks/Telegram";
import './DataScreen.css';

const DataScreen = () => {
    const { webApp } = useTelegram()
    return (
        <div className={'dataScreen'}>
            <Header>
                <Text>Data Screen</Text>
            </Header>

            <Text>initDataUnsafe:</Text>
            <Text>{JSON.stringify(webApp.initDataUnsafe)}</Text>
        </div>
    );
};

export default DataScreen;
