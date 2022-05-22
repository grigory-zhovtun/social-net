import React, {useState} from 'react';
import s from './App.module.css'
import {Header} from "../header/header";

export const App = () => {

    return (
        <div className={s.AppWrapper}>
            <Header />
        </div>
    );
}

export default App;
