import React from 'react';
import JsonView from "react18-json-view";
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
import {useTelegram} from "../../hooks/useTelegram";
import {COLOR_SCHEME_DARK} from "../../constants/TelegramConstants";

const TelegramJson = (props) => {
    const { webApp } = useTelegram()
    const isDarkColorScheme = webApp.colorScheme === COLOR_SCHEME_DARK

    return (
        <JsonView {...props} dark={isDarkColorScheme} theme={'github'}/>
    );
};

export default TelegramJson;
