"use client"

import style from "./logoutButton.module.css";
import Image from "next/image";

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
                <Image src={me.image} alt="z.com 로그" width = {40} height={40}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
}