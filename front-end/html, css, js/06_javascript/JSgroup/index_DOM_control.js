// console.log("connect");
// //innerText, textContent, innerHTML

// let woodBox = document.querySelectorAll("#box1");
// console.log(woodBox);
// woodBox.innerText = "여기는 <b>첫 번째</b> 태그입니다. &hearts; /";
// console.log(woodBox.innerText);
// //두 칸 이상의 공백 문자는 제거한다. 앞뒤의 공백문자도 제거한다.
// woodBox.innerHTML = "여기는 <b>첫 번째</b> 태그입니다. &hearts; /";
// console.log(woodBox.innerHTML);
// //
// woodBox.textContent = "여기는 <b>첫 번째</b> 태그입니다. &hearts;   /";
// console.log(woodBox.textContent);

//속성에 접근하기
//점 표기법으로 접근 가능. div.title 이런 식
//getAttribute() 속성값을 가져오는 함수
//setAttribute() 속성값을 설정한다. 추가하거나 바꾸거나
let naver = document.querySelector("#naver");
let yi = document.getElementById("ninesols");
console.log(naver);
console.log(yi);

naver.setAttribute("href", "https://www.google.com");
yi.alt = "game";
console.log(yi.alt);
