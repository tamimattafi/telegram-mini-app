import React from 'react';
import TelegramDetailedButton from "../../kit/DetailedButton/TelegramDetailedButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";
import TelegramMiniFormWithOptions from "../../kit/MiniFormWithOptions/TelegramMiniFormWithOptions";
import TelegramOptionsForm from "../../kit/OptionsForm/TelegramOptionsForm";

/**
 * MainButton.showProgress(leaveActive) is a method to show a loading indicator on the button.
 * It is recommended to display loading progress if the action tied to the button may take a long time.
 *
 * By default, the button is disabled while the action is in progress.
 * If the parameter leaveActive=true is passed, the button remains enabled.
 *
 * @see https://core.telegram.org/bots/webapps#mainbutton
 */
const ShowProgressMainButton = () => {
    const {webApp, executeMethod} = useTelegram()

    const onShowProgress = (options) => {
        const leaveActive= options[0] === 'true'
        executeMethod(
            'MainButton.showProgress',
            () => webApp.MainButton.showProgress(leaveActive)
        )
    }

    const options = ['true', 'false']

    return (
        <TelegramOptionsForm
            formlabel={'MainButton.showProgress(leaveActive)'}
            formdescription={
                'A method to show a loading indicator on the button.' +
                'It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter leaveActive=true is passed, the button remains enabled.'
            }
            optionsmultiple={false}
            optionslabel={'leaveActive'}
            options={options}
            buttonlabel={'Execute'}
            onSubmit={onShowProgress}
        />
    );
};

export default ShowProgressMainButton;
