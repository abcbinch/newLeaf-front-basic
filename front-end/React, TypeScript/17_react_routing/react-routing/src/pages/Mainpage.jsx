import { useSearchParams } from "react-router-dom";

function Mainpage() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  // console.log(searchQuery.get("a"));
  //url뒤에 /?a=1이라고 치면
  //콘솔에 1이 출력된다.
  console.log(searchQuery.get("mode")); //Dark, null 중에 하나.
  return (
    // <div className={["MainPage", searchQuery.get("mode")].join(" ")}>
    <div className={`MainPage ${searchQuery.get("mode")}`}>
      <h1>메인 페이지</h1>
      <p>여기는 홈입니다.</p>
      <button onClick={() => setSearchQuery({ mode: "Dark" })}>Darkmode</button>
    </div>
  );
}

export default Mainpage;
