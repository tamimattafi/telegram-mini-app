import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramOptionsForm from "../../kit/OptionsForm/TelegramOptionsForm";


/**
 * openLink(url[, options]) is method that opens a link in an external browser. The Mini App will not be closed.
 *
 * Since Bot API 6.4+, If the optional options parameter is passed with the field try_instant_view=true, the link will
 * be opened in Instant View mode if possible.
 *
 * Note that this method can be called only in response to user interaction with the Mini App interface
 * (e.g. a click inside the Mini App or on the main button)
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const OpenLinkFunction = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    const onOpenLink = (link, options) => {
        const json = JSON.parse(options)
        executeArgumentMethod(
            'openLink',
            `${link}, ${options}`,
            () => webApp.openLink(link, json)
        )
    }

    const options = ['{ "try_instant_view": true }']

    return (
        <TelegramOptionsForm
            fieldlabel={'openLink(url[, options])'}
            fielddescription={
                'A method that opens a link in an external browser. The Mini App will not be closed.' +
                'Bot API 6.4+ If the optional options parameter is passed with the field try_instant_view=true, the link will be opened in Instant View mode if possible.' +
                'Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)'
            }
            fieldhint={`Enter a valid url with https://, e.g https://www.google.com`}
            optionslabel={'options'}
            options={options}
            buttonlabel={'Execute'}
            onSubmit={onOpenLink}
        />
    );
};

export default OpenLinkFunction;
