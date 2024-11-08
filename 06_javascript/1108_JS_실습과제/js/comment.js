const entryBtn = document.querySelector('button[type="submit"]');
const myId = document.querySelector("#userid");
const myComment = document.querySelector("#comment");
const comList = document.querySelector(".comment-list");

let comContent = myComment.value;

function commentEntry(event) {
  let list = document.createElement("li");
  myId.style.fontWeight = "bold";
  list.innerText = myId + "-" + comContent;

  comList.append(list);

  console.log(event.code);
}

// entryBtn.addEventListener("click", commentEntry);
myComment.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    commentEntry();
  }
});

//keydown 자체가 포커스가 되었을때만 유효하다.
