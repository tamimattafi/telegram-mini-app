import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";

/**
 * Since Bot API 6.1+
 *
 * HapticFeedback.selectionChanged() is a method tells that the user has changed a selection.
 * The Telegram app may play the appropriate haptics.
 *
 * Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.
 *
 * @see https://core.telegram.org/bots/webapps#hapticfeedback
 */
const SelectionChangedHapticFeedback = () => {
    const {webApp, executeMethod} = useTelegram()

    const onSelectionChanged = () => {
        executeMethod('HapticFeedback.selectionChanged', webApp.HapticFeedback.selectionChanged)
    }

    return (
        <TelegramDetailedButton
            buttontitle={'HapticFeedback.selectionChanged()'}
            buttondescription={
                'Bot API 6.1+ A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.' +
                'Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.'
            }
            buttonlabel={'Execute'}
            onButtomClick={onSelectionChanged}
        />
    );
};

export default SelectionChangedHapticFeedback;
