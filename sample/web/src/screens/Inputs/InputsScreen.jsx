import React, {useState} from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import './InputsScreen.css';
import TelegramInput from "../../components/Input/TelegramInput";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";

const InputsScreen = () => {
    const {webApp} = useTelegram()
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onSend = () => {

        webApp.close()
    }

    return (
        <div className={'inputsScreen'}>
            <TelegramHeader>
                <TelegramText>Inputs Screen</TelegramText>
            </TelegramHeader>

            <TelegramInput
                type="text"
                placeholder="Write something"
                value={input}
                onChange={onChangeInput}
            />

            <TelegramButton onClick={onSend}>Send To Bot</TelegramButton>
        </div>
    );
};

export default InputsScreen;
