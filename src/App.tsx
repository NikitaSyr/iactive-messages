import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";

function App() {

    return (
        <HashRouter>
            <div className="app">
                <div className="app__wrapper">
                    <div className="content">
                        {/*<Header/>*/}
                        <div className="content__load">
                            <Routes>
                                <Route path="/" element={<Messages/>}/>
                                <Route path="*" element={<div>404 СТРАНИЦА НЕ НАЙДЕНА</div>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
