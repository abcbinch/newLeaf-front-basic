//첫 번째
function arrElement<T>(arr: T[], idx: number): T | boolean {
  if (idx >= arr.length) {
    return false;
    //왜 <string|boolean>인데도 안 되지?
    //사용할 때 유니온 타입을 지정하는 게 아니라
    //선언하는 시점에서 유니온 타입을 지정해야 했다.
    //리턴 값의 타입을 그냥 T로 두는 게 아니라 'T|boolean'으로 두니 해결됐다.
  } else {
    return arr[idx];
  }
}
//<T,K>로 정하고 나서 arr:T, idx:K로 정하니, arr[idx] 빨간줄
//arr(T)가 인덱스 타입이라서 K를 사용할 수 없다니
//무슨 뜻일까?
//idx는 변수로 지정하는 게 아니라 number로 지정해줘야 한다.

//string, string[], number가 다 다르다.
//하지만 <T>(:T[]) 이렇게 한다면 굳이 변수를 다르게 두지 않고도
//string과 string[]를 전부 지정할 수 있다.

let testArr = ["chocolate", "vanilla", "strawberry"];
let testArr2 = ["latte"];
let testIdx = 2;

let testAnswer = arrElement<string>(testArr, testIdx);
let testAnswer2 = arrElement<string>(testArr2, testIdx);
console.log(testAnswer);
console.log(testAnswer2);
