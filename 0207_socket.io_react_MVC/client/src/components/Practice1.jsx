import { useRef } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8081", { autoConnect: false });

export default function Practice1() {
  const btnRef1 = useRef();
  const btnRef2 = useRef();
  const btnRef3 = useRef();

  //   const areaRef = useRef();

  btnRef1.current.onclick = () => {
    socket.emit("sayHello", "hello", (str) => {
      let p = document.createElement("p");
      let txta = document.querySelector(".txtArea");
      p.textContet = str;
      txta.append = p;
    });
  };
  return (
    <div>
      <h2>hello world!</h2>
      <button ref={btnRef1}>hello</button>
      <button ref={btnRef2}>study</button>
      <button ref={btnRef3}>bye</button>
      <div className="txtArea"></div>
    </div>
  );
}
