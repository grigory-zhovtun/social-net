import s from './profile-photo.module.css'

type ProfilePhotoPropsType = {
    photo: string
}

export const ProfilePhoto = (props: ProfilePhotoPropsType) => {
    return (
        <div className={s.ProfilePhoto}>
            <img src={props.photo} alt="photo"/>
        </div>
    )
}