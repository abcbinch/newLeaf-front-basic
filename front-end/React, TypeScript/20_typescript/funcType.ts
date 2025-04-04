function tsPrint(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint(2, 4, 6);
//tsPrint(1, 3);//오류. 매개변수 선언 시 ?를 써 주면 오류가 안 난다.
//tsPrint(5, 6, 7, 8);//오류

function tsPrint2(a: number, b: number, c = 5) {
  console.log("print2!!");
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2); //기본값이 들어가 있기 때문에, c 값을 안 적어도 문제없다.

function concatStr(a: string, b: number): string {
  return a + b;
}

function circleArea(r: number) {
  return r ** 2 * Math.PI;
}

//함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

//return 키워드 없는 리턴
const triangleArea = (w: string, h: string): number => {
  return (Number(w) * Number(h)) / 2;
};

console.log("원의 넓이: ", circleArea(5));
console.log("사각형의 넓이: ", squareArea(3, 4));
console.log("삼각형 넓이: ", triangleArea("5", "6"));

//오버로딩
//이름만 같은 다른 함수를 만드는 것.
function add(x: string, y: string): string;
function add(x: number, y: number): string;

function add(x: any, y: any) {
  return x + y;
}

console.log(add(1, 2));
console.log(add("1", "2"));
