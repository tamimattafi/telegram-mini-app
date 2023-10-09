import React from 'react';
import {useTelegram} from "../../../hooks/useTelegram";
import TelegramOptionsForm from "../../kit/OptionsForm/TelegramOptionsForm";


/**
 * Since Bot API 6.7+
 * switchInlineQuery(query[, choose_chat_types]) is a method that inserts the bot's username and the specified inline
 * query in the current chat's input field. Query may be empty, in which case only the bot's username will be inserted.
 *
 * If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then
 * opens that chat and inserts the bot's username and the specified inline query in the input field. You can specify
 * which types of chats the user will be able to choose from.
 *
 * It can be one or more of the following types: users, bots, groups, channels.
 *
 * @see https://core.telegram.org/bots/webapps#initializing-mini-apps
 */
const SwitchInlineQueryFunction = () => {
    const {webApp, onReceivedEvent, executeArgumentMethod} = useTelegram()

    const onSwitchInlineQuery = (query, options) => {
        executeArgumentMethod(
            'switchInlineQuery',
            `${query}, ${options}`,
            () => webApp.switchInlineQuery(query, options)
        )
    }

    const options = ['users', 'bots', 'groups', 'channels']

    return (
        <TelegramOptionsForm
            fieldlabel={'switchInlineQuery(query[, choose_chat_types])'}
            fielddescription={
                'Bot API 6.7+ A method that inserts the bot\'s username and the specified inline query in the current chat\'s input field. Query may be empty, in which case only the bot\'s username will be inserted. If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot\'s username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: users, bots, groups, channels.'
            }
            fieldhint={`Enter query or command, e.g /start`}
            optionslabel={'choose_chat_types'}
            options={options}
            buttonlabel={'Execute'}
            onSubmit={onSwitchInlineQuery}
        />
    );
};

export default SwitchInlineQueryFunction;
