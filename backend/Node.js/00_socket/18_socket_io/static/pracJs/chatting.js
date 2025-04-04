const socket = io();

const h3 = document.querySelector("h3");

function hello() {
  socket.emit("hello", "hello", (msg) => {
    h3.textContent = `hello: ${msg}`;
  });
}
function study() {
  socket.emit("study", "study");
  socket.on("study2", (msg) => {
    h3.textContent = `study: ${msg}`;
  });
}
function bye() {
  socket.emit("bye", "bye");
  socket.on("bye2", (msg) => {
    h3.textContent = `bye: ${msg}`;
  });
}

//온클릭만으로도 괜찮을까
//아니면 submit이어야 할까
