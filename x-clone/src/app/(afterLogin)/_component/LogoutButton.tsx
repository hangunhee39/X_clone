"use client"

import style from "./logoutButton.module.css";

export default function LogoutButton() {
    const me = {
        id: "hgh39",
        nickname: "hgh39",
        image: '/yRsRRjGO.jpg',
    }
    const onLogout = () => {};

    return(
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.image} alt={me.id}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
}