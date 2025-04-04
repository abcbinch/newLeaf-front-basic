import { TodoItemInt } from "../../types/interface";

interface Props {
  todo: TodoItemInt;
  toggleComplete: (id: number) => void; //매개변수 타입은 숫자, 리턴 타입은 없음.
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  /* 할일 목록, 체크박스 표시 여부 */
  return (
    <li>
      <input type="checkbox" onChange={() => toggleComplete(todo.id)} />
      <span>{todo.text}</span>
    </li>
  );
}
