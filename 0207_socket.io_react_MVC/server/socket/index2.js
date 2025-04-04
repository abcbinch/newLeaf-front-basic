const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  const nickInfo = {}; //chatting2.js에서 사용
  io.on("connection", (socket) => {
    //socket은 나 자신에게만 보낸다.
    //전체를 대상으로 전송하려면 io를 사용해야 한다.
    console.log(socket.id);

    socket.on("text", (str) => {
      console.log("str", str);
      // socket.emit("test2", "메세지 잘 받았습니다.");
      //chatting1.js
      io.emit("notice", nickInfo[socket.id] + "님이 입장했습니다.");
      //chatting2.js
      //닉네임 중복체크
      socket.on("checkNick", (nickname) => {
        if (Object.values(nickInfo).includes(nickname)) {
          //입력한 닉네임이 nickInfo에 존재하는 경우, 즉, 중복되는 경우
          socket.emit("error", "이미 존재하는 닉네임입니다.");
        } else {
          //존재하지 않는 경우, 즉, 사용 가능한 경우
          nickInfo[socket.id] = nickname;
          //중복되지 않는 닉네임 클라이언트로 전달
          socket.emit("entrySuccess", nickname);
        }
      });
      socket.on("disconnect", () => {
        io.emit("notice", socket.id + "님이 떠나셨습니다.");
      });
    });
  });
}

module.exports = socketHandler;
