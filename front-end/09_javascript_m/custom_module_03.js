//ES6 방식.
function getNumber() {
  let number = Math.floor(Math.random() * 11);
  return number;
}

const numberData = [2, 4, 6, 8, 10];

export { getNumber, numberData };
//package.json이란 파일을 만들거나,
//파일을 찾아서
//type을 module로 지정해줘야 한다.
