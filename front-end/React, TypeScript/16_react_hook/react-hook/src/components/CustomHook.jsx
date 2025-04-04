//useTItle, useToggle을 써 보자!
import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOpen, setIsOpen] = useToggle(false); //닫혀있는 상태

  return (
    <div>
      <h3>custom hook 사용해보기</h3>
      <div style={{ cursor: "pointer" }} onClick={setIsOpen}>
        Q. 리액트에서 사용자가 임의로 훅을 만들 수 있나요?
      </div>
      {isOpen && <span>A. 네! 만들 수 있습니다. </span>}
    </div>
  );
}
