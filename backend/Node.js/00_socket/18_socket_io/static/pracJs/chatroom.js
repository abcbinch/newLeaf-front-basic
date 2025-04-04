const chattingRoom = prompt("채팅방을 입력해주세요");
const socket = io();
const users = document.querySelector("#users");
const space = document.querySelector("#space");
const chat = document.querySelector("#chat");

// 어떤 채팅방인지 보여주기
const h2 = document.createElement("h2");
h2.innerText = `채팅방 ${chattingRoom} 입니다.`;
document.body.prepend(h2);

// 1. client > server, 채팅방 이름 전달(string)
socket.emit("join", chattingRoom);

// 4. server > client, 입장 메세지 전달받기
socket.on("userjoin", (notice) => {
  const p = document.createElement("p");
  p.innerHTML = notice;
  users.append(p);
});

// 5. client > server 채팅 메세지 보내기
chat.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chat.querySelector("#message");
  socket.emit("message", msg.value);

  msg.value = "";
});

// 7. 전체 메세지 받아서 화면에 보여주기
socket.on("message_toAll", (message, id) => {
  const p = document.createElement("p");
  p.innerHTML = `<b>${id}</b>: ${message}`;
  space.append(p);
});
