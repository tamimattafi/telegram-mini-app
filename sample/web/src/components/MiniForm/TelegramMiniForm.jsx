import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramMiniForm.css';
import TelegramText from "../Text/TelegramText";

const TelegramMiniForm = (props) => {
    const [input, setInput] = useState('')

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onButtonClick = () => {
        props.onSubmit(input)
    }

    return (
        <div {...props} className={'telegramMiniForm ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.fieldlabel}</TelegramText>
            <TelegramText className={'telegramHint'}>{props.fielddescription}</TelegramText>

            <TelegramInput
                type="text"
                placeholder={props.fieldhint}
                value={input}
                onChange={onChangeInput}
            />

            <TelegramButton onClick={onButtonClick}>{props.buttonlabel}</TelegramButton>
        </div>
    );
};

export default TelegramMiniForm;
