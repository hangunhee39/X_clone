import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { ActionButtons } from "./ActionButtons";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Post() {
  const target = {
    User: {
      id: "@elonmusk",
      nickname: "일론 머스크",
      image: "/yRsRRjGO.jpg",
    },
    context: "클론 코딩 어려워요₩",
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={"/${target.User.Id}"} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className={style.postShade} />
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={"/${target.User.id}"}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>{target.User.id}</span>
              &nbsp; ⚬ &nbsp;
              <span className={style.postDate}>
                {dayjs(target.createdAt).fromNow(true)}
              </span>
            </Link>
          </div>
          <div>{target.context}</div>
          <div className={style.postImageSection}>
            {/* {target.Images.push.length > 0 && (
                            <div className={style.postImageSection}>
                                <img src={target.Images[0]?link} alt=""/>
                            </div>
                        )} */}
          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
