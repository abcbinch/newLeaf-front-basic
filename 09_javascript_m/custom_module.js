//내가 사용할 모듈
//직접 만들기

const icecream = ["strawberry", "vanilla", "chocolate"];

const truck = function () {
  console.log("ice cream truck");
};

function please(flavor) {
  console.log(flavor + "맛 주세요.");
}

class Cafe {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }

  getDrink() {
    return `${this.name}에서 ${this.menu} 한 잔`;
  }
}

//옛날(common JS) 방식
module.exports = {
  icecream,
  truck,
  please,
};
