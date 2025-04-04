const crypto = require("crypto");
/* 
1. crypto를 통해서 단방향 암호화 구현 > 복호화 불가능
 - createHash(알고리즘). 
    -알고리즘 종류: 
 -pkdkf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)

 1234를
createHash와 pkdkf로 각각 암호화시킨 후
비교해본다.
*/

//1-1. createHash(알고리즘).update(암호화시킬 평문).digest(인코딩 방식)
//인코딩 방식: base64, hex, ascii, binary
//인코딩: 암호화된 문장을 우리가 읽을 수 있는 문자열로 바꾸는 것.
//그렇다고 인코딩이 복호화를 가리키는 건 아니다.
//애초에 이건 암호화만 가능한 메소드다.

const createHashPw = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log(createHashPw(",1234"));
console.log(createHashPw("1234"));
console.log(createHashPw("1234"));

//1-2. pkdkf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘).toString(인코딩방식)

function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  //salt는 무작위로 바뀌는 값이다.
  //그래서 salt를 붙이면 해시함수도 휙휙 바뀐다.
  //그러나 원본에 영향을 주지는 않는다. ...맞나?
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64");
  return { salt, hash }; //salt: salt, hash: hash 랑 같은 뜻이다.
  //DB를 연동할 경우, DB에 salt 값과 hash 값을 모두 저장해야 한다.
}

console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));
console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));
console.log("pbkdf2Sync >> ", saltAndHashPw("1234"));
//salt가 없는 오리지널 해시 함수와 다르게
//다 다른 값이 나올 것이다

//암호 비교 함수
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  //이건 pbkdf2Sync지만
  //salt 값이 없다.
  //pbkdf2Sync 의 모든 인자가 똑같다면 해시값도 똑같다.
  const hash = crypto
    .pbkdf2Sync(inputPw, iterations, keylen, algorithm)
    .toString("base64");

  return hash == savedHash;
}

console.log("경계선======================================");
const realPw = "qwer1234";
const data = saltAndHashPw(realPw);
console.log(data); //saltAndHashPw 결과 확인.
//솔트 붙인 펩키데키 함수 확인해보는것.
const { salt: DBsalt, hash: DBhash } = data;
console.log("===============비밀번호 일치 여부 확인===========");
const isMatch = checkPw("qwerr1234", DBsalt, DBhash);
const isMatch2 = checkPw("qwer1234", DBsalt, DBhash);
console.log(isMatch); //false, 비밀번호 불일치
console.log(isMatch2); //true, 비밀번호 일치

//====================================================
//====================================================
/* 
2. 양방향 알고리즘
 - createCipheriv: 암호화 메소드
 - createDecipheriv: 복호화 메소드
*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //(비밀 수)
const algorithm = "aes-256-cbc";
const word = "hello, charlotte!";

function encrypt(text) {
  //1. 암호화 객체 생성
  //   const cipher = crypto.createCipheriv(알고리즘, 키, iv);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  //2. 원본 데이터 암호화 작업
  //cipher 안에는 update라는 함수가 들어있다.
  //   cipher.update(평문, 입력 인코딩, 출력 인코딩);
  let encrypted = cipher.update(text, "utf8", "base64");

  encrypted += cipher.final("base64");

  return encrypted;
}

console.log(encrypt(word));
console.log(encrypt(word));

//복호화

function decrypt(encryptedText) {
  //1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  //2.원본 데이터 복호화
  //base64방식으로 인코딩된 문자열이 utf8 방식으로 복호화됨
  let decrypted = decipher.update(encryptedText, "base64", "utf8");

  //3. 최종 결과
  decrypted += decipher.final("utf8");

  return decrypted;
}

const encryptedWord = encrypt(word);
console.log("암호화된 문장: ", encryptedWord);

const decryptedWord = decrypt(encryptedWord);
console.log("복호화된 문장: ", decryptedWord);
