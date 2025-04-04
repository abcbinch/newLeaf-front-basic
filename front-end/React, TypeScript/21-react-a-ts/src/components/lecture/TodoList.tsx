import { useState, useRef } from "react";
import { TodoItemInt } from "../../types/interface";
import TodoItem from "./TodoItem";

// interface TodoItem {
//   id: number;
//   text: string;
//   done: boolean;
// }

export default function TodoList() {
  const [todo, setTodo] = useState<TodoItemInt[]>([]);
  //제너릭에 그냥 배열 괄호만 써도 되는구나.
  //[{id, text, done}] 이런 형식으로 넣어줄 예정

  const [newTodo, setNewTodo] = useState<string>("");
  //새로운 todo 아이템(문자열)을 받는 state

  const inputRef = useRef<HTMLInputElement>(null);
  //input 태그에 접근하기 위한 ref 객체 생성

  /* 새로운 todo를 추가하는 함수 */
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updateTodo = [
        ...todo,
        {
          id: Date.now(),
          text: newTodo,
          done: false,
        },
      ];

      setTodo(updateTodo);
      setNewTodo("");
      focusInput();
    }
  };
  /* todo 아이템 완료 state 변경 */
  const toggleComplete = (id: number) => {
    const updatedTodo = todo.map((comp) => {
      return comp.id === id ? { ...comp, done: !comp.done } : comp;
    });

    setTodo(updatedTodo);
  };

  /* 엔터를 누르면 todo를 추가하는 함수 */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //mac의 경우 조건에 &&으로 !e.nativeEvent.isComposing을 추가
      addTodo();
    }
  };
  /* input 포커스 처리하는 함수 */
  const focusInput = () => {
    inputRef.current?.focus();
  };

  console.log(todo);
  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h2>TODO List</h2>
      <input
        type="text"
        ref={inputRef}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="해야 할 일을 적어두자."
      />
      <button onClick={addTodo}>추가</button>
      <button onClick={focusInput}>포커스</button>
      <ul>
        {todo.map((comp) => {
          return (
            <TodoItem
              todo={comp}
              key={comp.id}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
      <h2>Done List</h2>
      <ul>
        {todo
          .filter((comp) => comp.done === true)
          .map((comp) => {
            return <li key={comp.id}>{comp.text}</li>;
          })}
      </ul>
    </div>
  );
}
