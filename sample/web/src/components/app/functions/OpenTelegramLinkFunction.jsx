import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * openTelegramLink(url) is a method that opens a telegram link inside Telegram app. The Mini App will be closed.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const OpenTelegramLinkFunction = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onOpenTelegramLink = (link) => {
        executeArgumentMethod(
            'openTelegramLink',
            link,
            () => webApp.openTelegramLink(link)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'openTelegramLink(url)'}
            fielddescription={
                'A method that opens a telegram link inside Telegram app. The Mini App will be closed.'
            }
            fieldhint={`Enter a valid url, e.g https://t.me/mini_app_sample_bot`}
            buttonlabel={'Execute'}
            onSubmit={onOpenTelegramLink}
        />
    );
};

export default OpenTelegramLinkFunction;
