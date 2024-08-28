import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
export default function Profile() {
  const user = {
    id: 'hgh39',
    nickname: '한건희',
    image: '/yRsRRjGO.jpg'
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <div className={style.headerZone}>
         <BackButton />
         <h3 className={style.headerTitle}>{user.nickname}</h3>
        </div>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id}/>
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}