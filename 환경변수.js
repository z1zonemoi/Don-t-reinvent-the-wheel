// 토큰 값 등 env 파일에 넣어서 보관해야한다
// .env(외부파일)에 환경 변수를 정의하여 변수로 받아오는 이유는 보안과 유지보수에 용이하기 때문
//.env 파일은 프로젝트의 최상위 루트에 파일을 만들어 둔다
// 변수명은 'REACT_APP_'으로 시작되어야한다.
// create-react-app에서 보안이 필요한 환경변수의 유출을 막기 위해 이 규칙을 지키지 않는 환경변수는 무시한다.

//.env
// REACT_APP_변수 = 값;
//js
// const 새로운변수 = {
//     key: process.env.REACT_APP_변수
// }
// ⭐️ 환경변수의 변동 후에는 npm start 다시 해야 적용된다!!!