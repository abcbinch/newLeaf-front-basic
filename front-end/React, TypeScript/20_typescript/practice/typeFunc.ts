//첫번째
function sum1(a: number, b: number): void {
  console.log(a + b);
}

sum1(5, 11);

//두번째
//아직 못 풀었다.
function sum2([...c]: Array<number>): number {
  let answer = [...c].reduce((acc, cur) => (acc += cur), 0);

  return answer;
}

console.log(sum2([1, 2, 3, 4, 10]));

//다른 사람들
function sum3(...c: number[]): number {
  let answer = [...c].reduce((acc, cur) => (acc += cur), 0);

  return answer;
}

console.log(sum3(1, 2, 3, 4, 10));

//전개 연산자를 어떻게 타입을 지정하지
//매개변수 자리에 전개 연산자를 넣는 건가
//아니면 매개변수에는 변수 하나만 지정한 뒤에
//코드 블록 안에 전개 연산자 형태로 집어넣는 건가.
