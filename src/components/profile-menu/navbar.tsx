import React from 'react';
import s from './navbar.module.css'
import {ProfileMenuItem} from "../profile-menu-item/profile-menu-item";

export const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <ProfileMenuItem address={'/'} menuItem={'Profile'} />
            <ProfileMenuItem address={'/dialogs'} menuItem={'Messages'} />
            <ProfileMenuItem address={'/photos'} menuItem={'Photos'} />
            <ProfileMenuItem address={'/settings'} menuItem={'Settings'} />
            <ProfileMenuItem address={'/news'} menuItem={'News'} />
        </div>
    );
};