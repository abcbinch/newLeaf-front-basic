//context-api
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Box() {
  const themeContext = useContext(ThemeContext); //context/ThemeContext.js에 만든 컨텍스트를 가져옴.
  console.log(themeContext); //dark가 찍힌다. app.js의 ThemeContext.Provider의 value 속성에 작성한 값이다.
  return (
    <div>
      <h3>ThemeContext 사용하기</h3>
      Theme: ~~~
    </div>
  );
}
