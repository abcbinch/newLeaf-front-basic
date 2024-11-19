let textCenter = document.querySelector(".text-center");
textCenter.style.display = "flex";
textCenter.style.flexDirection = "column";
textCenter.style.justifyContent = "center";

let container = document.createElement("article");
container.classList.add("article-box");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";

textCenter.append(container);

for (let i = 0; i < icecreams.length; i++) {
  let card$ = document.createElement("div");
  card$.style.display = "flex";
  card$.style.flexDirection = "column";
  card$.style.justifyContent = "space-evenly";
  card$.style.alignItems = "center";
  card$.style.width = "250px";
  card$.style.height = "350px";
  card$.style.margin = "10px";
  card$.style.background = "lavenderblush";
  card$.style.border = "1px solid pink";
  card$.style.borderRadius = "5%";

  let ice$ = document.createElement("img");
  ice$.classList.add("img-box");
  ice$.src = "../icecream/icecream" + (i + 1) + ".png";
  ice$.style.width = "200px";
  ice$.style.height = "200px";
  ice$.style.borderRadius = "50%";
  ice$.style.background = "mistyrose";

  let rank$ = document.createElement("h3");
  rank$.classList.add("text-center");
  rank$.style.margin = "10px";
  rank$.innerText = "Top" + (i + 1);
  rank$.style.fontWeight = "bold";

  let menu$ = document.createElement("div");
  menu$.classList.add("text-center");
  menu$.innerText = icecreams[i];
  menu$.style.fontWeight = "normal";
  menu$.style.fontSize = "17px";

  container.append(card$);

  card$.append(ice$);
  card$.append(rank$);
  card$.append(menu$);
}

let test = document.querySelectorAll(".img-box");

console.log(test);
