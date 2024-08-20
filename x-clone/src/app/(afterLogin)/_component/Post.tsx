import Link from 'next/link'
import style from './post.module.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

export default function Post() {

    const target = {
    User : {
        id: "elonmusk",
        nickname: "일론 머스크",
        image: "/yRsRRjGO.jpg",
       },
       context: "클론 코딩 어려워요₩",
       createdAt: new Date(),
       Images : [],
    }


    return (
        <article>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={'/${target.User.Id}'} className={style.postUserImage}>
                        <img src={target.User.id} alt={target.User.nickname} />
                    </Link>
                    <div className={style.postShade} />
                </div>
                <div className={style.postBody}>
                    <Link href={'/${target.User.id}'}>
                        <span className={style.postUserName}>{target.User.nickname}</span>
                        &nbsp;
                        <span className={style.postUserName}>{target.User.id}</span>
                        &nbsp;
                        .
                        &nbsp;
                        <span className={style.postDate}>{dayjs(target.createdAt).fromNow()}</span>
                    </Link>
                    <div>{target.context}</div>
                    <div className={style.postImageSection}>
                        {/* {target.Images.push.length > 0 && (
                            <div className={style.postImageSection}>
                                <img src={target.Images[0]?link} alt=""/>
                            </div>
                        )} */}
                    </div>
                    {/* <ActionVutton post={post}/> */}
                </div>
            </div>
        </article>
    );
}