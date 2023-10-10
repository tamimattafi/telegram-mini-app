import React, {useState} from 'react';
import TelegramInput from "../Input/TelegramInput";
import TelegramButton from "../Button/TelegramButton";
import './TelegramOptionsForm.css';
import TelegramText from "../Text/TelegramText";
import TelegramSelect from "../Select/TelegramSelect";

const TelegramOptionsForm = (props) => {
    const [options, setOptions] = useState([props.options[0]])

    const onChangeOption = (e) => {
        const options = Array.from(e.target.selectedOptions, option => option.value);
        setOptions(options)
    }

    const onButtonClick = () => {
        props.onSubmit(options)
    }

    return (
        <div {...props} className={'telegramOptionsForm ' + props.className}>
            <TelegramText className={'telegramSubtitle'}>{props.formlabel}</TelegramText>
            <TelegramText className={'telegramHint'}>{props.formdescription}</TelegramText>

            <TelegramText className={'telegramSubtitle'}>{props.optionslabel}</TelegramText>

            <TelegramSelect
                value={options}
                multiple={props.optionsmultiple}
                onChange={onChangeOption}
                elements={props.options}
            />

            <TelegramButton onClick={onButtonClick}>{props.buttonlabel}</TelegramButton>
        </div>
    );
};

export default TelegramOptionsForm;
