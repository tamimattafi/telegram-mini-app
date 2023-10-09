import React from 'react';
import TelegramText from "../../../kit/Text/TelegramText";
import TelegramLink from "../../../kit/Link/TelegramLink";
import {useTelegram} from "../../../../hooks/useTelegram";

const BotAPIHeader = () => {
    const {webApp} = useTelegram()

    return (
        <>
            <TelegramText className={'telegramHint'}>
                Bot API: {webApp.version}, check <TelegramLink href="https://core.telegram.org/bots/webapps#initializing-mini-apps">Functions List</TelegramLink>
            </TelegramText>
        </>
    );
};

export default BotAPIHeader;
