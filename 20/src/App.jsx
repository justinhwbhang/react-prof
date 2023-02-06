import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom"; 

import './App.css';
import './assets/css/styles.css';
import'./assets/css/animations.css'
import'./assets/css/media-queries.css'

import Homepage from "./pages/Homepage";

export default function App() {
    const [page, setPage] = useState('AboutMe')

    return (
        <>
            <div className="App" >
                <Routes>
                    <Route exact path="/" element={ <Homepage page={page} setPage={setPage} /> }/>
                </Routes>
            </div>
        </>
    );
}
