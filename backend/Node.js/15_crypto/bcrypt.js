const bcrypt = require("bcrypt");

const saltRounds = 10; //반복 횟수

//비밀번호 암호화
function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

//비밀번호 일치 여부 확인
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); //boolean 값으로 반환
}

const originalPw = "1225"; //회원가입을 시도하는 비밀번호
const hashedPw = hashPw(originalPw);
console.log("암호화된 비밀번호: ", hashedPw);

const isMatch = comparePw("12225", hashedPw);
const isMatch2 = comparePw("1225", hashedPw);

console.log("12225 비밀번호 일치? >> ", isMatch);
console.log("1225 비밀번호 일치? >> ", isMatch2);
