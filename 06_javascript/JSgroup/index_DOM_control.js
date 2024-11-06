console.log("connect");
//innerText, textContent, innerHTML

let woodBox = document.querySelectorAll("#box1");
console.log(woodBox);
woodBox.innerText = "여기는 <b>첫 번째</b> 태그입니다. &hearts; /";
console.log(woodBox.innerText);
//두 칸 이상의 공백 문자는 제거한다. 앞뒤의 공백문자도 제거한다.
woodBox.innerHTML = "여기는 <b>첫 번째</b> 태그입니다. &hearts; /";
console.log(woodBox.innerHTML);
//
woodBox.textContent = "여기는 <b>첫 번째</b> 태그입니다. &hearts;   /";
console.log(woodBox.textContent);
