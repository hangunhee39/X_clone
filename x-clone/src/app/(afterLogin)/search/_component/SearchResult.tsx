"use client"

import { useQuery } from "@tanstack/react-query";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { getSearchResult } from "../_lib/getSearchResult";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function SearchResult({ searchParams }: Props) {
    //query key dynamic 할때
  const { data } = useQuery<IPost[], Object, IPost[], [_1:string, _2:string, Props['searchParams']]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale :, 캐시에서 받음 api 갱신 X 60초 있다가 stale
    gcTime: 300 * 1000, // 메모리정리, 기본 5분 - staleTime 보다 길게 설정
    //initialData: () => [] 초기 데이터
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
