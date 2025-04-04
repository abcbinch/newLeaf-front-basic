import { Component } from "react";

export default class UpDown extends Component {
  state = {
    firstNum: 0,
  };
  render() {
    let { firstNum } = this.state;
    const twoUp = () => {
      this.setState({ firstNum: firstNum + 2 });
    };
    // function oneDown() {
    //   this.setState({ firstNum: firstNum - 1 });
    // }
    //함수로 하면 오류가 나는데 온클릭에 바로 넣으면 잘 된다?
    const oneDown = () => {
      this.setState({ firstNum: firstNum - 1 });
    };
    //함수로 하면 오류가 나는데 온클릭에 바로 넣으면 잘 된다?
    return (
      <div>
        <span style={{ fontSize: "25pt" }}>{firstNum}</span>
        <br />
        <button onClick={twoUp}>+2</button>
        {/* <button
          onClick={() => {
            this.setState({ firstNum: firstNum - 1 });
          }}
        >
          -1
        </button> */}
        <button onClick={oneDown}>-1</button>
      </div>
    );
  }
}

//챗봇봇
//function으로 정의한 다음 넣으면 안 된다. 
//클래스형 컴포넌트에서는 this가 컴포넌트의 인스턴스를 참조해서 계산을 하게 되어 있다.
//그런데 일반적인 방식으로, 즉, function으로 함수를 정의하면 this가 클래스의 인스턴스를 제대로 가리키지 못해 오류가 생긴다.
//this가 undefined로 해석될 가능성이 높다.

//온클릭 함수에 바로 집어넣으면 this가 정의된 위치에서 this를 참조한다.

//온클릭에 바로 집어넣거나,
//화살표 함수로 정의해야 한다.
