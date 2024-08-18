"use client"

import style from './followRecommned.module.css';
import Image from 'next/image';

export default function FollowRecommned() {

    const onFollow = () => {};

    const user = {
        id: 'elonmusk',
        nickname: "일론 머스크",
        image: '/yRsRRjGO.jpg',
    }

    return(
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <Image src={user.image} alt={user.id} width={40} height={40}/>
                </div>
            </div>
            <div className={style.userInfo}>
                <div className={style.title}>
                    {user.nickname}
                </div>
                <div className={style.count}>
                    @{user.id}
                </div>
            </div>
            <div className={style.followButtonSection}>
                <button onClick={onFollow} >
                    팔로우
                </button>
            </div>
        </div>
        
    )
}