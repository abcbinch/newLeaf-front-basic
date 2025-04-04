//tuple: 배열 개수와 데이터타입 순서를 정해주는 타입이다.
let drink: [string, string];
drink = ["juice", "홍차"];
//문자열이 아니거나, 문자열이 더 들어가면 오류가 난다.

let drink2: [string, string, number] = ["커피", "ade", 2];

drink2[0] = "사이다";
console.log(drink2);

let drink3: readonly [string, string] = ["cola", "콜라"];
//drink3[0] = '사이다';
//readonly를 붙이면 내용을 바꿀 수 없다.

//enum
//유용하게 쓰인다.
//enum으로 선언하고, 변수명은 대문자로 시작한다.
//enum은 mysql에서도 본 적 있을 거다.
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco, //0
  vanilla, //1
  strawberry, //2
  //아무 값도 할당하지 않으면
  //0,1,2 이런 식으로 할당된다.
  kiwi = "kiwi",
  //숫자 사이에 문자열 낑겨쓰는 것도 가능하다.
  //하지만 권장하지 않는다.
}

console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);
console.log(Cake);

//사용자 정의 타입
//interface로 선언하는 방법
interface Student {
  name: string;
  isPassed: boolean;
}
const student1: Student = {
  name: "charlotte",
  isPassed: true,
}; //interface에 선언되어 있지 않은 건 추가할 수 없다.

console.log(student1);
//type으로 선언하는 방법
type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface 야구부 extends Student {
  //상속도 가능하다
  //name, isPassed가 저절로 추가된다.
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; //선언할 때 ?를 쓰면, 값을 쓰든 안쓰든 상관없다.
  //readonly를 앞에 붙여서 수정할 수 없게 할 수 있다.
  [grade: number]: Score; //키가 몇 개가 추가될지 모를 때
  //키는 number, 값은 Score 타입
}

const otani: 야구부 = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  weight: 95,
  height: 193,
  //   backNumber: 17, //없어도 오류가 나지 않는다.
  1: "A",
  2: "B",
};

console.log(otani);
console.log(otani["1"]); //숫자로 된 키는 점 표기법으로 불러올 수 없다.

//otani['1'] = 'B+';
//otani['1'] = 'C';
//이미 지정된 값으로 바꾸는 건 가능하지만
//아예 없는 값으로 바꾸는 건 불가능하다.
//C는 Score 목록에 있었으니까 바꿀 수 있었던 것.
//B+는 목록에 없기 때문에, 이걸 할당하려 하면 빨간 줄이 든다.

//함수를 interface로 지정
interface Calc {
  (a: number, b: number): number;
  //매개변수도, 리턴 값도 전부 숫자형으로 지정해놨다.
}

const sum: Calc = (num1: number, num2: number) => {
  return num1 + num2;
};

interface Toy {
  name: string;
  start(): void; //리턴하는 값이 없는 함수라는 의미.
}
interface Car {
  name: string;
  color: string;
  price: number;
}
//교차 타입(&)과 유니온(|) 타입.
let toyCar: Toy & Car = {
  name: "타요",
  color: "blue",
  price: 50000,
  start() {
    console.log(this.name, "의 가격은 ", this.price, "입니다.");
  },
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

/* enum GenderEnum{
    FEMAIL: ''f'
} */

type Gender = "Female" | "Male";

let daniel: Person = {
  name: "Daniel",
  gender: "",
  age: 21,
};
