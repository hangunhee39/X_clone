"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fa } from "@faker-js/faker";

type Props = {
  children: React.ReactNode;
};

//어디에서나 리엑트 쿼리 데이터 공유 
function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, //탭전환 시 재 갱신
          retryOnMount : true, //component가 다시 마운팅 (페이지 전환 , )
          refetchOnReconnect: false, //인터넷 연결 재 접속
          retry: false, // 실패시 재시도
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"} // 개발모드에서만 사용
      />
    </QueryClientProvider>
  );
}

export default RQProvider;