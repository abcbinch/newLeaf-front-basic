let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

//동일한 요소만을 가지는 배열 same
let same = [];
fruits1.map((comp) => {
  if (fruits2.includes(comp)) {
    same.push(comp);
  }
});

console.log(same);

//서로 다른 요소만을 가지는 배열 diff
let diff = [];
fruits1.map((comp) => {
  if (!fruits2.includes(comp)) diff.push(comp);
});

console.log(diff);
