let when = document.querySelector("#date");
let what = document.querySelector("#content");
let memo = document.querySelector("button");
let td = document.querySelectorAll("td");

for (let j = 0; j < td.length; j++) {
  td[j].onclick = () => {
    when.value = "2024-11-" + (j - 4);
  };
}

$(memo).click(function () {
  if (what.value !== "") {
    //when.value에는 내가 선택한 날짜가 찍힌다는 점을 이용하자.
    let today = Number(when.value.slice(8).trim());

    console.log("value: " + when.value.slice(8));
    console.log("value: " + what.value.split(""));
    console.log(td[17]);
    $(td[today + 4]).append("<br><span>" + what.value + "</span>");
  } else {
    alert("내용을 입력해 주세요.");
  }
});

//고민

//온클릭 함수를 수많은 td에 효율적으로 붙이는 방법
//타이핑 노가다 없이 날짜를 지정하는 방법.

//반복문이라서 처음부터 끝까지 다 붙이는 게 문제
// 딱 내가 선택한 그 날짜에만 붙이고 싶은데.
//반복문을 안 돌리게 된다면 어떻게 될까?
//반복문을 안 돌려도 특정 td를 지정할 방법이 있다
//when.value.slice(8)에 4를 더한다. 그걸 index라는 변수에 저장하고,
//td[index]에 append 하는 것이다.

//글자가 들어가면 셀들이 엉망이 된다. 글자가 든 칸만 엄청 커져서.
//span이랑 텍스트가 차지하는 공간은 얼마 안 되는데
//왜 이렇게 커지는 거지?
