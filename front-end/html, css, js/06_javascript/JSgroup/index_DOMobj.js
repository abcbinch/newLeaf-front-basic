console.log("connect");
//태그(요소)들을 객체화 한 것?
console.log(document);
console.log(document.URL);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body); //스크립트를 밑에 둬야 값이 나온다.
//그렇지 않으면 body가 나오지 않고 null 값만 찍힌다.
console.log(document.title);

//queryseletor 시리즈
console.log("----------------------");

// console.log(document.querySelector(".pink"));
// console.log(document.querySelector(".others"));
// console.log(document.querySelector("#green"));
// console.log(document.querySelector("#red"));
// console.log(document.querySelector("div"));
// console.log(document.querySelector("input"));
// console.log(document.querySelector("[name='id']"));

// console.log(document.querySelectorAll(".pink"));
// console.log(document.querySelectorAll("#red"));

//getElement 시리즈
console.log("----------------------");

// console.log(document.getElementById("green"));
// console.log(document.getElementById("red"));
// console.log(document.getElementsByClassName("pink"));
// console.log(document.getElementsByClassName("pink")[0]);
// console.log(document.getElementsByClassName("others"));

// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("div")[0]);

// console.log(document.getElementsByName("id"));
// console.log(document.getElementsByName("id")[0]);

//퀴즈
//for of 를 이용해서 pink 클래스 모두 출력
console.log("간단 실습");
console.log("for of 를 이용해서 pink 클래스 모두 출력");

let peachCubes = document.querySelectorAll(".pink");

for (let comp of peachCubes) {
  console.log(comp);
}
