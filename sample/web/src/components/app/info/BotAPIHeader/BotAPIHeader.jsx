import React from 'react';
import TelegramText from "../../../kit/Text/TelegramText";
import TelegramLink from "../../../kit/Link/TelegramLink";
import {useTelegram} from "../../../../hooks/useTelegram";

const BotAPIHeader = () => {
    const {webApp} = useTelegram()

    return (
        <>
            <TelegramText className={'telegramHint'}>
                The version of the Bot API available in the user's Telegram app: {webApp.version}
            </TelegramText>

            <TelegramText className={'telegramHint'}>
                Please check the docs for more information about the <TelegramLink href="https://core.telegram.org/bots/webapps#initializing-mini-apps">Functions List</TelegramLink>
            </TelegramText>
        </>
    );
};

export default BotAPIHeader;
