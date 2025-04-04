function goMart() {
  console.log("마트에 갑니다.");
}

function pickSnack() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("스윙칩이랑 화이트하임!");
      product = "스윙칩 & 화이트하임";
      price = 2500;
      resolve("구매 완료!"); //then의 콜백의 인자로 전달
      //   reject("구매 실패"); //resolve랑 reject를 동시에 적을 수는 없다?
    }, 3000);
  });
}

function buy() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;

function exec() {
  goMart();

  pickSnack()
    .then((result) => {
      //pickSnack()가 끝나고 나서 실행되는 작업
      buy();
      console.log("result: " + result);
      //resolve로 전달된 값이 result가 되었다
    })
    .catch((err) => {
      console.log("카드 고장: " + err);
    })
    .finally(() => {
      console.log("집으로 갑니다.");
    });
}

exec();
