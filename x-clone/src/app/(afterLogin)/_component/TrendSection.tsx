"use client";

import style from "./trendSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/model/Hashtag";
import { getTrends } from "../_lib/getTrends";

export default function TrendSection() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user // 로그인했을때만 갱신
  });


  if (pathname === "/explore") return null;

  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트랜드</h3>
          {data?.map((trend) => <Trend trend={trend} key={trend.tagId}/>)}
        </div>
      </div>
    );
  }

  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트랜드를 가져올 수 없습니다.</div>
    </div>
  );
}
