//async 사용하기
//순서대로!
//kim, kim 반가워
//back, back을 실행했구나
//여기는 callback hell

async function callP(name) {
  setTimeout(() => {
    console.log(name);
    return name;
  }, 1000);
}

async function backP(txt) {
  setTimeout(() => {
    console.log(txt);
    return txt;
  }, 1000);
}

async function hellP(msg) {
  setTimeout(function () {
    return msg;
  }, 1000);
}

async function exec() {
  let who = await callP("kim");
  console.log(who + ", 반가워!");
  let back = await backP("back");
  console.log(back + "을/를 실행했구나.");
  let hell = await hellP("callback hell");
  console.log("여기는 " + hell);
}

exec();

// undefined, 반가워!
// undefined을/를 실행했구나.
// 여기는 undefined
// kim
// back
//exec가 먼저 작동한 다음 각각의 callP와 backP가 작동한다.
//undefined가 들어간 부분은 exec 안에 있던 것들이고
//kim과 back은 callP와 backP에 있던 것들이다.
//좀 더 정확히는,
//콘솔 로그들이 다 작동하고 나서
//변수에 담아둔 각각의 함수들이 작동한 것 같다.
//프로미스가 안 먹히고 있는 건가?
//왜 메커니즘이 이렇게 되는 걸까.
