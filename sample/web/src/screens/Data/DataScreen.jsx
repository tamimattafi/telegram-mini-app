import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import {useTelegram} from "../../hooks/useTelegram";
import './DataScreen.css';
import TelegramDataBlock from "../../components/DataBlock/TelegramDataBlock";
import TelegramJson from "../../components/Json/TelegramJson";

const DataScreen = () => {
    const { webApp } = useTelegram()

    // For more info, check this section https://core.telegram.org/bots/webapps#initializing-mini-apps
    const botData = {
        // A string with raw data transferred to the Mini App
        initData: webApp.initData,

        // The version of the Bot API available in the user's Telegram app
        version: webApp.version
    }

    const telegramData = {
        // The name of the platform of the user's Telegram app
        platform: webApp.platform,

        // The color scheme currently used in the Telegram app
        colorScheme: webApp.colorScheme
    }

    const miniAppData = {
        // True, if the Mini App is expanded to the maximum available height
        isExpanded: webApp.isExpanded,

        // The current height of the visible area of the Mini App
        viewportHeight: webApp.viewportHeight,

        // The height of the visible area of the Mini App in its last stable state
        viewportStableHeight: webApp.viewportStableHeight,

        // Current header color in the #RRGGBB format
        headerColor: webApp.headerColor,

        // Current background color in the #RRGGBB format
        backgroundColor: webApp.backgroundColor,

        // True, if the confirmation dialog is enabled while the user is trying to close the Mini App
        isClosingConfirmationEnabled: webApp.isClosingConfirmationEnabled
    }

    // An object with input data transferred to the Mini App
    // For more info, check this section https://core.telegram.org/bots/webapps#webappinitdata
    const initDataUnsafe = webApp.initDataUnsafe

    // An object containing the current theme settings used in the Telegram app
    // For more info, check this section https://core.telegram.org/bots/webapps#themeparams
    const themeParams = webApp.themeParams

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
                <TelegramJson src={initDataUnsafe}/>
            </TelegramDataBlock>

            <TelegramText className={'telegramSubtitle'}>themeParams:</TelegramText>
            <TelegramDataBlock>
                <TelegramJson src={themeParams}/>
            </TelegramDataBlock>
        </div>
    );
};

export default DataScreen;
