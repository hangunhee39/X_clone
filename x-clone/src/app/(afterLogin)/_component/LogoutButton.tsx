"use client";

import { signOut, useSession } from "next-auth/react"; //client
import style from "./logoutButton.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const {data: me} = useSession();

  const onLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        router.replace('/');
      });
  };

  if(!me?.user) {
    return null;
  }
  console.log("tlqkf", me.user)

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.user?.image as string} alt="z.com 로그" width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.id}</div>
      </div>
    </button>
  );
}
