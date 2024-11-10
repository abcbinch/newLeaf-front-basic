let writer = document.querySelector("#writer");
let content = document.querySelector("#content");
let table = document.querySelector("#table");

function writeNote() {
  let trow = document.createElement("tr");
  let tdata1 = document.createElement("td");
  let tdata2 = document.createElement("td");
  let tdata3 = document.createElement("td");

  let visiter = writer.value;
  let comment = content.value;
  let time = new Date();
  let today = time.toLocaleString();
  //toLocaleString(); 이걸 쓰면 연월일 시간 다 나오지만
  //2022-10-05 12:34 이걸 어떻게?

  table.append(trow);
  trow.append(tdata1);
  tdata1.append(visiter);
  trow.append(tdata2);
  tdata2.append(comment);
  trow.append(tdata3);
  tdata3.append(today);
}
