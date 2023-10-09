import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import ShowMainButton from "../../components/app/button/ShowMainButton";
import HideMainButton from "../../components/app/button/HideMainButton";
import EnableMainButton from "../../components/app/button/EnableMainButton";
import DisableMainButton from "../../components/app/button/DisableMainButton";
import SetTextMainButton from "../../components/app/button/SetTextMainButton";
import SetColorMainButton from "../../components/app/button/SetColorMainButton";
import SetTextColorMainButton from "../../components/app/button/SetTextColorMainButton";
import ShowProgressMainButton from "../../components/app/button/ShowProgressMainButton";
import HideProgressMainButton from "../../components/app/button/HideProgressMainButton";
import SetParamsMainButton from "../../components/app/button/SetParamsMainButton";

const MainButtonScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Main Button Screen</TelegramText>
            </TelegramHeader>

            <ShowMainButton />
            <HideMainButton />
            <SetTextMainButton />
            <SetColorMainButton />
            <SetTextColorMainButton />
            <EnableMainButton />
            <DisableMainButton />
            <ShowProgressMainButton />
            <HideProgressMainButton />
            <SetParamsMainButton />
        </TelegramScreen>
    );
};

export default MainButtonScreen;
