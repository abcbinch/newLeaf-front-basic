//async 사용하기
//순서대로!
//kim, kim 반가워
//back, back을 실행했구나
//여기는 callback hell

async function callP(name) {
  setTimeout(() => {
    console.log(name);
    console.log(name + ", 반가워.");
    // return name;
    // console.log(name);
  }, 1000);
}

async function backP(txt) {
  setTimeout(() => {
    console.log(txt);
    console.log(txt + "을/를 실행했구나.");
    // return txt;
    // console.log(txt);
  }, 1000);
}

async function hellP(msg) {
  setTimeout(function () {
    console.log("여기는 " + msg);
    // return msg;
  }, 1000);
}

async function exec() {
  await callP("kim");
  // console.log(name + ", 반가워.");
  await backP("back");
  // console.log(txt + "을/를 실행했구나.");
  await hellP("callback hell");
  // console.log("여기는 " + msg);
}

exec();
