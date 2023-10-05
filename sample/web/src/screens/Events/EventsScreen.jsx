import React, {useCallback, useEffect} from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import './EventsScreen.css';
import {useTelegram} from "../../hooks/useTelegram";
import {MAIN_BUTTON_CLICK_EVENT} from "../../constants/TelegramEvents";

const EventsScreen = () => {
    const {webApp} = useTelegram()
    const mainButtonEnabledColor = "#00e18b"
    const mainButtonDisabledColor = "#bdbdbd"

    // This callback handles clicks on the main button
    const mainButtonCallback = useCallback(async () => {
        // Show a progress bar on the main button while disabled
        webApp.MainButton.showProgress(false)
        webApp.MainButton.color = mainButtonDisabledColor

        // Wait for 3 seconds
        setTimeout(() => {
            // Hide progress bar and enable the main button
            webApp.MainButton.hideProgress()
            webApp.MainButton.color = mainButtonEnabledColor

            // Show a dialog screen with some text
            webApp.showAlert("Loading Finished")
        }, 3000)
    }, [webApp]);

    // This callback handles clicks on confirmation dialog buttons
    const exitConfirmationCallback = useCallback( async (okButtonClicked) => {
        // This flag tells us whether ok button was clicked, otherwise, cancel button was clicked
        if (okButtonClicked) {
            // Close the mini app
            webApp.close()
        } else {
            // Show a dialog screen with some text
            webApp.showAlert("You clicked on Cancel, try again!")
        }
    }, [webApp])

    // This callback handles clicks on the back button
    const backButtonCallback = useCallback(async () => {
        webApp.showConfirm("You clicked the back button, you want to exit?", exitConfirmationCallback)
    }, [webApp, exitConfirmationCallback]);

    // Use effects to register and unregister a callback listener for system buttons
    useEffect(() => {
        // Use the standard method of registering an event, otherwise use alias like the back button below
        webApp.onEvent(MAIN_BUTTON_CLICK_EVENT, mainButtonCallback)

        // Use alias to register a callback
        webApp.BackButton.onClick(backButtonCallback)
        return () => {
            // Use the standard method of unregistering an event, otherwise use alias like the back button below
            webApp.offEvent(MAIN_BUTTON_CLICK_EVENT, mainButtonCallback)

            // Use alias to unregister a callback
            webApp.BackButton.offClick(backButtonCallback)
        };
    }, [webApp]);


    // Toggle main and back buttons when screen is ready
    useEffect(() => {
        // Set some data to the main button
        webApp.MainButton.text = "Start Loading"
        webApp.MainButton.color = mainButtonEnabledColor

        // Show system buttons
        webApp.MainButton.show()
        webApp.BackButton.show()
    }, [webApp]);


    return (
        <div className={'eventsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Events Screen</TelegramText>
            </TelegramHeader>
        </div>
    );
};

export default EventsScreen;
