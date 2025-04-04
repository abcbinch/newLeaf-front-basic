import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const RootDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #3f424d;
  width: 500px;
  min-height: 100vh;
  color: white;

  border: 3px dashed aquamarine;
`;
//애니메이션이 먼저 선언되어 있어야 한다.
const spining = keyframes`
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
`;
//여기서 애니메이션 사용
const AppLogo = styled.img`
  width: 300px;
  height: 40vmin;
  animation: ${spining} 20s linear infinite;
`;

const MyA = styled.a`
  color: skyblue;
  font-weight: bold;
  text-decoration: none;
`;

export default function Practice() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
