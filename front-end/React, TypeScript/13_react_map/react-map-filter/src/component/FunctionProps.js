//기본형형
export function FuncProps1(props) {
  console.log(props);
  console.log(typeof props); //object

  return (
    <div>
      <h5>{props.name}</h5>
      <p>
        {props.number}개에 {props.krPrice}원
      </p>
      <hr />
    </div>
  );
}
//객체구조분해할당당
export function FuncProps2(props) {
  const { name, number, krPrice } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
//객체구조분해할당 매개변수수
export function FuncProps3({ name, number, krPrice }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
//자식 요소
export function FuncProps4({ name, number = 4, krPrice = 8000, children }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {krPrice}원
      </p>
      <p>자식 요소: {children}</p>
      <hr />
    </div>
  );
}

// FuncProps4.defaultProps = {
//   krPrice: 9000,
//   number: 4,
// };

//defaultProps를 쓰거나
//매개변수에서 기본값을 정하면
//기본값 설정 가능하다
