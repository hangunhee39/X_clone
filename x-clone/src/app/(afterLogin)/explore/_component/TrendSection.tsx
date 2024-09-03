"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import {useQuery} from "@tanstack/react-query";
import {Hashtag} from "@/model/Hashtag";
import {getTrends} from "@/app/(afterLogin)/_lib/getTrends";

export default function ExploreTrendSection() {
  const {data} = useQuery<Hashtag[]>({
    queryKey: ['trends'],       //key 가 같으면 재사용 (home의 트랜드 중 1개만 호출)
    queryFn: getTrends,
    staleTime: 60 * 1000, 
    gcTime: 300 * 1000,
  });
  return data?.map((trend) => <Trend trend={trend} key={trend.tagId}/>)
}