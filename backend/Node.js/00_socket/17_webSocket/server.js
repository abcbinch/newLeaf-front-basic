//여기는 서버
const express = require("express");
const app = express();
const PORT = 8083;
const ws = require("ws");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  //Date.now()는 1970년 1월 1일 0시 0분 0초부터 지금까지 경과한 시간을 밀리초로 나타낸다.
  //별 건 없고, 고유 아이디를 만들 때 사용한다고 한다.
  //toString(36) 이건 36진수
  // console.log("timestamp", timestamp);
  const randomString = Math.random().toString(36).substring(2);
  // console.log("randomString", randomString);

  return timestamp + randomString;
}

// console.log("id", generateUniqueId());
// console.log("abcdef".substring(2));
// console.log("abcdefgh".substring(2, 5));

const sockets = [];
const wsServer = new ws.Server({ server });
/* 
ws 모듈 이벤트
-connection: 클라이언트와 웹소켓 서버가 연결된 경우이다.
-message: 클라이언트에게 메세지를 받은 경우이다.
-error: 연결 중 오류가 난 경우이다.
-close: 클라이언트와의 연결이 종료된 경우이다.
*/
wsServer.on("connection", (socket) => {
  // console.log("이건 멧돼지다", socket);
  const clientId = generateUniqueId();
  // console.log(`클라이언트 id: [${clientId}] 연결됨`);
  sockets.push(socket);

  //socket이 뭔지, 무슨 역할을 하는지 이해가 안 간다면,
  //그냥 이게 있어야 이벤트를 쓸 수 있다, 정도로 이해해두자.
  socket.on("message", (message) => {
    // console.log(msg.toString());
    // console.log("=============");
    // console.log(msg);
    console.log(`${clientId}에게 받음 메세지: ${message}`);
    // console.log("=============");
    // socket.send("안녕하세요");
    sockets.forEach((client) => {
      client.send(`${message}`);
    });
  });
});
