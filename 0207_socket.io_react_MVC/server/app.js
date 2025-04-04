const express = require("express");
const app = express();
const indexRouter = require("./routes");
const prefix = "/api";
const http = require("http");
const cors = require("cors");
// const socketIO = require("socket.io"); //index1.js로 이동
const server = http.createServer(app);
// const socketHandler = require("./socket/index1");
// const socketHandler = require("./socket/index2");
const socketHandler = require("./socket/index3");
// const io = socketIO(server); //index1.js로 이동
socketHandler(server);
const PORT = 8081;

app.use(cors());

app.use(prefix, indexRouter);

server.listen(PORT, () => {
  console.log("server is open : ", PORT);
});
