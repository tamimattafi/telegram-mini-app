import './App.css';
import {useCallback, useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from "./screens/main/MainScreen";
import FunctionsScreen from "./screens/functions/main/FunctionsScreen";
import DataScreen from "./screens/data/DataScreen";
import {
    PATH_FUNCTIONS,
    PATH_DATA,
    PATH_MAIN,
    PATH_FUNCTIONS_BASIC,
    PATH_FUNCTIONS_ALERTS,
    PATH_FUNCTIONS_EVENTS,
    PATH_FUNCTIONS_BOT,
    PATH_FUNCTIONS_LINKS,
    PATH_FUNCTIONS_THEME,
    PATH_FUNCTIONS_QR,
    PATH_BUTTONS_MAIN, PATH_BUTTONS_BACK
} from "./constants/Paths";
import BasicFunctionsScreen from "./screens/functions/basic/BasicFunctionsScreen";
import AlertFunctionsScreen from "./screens/functions/alerts/AlertFunctionsScreen";
import EventFunctionsScreen from "./screens/functions/events/EventFunctionsScreen";
import BotFunctionsScreen from "./screens/functions/bot/BotFunctionsScreen";
import LinkFunctionsScreen from "./screens/functions/links/LinkFunctionsScreen";
import ThemeFunctionsScreen from "./screens/functions/theme/ThemeFunctionsScreen";
import QrFunctionsScreen from "./screens/functions/qr/QrFunctionsScreen";
import MainButtonScreen from "./screens/buttons/main/MainButtonScreen";

function App() {
    const {webApp} = useTelegram()
    const navigate = useNavigate();

    const onBackClick = useCallback(() => {
        navigate(-1)
    }, [navigate])

    const onMainClick = useCallback(() => {
        webApp.showAlert("Main button click")
    }, [webApp])

    useEffect(() => {
        webApp.ready()
        webApp.BackButton.onClick(onBackClick)
        webApp.MainButton.onClick(onMainClick)
        return () => {
            webApp.BackButton.offClick(onBackClick)
            webApp.MainButton.offClick(onMainClick)
        };
    }, [webApp])

    return (
        <div className="App">
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={PATH_MAIN} element={<Main/>}/>
                <Route path={PATH_DATA} element={<DataScreen/>}/>
                <Route path={PATH_FUNCTIONS} element={<FunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_BASIC} element={<BasicFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_ALERTS} element={<AlertFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_EVENTS} element={<EventFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_BOT} element={<BotFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_LINKS} element={<LinkFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_THEME} element={<ThemeFunctionsScreen/>}/>
                <Route path={PATH_FUNCTIONS_QR} element={<QrFunctionsScreen/>}/>
                <Route path={PATH_BUTTONS_MAIN} element={<MainButtonScreen/>}/>
                <Route path={PATH_BUTTONS_BACK} element={<MainButtonScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
