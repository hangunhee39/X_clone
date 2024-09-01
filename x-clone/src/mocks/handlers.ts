import { http, HttpResponse} from 'msw'

export const handlers = [
    http.post('/api/login', () => {

        //Back - DB 가져오는 로직

        return HttpResponse.json({
            userId: 1,
            nickname: 'hgh',
            id: 'hgh39',
            image: '/5Udwvqum.jpg'
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/users', async ({ request }) => {
        console.log('회원가입');
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //   status: 403,
        // })
        return HttpResponse.text(JSON.stringify('ok'), {
          headers: {
            'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
          }
        })
      }),
]