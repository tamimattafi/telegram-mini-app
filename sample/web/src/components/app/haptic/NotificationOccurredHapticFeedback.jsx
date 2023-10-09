import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramOptionsForm from "../../kit/OptionsForm/TelegramOptionsForm";


/**
 * Since Bot API 6.1+
 *
 * HapticFeedback.notificationOccurred(type) is a method tells that a task or action has succeeded, failed,
 * or produced a warning.
 *
 * The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:
 * - error, indicates that a task or action has failed,
 * - success, indicates that a task or action has completed successfully,
 * - warning, indicates that a task or action produced a warning.
 *
 * @see https://core.telegram.org/bots/webapps#hapticfeedback
 */
const NotificationOccurredHapticFeedback = () => {
    const {webApp, executeMethod} = useTelegram()

    const onNotification = (options) => {
        executeMethod(
            'HapticFeedback.notificationOccurred',
            () => webApp.HapticFeedback.notificationOccurred(options[0])
        )
    }

    const options = ['error', 'success', 'warning']

    return (
        <TelegramOptionsForm
            formlabel={'HapticFeedback.notificationOccurred(type)'}
            formdescription={
                'Bot API 6.1+ A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:\n' +
                '- error, indicates that a task or action has failed,\n' +
                '- success, indicates that a task or action has completed successfully,\n' +
                '- warning, indicates that a task or action produced a warning.'
            }
            optionsmultiple={false}
            optionslabel={'type'}
            options={options}
            buttonlabel={'Execute'}
            onSubmit={onNotification}
        />
    );
};

export default NotificationOccurredHapticFeedback;
