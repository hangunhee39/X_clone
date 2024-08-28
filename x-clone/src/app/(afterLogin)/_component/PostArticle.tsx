"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import style from './post.module.css'

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  //onClickCapture : 클릭 리스너가 겹칠때 배경만 선택하게금
  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
