import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramOptionsForm.css';
import TelegramText from "../Text/TelegramText";
import TelegramSelect from "../Select/TelegramSelect";

const TelegramOptionsForm = (props) => {
    const [input, setInput] = useState('')
    const [option, setOption] = useState([props.options[0]])

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onChangeOption = (e) => {
        setOption(e.target.value)
    }

    const onButtonClick = () => {
        props.onSubmit(input, option)
    }

    return (
        <div {...props} className={'telegramMiniForm ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.fieldLabel}</TelegramText>

            <TelegramInput
                type="text"
                placeholder={props.fieldHint}
                value={input}
                onChange={onChangeInput}
            />

            <TelegramText className={'telegramSubtitle'}>{props.optionsLabel}</TelegramText>

            <TelegramSelect
                value={option}
                onChange={onChangeOption}
                elements={props.options}
            />

            <TelegramText className={'telegramHint'}>{props.fieldDescription}</TelegramText>

            <TelegramButton onClick={onButtonClick}>{props.buttonLabel}</TelegramButton>
        </div>
    );
};

export default TelegramOptionsForm;
