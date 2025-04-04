export default function PropsMap2({ arr }) {
  return (
    <div style={{ border: "2px dashed rosybrown" }}>
      <ul>
        <li>
          props가 배열이고, 해당 배열로 map 연산을 실행시킬 때, props가 전달되지
          않는 순간을 대비해야 한다.
        </li>
        <li>
          ? 를 이용해서 props가 전달되지 않았을 때 map 연산을 하지 않을 수 있음.
        </li>
      </ul>
      {/* 데이터의 유무가 확실하지 않을 때 물음표를 이용한다.
      데이터가 있을 때만 연산이 진행된다. */}
      {arr?.map((comp, idx) => {
        return <div key={idx}>{comp.name}</div>;
      })}
    </div>
  );
}
