import React from 'react';
import {Link} from "react-router-dom";
import s from './profile-menu-item.module.css'

type ProfileMenuItemPropsType = {
    menuItem: string
    address: string
}

export const ProfileMenuItem = (props: ProfileMenuItemPropsType) => {
    return (
        <div className={s.ProfileMenuItem}>
            <Link to={props.address}  className={s.links}>{props.menuItem}</Link>
        </div>
    );
};