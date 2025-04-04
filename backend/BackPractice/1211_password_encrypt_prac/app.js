const express = require("express");
const forRouting = require("./routes/index");
const db = require("./models");
const session = require("express-session");
const app = express();
const port = 8084;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "password",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.use("/", forRouting);

db.sequelize.sync({ force: false }).then((result) => {
  console.log("db 연결 성공");
  console.log(result);
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
