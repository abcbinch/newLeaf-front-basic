interface Props {
  name: string;
}

export function PropsTypes1({ name }: Props) {
  //매개변수의 타입은 Props.
  //구조분해할당당
  return (
    <div>
      <h2>hello, {}!</h2>
    </div>
  );
}

interface Square {
  [key: string]: string;
}

export function PropsTypes2(props: Square) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <div style={divStyle}></div>;
}

interface Square2 {
  width: string;
  height: string;
  color?: string;
  text: string;
}

export function PropsTypes3(props: Square2) {
  const { width, height, color, text } = props;
  const divStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color ? color : "aliceblue"}`, //?처리된 속성에 대해서 예외처리를 해줘야 한다.
    lineHeight: `${height}px`,
  };
  return <div style={divStyle}>{text}</div>;
}
