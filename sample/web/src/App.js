import './App.css';
import {useEffect} from "react";

const telegram = window.Telegram.WebApp

function App() {
    useEffect(() => {
        telegram.ready()
    }, [])

    const onClose = () => {
        telegram.close()
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>Hi</h1>
            <button onClick={onClose}>Exit</button>
          </header>
        </div>
    );
}

export default App;
