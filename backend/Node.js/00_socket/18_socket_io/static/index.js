// io() 함수가 소켓 생성 및 연결 설정
const socket = io();

// [on과 emit사용해보기]
// 1. client > server > client
// 이벤트 발생시키는 중, server로 데이터 전달받은 후
// server가 전달한 데이터를 다시 받아줌
socket.emit(
  "event_name",
  "hello~~",
  10,
  { name: "allie" },
  // server에서 다시 보내는 데이터를 받는 callback
  (res1, res2, res3) => {
    console.log(res1, res2, res3);
  }
);

// 2. client > server
// 데이터를 다시 받아주는 cb가 없을 때
socket.emit("cb_test", "안녕하세요!");

// 3-1. server > client, 클라이언트 전체에게
socket.on("entire_client", (msg) => {
  console.log("entire_client:", msg);
});

// 3-2. server > client, 클라이언트 하나에게
socket.on("one_client", (msg) => {
  console.log("one_client:", msg);
});

// ------ 채팅 만들기! ---------
socket.emit(
  "new_message1",
  {
    name: "client",
    message: "서버 접속",
  },
  (arg) => {
    console.log(arg);
  }
);

const chatForm = document.querySelector("#chat");
const user = chatForm.querySelector("#user");
const message = chatForm.querySelector("#message");
const ul = document.querySelector("ul");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // ver1. 나의 메세지가 나에게만 보임
  socket.emit(
    "new_message1",
    {
      name: user.value,
      message: message.value,
    },
    (data) => {
      // data:{name:String, message:String}
      const li = document.createElement("li");
      // console.log(li);
      li.textContent = `${data.name}: ${data.message}`;
      ul.append(li);
      li.style.color = "red";
    }
  );

  // ver2. 나의 메세지가 모두에게 보이도록
  socket.emit("new_message2", {
    name: user.value,
    message: message.value,
  });
});
socket.on("message_render", (data) => {
  // data:{name, message}
  const li2 = document.createElement("li");
  li2.innerText = `${data.name}:${data.message}`;
  console.log(li2);
  ul.append(li2);
  li2.style.color = "blue";
});
