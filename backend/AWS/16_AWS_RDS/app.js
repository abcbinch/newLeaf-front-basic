const express = require("express");
const app = express();
const PORT = 8082;
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const userModel = require("./models/User");
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(process.env.DB_HOST);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = userModel(sequelize);

app.get("/api", (req, res) => {
  res.send("hello!");
});

app.post("/api/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    console.log(user);
    res.json(user);
  } catch (err) {
    res.send("서버 에러");
    console.log(err);
  }
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("테이블 생성 완료!");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("sequelize err!!", err);
  });

/* 로컬에서, 코드를 통해서 rds로 연결을 시도하려 하면 timeout이 걸린다고 한다.
  일반적으로는 포트가 걸려있지 않아서 timeout이 걸리는데, 이 경우는 아니다.
  public access를 허용해놓지 않았기 때문에 이러는 것이다.  
  EC2를 거쳐야만 rds로 접근할 수 있다.
  그래서 개발환경에서의 DB는 로컬 DB로, 배포할 때의 DB는 RDS로 설정한다.*/

/* 현재, putty와 filezilla를 이용해서 연결 중.
  일단 filezilla의 사이트 관리자를 사용해서 기존의 ec2에 연결.
  기존의 ec2는 1차 프로젝트를 배포하는데 사용했기 때문에, 
  포트 번호를 8082로 바꿨다. 아니면 잠깐 pm2 kill을 써서 꺼도 된다. */
