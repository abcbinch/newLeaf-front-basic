// let wrDone = document.querySelectorAll(".done");
// let wrTodo = document.querySelectorAll(".todo");

// wrDone.forEach((comp) => comp.classList.add("todo", "riTodo"));
// wrTodo.forEach((comp) => comp.classList.add("done", "riDone"));

// let riDone = document.querySelectorAll(".riDone");
// let riTodo = document.querySelectorAll(".riTodo");

// riDone.forEach((comp) => comp.classList.remove("todo"));
// riTodo.forEach((comp) => comp.classList.remove("done"));

//다른 사람 코드 보니까
//toggle 쓰는 것도 좋았을 것 같다.

let wrDone = document.querySelectorAll(".done");
let wrTodo = document.querySelectorAll(".todo");
wrDone.forEach((comp) => {
  comp.classList.add("a");
});
wrTodo.forEach((comp) => {
  comp.classList.add("b");
});

console.log(wrDone);
console.log(wrTodo);

wrDone.forEach((comp) => {
  comp.classList.add("todo");
  comp.classList.remove("done");
});

console.log(wrDone);
console.log(wrTodo);

wrTodo.forEach((comp) => {
  comp.classList.add("done");
  comp.classList.remove("todo");
});

console.log(wrDone);
console.log(wrTodo);

//내가 착각했다.
//done 클래스가 붙어있던 wrDone에서
//done을 빼고 todo를 넣으면,
//나중에 wrTodo가 wrDone까지 배열에 포함시킬까봐 걱정했다,
//wrDone에도 todo 클래스가 생겼으니까
//그래서 일부러 riDone과 riTodo라는 별개의 클래스를 넣었는데,
//그런데 아니었다.

//한 번 다른 클래스 넣고 실험해보자.
//a와 b라는 클래스를 추가로 넣어서 실험해봤다.
