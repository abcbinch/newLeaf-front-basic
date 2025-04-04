function goMart() {
  console.log("마트에 갑니다.");
}

//callback 함수 이용
//pickSnack 작업이 끝난 후 buy가 나오도록
function pickSnack(callback) {
  //매개인자 함수 callback
  //3초동안 고민
  setTimeout(function () {
    console.log("스윙칩이랑 화이트하임!");
    product = "스윙칩 & 화이트하임";
    price = 2500;
    callback(); //인자로 받은 함수를 여기서 호출
  }, 3000);
}

function buy() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;

goMart();

pickSnack(buy);
