import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import {useTelegram} from "../../hooks/useTelegram";
import './DataScreen.css';
import TelegramDataBlock from "../../components/DataBlock/TelegramDataBlock";
import TelegramJson from "../../components/Json/TelegramJson";

const DataScreen = () => {
    const { webApp } = useTelegram()

    const botData = {
        initData: webApp.initData,
        version: webApp.version
    }

    const telegramData = {
        platform: webApp.platform,
        colorScheme: webApp.colorScheme
    }

    const miniAppData = {
        isExpanded: webApp.isExpanded,
        viewportHeight: webApp.viewportHeight,
        viewportStableHeight: webApp.viewportStableHeight,
        headerColor: webApp.headerColor,
        backgroundColor: webApp.backgroundColor,
        isClosingConfirmationEnabled: webApp.isClosingConfirmationEnabled
    }

    return (
        <div className={'dataScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Data Screen</TelegramText>
            </TelegramHeader>

            <TelegramText className={'telegramSubtitle'}>botData:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={botData}/>
            </TelegramDataBlock>

            <TelegramText className={'telegramSubtitle'}>telegramData:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={telegramData}/>
            </TelegramDataBlock>

            <TelegramText className={'telegramSubtitle'}>miniAppData:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={miniAppData}/>
            </TelegramDataBlock>

            <TelegramText className={'telegramSubtitle'}>initDataUnsafe:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={webApp.initDataUnsafe}/>
            </TelegramDataBlock>

            <TelegramText className={'telegramSubtitle'}>themeParams:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={webApp.themeParams}/>
            </TelegramDataBlock>
        </div>
    );
};

export default DataScreen;
