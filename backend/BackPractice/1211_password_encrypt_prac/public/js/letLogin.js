console.log("로그인 준비");

const form = document.forms["loginForm"];

if ((form.userId.value = "")) {
  alert("아이디를 입력해주세요.");
}
if ((form.userPswd.value = "")) {
  alert("비밀번호를 입력해주세요.");
}

async function letLogin() {
  const dataPack = {
    userid: form.userId.value,
    pw: form.userPswd.value,
  };
  const loginRes = await axios.post("/doLogin", dataPack);

  console.log(loginRes.data);
  console.log(form.userPswd.value);

  if (!loginRes.data.isPass) {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
    return false;
  } else {
    alert("로그인 완료");
  }
  //로그인 유효성 체크
}
