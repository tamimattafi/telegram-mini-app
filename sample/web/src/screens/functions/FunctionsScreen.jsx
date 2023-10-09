import React from 'react';
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramDetailedButton from "../../components/kit/DetailedButton/TelegramDetailedButton";
import {useNavigate} from "react-router-dom";
import {
    PATH_FUNCTIONS_ALERTS,
    PATH_FUNCTIONS_BASIC,
    PATH_FUNCTIONS_BOT,
    PATH_FUNCTIONS_EVENTS, PATH_FUNCTIONS_LINKS, PATH_FUNCTIONS_QR, PATH_FUNCTIONS_THEME
} from "../../constants/Paths";
import BotAPIHeader from "../../components/app/info/BotAPIHeader/BotAPIHeader";
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";

const FunctionsScreen = () => {
    const navigate = useNavigate();

    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Functions Screen</TelegramText>
            </TelegramHeader>

            <BotAPIHeader />

            <TelegramDetailedButton
                buttontitle={'Basic Functions'}
                buttondescription={
                    'These functions are useful to control the lifecycle of the app, and interact with the layout of ' +
                    'the MiniApp and Telegram App.'
                }
                buttonlabel={'Try Basic functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_BASIC)}
            />

            <TelegramDetailedButton
                buttontitle={'Alert Functions'}
                buttondescription={
                    'These functions are useful to show popup messages, alerts and confirmation dialogs to the user ' +
                    'to ask them to make a decision or inform them about an event.'
                }
                buttonlabel={'Try Alert Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_ALERTS)}
            />

            <TelegramDetailedButton
                buttontitle={'Event Functions'}
                buttondescription={
                    'These functions are useful to track the state of the MiniApp, Bot or Telegram App. For example ' +
                    'You can listen to main button clicks by tracking the mainButtonClicked event.'
                }
                buttonlabel={'Try Event Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_EVENTS)}
            />

            <TelegramDetailedButton
                buttontitle={'Bot Functions'}
                buttondescription={
                    'These functions are useful to interact with the bot, send data directly, or prompt users with ' +
                    'predefined queries for different cases.'
                }
                buttonlabel={'Try Bot Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_BOT)}
            />

            <TelegramDetailedButton
                buttontitle={'Theme Functions'}
                buttondescription={
                    'These functions are useful to change the overall theme of the mini app to match your design. ' +
                    'At the moment, you can change the color of the header and the background.'
                }
                buttonlabel={'Try Theme Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_THEME)}
            />

            <TelegramDetailedButton
                buttontitle={'Link Functions'}
                buttondescription={
                    'These functions are useful to navigate to external webpages, or even to internal user profiles ' +
                    'chats, bots and other telegram support links. Also, you can open invoices.'
                }
                buttonlabel={'Try Link Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_LINKS)}
            />

            <TelegramDetailedButton
                buttontitle={'QR Functions'}
                buttondescription={
                    'These functions are useful to interact with Qr codes and other barcode formats. Users can use ' +
                    'the built in scanner of telegram to retrieve data without relying on external sources'
                }
                buttonlabel={'Try QR Functions'}
                onButtomClick={() => navigate(PATH_FUNCTIONS_QR)}
            />
        </TelegramScreen>
    );
};

export default FunctionsScreen;
