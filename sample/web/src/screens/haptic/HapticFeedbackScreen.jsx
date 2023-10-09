import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramHeader from "../../components/kit/Header/TelegramHeader";
import TelegramText from "../../components/kit/Text/TelegramText";
import ImpactOccurredHapticFeedback from "../../components/app/haptic/ImpactOccurredHapticFeedback";
import NotificationOccurredHapticFeedback from "../../components/app/haptic/NotificationOccurredHapticFeedback";
import SelectionChangedHapticFeedback from "../../components/app/haptic/SelectionChangedHapticFeedback";

const HapticFeedbackScreen = () => {
    return (
        <TelegramScreen showbackbutton={true}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Haptic Feedback Screen</TelegramText>
            </TelegramHeader>

            <ImpactOccurredHapticFeedback />
            <NotificationOccurredHapticFeedback />
            <SelectionChangedHapticFeedback />
        </TelegramScreen>
    );
};

export default HapticFeedbackScreen;
