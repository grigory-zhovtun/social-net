import React from 'react';
import s from './profile-menu-item.module.css'

type ProfileMenuItemPropsType = {
    menuItem: string
}

export const ProfileMenuItem = (props: ProfileMenuItemPropsType) => {
    return (
        <div className={s.ProfileMenuItem}>
            {props.menuItem}
        </div>
    );
};