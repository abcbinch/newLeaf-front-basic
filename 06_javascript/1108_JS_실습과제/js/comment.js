const form = document.querySelector("form");
const entryBtn = document.querySelector('button[type="submit"]');
const myId = document.querySelector("#userid");
const myComment = document.querySelector("#comment");
const comList = document.querySelector(".comment-list");

// let comContent1 = myId.value;
// let comContent2 = myComment.value;

//change
//submit
//keydown(keypress)

// function commentEntry(e) {
//   let list = document.createElement("li");
//   myId.style.fontWeight = "bold";
//   list.innerText = comContent1 + "-" + comContent2;

//   comList.append(list);
//   myId.value = "";
//   myComment.value = "";
// }//왜 리스트에 닉네임과 이름이 안 뜰까;
//뭘 해야 할지 감이 안 잡힐 때
//comContent1과 2가 공백으로 뜬다.
//내가 입력한 아이디랑 댓글이 들어가야 하는데?
//함수 comContent1과 2를 함수 바깥쪽에 정의해서 그렇다.
//내부에 정의하면 제대로 뜬다.
//왜 전역 변수인데도 이렇게 되는 걸까.

function commentEntry() {
  let comContent1 = myId.value;
  let comContent2 = myComment.value;
  let list = document.createElement("li");
  // comContent1.style.fontWeight = "bold";
  list.innerHTML = "<b>" + comContent1 + "</b>" + "-" + comContent2;
  // list.innerText = "<b>" + comContent1 + "</b>" + "-" + comContent2;
  //innerText를 치면 b태그가 그대로 같이 문자열로 출력된다.
  //하지만 innerHTML을 쓰면 태그가 적용되어 폰트굵기가 변한다.

  console.log(comContent1);
  console.log(comContent2);
  //왜 이게 공백으로 뜰까

  comList.append(list);
  myId.value = "";
  myComment.value = "";
} //왜 리스트에 닉네임과 이름이 안 뜰까;

// entryBtn.addEventListener("click", commentEntry);
myComment.addEventListener("change", commentEntry);
entryBtn.addEventListener("click", (e) => e.preventDefault());

//keydown 자체가 포커스가 되었을때만 유효하다.
