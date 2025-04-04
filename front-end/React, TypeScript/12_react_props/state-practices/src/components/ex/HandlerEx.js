import React, { useState } from "react";

export default function HelloWorld() {
  let [title, setTitle] = useState("Hello World!");

  const chgTitle = () => {
    setTitle("Goodby World!");
  };

  return (
    <div>
      <h2 style={{ cursor: "pointer" }} onClick={chgTitle}>
        {title}
      </h2>
    </div>
  );
}

// import { Component } from "react";

// export default class HelloWorld extends Component {
//   state = {
//     title: "Hello World!",
//   };

//   render() {
//     let { title } = this.state;
//     return (
//       <div>
//         <h2
//           style={{ cursor: "pointer" }}
//           onClick={() => {
//             this.setState({ title: "Goodbye World!" });
//           }}
//         >
//           {title}
//         </h2>
//       </div>
//     );
//   }
// }
