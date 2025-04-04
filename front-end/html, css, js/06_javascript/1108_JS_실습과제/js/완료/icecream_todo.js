let textCenter = document.querySelector("section.text-center");

for (let i = 0; i < icecreams.length; i++) {
  let card$ = document.createElement("article");
  card$.classList.add("article-box");
  textCenter.append(card$);

  let ice$ = document.createElement("img");
  ice$.classList.add("img-box");
  ice$.src = "../icecream/icecream" + (i + 1) + ".png";

  let rank$ = document.createElement("h3");
  rank$.classList.add("text-center");
  rank$.innerText = "Top" + (i + 1);

  let menu$ = document.createElement("div");
  menu$.classList.add("text-center");
  menu$.innerText = icecreams[i];

  card$.append(ice$); //img
  card$.append(rank$); //h3
  card$.append(menu$); //div
}
