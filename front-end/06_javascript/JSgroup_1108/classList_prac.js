let friends = document.querySelectorAll("ul li");
let h1 = document.querySelector("h1");
console.log(h1);
console.log(friends);

for (let lis of friends) {
  //   lis.style.backgroundColor = "pink";
  //   lis.style.color = "white";
  //   lis.style.fontSize = "1.3rem";
  lis.classList.add("friends");
}

h1.classList.add("add-h1");
h1.classList.remove("add-h1");
h1.classList.toggle("add-h1");
//있으면 없애고, 없으면 부여한다.
console.log(h1.classList);
console.log(h1.classList.contains("add-h1"));

//부모, 자식, 형제 노드 찾기
let friParent = document.querySelector("#friends");
let tigger = document.getElementById("tigger");
// console.log(friParent);
// console.log(tigger);
console.log("----자식 노드----");
console.log(friParent.children);
console.log(friParent.children[0]);
console.log("----부모 노드----");
console.log(tigger.parentNode); //배열이 아닌 요소 자체만 가져옴.
console.log("----형제 노드----");
console.log("tigger 이전 형제: " + tigger.previousElementSibling);
console.log(tigger.previousElementSibling);
console.log("tigger 다음 형제: " + tigger.nextElementSibling);
console.log(tigger.nextElementSibling);

console.log("-------------------------------");

//노드 생성 추가 삭제
let container = document.querySelector(".container");
console.log(container);
let pi = document.createElement("p");
pi.innerText = "새로 추가된 p";
pi.style.fontWeight = "700";
pi.style.background = "lemonchiffon";
pi.id = "append-p"; //id 추가하기
console.log(pi);
//여기까지는 생성. 하지만 붙이지 않았기 때문에 나타나지는 않는다.
container.appendChild(pi); //append도 된다. 맨뒤 자식요소로 추가

let pi2 = document.createElement("p");
pi2.innerText = "welcome to Rusty Lake Hotel.";
pi2.classList.add("hotel");
pi2.style.background = "darkred";
pi2.style.color = "white";
pi2.style.fontWeight = "bold";
//pi2추가
container.append(pi2);

let pi3 = document.createElement("p");
pi3.innerText = "The past will never die.";
pi3.classList.add("cube");
pi3.style.background = "black";
pi3.style.color = "white";
pi2.style.fontWeight = "bold";
// pi3 추가
container.append(pi3);

//let friends = document.querySelectorAll("ul li");
//let friParent = document.querySelector("#friends");
let newLi = document.createElement("li");
newLi.textContent = "캉가";
newLi.classList.add("friends");
newLi.style.background = "rosybrown";
//추가
friParent.prepend(newLi);

//let h1 = document.querySelector("h1");
let h3 = document.createElement("h3");
h3.textContent = "I am h3.";
h1.before(h3);

let h2 = document.createElement("h2");
h2.textContent = "I am h2.";
h1.after(h2);

//요소 삭제
//삭제 이전은 어땠는지 보고 싶다면 이부분을 주석 처리하자.
//remove, removeChild

let firstLi = document.querySelector("li");
console.log(firstLi);
let ul = firstLi.parentElement;
console.log(ul);

// firstLi.remove(); //삭제할 요소.remove
ul.removeChild(firstLi);

console.log("실습 문제-----------");

//실습 문제
let cont = document.querySelector(".container");

let div = document.createElement("div");
div.style.width = "500px";
div.style.height = "500px";
div.style.background = "powderblue";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";

let image = document.createElement("img");
image.setAttribute("src", "./images/ninesols.jpg");
image.setAttribute("alt", "yi");

let span = document.createElement("span");
span.innerText = "예";

cont.append(div);
div.append(image);
image.after(span);

console.log(span);
