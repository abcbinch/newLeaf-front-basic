console.log("hey!");

//$() 안에는 그냥 css 선택자 적는 방식이랑 똑같이 적으면 된다.

//값 가져오기/바꾸기
function getValue() {
  let value = $("input").val(); //인자는 필요없다.
  alert(value);
}
function setValue() {
  $("input").val("다른 글자로 설정!");
}

//스타일 바꾸기
function changeCSS() {
  let span = document.querySelector("span");
  span.style = "font-size: 20px; color: red;";
}
function changeCssJQ() {
  $("span").css("font-size", "40px");
  $("span").css("color", "lightseagreen");
}

//속성 바꾸기
function changeAttrJs() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}
function changeAttrJQ() {
  $("a").attr("href", "https://www.daum.net");
}

//text
function changeTextJs() {
  let p = document.querySelector("p"); //처음 것 하나만 가져옴.
  p.innerText = "js로 바꿨어요.";
}
function changeTextJQ() {
  $(".p-text").text("jQuery로 바꿨어요.");
}

//html
function changeHTMLJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<b>javascript</b>";
}
function changeHTMLJQ() {
  $(".p-html").html("<h2>jQuery</h2>");
}

//요소 추가

//append
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 li(js)";

  ul.append(li);
}
function appendJQ() {
  $(".colors").append("<li>마지막 자식으로 추가된 li(jQuery)</li>");
}

//prepend
function prependJs() {
  let ul2 = document.querySelector(".colors");
  let li2 = document.createElement("li");
  li2.innerText = "첫 번째 자식으로 추가된 li(js)";

  ul2.append(li2);
}
function prependJQ() {
  $(".colors").prepend("<li>첫 번째 자식으로 추가된 li(jQuery)</li>");
}

//after
function afterJs() {
  let vanilla = document.querySelector(".vanilla");
  let mint = document.createElement("li");
  mint.innerText = "mint chocolate(js로 추가)";
  mint.style.background = "mintcream";

  vanilla.after(mint);
}
function afterJQ() {
  $(".vanilla").after("<li><b>wizards' holloween</b>(jQuery로 추가)</li>");
}

//before
function beforeJs() {
  let tahiti = document.querySelector(".vanilla");
  let berry = document.createElement("li");
  berry.innerText = "triple berry(js로 추가)";
  berry.style.background = "lavender";

  tahiti.before(berry);
}
function beforeJQ() {
  $(".vanilla").before("<li><em>triple berry</em>(jQuery로 추가)</li>");
}

//요소 삭제
//remove.
function removeJs() {
  let li2 = document.querySelector(".second"); //클래스 이름 제대로 적기!
  li2.remove();
}
function removeJQ() {
  $(".second").remove();
}

//empty
function emptyJs() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}
function emptyJQ() {
  $("ul.nums").empty();
}

//요소 탐색하기
function findParent() {
  console.log($(".child2").parent());
}
function findParents() {
  console.log($(".child2").parents());
}
function findNext() {
  console.log($(".child2").next());
}
function findPrev() {
  console.log($(".child2").prev());
}
function findChildren() {
  console.log($(".parent").children());
}

//클래스 조작하기
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("color-blue");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
