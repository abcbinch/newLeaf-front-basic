const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("text", (str) => {
      console.log("str", str);
      socket.emit("test2", "메세지 잘 받았습니다.");
    });

    //실습용
    socket.on("sayHello", (hello, cb) => {
      cb(hello);
    });

    //실습 해답
    socket.on("bye", (str) => {
      socket.emit("bye2", "잘가요");
      console.log("client", str);
    });
    socket.on("study", (str) => {
      socket.emit("study2", "공부중");
      console.log("client", str);
    });
    socket.on("hello", (str) => {
      socket.emit("hello2", "안녕");
      console.log("client", str);
    });
  });
}

module.exports = socketHandler;
