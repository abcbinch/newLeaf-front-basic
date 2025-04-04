//for
console.log("for----------------");
let basket = [];
let sum = 0;
for (let i = 1; i <= 100; i++) {
  basket.push(i);
  sum += i;
}
console.log(basket);
console.log("1에서 100까지의 합은: " + sum);

//for of
console.log("for of----------------");
let sum2 = 0;
for (let comp of basket) {
  console.log(comp);
  sum2 += comp;
}
console.log("1에서 100까지의 합은: " + sum2);
//forEach
console.log("forEach----------------");

let sum3 = 0;
basket.forEach((comp) => {
  console.log(comp);
  sum3 += comp;
});
console.log("1에서 100까지의 합은: " + sum3);
