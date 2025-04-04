let num: number = 1;
num = 2;
/* num = 'ssss'; */
//주석 풀면 빨간 줄 뜬다.
//경고 문구에 뭐라고 쓰여 있는지 확인해보기.
console.log(num);

let str1: string = "str";
//다른 파일에서 정의한 변수하고도 이름이 겹치면 안되나보다.
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

let numArr: number[] = [2, 4, 6, 8];
let strArr: Array<string> = ["a", "b", "c"];
let strArr2: string[] = ["z", "x", "y"];

let arr1: (number | string)[] = [1, 2, 3, "a", "b", "c"];
let arr2: Array<boolean | null | number[]> = [true, false, [1, 2, 3], null];
//숫자는 못 넣지만 숫자 '배열'은 넣을 수 있다.
let arr3: any[] = [2, 4, 6, null, true, "c", { name: "anri" }];

//object
let obj1: object = {
  name: "florence",
};
//암묵적 타입 지정
//타입스크립트는 알아서 타입을 추정해서 정한다.
let aa = 4;
/* aa = 5;
aa = 'charles'; */
//숫자로 재할당하는 건 가능하지만 문자열로 재할당하는 건 불가능하다.
//알아서 aa의 타입을 숫자형으로 지정했다.
