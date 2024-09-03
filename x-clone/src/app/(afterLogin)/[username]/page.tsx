import style from "./profile.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_component/UserPosts";
import UserInfo from "./_component/UserInfo";

type Props = {
  params: { username: string };
};
export default async function Profile({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["post", "user", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient); //서버사이드랜더링 SSR 데이터 직렬화

  //데이터 복원 hydrationBoundary
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}> 
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
