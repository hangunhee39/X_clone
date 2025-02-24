"use client"

import { useQuery } from '@tanstack/react-query';
import style from './followRecommned.module.css';
import Image from 'next/image';
import { User } from '@/model/User';
import { getFollowRecommends } from '../_lib/getFollowRecommends';

type Props = {
    user: User
}
export default function FollowRecommned({ user }: Props) {

    const onFollow = () => {};

    return(
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <img src={user.image} alt={user.id} width={40} height={40}/>
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