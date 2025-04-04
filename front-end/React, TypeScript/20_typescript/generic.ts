function printSome<T>(x: T, y: T) {
  console.log("x와 y", x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>("1", "2");
printSome<boolean>(false, true);

function printSome2<T, K>(x: T, y: K): T {
  console.log("x와 y", x, y);
  return x;
}

printSome2<number, string>(1, "hello");

function arrLength(arr: any[]): number {
  return arr.length;
}
//GENERIC
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue(val: any) {
  return val;
}
//GENERIC
function getValue2<T>(val: T) {
  return val;
}

console.log(arrLength2<string>(["a", "b"]));
console.log(arrLength2<string | number>(["a", "b", 1, 2]));
console.log(getValue2<string[]>(["a"]));

//interface generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "mint",
};

console.log(iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};
//제너릭(맞나? 저 꺾쇠) 안에 사용자 정의 타입을 넣을 수 있다.
const iphone16: Phone<IphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-06"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log(iphone16);
