import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./components/store/store";
import MainComponent from './components/MainComponent'


const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <MainComponent/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
