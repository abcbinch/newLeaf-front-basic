import styled, { keyframes } from "styled-components";

//component를 만들고 있다.
//div 대신에 사용해준다.
const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5 rem;
  margin: 1rem 0;
`;
const H4Title = styled.h4`
  background-color: pink;

  /* 반응형 설정 */
  //portrait과 landscape
  /* 세로방향향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: rosybrown;
  }
  /* 가로방향 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: orange;
  }
`;
const ParentDiv = styled.div`
  background-color: lemonchiffon;
  display: flex;
`;

const rotate = keyframes`
    0%{transform: rotate(0);}
    50%{transform: rotate(180deg);
    background-color: aliceblue}
    100%{transform: rotate(360deg)}
`;

const Child = styled.span`
  color: midnightblue;
  &:hover {
    cursor: pointer;
    /* color: wheat; */
    color: ${(props) => (props.color ? props.color : "wheat")};
    background-color: ${(props) => (props.bg ? props.bg : "lemonchiffon")};
    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;

export default function StyleComponent() {
  return (
    // <div>
    <StyledContainer>
      {/* <h4>Styled Components 사용</h4> */}
      <H4Title>Styled Components 사용</H4Title>
      {/* <div> */}
      <ParentDiv>
        <Child color="pink" bg="rosybrown">
          element1
        </Child>
        <Child>element2</Child>
        <Child>element3</Child>
      </ParentDiv>
      {/* </div> */}
    </StyledContainer>

    // </div>
  );
}
