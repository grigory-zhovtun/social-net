import React, {useState} from 'react';
import s from './App.module.css'
import {Header} from "../header/header";
import { ProfilePhoto } from '../profile-photo/profile-photo';
import {NewPost} from "../new-post/new-post";
import {Navbar} from "../profile-menu/navbar";
import {Posts} from "../posts/posts";

type UserType = {
    userProfilePhoto: string
}

export const App = () => {

    const user: UserType = {
        userProfilePhoto: 'https://thumbs.dreamstime.com/b/schoolboy-4231312.jpg'
    }

    return (
        <div className={s.AppWrapper}>
            <Header />
            <ProfilePhoto photo={user.userProfilePhoto}/>
            <NewPost />
            <Navbar />
            <Posts />
        </div>
    );
}


