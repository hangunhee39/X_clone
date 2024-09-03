"use client";

import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import FollowRecommned from "./FollowRecommend";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ['trends', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((user) => <FollowRecommned user={user} key={user.id} />);
}
