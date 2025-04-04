const socket = io();
const chatContainer = document.querySelector(".container section");
const chatForm = document.querySelector("#msg-form");
const input = chatForm.querySelector("input");
// 추가
const container = document.querySelector(".container");
const entryBox = document.querySelector(".entry-box");
const nickInput = document.querySelector("#nickname");

let myNick; // 입장 성공했을 때 나의 닉네임 저장할 변수

// [닉네임 사용]-1
function join() {
  socket.emit("checkNick", nickInput.value);
}
// [닉네임 사용]-3 (1) 입장 실패
socket.on("error", (errMsg) => {
  alert(errMsg);
});

// [닉네임 사용]-3 (2) 내 닉네임 정보 저장 및 화면 변경
socket.on("entrySuccess", (nickname) => {
  myNick = nickname;
  entryBox.classList.add("d-none");
  container.classList.remove("d-none");
});

// [실습3] 입장2
socket.on("notice", (notice) => {
  const p = document.createElement("p");
  p.textContent = notice;
  p.classList.add("notice");
  chatContainer.append(p);
});

// [실습4] 채팅주고받기
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") return;
  // [4-1] 버튼을 눌렀을 때, 메세지를 서버에게 전달
  socket.emit("send", input.value);
  input.value = "";
});

// [4-3] 메세지를 전달받고,
// 내메세지와 다른 클라이언트의 메세지 구분
socket.on("message", (data) => {
  // data:{id, message}
  // console.log(data.id); // 보낸 사람의 아이디
  // console.log(socket.id); // 나의 아이디

  const div = document.createElement("div");
  const span = document.createElement("span"); // 채팅 내용
  span.innerText = data.message;
  span.classList.add("msg-box");
  div.classList.add("speech");

  if (data.id === myNick) {
    // 내가 보낸 메세지
    div.classList.add("me");
    div.append(span);
  } else {
    // 남이 보낸 메세지
    div.classList.add("other");
    const nickname = document.createElement("span");
    nickname.innerText = data.id;
    nickname.classList.add("nickname");
    div.append(nickname, span);
  }
  chatContainer.append(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
});
