import React from 'react';
import s from './navbar.module.css'
import {ProfileMenuItem} from "../profile-menu-item/profile-menu-item";

export const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <ProfileMenuItem menuItem={'Profile'} />
            <ProfileMenuItem menuItem={'Messages'} />
            <ProfileMenuItem menuItem={'Photos'} />
            <ProfileMenuItem menuItem={'Settings'} />
            <ProfileMenuItem menuItem={'News'} />
        </div>
    );
};