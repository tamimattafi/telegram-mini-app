import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramOptionsForm from "../../kit/OptionsForm/TelegramOptionsForm";


/**
 * Since Bot API 6.1+
 *
 * HapticFeedback.impactOccurred(style) is a method tells that an impact occurred.
 *
 * The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:
 * - light, indicates a collision between small or lightweight UI objects,
 * - medium, indicates a collision between medium-sized or medium-weight UI objects,
 * - heavy, indicates a collision between large or heavyweight UI objects,
 * - rigid, indicates a collision between hard or inflexible UI objects,
 * - soft, indicates a collision between soft or flexible UI objects.
 *
 * @see https://core.telegram.org/bots/webapps#hapticfeedback
 */
const ImpactOccurredHapticFeedback = () => {
    const {webApp, executeMethod} = useTelegram()

    const onImpact = (options) => {
        executeMethod(
            'HapticFeedback.impactOccurred',
            () => webApp.HapticFeedback.impactOccurred(options[0])
        )
    }

    const options = ['light', 'medium', 'heavy', 'rigid', 'soft']

    return (
        <TelegramOptionsForm
            formlabel={'HapticFeedback.impactOccurred(style)'}
            formdescription={
                'Bot API 6.1+ A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:\n' +
                '- light, indicates a collision between small or lightweight UI objects,\n' +
                '- medium, indicates a collision between medium-sized or medium-weight UI objects,\n' +
                '- heavy, indicates a collision between large or heavyweight UI objects,\n' +
                '- rigid, indicates a collision between hard or inflexible UI objects,\n' +
                '- soft, indicates a collision between soft or flexible UI objects.'
            }
            optionsmultiple={false}
            optionslabel={'style'}
            options={options}
            buttonlabel={'Execute'}
            onSubmit={onImpact}
        />
    );
};

export default ImpactOccurredHapticFeedback;
