import Container from "../components/lecture/Container";
import EventObj from "../components/lecture/EventObj";
import {
  PropsTypes1,
  PropsTypes2,
  PropsTypes3,
} from "../components/lecture/PropsTypes";
import SetText from "../components/lecture/SetText";
import TodoList from "../components/lecture/TodoList";

export default function Lecture() {
  return (
    <main>
      <h2>수업 내용</h2>
      <PropsTypes1 name="scarlet" />
      <PropsTypes2 width="100px" height="100px" color="lavender" />
      <PropsTypes3 width="100" height="50" text="white" />
      <Container>
        Hello Charlotte!
        <SetText />
      </Container>
      <EventObj />
      <TodoList />
    </main>
  );
}
