import { fakePosts } from "./Fakeposts";
import "../style/datalist.scss";

export default function PostList() {
  console.log(fakePosts);
  return (
    <div className="data-list">
      <h2>데이터 리스트</h2>
      <ul>
        {fakePosts.map((el) => {
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
