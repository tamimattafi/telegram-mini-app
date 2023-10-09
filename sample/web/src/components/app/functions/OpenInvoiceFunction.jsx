import React, {useCallback} from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * Since Bot API 6.1+
 *
 * openInvoice(url[, callback]) is method that opens an invoice using the link url.
 * The Mini App will receive the event invoiceClosed when the invoice is closed.
 *
 * If an optional callback parameter was passed, the callback function will be called and the invoice status will be
 * passed as the first argument.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const OpenInvoiceFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const invoiceCallback = useCallback(async (data) => {
        onReceivedEvent('openInvoice_Callback', data)
    }, [onReceivedEvent]);

    const onOpenInvoice = (link) => {
        executeArgumentMethod(
            'openInvoice',
            link,
            () => webApp.openInvoice(link, invoiceCallback)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'openInvoice(url[, callback])'}
            fielddescription={
                'Bot API 6.1+ A method that opens an invoice using the link url. The Mini App will receive the event invoiceClosed when the invoice is closed. If an optional callback parameter was passed, the callback function will be called and the invoice status will be passed as the first argument.'
            }
            fieldhint={`Enter a valid invoice url`}
            buttonlabel={'Execute'}
            onSubmit={onOpenInvoice}
        />
    );
};

export default OpenInvoiceFunction;
