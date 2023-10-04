import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Main from "./screens/Main/MainScreen";
import ButtonsScreen from "./screens/Buttons/ButtonsScreen";
import DataScreen from "./screens/Data/DataScreen";
import EventsScreen from "./screens/Events/EventsScreen";
import InputsScreen from "./screens/Inputs/InputsScreen";
import {PATH_BUTTONS, PATH_DATA, PATH_EVENTS, PATH_INPUTS, PATH_MAIN} from "./screens/Global/Paths";

function App() {
    const {webApp} = useTelegram()

    useEffect(() => {
        webApp.ready()
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={PATH_MAIN} element={<Main/>}/>
                <Route path={PATH_BUTTONS} element={<ButtonsScreen/>}/>
                <Route path={PATH_DATA} element={<DataScreen/>}/>
                <Route path={PATH_EVENTS} element={<EventsScreen/>}/>
                <Route path={PATH_INPUTS} element={<InputsScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
