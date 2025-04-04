//context-api
import { useContext, useRef } from "react";
import { AgeContext } from "../context/AgeContext";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const ageContext = useContext(AgeContext);
  //provider로 감싸주지 않았을 때는
  //createContext 메소드의 이자로 전달한 기본값이 컨텍스트 값으로 넘어간다.

  const userContext = useContext(UserContext);

  console.log(ageContext);
  console.log(userContext);
  const nameRef = useRef();
  const ageRef = useRef();

  const { name, setName } = userContext;
  const { age, setAge } = ageContext;

  const changeInfo = () => {
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
  };
  return (
    <div>
      <h1>사용자 프로필</h1>
      <p>이름: &lt; context에서 값 가져오기 &gt; : {name}</p>
      <p>나이: &lt; context에서 값 가져오기 &gt; : {age}</p>

      <input type="text" placeholder="이름 입력" ref={nameRef} />
      <input type="number" placeholder="나이 입력" ref={ageRef} />
      <button onClick={changeInfo}>change</button>
    </div>
  );
}
