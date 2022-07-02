import './index.css';
import {CatchGame} from './App';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {Login} from "./components/login";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes} from 'react-router-dom';
import {Scoreboard} from "./components/scoreboard";
import { FirebaseAppProvider } from 'reactfire';
import {firebaseConfig} from "./Firestore/firestore";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <BrowserRouter>
        <>
            <Routes>
                <Route path='/game' element={<CatchGame/>}/>
                <Route exact path='/' element={<Login/>}/>
                <Route path='/scoreboard' element={<Scoreboard/>}/>
            </Routes>
        </>
    </BrowserRouter>
    </FirebaseAppProvider> ,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
