import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8081", { autoConnect: false });

export default function PracAnswer() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const events = ["bye", "study", "hello"];

  //화면 변경
  const [formServerStr, setFormServerStr] = useState("");

  useEffect(() => {
    initSocketConnect();
    socket.on("bye2", (str) => {
      setFormServerStr(str);
    });
    socket.on("study2", (str) => {
      setFormServerStr(str);
    });
    socket.on("hello2", (str) => {
      setFormServerStr(str);
    });
    //소켓 온으로 핸들러를 작성하면 핸들러가 등록된다.
    //이펙트 밖에 적으면 중복으로 등록될 수 있기 때문에
    //이펙트 안에 적어주는 것. 처음 렌더링 때만 등록되도록.
    return () => {
      socket.off("bye2");
      socket.off("study2");
      socket.off("hello2");
      //컴포넌트가 없어지면 등록된 핸들러도 삭제되게끔 하는 코드
    };
  }, []);

  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };

  return (
    <div>
      <h3>실습 1번 해답</h3>
      {events.map((el) => {
        return (
          <button key={el} onClick={() => emitToServer(el)}>
            {el}
          </button>
        );
      })}
      <h3>server: {formServerStr}</h3>
    </div>
  );
}
