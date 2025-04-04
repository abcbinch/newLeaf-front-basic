import { Component } from "react";

export default class ClassState extends Component {
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          English(class형)
        </button>
      </div>
    );
  }
}
