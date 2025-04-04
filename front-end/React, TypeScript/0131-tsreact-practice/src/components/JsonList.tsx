import axios from "axios";
import "../style/datalist.scss";
import { useEffect, useState } from "react";

export default function JsonList() {
  interface Data {
    id: number;
    userid: number;
    title: string;
    body: string;
  }
  let [list, setList] = useState<Data[]>([]);

  const setNew = (newlist: Data[]) => {
    setList(newlist);
  };

  const getList = async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setNew(result.data.slice(0, 10));
    return list;
  };

  // getList();
  //왜 무한루프가 될까
  //함수를 써야 list가 들어갈 텐데

  // console.log("getList 이후", list);

  useEffect(() => {
    getList();
  }, []);
  //그냥 getList를 적으면 계속 함수가 실행된다. 무한루프.
  //함수가 호출되고, 상태가 변경되고, 그로 인해 렌더링이 되고, 그로 인해 다시 함수가 호출된다.
  useEffect(() => {
    setList(list);
    console.log(list);
  });

  return (
    <div className="data-list-2">
      <h2>웹사이트 데이터 리스트</h2>
      <ul>
        {list.map((el) => {
          return (
            <li>
              <p>{el.title}</p>
              <span>{el.body}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
