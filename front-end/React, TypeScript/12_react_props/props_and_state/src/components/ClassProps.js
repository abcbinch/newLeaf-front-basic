import { Component } from "react";

class ClassProps extends Component {
  render() {
    //html 리턴에 필요하다
    const divStyle = {
      color: this.props.color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, {this.props.name}</h4>
        <ul>
          <li>별명: {this.props.nickname}</li>
          <li>좋아하는 색: {this.props.color}</li>
        </ul>
      </div>
    );
  }
}

class ClassProps2 extends Component {
  render() {
    const { name, color, nickname, fontColor } = this.props; //props는 객체다.
    const divStyle = {
      color: fontColor,
      backgroundColor: color,
    };
    return (
      <div style={divStyle}>
        <h4>hi, {name}</h4>
        <ul>
          <li>별명: {nickname}</li>
          <li>좋아하는 색: {color}</li>
        </ul>
      </div>
    );
  }
}

ClassProps.defaultProps = {
  name: "charlotte",
};

export { ClassProps, ClassProps2 };
