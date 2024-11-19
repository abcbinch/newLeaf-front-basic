let iceContainer = document.querySelector("#container");
const pink = document.querySelector(".pink");
const lemonchiffon = document.querySelector(".lemonchiffon");
const rosybrown = document.querySelector(".rosybrown");
const mint = document.querySelector(".mint");
const blueberry = document.querySelector(".blueberry");

pink.addEventListener("click", () => {
  console.log("strawberry flavor");
  alert("딸기맛 하나 주세요.");
});
pink.addEventListener("mouseover", function () {
  this.style.background = "coral";
});
//동시에 걸 수 있다. 덮어씌워지지 않는다.
//기능이나 속성이 겹치지 않는다면.
//this를 쓸 거라면 화살표 함수를 쓰면 안 된다!

//vanilla
lemonchiffon.onclick = () => {
  let babyDiv = document.createElement("div");
  babyDiv.style.background = "lemonchiffon";
  babyDiv.style.width = "100px";
  babyDiv.style.height = "100px";
  babyDiv.style.position = "relative";
  babyDiv.style.borderRadius = "50%";

  iceContainer.append(babyDiv);

  //   alert("바닐라 아이스크림 쌓기");
};

//chocolate
//만들어진 div의 배경색 바꾸기
rosybrown.addEventListener("click", changeColor);
//괄호가 없어야 한다. 그래야 클릭했을 때만 함수가 실행된다.
//괄호가 있어도 동작은 하지만, 그럼 처음에 즉시 호출된다.

function changeColor() {
  //이거 왜 안되냐 썩을
  const divs = documnet.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.background = "rosybrown";
  }

  //   let lastChild = document.querySelector("#container div:last-child");
  //   lastChild.style.background = "mintcream";
}

//mint
//버튼 누르면 배경색 변경, 글자색도 변경
mint.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  mint.style.background = "chocolate";
  mint.style.color = "pink";
}

//blueberry
//경고창 띄우기
let iceOrder = function () {
  alert("블루베리 아이스크림 주세요.");
};

//=========================================================
//다른 이벤트도 써 보기.
console.log("==========================");

const eatme = document.querySelector("button");
const input = document.querySelector("input");

console.log(eatme);
console.log(input);

console.log("==========================");

//이벤트 객체 확인
eatme.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target); //어떤 요소를 클릭되었는가
});
//event 객체에 클릭 이벤트에 대한 정보가 담겨 있다.
//객체라는 점에 유의
//변수는 event나 e가 아니어도 상관은 없다.
input.addEventListener("keydown", function (event) {
  //console.log(event); //글자 하나 칠 때마다 콘솔로그가 찍힌다.

  //방향키를 눌렀을 경우
  console.log(event.code);
  //   console.log(event.key);
  //   console.log(event.keyCode);//잘 안 쓰인다.
  if (event.code === "ArrowLeft") {
    console.log("왼쪽으로");
  } else if (event.code === "ArrowRight") {
    console.log("오른쪽으로");
  } else if (event.code === "ArrowUp") {
    console.log("위쪽으로");
  } else if (event.code === "ArrowDown") {
    console.log("아래쪽으로");
  } else {
    console.log("다른 곳으로");
  }
});

console.log("==========================");

//scroll이벤트

// console.log(window);
//window객체는 브라우저 창 자체를 의미한다.

window.addEventListener("scroll", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(scrollY); //세로 스크롤의 위치가 뜬다.

  //scrollY가 600일 때 div.orange의 opacity가 1이 되게
  if (scrollY > 600) {
    document.querySelector(".orange").style.transition = "1s";
    document.querySelector(".orange").style.opacity = "1";
  }
});

//form 이벤트 = submit
//form태그에 걸어야 한다. input 같은 것에 걸면 안 된다.
const todoForm = document.querySelector("#todo-form");
const todo_list = document.querySelector(".todo-list");
// console.log(todoForm);
// console.log(todo_list);

todoForm.addEventListener("submit", function (event) {
  console.log("submit");
  //submit이벤트가 일어나면 기본적으로 새로고침이 일어난다.
  //그래서 콘솔로그가 뜨자마자 새로고침이 되고
  //콘솔로그가 사라진다.
  //잘 관찰해보면 콘솔로 찍은 내용이 나타났다가 빠르게 사라진다.
  //submit, 더 정확히는 이벤트의 전달을 막고,
  //이벤트의 기본 기능을 봉인해 버리는 것이
  //event.preventDefault();
  event.preventDefault();

  const todoInput = document.querySelector('input[name="todo"]');

  console.dir(todoInput);
  //   console.log(todoInput.value);

  const todo = todoInput.value.trim(); //입력한 값 또는 부여한 값

  if (todo === "") {
    alert("내용을 적어주세요");
    return false;
  } //아무것도 입력 안 하면 추가되지 않도록.
  //이걸 'li 추가하는 코드' 밑에다 두면 li가 추가된다.
  //추가하는 코드보다 위에 둬야 한다.
  //리턴도 반드시 필요하다. 이게 있어야 함수가 종료되고
  //아래까지 코드가 가는 걸 방지할 수 있다.

  //ul 태그를 선택해서 <li>todo<li> 붙이기
  let babyLi = document.createElement("li");
  babyLi.innerText = "todo";

  todo_list.append(babyLi, todo);

  todoInput.value = ""; //이게 있으면 글씨 저절로 지워진다
});

//=============================================================

const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function () {
  console.log("changed?");
});

chgInput.addEventListener("input", function () {
  console.log("change!!");
  //input 창의 내용이 변경되면 일어나는 이벤트가
  //input이다.
  //input은 keydown과 달리 글씨가 반드시 들어가야만 한다.

  let intro = document.querySelector(".intro");
  intro.innerHTML = this.value;
});
