import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramMiniFormWithOptions.css';
import TelegramText from "../Text/TelegramText";
import TelegramSelect from "../Select/TelegramSelect";

const TelegramMiniFormWithOptions = (props) => {
    const [input, setInput] = useState('')
    const [options, setOptions] = useState([props.options[0]])

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onChangeOption = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setOptions(options)
    }

    const onButtonClick = () => {
        props.onSubmit(input, options)
    }

    return (
        <div {...props} className={'telegramMiniFormWithOptions ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.fieldlabel}</TelegramText>
            <TelegramText className={'telegramHint'}>{props.fielddescription}</TelegramText>

            <TelegramInput
                type="text"
                placeholder={props.fieldhint}
                value={input}
                onChange={onChangeInput}
            />

            <TelegramText className={'telegramSubtitle'}>{props.optionslabel}</TelegramText>

            <TelegramSelect
                value={options}
                multiple={true}
                onChange={onChangeOption}
                elements={props.options}
            />

            <TelegramButton onClick={onButtonClick}>{props.buttonlabel}</TelegramButton>
        </div>
    );
};

export default TelegramMiniFormWithOptions;
