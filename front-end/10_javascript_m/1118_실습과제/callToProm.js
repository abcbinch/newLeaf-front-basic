//promise 사용하기
//순서대로!
//kim, kim 반가워
//back, back을 실행했구나
//여기는 callback hell

function callP(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backP(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(txt);
      resolve(txt);
    }, 1000);
  });
}

function hellP(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(msg); //임시값
    }, 1000);
  });
}

function convers() {
  callP("kim")
    .then((name) => {
      console.log(name + ", 반가워.");
      return backP("back");
    })
    .then((txt) => {
      console.log(txt + "을/를 실행했구나.");
      return hellP("callback hell");
    })
    .then((msg) => {
      console.log("여기는 " + msg);
    })
    .catch(() => {
      console.log("stop!");
    });
}

convers();
