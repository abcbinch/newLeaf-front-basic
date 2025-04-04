export default function PropsMap({ basket }) {
  const testArr = [1, 2, 3, 4, 5];
  const newTestArr = testArr.map((el) => {
    return el + 10;
  });
  const testArr2 = [<div>안녕녕,</div>, <div>난 charlotte야!</div>];
  //컴포넌트가 배열로 들어갔다.
  return (
    <div>
      <h3>map 사용해보기</h3>
      {testArr}
      {newTestArr}
      {testArr2}
      <ul>
        {basket.map((comp, idx) => {
          return (
            <li>
              {comp.name}, {comp.number}개에 {comp.price}원
            </li>
          );
        })}
      </ul>
    </div>
  );
}
