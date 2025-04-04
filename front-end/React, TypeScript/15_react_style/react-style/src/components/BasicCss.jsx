import "../style/basic_css.css";
import ModuleCSS from "./ModuleCSS";

export default function BasicCss() {
  const childDiv = {
    backgroundColor: "powderblue",
    width: "100px",
    height: "100px",
    textAlign: "center",
    lineHeight: "100px",
  };
  return (
    <>
      <h3>스타일 적용 방법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>CSS 파일 import</li>
        <li>.module.css 확장자 사용, import</li>
        <li>styled-components 라이브러리(설치 필요)</li>
        <li>SASS 사용(설치 필요)</li>
      </ol>
      <hr />

      <h4 style={{ color: "pink" }}>인라인 스타일로 적용</h4>
      <div>
        <div style={childDiv}>Hola!</div>
      </div>
      <hr />
      <h4>CSS 파일 적용</h4>
      <div className="box1">
        <div>Hola!</div>
      </div>
      <hr />
      <h4>.module.css 확장자 적용</h4>
      <ModuleCSS />
      <hr />
      <h4>styled-components 라이브러리 적용</h4>
      <hr />
    </>
  );
}
