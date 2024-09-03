import {QueryFunction} from "@tanstack/query-core";
import {Post} from "@/model/Post";

//function -> const = async() : 타이핑 쉽게하기 위해
export const getSearchResult: QueryFunction<Post[], [_1: string, _2: string, searchParams: { q: string, pf?: string, f?: string }]>
  = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey; //quertKey 에 접근 가능
  const res = await fetch(`http://localhost:9090/api/search/${searchParams.q}?${searchParams.toString()}`, {
    next: {
      tags: ['posts', 'search', searchParams.q],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}