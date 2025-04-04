function sky() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = "skyblue";
      resolve(true);
    }, 1000);
  });
}

function berry() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = "pink";
      resolve(true);
    }, 1000);
  });
}

function van() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = "lemonchiffon";
      resolve(true);
    }, 1000);
  });
}

function choco() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = "rosybrown";
      resolve(true);
    }, 1000);
  });
}

function mint() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = "mintcream";
      resolve(true);
    }, 1000);
  });
}
//then을 쓰고 싶으면 내부에 Promise 객체가 있어야 한다.
//체이닝을 써서 함수들을 연속으로 작동시키고 싶으면 모든 함수에 Promise 객체를 넣어야 한다.
//resolve도 있어야 한다.
//체이닝을 쓸 때, 맨 시작함수에 then이 이어지지만,
//내부의 함수들은 자기 자신의 뒤에 then이 이어지는 게 아니라,
//바깥에 그대로 이어진다.
//sky().then(()=>{return berry().then(---)}) (X)
//sky().then(()=>{return berry()}).then(---)} (O)
function neon() {
  sky()
    .then(() => {
      return berry();
    })
    .then(() => {
      return van();
    })
    .then(() => {
      return choco();
    })
    .then(() => {
      return mint();
    })
    .catch(() => {
      console.log("what");
    });
}

neon();

//리더님은 changeColor라는 함수를 하나 만들고
//매개변수로 색깔을 받아오게 했다.
//이게 좀 더 간결할 것이다.
// function changeColor(color){
//     document.body.style.backgroundColor = color;
// }
