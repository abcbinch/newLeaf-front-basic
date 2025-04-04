import { Component } from "react";

class MyComponent extends Component {
  //mount 되었을 때 동작한다
  componentDidMount() {
    console.log("Mount!");
  }
  //update 했을 때 동작한다.
  compnentDidUpdate() {
    console.log("Update!");
  }
  //unmount 되기 직전에 동작한다다
  componentWillUnmount() {
    console.log("Unmount!");
  }
  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

class LifecycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* visible state 값에 따라서 mycomponent가 생성 및 제거됨
        -생성은 mount, 제거는 unmount */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifecycleClass;
