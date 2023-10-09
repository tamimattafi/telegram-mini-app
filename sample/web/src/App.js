import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Main from "./screens/Main/MainScreen";
import FunctionsScreen from "./screens/Functions/FunctionsScreen";
import DataScreen from "./screens/Data/DataScreen";
import EventsScreen from "./screens/Events/EventsScreen";
import {PATH_FUNCTIONS, PATH_DATA, PATH_EVENTS, PATH_MAIN} from "./constants/Paths";

function App() {
    const {webApp} = useTelegram()

    useEffect(() => {
        webApp.ready()
    }, [webApp])

    return (
        <div className="App">
            <Routes>
                <Route index element={<Main/>}/>
                <Route path={PATH_MAIN} element={<Main/>}/>
                <Route path={PATH_FUNCTIONS} element={<FunctionsScreen/>}/>
                <Route path={PATH_DATA} element={<DataScreen/>}/>
                <Route path={PATH_EVENTS} element={<EventsScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
