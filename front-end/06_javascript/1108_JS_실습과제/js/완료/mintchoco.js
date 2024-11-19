let like = document.querySelector("span");
let wordDiv = document.querySelector("div");

like.style.display = "none";

let dislike = document.createElement("span");

dislike.innerText = "맛없다 ㅡㅡ;;";
dislike.style.color = "red";
dislike.style.fontWeight = "bold";

wordDiv.append(dislike);
