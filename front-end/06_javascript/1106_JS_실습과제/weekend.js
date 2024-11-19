let today = new Date();

if (today.getDay === 0 || today.getDay === 6) {
  console.log("주말");
} else {
  console.log("평일");
}

//스위치
switch (today) {
  case 0:
  case 6:
    console.log("주말입니다.");
  default:
    console.log("평일입니다.");
}

//삼항 연산자
today.getDay === 0 || today.getDay === 6
  ? console.log("주말입니다.")
  : console.log("평일입니다.");
