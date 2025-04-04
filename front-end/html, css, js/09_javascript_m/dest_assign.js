//구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [red, green, yellow] = arr5;
console.log(red);
//let red = arr5[0];
//let green = arr5[1];
//let yellow = arr5[2];
//이거랑 같음

const ice = ["chocolate", "vanilla", "strawberry"];
console.log(ice[0]);
const [brown, , pink] = ice;
console.log(brown);
console.log(pink);
const [num1, num2, num3, num4] = ice;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
//빈자리를 넘기고 들어가는 게 아니라 무조건 순서대로 들어간다
//가령 위의 경우 변수가 두 개고, 가운데가 공란이라서,
//vanilla가 공란을 건너뛰고 pink에 들어갈 수도 있다고 생각하겠지만,
//실제로는 vanilla가 날아가고 strawberry가 pink에 들어간다.

console.log("---------------------------------");
//변수 교환
//임시 변수가 꼭 필요
let lavender = "blueberry";
let mintcream = "mint";
let bowl;

bowl = lavender;
lavender = mintcream;
mintcream = bowl;
console.log(lavender, mintcream);
console.log(bowl);

console.log("----------------------------------");
//객체의 구조분해할당
const book = {
  title: "빙과",
  content: "고전부의 추리게임",
  num: 0,
};
console.log(book.title);
console.log(book["content"]);

const { num, title, content } = book;
console.log(title);

//전개 연산자
let a = [2, 4, 6, 8];
let b = ["a", "b", "c"];

for (let el of a) {
  console.log(el);
}

console.log(...a);
console.log(...b);

//concat
const catArr = a.concat(b);
console.log(catArr);

const catArr2 = [...a, ...b];
console.log(catArr2);

//string
const str = "alliehight";
let strToArr = [...str];

let character = {
  name: "ellie",
  height: 163,
  friend: "henry",
};
let character2 = {
  name: "형석",
  like: ["sleeping programming"],
  greeting: function () {
    console.log(`hello I am ${this.name}. My height is ${this.height}`);
  },
};

let friends = { ...character, ...character2 };
console.log(friends);

console.log("----------------------");

//rest 연산자.
//...rest
//이렇게 쓴다.
function testFunc(a, b) {
  console.log(a, b);
}

testFunc(1, 2);
testFunc("안녕", "하세요");

function testFunc2(...val) {
  console.log(val);
}

testFunc2("cookie", "chocolate", "icecream");
//...으로 매개변수를 받으니까
//배열이 나온다.

function testFunc3(...val2) {
  console.log(val2);
  const [start, ...val3] = val2;
  console.log(start);
  console.log("icecream: ", val2);
}

testFunc3("strawberry", "vanilla", "chocolate", "coffee", "blueberry");

//매개변수가 몇 개가 들어오든 합해서 반환하는 함수

function addNumber(...num) {
  let [...sum] = num;
  //sum은 내가 입력한 숫자들이 담긴 '배열'이 된다.
  //내가 입력한 숫자 개수만큼 sum이라는 변수가 있다고 생각하면 된다.

  let add = sum.reduce((acc, comp) => (acc += comp));

  console.log(add);
}

addNumber(1, 2, 3, 4, 5, 6);
