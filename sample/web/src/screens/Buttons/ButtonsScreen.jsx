import React from 'react';
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './ButtonsScreen.css';

const ButtonsScreen = () => {
    const { onClose, onToggleMainButton } = useTelegram()
    return (
        <div className={'buttonsScreen'}>
            <Header>
                <Text>Buttons Screen</Text>
            </Header>

            <Button onClick={onToggleMainButton}>Toggle Menu Button</Button>
            <Button onClick={onClose}>Exit</Button>
        </div>
    );
};

export default ButtonsScreen;
