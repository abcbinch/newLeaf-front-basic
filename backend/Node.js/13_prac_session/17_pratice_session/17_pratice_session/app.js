const express = require("express");
const session = require("express-session");
const app = express();
const port = 8083;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/static"));

//세션 설정
app.use(
  session({
    secret: "cocoa",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);
//10분 뒤에 세션이 종료되도록

//로그인에 성공했다면 세션이 생성되어 저장되어 있을 것.
app.get("/", (req, res) => {
  //로그인이 안 된 유저라면 isLogin을 false로 저장
  //로그인이 된 유저라면 isLogin을 true로 저장하고 user를 user의 이름으로 저장

  const userid = req.session.userid;

  if (userid) {
    //userid가 들어있다면 true 반환
    res.render("index", { isLogin: true, userid: userid });
  } else {
    res.render("index", { isLogin: false });
  }
});
app.get("/login", (req, res) => {
  const userid = req.session.userid;
  if (userid) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

//POST /login
//로그인 실행
//세션 저장
app.post("/login", (req, res) => {
  console.log(req.body);

  //실제 로그인 진행
  //세션 연결
  // res.session.userid = req.body.id;
  //세션의 user라는 키를 추가하여 userid 값을 value로 전달
  console.log(res.session);
  /*cocoa와 1234를 입력했더니 
  {id:'cocoa', pw: '1234'} 
  이렇게 나왔다.*/
  //입력한 정보가 userinfo의 정보와 같으면 실행
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    //res가 아니라 req
    //req.session.userid 라는 건
    //req.session 객체에 userid라는 키를 만들어서
    //req.body.id라는 값을 넣겠다는 뜻
    req.session.userid = req.body.id;
    req.session.userpw = req.body.pw;
    req.session.isLogin = true;
    console.log(req.session);
    res.redirect("/");
  } else {
    res.send(`<script> 
      alert('아이디 또는 비밀번호가 틀렸어요.');
      document.location.href='/login';
      </script>`);
  }
});
//GET /logout
app.get("/logout", (req, res) => {
  //실제 로그아웃 진행
  //세션 삭제
  const userid = req.session.userid;
  if (userid) {
    //로그인 되어있는 유저
    req.session.destroy((err) => {
      //destroy를 쓰면 세션은 파괴된다.
      //그 이상은 뭘 할 필요 없다.
      //여기서부터는 세션이 없어진 후 무엇을 할지만 적어주면 된다.
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    //로그인하지 않은 유저
    res.send(`<script>
      alert('이미 세션이 만료되었습니다.');
      document.location.href='/';
      </script>`);
  }
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
