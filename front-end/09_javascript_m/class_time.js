//class는 객체를 만들 때 사용하는 틀
//속성, 함수(메소드)를 갖는다
//속성은 집의 연도, 집의 이름, 창문 개수
//메소드는 건물 나이 메소드, 창문 개수 출력 메소드
//생성자 함수와 기능은 비슷하다.
//함수와 클래스라는 것 이외에도 차이점은 있다.

class House {
  constructor(name, year, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }
  getAge() {
    console.log(`${this.name}은/는 건축한 지 ${2024 - this.year}년 됐어요.`);
  }

  getWindow() {
    console.log(`${this.name}에 있는 창문의 개수는 ${this.window}개입니다.`);
  }
}

const house1 = new House("deer", 2007, 135);

console.log(house1.name);
house1.getAge();
house1.getWindow();

const house2 = new House("Xi", 2015, 180);

house2.getAge();
house2.getWindow();

//상속
console.log("-------------------");
class Apartment extends House {
  constructor(name, year, window, floor, windowMaker) {
    super(name, year, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  //메소드 추가
  getAptInfo() {
    return `${this.year}에 지어진  ${this.name}는, 총 ${this.floor}층으로 구성되어 있고, 창문의 개수는 ${this.window}개입니다.`;
  }

  getWindow() {
    console.log(`${this.windowMaker}에서 만들었습니다.`);
  }
}

const ap1 = new Apartment("raemian", 2023, 6, 19, "KCC");
console.log(ap1.getAptInfo());
console.log(ap1.getWindow());
