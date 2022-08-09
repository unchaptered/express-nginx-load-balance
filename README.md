# Express-Nginx-Load-Balance

> - 클론 원본(1) 저장소 : [unchaptered/express-nginx](https://github.com/unchaptered/express-nginx)
> - 클론 원본(1) README : [unchaptered/express-nginx/README.md](./origin/origin_1/README.md)
> - 클론 원본(2) 저장소 : [unchaptered/express-nginx-https](https://github.com/unchaptered/express-nginx-load-balance)
> - 클론 원본(2) README : [unchaptered/express-nginx-https/README.md](./origin/origin_2/README.md)

본 프로젝트는 다음에서 시작되었습니다.

- `2022-08-05` 에 Nginx 를 사용한 Reversy Proxy Server
- `2022-08-06` 에 Nginx 를 사용한 HTTPS Server, 80 -> 443 redirect

추가적으로 구현하고 싶은 부분은 443 포트로 연결 후에 Load Balancing 을 통해서 3001 ~ 3004 포트까지 생성된 Express 앱에 매핑하고 싶었습니다.

3001 ~ 3004 까지 실행 될 Express 앱은 PM2 를 이용 할 생각입니다.