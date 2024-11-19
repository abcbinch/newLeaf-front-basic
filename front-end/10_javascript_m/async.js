function goMart() {
  console.log("마트에 갑니다.");
}

function pickSnack() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("스윙칩이랑 화이트하임!");
      product = "스윙칩 & 화이트하임";
      price = 2500;
      resolve("구매 완료!");
    }, 3000);
  });
}

function buy() {
  console.log(`상품 ${product}에 대한 가격 ${price} 지불`);
}

let price, product;

async function exec() {
  try {
    goMart();

    await pickSnack();

    buy();
  } catch (err) {
    console.log("error: " + err);
  }
}
