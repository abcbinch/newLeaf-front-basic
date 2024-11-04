let num = typeof 4;
let str = typeof "apple";
let artype = typeof null;

console.log(`"${typeof 5}" isn't "${str}" data type.`);
console.log('"' + typeof 5 + '" isn\'t "' + typeof "apple" + '" data type.');
console.log(
  `typeof를 array이나 null에 사용하면, "${artype}" 결과를 얻을 수 있습니다.`
);
