console.log("----------------------------");

console.log("filter, map, find-------");

let colors = [
  "pink",
  "lemonchiffon",
  "rosybrown",
  "chocolate",
  "skyblue",
  "mintcream",
];

console.log("filter: 필터링. 배열 반환. return 필요");

let take1 = colors.filter((comp) => comp.length === 9);

let take2 = colors.filter(function (comp) {
  return comp.length === 9;
});

console.log(take1);
console.log(take2);

console.log("find: 찾기");

let take3 = colors.find((word) => word.length === 9);
console.log(take3);

console.log("map: 찾기");

let take4 = colors.map((color) => color + " color");
console.log(take4);

console.log("------------------------");
console.log("object 반복-----------------");

const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

for (let comp in areaNum) {
  //   console.log(comp);
  console.log(areaNum[comp]);
}
