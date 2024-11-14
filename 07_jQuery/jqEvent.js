// console.log(window);
// console.log(document);

// console.log($(window));
// console.log($(document));

//click(): 클릭했을 때
//jQuery에서는 이벤트 이름으로 메소드가 존재
//요소.click(),
//요소.hover(), 인자로 함수를 두 개 줄 수 있다.
//앞에 것이 마우스 올렸을 때, 뒤에 것이 마우스 내렸을 때

//왜 안 될까
//콘솔 로그 빼고 나오지를 않는다.
//바닐라 자바스크립트도 안 됨.

$(".p-msg").click(function () {
  $(".p-msg").css("color", "skyblue");
});

$(".num").click(function () {
  $(".num").css("color", "lightseagreen");
  //this는 자기 자신만 가리킨다. 딱 하나
  //   $(this).css("color", "chocolate");
});

// $(".num").on("click", function () {
//   $(this).css("color", "pink");
// });

// const num = document.querySelector(".num");
// num.onclick = function () {
//   num.style.color = "pink";
// };

const numLists = document.querySelectorAll(".num");
for (let i = 0; i < numLists.length; i++) {
  console.log(numLists[i]);
  numLists[i].addEventListener("click", function () {
    this.style.color = "pink";
  });
}

//hover(); 마우스를 올렸을 때, 내렸을 때를 따로 정의
$(".div-hover").hover(function () {
  $(this).addClass("hover");
});

//scroll
$(window).scroll(function () {
  console.log("scrolling...");
});

//keydown
$(".input-key").keydown(function (event) {
  if (event.code === "ArrowLeft") {
    console.log("왼쪽 방향키");
  } else if (event.code === "ArrowRight") {
    console.log("오른쪽 방향키");
  } else if (event.code === "ArrowDown") {
    console.log("아래쪽 방향키");
  } else if (event.code === "ArrowUp") {
    console.log("위쪽 방향키");
  } else {
    console.log("방향키가 아님.");
  }
});

//오늘의 할 일 추가
$("#todo-form").submit(function (e) {
  e.preventDefault();

  let todoVal = $('input[name="todo"]').val();
  //   $(".todos").html("<li></li>").append(todoVal);
  $(".todos").append(`<li>${todoVal}</li>`);
  $('input[name="todo"]').val("");
});
