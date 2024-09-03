export async function getTrends() {
    const res = await fetch('http://localhost:9090/api/trends', {
      next: {
        tags: ['trends'], //update key (서버)
      },
      cache: 'no-cache' //자동으로 캐싱, 안하고 싶으면 no-cache (다른 사람이 불러오는면 다 유지)
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    //서버 캐쉬 없애기 (새로고침)
    //revalidateTag("recommends") or revalidatePage('/home')
    return res.json();
  }
  