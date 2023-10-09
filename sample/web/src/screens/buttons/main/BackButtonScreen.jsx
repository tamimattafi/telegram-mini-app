import React from 'react';
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../../components/kit/Header/TelegramHeader";
import TelegramText from "../../../components/kit/Text/TelegramText";
import ShowBackButton from "../../../components/app/button/ShowBackButton";
import HideBackButton from "../../../components/app/button/HideBackButton";

const BackButtonScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Back Button Screen</TelegramText>
            </TelegramHeader>

            <ShowBackButton />
            <HideBackButton />
        </TelegramScreen>
    );
};

export default BackButtonScreen;
