import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11";

// const Swal = require("sweetalert2");

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let food = document.querySelector("#name");
let order = document.querySelector("#order");
let recipe = document.querySelector(".recipe");

let addBtn = document.querySelector(".add");


function namePlus() {
  let h2 = document.createElement("h2");
  let foodText = food.value;

  h2.append(foodText);
  recipe.prepend(h2);
}

function orderPlus() {
  let li = document.createElement("li");
  let orderText = order.value;

  li.append(orderText);
  recipe.append(li);

  orderText.value = "";
}

//keydown으로 enter,
//change
//click



food.addEventListener("change", namePlus);
order.addEventListener("change", orderPlus);
// compBtn.onclick = () => {
//   Swal.fire("SweetAlert2 is working!").then(() => {
//     // 첫 번째 알림이 종료된 후 두 번째 알림 실행
//     Swal.fire({
//       title: "The Internet?",
//       text: "That thing is still around?",
//       icon: "question",
//     });
//   });
// };

