import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramMiniForm.css';
import TelegramText from "../Text/TelegramText";

const TelegramMiniForm = ({buttonLabel, fieldLabel, fieldDescription, onSubmit}) => {
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onButtonClick = () => {
        onSubmit(input)
    }

    return (
        <div className={'telegramMiniForm'}>
            <TelegramText className={'telegramSubtitle'}>{fieldLabel}</TelegramText>

            <TelegramInput
                type="text"
                placeholder="Write something"
                value={input}
                onChange={onChangeInput}
            />

            <TelegramText className={'telegramHint'}>{fieldDescription}</TelegramText>

            <TelegramButton onClick={onButtonClick}>{buttonLabel}</TelegramButton>
        </div>
    );
};

export default TelegramMiniForm;
