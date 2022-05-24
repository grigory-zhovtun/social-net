import React, {useState} from 'react';
import s from './App.module.css'
import {Header} from "../header/header";
import { ProfilePhoto } from '../profile-photo/profile-photo';

export const App = () => {

    return (
        <div className={s.AppWrapper}>
            <Header />
            <ProfilePhoto />
        </div>
    );
}


