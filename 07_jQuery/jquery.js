console.log("111");

//jQuery 요소 선택 방법
//$("CSS 선택자")
console.log($("#div1"));
//여러 요소에 한 번에 적용 가능하다.
$("button").css("color", "red");

function submitJs() {
  let div1 = (document.getElementById("div1").innerText = "반갑습니다!");
  document
    .getElementById("div1")
    .setAttribute("style", "border: 2px solid red");
}

function submitJQ() {
  $("#div1").text("hello jQuery");
  $("#div1").css("border", "3px solid lightseagreen");
}
