{/**
classnames는 CSS클래스를 조건부로 설정할 때 매우 유용한 라이브러리
npm install classnames
ex)
const myCss = 'blue';
<div className={classNames('first', myCss, {red})};>Hi</div>
1. red가 true면 className은 first myCss red
2. red가 false면 className은 first myCss
*/}