console.log("가입 준비");

function letJoin() {
  const form = document.forms["joinForm"];

  if (form.userName.value === "") {
    alert("닉네임을 입력해 주세요.");
    return false;
  } else if (form.userId.value === "") {
    alert("아이디를 입력해 주세요.");
    return false;
  } else if (form.userPswd.value === "") {
    alert("비밀번호를 입력해 주세요.");
    return false;
  } //여기까지는 성공적

  const dataPack = {
    userid: form.userId.value,
    pw: form.userPswd.value,
    name: form.userName.value,
  };

  // axios.post("/doJoin", dataPack)
  console.log(form.userId.value);

  axios({
    method: "post",
    url: "/doJoin",
    data: dataPack,
  }).then((result) => {
    console.log("답장이 도착했습니다.");
    console.log(result);
    if (result.data.isUpdate) {
      alert("회원가입이 완료되었습니다.");
      document.location.href = "/userLogin";
    } else {
      alert("회원가입 실패. 다시 시도해주세요.");
      return false;
    }
  });
}
