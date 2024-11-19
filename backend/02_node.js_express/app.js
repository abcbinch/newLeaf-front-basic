const express = require("express");
const app = express(); //이 함수는 저 위의 변수와 이름이 같아야 한다.
const PORT = 8083;

//미들웨어 설정 추가
//뷰 엔진 설정!
app.set("view engine", "ejs");
app.set("/views", "views"); //views라는 폴더에 views들을 다 넣겠다.
//static 폴더 설정 추가.
app.use("/static", express.static(__dirname + "/public")); //img 같은 정적 파일을 불러오는 데 필요하다.
//static이라는 경로를 /public 대신에 사용한다는 의미이다.

//라우팅
//해당 경로로 들어갔을 때, 특정 페이지를 보여주도록 설정하는 것
//url 뒤에 '/login'이라고 치면 로그인 페이지로 이동한다든가
//get /login
app.get("/login", (req, res) => {
  res.render("login");

  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "sally",
      msg: "hello charlotte",
    },
  });
});
//get /register
app.get("/register", (req, res) => {
  res.render("register");

  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "sally",
      msg: "hello charlotte",
    },
  });
});
// app.use(function (req, res) {
//   res.render("404"); //?? 왜 기본 페이지가 안 나올까
// });

//request: 클라이언트가 서버에게 보내는 요청
//response: 서버가 클라이언트에게 보내는 응답

app.get("/", function (request, response) {
  //메소드와 url을 구분해주는 좋은 함수?
  console.log(request);
  // response.send("hello express");
  response.render("test");

  response.render("test", {
    isLogin: true,
    userInfo: {
      name: "sally",
      msg: "hello charlotte",
    },
  });
});
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
