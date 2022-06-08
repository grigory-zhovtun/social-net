import React, {useState} from 'react';
import s from './App.module.css'
import {Header} from "../header/header";
import {ProfilePhoto} from '../profile-photo/profile-photo';
import {Navbar} from "../profile-menu/navbar";
import {Posts} from "../posts/posts";
import styled from "styled-components";
import {Dialogs} from "../dialogs/dialogs";
import {Route, Routes} from "react-router-dom";
import {Photos} from "../photos/photos";
import {Settings} from "../settings/settings";
import {News} from "../news/news";

type UserType = {
    userProfilePhoto: string
}

const ContentWrapper = styled.div`
  grid-area: content;
`

export const App = () => {

    const user: UserType = {
        userProfilePhoto: 'https://thumbs.dreamstime.com/b/schoolboy-4231312.jpg'
    }

    return (
            <div className={s.AppWrapper}>
                <Header/>
                <ProfilePhoto photo={user.userProfilePhoto}/>
                <Navbar/>
                <ContentWrapper>
                    <Routes>
                        <Route path={'/'} element={<Posts/>}/>
                        <Route path={'/dialogs'} element={<Dialogs/>}/>
                        <Route path={'/photos'} element={<Photos/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/news'} element={<News/>}/>
                    </Routes>
                </ContentWrapper>
            </div>
    );
}


