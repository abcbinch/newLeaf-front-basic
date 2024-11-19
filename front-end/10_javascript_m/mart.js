function goMart() {
  console.log("마트에 갑니다.");
}

function pickSnack() {
  //3초동안 고민
  setTimeout(function () {
    console.log("스윙칩이랑 화이트하임!");
    product = "스윙칩 & 화이트하임";
    price = 2500;
  }, 3000);
}

function buy() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}
//동기적
//빨리 끝나는 것부터 해결
let price, product;

goMart();

pickSnack(); //맨 마지막에 실행된다.

buy();
