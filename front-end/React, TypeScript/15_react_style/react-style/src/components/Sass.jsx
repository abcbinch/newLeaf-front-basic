import "../style/Sass.scss";
import img1 from "../img/ji_ingame.png";

export default function Sass() {
  return (
    <div>
      <h4>SASS 사용(.scss)</h4>
      {/* sass 기본, nesting과 & */}
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>
      {/* mixin 사용해보기 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>
      image 불러오기
      <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기(상대경로)</h5>
      <img
        src="../img/ji_ingame.png"
        alt="src 내부의 사진은 경로명으로 바로 접근할 수 없습니다."
      />
      <h5>import 후 가져오기</h5>
      <img src={img1} alt="" />
      <h5>css에서 background-image 속성으로 접근하기</h5>
      <div className="src-img img-test"></div>
      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      <h5>/로 경로 설정하기기</h5>
      <img
        src="/images/ji_ingame.png"
        alt="public 폴더 내부에서는 경로명으로 접근 가능, 단 /이후로 접근해야 한다."
      />
      <h5>process.env.PUBLIC_URL로 접근하기</h5>
      <img
        src={process.env.PUBLIC_URL + "/images/ji_ingame.png"}
        alt="process.env.PUBLIC_URL로 접근하면 더 안전하다."
      />
      <h5>css에서 background-image 속성으로 접근하기</h5>
      <div className="public-img img-test"></div>
    </div>
  );
}
