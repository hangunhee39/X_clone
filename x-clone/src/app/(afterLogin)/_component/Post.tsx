import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { ActionButtons } from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";
import { Post as IPost } from "@/model/Post";

dayjs.extend(relativeTime);
dayjs.locale("ko");

type Props = {
  noImage?: boolean;
  post: IPost;
};

export default function Post({ noImage, post }: Props) {
  const target = post;

  console.log("Post", post)
  // if (Math.random() > 0.5 && !noImage) {
  //   target.Images.push(
  //     { imageId: 1, link: faker.image.urlLoremFlickr() },
  //     { imageId: 2, link: faker.image.urlLoremFlickr() },
  //     { imageId: 3, link: faker.image.urlLoremFlickr() },
  //   );
  // }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className={style.postShade} />
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; ⚬ &nbsp;
              <span className={style.postDate}>
                {dayjs(target.createdAt).fromNow(true)}
              </span>
            </Link>
          </div>
          <div>{target.content}</div>
          <div >
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
