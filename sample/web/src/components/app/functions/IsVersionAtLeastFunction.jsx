import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramMiniForm from "../../kit/MiniForm/TelegramMiniForm";


/**
 * isVersionAtLeast(version) returns true if the user's app supports a version of the Bot API that is equal to or higher
 * than the version passed as the parameter.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const IsVersionAtLeastFunction = () => {
    const {webApp, executeArgumentMethod} = useTelegram()

    // Check this section for more details https://core.telegram.org/bots/webapps#initializing-mini-apps
    const onIsVersionAtLeast = (version) => {
        executeArgumentMethod(
            'isVersionAtLeast',
            version,
            () => webApp.isVersionAtLeast(version)
        )
    }

    return (
        <TelegramMiniForm
            fieldlabel={'isVersionAtLeast(version)'}
            fielddescription={'Returns true if the user\'s app supports a version of the Bot API that is equal to or higher than the version passed as the parameter'}
            fieldhint={`Bot version, e.g ${webApp.version}`}
            buttonlabel={'Execute'}
            onSubmit={onIsVersionAtLeast}
        />
    );
};

export default IsVersionAtLeastFunction;
