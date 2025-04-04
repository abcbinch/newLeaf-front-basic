const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8089;
const SECRET = "mZS9lQT8A1vPdTHM"; //.env에 저장해서 쓰는 걸 권장

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//가짜 데이터베이스
const userInfo = {
  id: "cocoa",
  pw: "1225",
  name: "코코아맛 쿠키",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    //변수가 겹치기 때문에 별칭을 지어줬다.
    if (id === realId && pw === realPw) {
      //로그인 성공
      //jwt 발급
      const token = jwt.sign({ id: id }, SECRET);
      console.log("토큰 결과: ", token);

      //id:id
      //이런 식으로 키 이름과 변수 이름이 같다면 키만 써도 된다.
      //payload(첫 번째 인자): 필수값
      //비밀 키(두 번째 인자): 필수값
      res.send({ result: true, token });
      //result는 로그인에 성공했는가 아닌가를 가린다.
      //jwt는 클라이언트에서 관리하기 때문에 클라이언트에게 토큰을 보내줘야 한다.
    } else {
      //로그인 실패
      res.status(401).send({ message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버 에러" });
  }
});

app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization);
    //headers에 담아 보냈기 때문에 req.headers를 확인해야 함.
    const token = req.headers.authorization.split(" ")[1];
    //Bearer만 빼줬다.
    console.log("토큰 스플릿 결과: ");
    console.log(token);
    try {
      const auth = jwt.verify(token, SECRET);
      console.log("auth 결과: ");
      console.log(auth);
      //{ id: 'cocoa', iat: 1733894230 }
      //이걸 대조해서 로그인을 실행한다
      if (auth.id === userInfo.id) {
        res.send({ result: true, name: userInfo.name });
      }
    } catch (err) {
      console.log("토큰 인증 에러!!!");
      res
        .status(401)
        .send({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버 에러" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
