import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import './FunctionsScreen.css';
import TelegramDetailedButton from "../../components/DetailedButton/TelegramDetailedButton";

const FunctionsScreen = () => {
    const {webApp} = useTelegram()

    const onToggleMainButton = () => {
        if (!webApp.MainButton.isVisible) {
            webApp.MainButton.show()
        } else {
            webApp.MainButton.hide()
        }
    }

    const onToggleBackButton = () => {
        if (!webApp.BackButton.isVisible) {
            webApp.BackButton.show()
        } else {
            webApp.BackButton.hide()
        }
    }

    const onClose = () => {
        webApp.exit()
    }

    return (
        <div className={'functionsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>


            <TelegramDetailedButton
                buttontitle={'enableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that enables a confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onClick={webApp.enableClosingConfirmation}
            />

            <TelegramDetailedButton
                buttontitle={'disableClosingConfirmation()'}
                buttondescription={
                    'Bot API 6.2+ A method that disables the confirmation dialog while the user is trying to close the Mini App.'
                }
                buttonlabel={'Execute'}
                onClick={webApp.disableClosingConfirmation}
            />
        </div>
    );
};

export default FunctionsScreen;
