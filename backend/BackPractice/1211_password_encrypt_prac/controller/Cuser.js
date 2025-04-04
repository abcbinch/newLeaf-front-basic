const models = require("../models/index");

exports.main = (req, res) => {
  console.log(req.session.userid);
  res.render("index");
  // res.render("index", { userid: req.session.userid, name: req.session.name }); //될까?
};

exports.showJoin = (req, res) => {
  res.render("userJoin");
};

exports.showLogin = (req, res) => {
  res.render("userLogin");
};

exports.addUser = (req, res) => {
  //db.pracUser = require("./pracUser")(sequelize, Sequelize);
  //index.js에 있는 저 db 뒷 부분을 쓰는 것이다.
  models.pracUser
    .create({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    })
    .then((result) => {
      console.log("회원 추가 성공");
      console.log(result);
      res.send({ isUpdate: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.loginCheck = async (req, res) => {
  console.log("여기는 loginCheck, axios로부터 요청이 들어왔습니다.");
  console.log(req.body);

  try {
    const loginDBRes = await models.pracUser.findOne({
      where: {
        userid: req.body.userid,
      },
    });

    console.log("loginDBRes결과");
    console.log(loginDBRes);
    // console.log(loginDBRes.userid);

    const { pw } = loginDBRes;
    console.log(`pw는 ${pw}`);
    console.log(typeof pw);
    console.log(`req.body.pw는 ${req.body.pw}`);

    console.log(typeof req.body.pw);
    //로그인 유효성 체크
    //홈 페이지로 이동
    //홈 페이지에 유저 데이터 바인딩.
    if (req.body.pw.trim() === pw.trim()) {
      console.log("index render합니다.");
      req.session.userid = req.body.id;
      req.session.name = req.body.name;
      req.session.isLogin = true;
      // res.render("index", { userdata: loginDBRes, isLogin: true });
      res.redirect("/index");
    } else {
      console.log("isPass를 보냅니다.");
      res.send({ isPass: false });
    }
    //입력한 패스워드와 데베 안의 패스워드가 같으면
    //메인페이지를 렌더하고 userdata,isPass를 반환
    //패스워드가 틀리거나 패스워드가 나오지 않으면(아이디가 없으면)
    //false로 반환.
  } catch (err) {
    console.log(err);
  }
};
