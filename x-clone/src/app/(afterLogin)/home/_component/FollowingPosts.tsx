"use client"

import { useQuery } from "@tanstack/react-query"
import { getFollowingPosts } from "../_lib/getFollowingPosts"
import Post from "../../_component/Post"
import { Post as IPost } from '@/model/Post'

export default function FollowingPosts()  {
    const { data } = useQuery<IPost[]>({
         queryKey: ['posts', 'follwings'], 
         queryFn : getFollowingPosts,
         staleTime: 60 * 1000, // fresh -> stale :, 캐시에서 받음 api 갱신 X 60초 있다가 stale
         gcTime: 300 * 1000, // 메모리정리, 기본 5분 - staleTime 보다 길게 설정
         //initialData: () => [] 초기 데이터
        }
    )
    
    return data?.map((post) => (
        <Post key={post.postId} post={post} />
    ))
}