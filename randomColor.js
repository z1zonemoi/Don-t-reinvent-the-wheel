//랜덤색상 만드는 함수 16777215를 hex로 표현하면 ffffff가 돼서 해당 코드는 000000부터 ffffff값을 반환
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
//state 설정으로 클릭 시 랜덤색이 나오게 하는 효과를 줄 수 있다.
state = {
  color: "#000000",
};

handleClick = () => {
  this.setState({
    color: getRandomColor(),
  });
};
