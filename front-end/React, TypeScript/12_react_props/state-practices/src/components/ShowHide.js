import React, { useState } from "react";

export default function ShowHide() {
  let [btnText, setBtnText] = useState("사라져라");

  const chgBtn = () => {
    let h2 = document.querySelector(".prac3");
    if (h2.style.display !== "none") {
      h2.style.display = "none";
      setBtnText("보여라");
    } else {
      h2.style.display = "block";
      setBtnText("사라져라");
    }
  };

  return (
    <div>
      <button onClick={chgBtn}>{btnText}</button>
      <br />
      <h2 className="prac3">안녕하세요</h2>
    </div>
  );
}
