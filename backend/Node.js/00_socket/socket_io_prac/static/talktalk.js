const socket = io();
const chatContainer = document.querySelector(".container section");
const chatForm = document.querySelector("#msg-form");
const input = chatForm.querySelector("input");

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
  console.log(data.id); // 보낸 사람의 아이디
  console.log(socket.id); // 나의 아이디

  // 나의 아이디와 다른 사람의 아이디를 통해
  // UI에 맞게 제작

  /* <div class="speech me">
          <span class="msg-box">채팅 내용</span>
        </div>
        <div class="speech other">
          <span class="nickname">nickname</span>
          <span class="msg-box">채팅 내용</span>
        </div> */
  const div = document.createElement("div");
  const span = document.createElement("span"); // 채팅 내용
  span.innerText = data.message;
  span.classList.add("msg-box");
  div.classList.add("speech");

  if (data.id === socket.id) {
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
