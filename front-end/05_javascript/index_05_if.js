console.log("connected");

if (5 > 3) {
  console.log("조건이 참입니다.");
}

//90점 이상은 A
//80점 이상은 B
//70점 이상은 C
//그 아래는 모두 F

// let score = Number(prompt("점수를 입력하세요."));

// if (score >= 90) {
//   document.write("A입니다.");
// } else if (score >= 80) {
//   document.write("B입니다.");
// } else if (score >= 70) {
//   document.write("C입니다.");
// } else {
//   document.write("F입니다.");
//   3;
// }

// if (score >= 90 && score <= 100) {
//   console.log("A입니다.");
// } else if (score >= 80) {
//   console.log("B입니다.");
// } else if (score >= 70) {
//   console.log("C입니다.");
// } else {
//   console.log("F입니다.");
// }

//조건문 중첩. 로그인을 실행시키는 프로그램
// let userId = "user01";
// let userPw = "1234qwer";

// function loginUser() {
//   let promptId = prompt("아이디를 알려주세요");
//   let promptPw = prompt("비밀번호를 입력하세요.");

//   if (userId === promptId) {
//     if (userPw === promptPw) {
//       console.log("로그인 성공");
//       alert = "안녕하세요" + userId + "님";
//     } else {
//       console.log("로그인 성공");
//     }
//   } else if (promptId === "") {
//     alert("아이디를 입력하세요.");
//   } else {
//     alert("아이디가 틀렸어요");
//   }
// }

//스위치
//괄호 안에 변수 이름이 들어간다.
//case에는 값에 대한 경우의 수
//break를 안 쓰면 밑에 있는 것까지 실행되어 버리니 유의
//조건이 여러 개일 때는 스위치가 성능이 좀 더 높지만, if문을 더 자주 쓴다.
// let fruit = Number(prompt("과일을 골라 주세요. 1. 레몬 2. 사과 3. 바나나"));

// switch (fruit) {
//   case 1:
//     console.log("lemon");
//     break;
//   case 2:
//     console.log("apple");
//     break;
//   case 3:
//     console.log("banana");
//     break;
//   default:
//     console.log("뭘 고를지 모르겠어요.");
// }

//삼항 연산자
//홀짝 구분하기
let num = 5;

num % 2 === 1 ? console.log("홀수입니다.") : console.log("짝수입니다.");

let cookie = "chocolate";

const value = cookie === "chocoate" ? "brown" : "pink";

console.log(value);

let value2;
if (cookie === "chocoate") {
  value2 = "brown";
} else {
  value2 = "pink";
}

console.log(value2);
